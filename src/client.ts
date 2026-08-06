import { createClient, createConfig } from './generated/client/index.js';
import type { Client, Config } from './generated/client/index.js';
import { client as generatedDefaultClient } from './generated/client.gen.js';
import { CMCError, APIConnectionError, APITimeoutError } from './errors.js';
import { DEFAULT_RETRY, shouldRetry, getRetryDelay, sleep } from './retry.js';
import { createNamespaces } from './namespaces.gen.js';
import type { ApiNamespaces } from './namespaces.gen.js';
import type { CMCClientOptions, Environment } from './types.js';
import { ENVIRONMENTS } from './types.js';

// ─── Shared infrastructure ────────────────────────────────────────────────────

function buildFetchWithRetry(
  baseFetch: typeof fetch,
  timeout: number,
  maxRetries: number,
): typeof fetch {
  const retryConfig = { ...DEFAULT_RETRY, maxRetries };

  return async (
    input: RequestInfo | URL,
    init?: RequestInit,
  ): Promise<Response> => {
    let lastResponse: Response | undefined;
    let lastError: unknown;

    for (let attempt = 0; attempt <= retryConfig.maxRetries; attempt++) {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), timeout);

      try {
        const response = await baseFetch(input, { ...init, signal: controller.signal });
        clearTimeout(timeoutId);

        if (response.ok || !shouldRetry(response.status, retryConfig)) {
          return response;
        }

        lastResponse = response;
        if (attempt < retryConfig.maxRetries) {
          await sleep(getRetryDelay(attempt, response.status, retryConfig, response.headers));
        }
      } catch (error: unknown) {
        clearTimeout(timeoutId);
        lastError = error;

        const isRetryable =
          (error instanceof DOMException && error.name === 'AbortError') ||
          error instanceof TypeError;

        if (!isRetryable) throw error;

        if (attempt < retryConfig.maxRetries) {
          await sleep(getRetryDelay(attempt, 0, retryConfig, new Headers()));
        }
      }
    }

    if (lastResponse) return lastResponse;
    throw lastError;
  };
}

function applyInterceptors(
  target: Client,
  apiKey: string | undefined,
  env: Environment,
  timeout: number,
): void {
  target.interceptors.request.use((request) => {
    if (env === 'pro' && apiKey) {
      request.headers.set('X-CMC_PRO_API_KEY', apiKey);
    }
    request.headers.set('Accept', 'application/json');
    return request;
  });

  target.interceptors.error.use((error, response) => {
    if (error instanceof CMCError || error instanceof APIConnectionError) {
      return error;
    }
    if (response) {
      return CMCError.from(response.status, error, response.headers);
    }
    if (error instanceof DOMException && error.name === 'AbortError') {
      return new APITimeoutError(timeout);
    }
    return new APIConnectionError(
      error instanceof Error ? error.message : 'Connection failed',
      error,
    );
  });
}

// ─── CoinMarketCap client ─────────────────────────────────────────────────────

/**
 * CoinMarketCap API client with built-in authentication, retries, and timeout.
 *
 * Provides two usage patterns:
 *
 * 1. **Namespace (recommended)** — discover endpoints by category:
 *    ```ts
 *    const cmc = new CoinMarketCap({ apiKey: 'key' });
 *    await cmc.api.cryptocurrency.quotesLatest({ query: { symbol: 'BTC' } });
 *    ```
 *
 * 2. **Explicit client** — pass `cmc.client` to any generated function:
 *    ```ts
 *    await getV1CryptocurrencyQuotesLatest({ client: cmc.client, query: {...} });
 *    ```
 *
 * Both patterns are future-proof: new endpoints added to the OpenAPI spec
 * work automatically after re-running `gen-namespaces`.
 */
export class CoinMarketCap {
  /** The underlying hey-api client — pass to any SDK function as `{ client }`. */
  readonly client: Client;

  /** Grouped API endpoints bound to this client instance. */
  readonly api: ApiNamespaces;

  constructor(options: CMCClientOptions) {
    const env: Environment = options.environment || 'pro';

    if (env === 'pro' && !options.apiKey) {
      throw new Error('apiKey is required for pro mode');
    }

    const timeout = options.timeout ?? 30_000;
    const maxRetries = options.maxRetries ?? 2;
    const baseFetch = options.fetch ?? globalThis.fetch;
    const baseUrl = options.baseUrl || ENVIRONMENTS[env];

    this.client = createClient(
      createConfig({
        baseUrl,
        fetch: buildFetchWithRetry(baseFetch, timeout, maxRetries),
      } as Config),
    );

    applyInterceptors(this.client, options.apiKey, env, timeout);

    this.api = createNamespaces(this.client);
  }
}

// ─── Convenience exports ──────────────────────────────────────────────────────

/**
 * Factory shorthand for `new CoinMarketCap(options)`.
 */
export function createCMCClient(options: CMCClientOptions): CoinMarketCap {
  return new CoinMarketCap(options);
}

let _defaultInstance: CoinMarketCap | undefined;

/**
 * Initialize the global default client. After calling this, generated SDK
 * functions called **without** an explicit `client` option will use the
 * configured authentication, retry, and timeout behaviour.
 *
 * Returns a `CoinMarketCap` instance whose `.api` namespace is also usable.
 *
 * @example
 * ```ts
 * import { init, getV1CryptocurrencyQuotesLatest } from '@coinmarketcap/sdk';
 *
 * const cmc = init({ apiKey: 'your-key' });
 *
 * // Option A: namespace on the returned instance
 * await cmc.api.cryptocurrency.quotesLatest({ query: { symbol: 'BTC' } });
 *
 * // Option B: bare functions (also work now — they hit the global client)
 * await getV1CryptocurrencyQuotesLatest({ query: { symbol: 'BTC' } });
 * ```
 */
export function init(options: CMCClientOptions): CoinMarketCap {
  const env: Environment = options.environment || 'pro';
  const timeout = options.timeout ?? 30_000;
  const maxRetries = options.maxRetries ?? 2;
  const baseFetch = options.fetch ?? globalThis.fetch;
  const baseUrl = options.baseUrl || ENVIRONMENTS[env];

  // Configure the module-level singleton that bare SDK functions use
  generatedDefaultClient.setConfig({
    baseUrl,
    fetch: buildFetchWithRetry(baseFetch, timeout, maxRetries),
  } as Config);
  applyInterceptors(generatedDefaultClient, options.apiKey, env, timeout);

  // Also create a proper instance for namespace usage
  _defaultInstance = new CoinMarketCap(options);
  return _defaultInstance;
}

/**
 * Returns the default instance created by `init()`, or undefined.
 */
export function getDefaultClient(): CoinMarketCap | undefined {
  return _defaultInstance;
}
