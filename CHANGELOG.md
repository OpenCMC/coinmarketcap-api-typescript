# Changelog

All notable changes to the `@coinmarketcap/sdk` package will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this package version follows the CoinMarketCap API version.

## [Unreleased]

### Added
- Initial SDK release
- `CoinMarketCap` client class with authentication, retries, and timeout
- `init()` for quick-start global client configuration
- Typed error hierarchy (`RateLimitError`, `AuthenticationError`, etc.)
- Automatic retries with exponential backoff (respects `Retry-After`)
- Dual environment support: `pro` (authenticated) and `public` (keyless)
- `api` namespace object for grouped endpoint discovery
- Full TypeScript types for all request/response models
