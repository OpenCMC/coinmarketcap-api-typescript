# @coinmarketcap/sdk

The official TypeScript/JavaScript SDK for the [CoinMarketCap Pro API](https://coinmarketcap.com/api/documentation/).

## Installation

```bash
npm install @coinmarketcap/sdk
# or
yarn add @coinmarketcap/sdk
# or
pnpm add @coinmarketcap/sdk
```

## Quick Start

```typescript
import { CoinMarketCap } from '@coinmarketcap/sdk';

const cmc = new CoinMarketCap({ apiKey: process.env.CMC_PRO_API_KEY! });

// Use the namespace API — discover endpoints by category with autocomplete
const { data, error } = await cmc.api.cryptocurrency.quotesLatest({
  query: { id: '1,1027' },  // 1 = BTC, 1027 = ETH
});

if (data) {
  console.log(data);
}
```

## Usage

### Namespace API (Recommended)

All endpoints are grouped by category on `cmc.api`:

```typescript
import { CoinMarketCap } from '@coinmarketcap/sdk';

const cmc = new CoinMarketCap({ apiKey: 'your-key' });

await cmc.api.cryptocurrency.quotesLatest({ query: { id: '1' } });
await cmc.api.cryptocurrency.listingsLatest({ query: { limit: 10 } });
await cmc.api.globalMetrics.quotesLatest({});
await cmc.api.exchange.info({ query: { id: '270' } });
```

### Bare Functions (Explicit Client)

You can also import individual functions and pass the client explicitly:

```typescript
import { CoinMarketCap, getV1CryptocurrencyQuotesLatest } from '@coinmarketcap/sdk';

const cmc = new CoinMarketCap({ apiKey: 'your-key' });

const { data } = await getV1CryptocurrencyQuotesLatest({
  client: cmc.client,
  query: { id: '1', convert: 'USD' },
});
```

### Global Mode (init)

For simple scripts, `init()` configures the global client so bare functions work without passing `client`:

```typescript
import { init, getV1CryptocurrencyQuotesLatest } from '@coinmarketcap/sdk';

const cmc = init({ apiKey: 'your-key' });

// Namespace works on the returned instance
await cmc.api.cryptocurrency.quotesLatest({ query: { id: '1' } });

// Bare functions also work (use the global client)
await getV1CryptocurrencyQuotesLatest({ query: { id: '1' } });
```

### Configuration Options

```typescript
const cmc = new CoinMarketCap({
  // Required for 'pro' mode
  apiKey: 'your-api-key',

  // Optional
  environment: 'pro',     // 'pro' (default) or 'public'
  baseUrl: undefined,     // Override base URL entirely
  timeout: 30000,         // Request timeout in ms (default: 30s)
  maxRetries: 2,          // Auto-retry count (default: 2)
  fetch: customFetch,     // Custom fetch implementation
});
```

### Public (Keyless) Mode

Use the public API without an API key for publicly available endpoints:

```typescript
import { CoinMarketCap } from '@coinmarketcap/sdk';

const cmc = new CoinMarketCap({ environment: 'public' });

await cmc.api.cryptocurrency.listingsLatest({ query: { limit: 10 } });
```

## Error Handling

The SDK provides typed error classes for common HTTP failures:

```typescript
import { CoinMarketCap, CMCError, RateLimitError, AuthenticationError } from '@coinmarketcap/sdk';

const cmc = new CoinMarketCap({ apiKey: 'your-key' });

const { data, error } = await cmc.api.cryptocurrency.quotesLatest({
  query: { id: '1' },
});

if (error) {
  if (error instanceof RateLimitError) {
    console.log('Rate limited, retry after:', error.headers.get('Retry-After'));
  } else if (error instanceof AuthenticationError) {
    console.log('Invalid API key');
  } else if (error instanceof CMCError) {
    console.log(`API error ${error.status}:`, error.message);
  }
}
```

### Error Types

| Status Code | Error Class            |
|-------------|------------------------|
| 400         | `BadRequestError`      |
| 401         | `AuthenticationError`  |
| 403         | `ForbiddenError`       |
| 404         | `NotFoundError`        |
| 429         | `RateLimitError`       |
| 5xx         | `InternalServerError`  |
| Network     | `APIConnectionError`   |
| Timeout     | `APITimeoutError`      |

### Throw on Error

Alternatively, you can throw errors instead of returning them:

```typescript
import { CoinMarketCap, RateLimitError } from '@coinmarketcap/sdk';

const cmc = new CoinMarketCap({ apiKey: 'your-key' });

try {
  const { data } = await cmc.api.cryptocurrency.quotesLatest({
    query: { id: '1' },
    throwOnError: true,
  });
  console.log(data);
} catch (err) {
  if (err instanceof RateLimitError) {
    // handle rate limit
  }
}
```

## Automatic Retries

Requests that fail with retryable status codes are automatically retried with exponential backoff:

- **Retryable**: 408, 409, 429, 500, 502, 503, 504, and network errors
- **Default**: 2 retries with 500ms initial delay, up to 8s max
- **429 responses**: Respects the `Retry-After` header when present

Disable retries:

```typescript
const cmc = new CoinMarketCap({
  apiKey: 'your-key',
  maxRetries: 0,
});
```

## Timeout

Requests time out after 30 seconds by default:

```typescript
const cmc = new CoinMarketCap({
  apiKey: 'your-key',
  timeout: 10_000, // 10 seconds
});
```

## Available Endpoints

All endpoints are available via `cmc.api.<category>.<method>()`. See [api.md](./api.md) for the full reference.

Categories include:

- `cmc.api.cryptocurrency` — Quotes, listings, market pairs, OHLCV, categories
- `cmc.api.exchange` — Exchange info, listings, market pairs
- `cmc.api.globalMetrics` — Global stats, fear & greed index
- `cmc.api.content` — News, posts
- `cmc.api.community` — Trending tokens, topics
- `cmc.api.token` — DEX token data, pools, trades
- `cmc.api.derivatives` — Derivatives market data
- `cmc.api.cmcIndex` — CMC 20/100 index

You can also import bare functions directly:

```typescript
import {
  getV1CryptocurrencyListingsLatest,
  getV1CryptocurrencyInfo,
  getV1CryptocurrencyMap,
  // ... 100+ more endpoints
} from '@coinmarketcap/sdk';
```

## Requirements

- Node.js >= 18
- TypeScript >= 5.0 (for TypeScript users)

## License

MIT
