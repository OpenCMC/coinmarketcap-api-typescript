# Changelog

All notable changes to the `@coinmarketcap/sdk` package will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this package adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).
The TypeScript and Python SDKs share one version number (see Versioning in the README).

## [5.0.0] - Unreleased

Rebuilt from the corrected OpenAPI spec published at
https://coinmarketcap.com/api/documentation/openapi.json (spec version `3.0.3`,
sha256 `855b21bb…3e0b`).

### Changed (breaking)
- 32 methods now type the full `{ status, data }` response body. Before, their types
  described only the inner `data`, which did not match what the API returns. Read results
  from `response.data.data`. The values at runtime are unchanged; only the types are.
  Affected: `cryptocurrency.quotesLatest`, `platform.list` and `platform.detail`, the DEX
  `token.*` methods (token, price, pools, search, trending, gainers/losers, meme, new,
  liquidity, security, swaps and batch queries), the `holder.*` methods,
  `ohlcv.klineCandles` and `ohlcv.klinePoints`, and the deprecated v4 DEX methods.
- Field names now match the API: historical quotes `volume_24hr` is `volume_24h`;
  derivatives market pairs `market_pair` is `market_pair_symbol` and `crypto_id`/`symbol`
  are `convert_id`/`convert_symbol`; RWA market pairs `market_pair_quote` is
  `market_pair_quotes`.

### Fixed
- Fields the API can return as `null` are typed as nullable, for example `platform` on
  Bitcoin in `cryptocurrency.listingsLatest`.
- DEX integer values that the API returns as strings (timestamps, counts) are typed as
  strings. `status.error_code` accepts a number or a string.
- Every endpoint uses the same `status` type.

### Added
- 146 response fields that were missing from the types, including the DeFi, stablecoin,
  derivatives and dominance fields on `globalMetrics.quotesLatest`.

## [4.0.3] - 2026-09-18

### Added
- `cmcAi` namespace for the CMC AI endpoints: `cmcAi.coinsMap` (`GET /v5/cmc-ai/coins/map`),
  `cmcAi.latest` (`GET /v5/cmc-ai/latest`) and `cmcAi.coinsLatest`
  (`GET /v5/cmc-ai/coins/latest`), with their request and response types.

## [4.0.2] - 2026-08-11

### Changed (breaking)
- `holder.s` is renamed `holder.holders`, and `token.getToken` is renamed `token.token`.

### Fixed
- Retried POST requests, which include every DEX POST endpoint, failed with "Body is
  unusable". Each retry now sends the original request body again.
- An `AbortSignal` passed by the caller now cancels the request. A cancelled request is
  not retried and rejects with the caller's `AbortError` instead of `APITimeoutError`.
- Timeouts are retried, and reject with `APITimeoutError` once the retries run out.
- A large `Retry-After` value no longer stalls a call: the wait is capped at the
  maximum retry delay.

### Added
- `api.md`, the endpoint reference, is included in the npm package.

## [4.0.1] - 2026-08-06

### Added
- Initial SDK release
- `CoinMarketCap` client class with authentication, retries, and timeout
- `init()` for quick-start global client configuration
- Typed error hierarchy (`RateLimitError`, `AuthenticationError`, etc.)
- Automatic retries with exponential backoff (respects `Retry-After`)
- Dual environment support: `pro` (authenticated) and `public` (keyless)
- `api` namespace object for grouped endpoint discovery
- Full TypeScript types for all request/response models
