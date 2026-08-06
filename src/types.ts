export type Environment = 'pro' | 'public';

export interface CMCClientOptions {
  /**
   * Your CoinMarketCap Pro API key.
   * Required for 'pro' mode. Not needed for 'public' mode.
   * Obtain one at https://coinmarketcap.com/api/
   */
  apiKey?: string;

  /**
   * API environment.
   * - 'pro': Authenticated API (https://pro-api.coinmarketcap.com) — requires apiKey
   * - 'public': Keyless public API (https://pro-api.coinmarketcap.com/public-api)
   *
   * @default 'pro'
   */
  environment?: Environment;

  /**
   * Override the base URL entirely (takes precedence over `environment`).
   */
  baseUrl?: string;

  /**
   * Request timeout in milliseconds.
   * @default 30000
   */
  timeout?: number;

  /**
   * Maximum number of retries for failed requests (429, 5xx).
   * Set to 0 to disable retries.
   * @default 2
   */
  maxRetries?: number;

  /**
   * Custom fetch implementation.
   * @default globalThis.fetch
   */
  fetch?: typeof fetch;
}

export const ENVIRONMENTS: Record<Environment, string> = {
  pro: 'https://pro-api.coinmarketcap.com',
  public: 'https://pro-api.coinmarketcap.com/public-api',
};
