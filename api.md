# CoinMarketCap Cryptocurrency API Documentation - API Reference

Version: `3.0.3`

Total endpoints: **107**

---

## Table of Contents

- [CMC Index](#cmc-index) (4 endpoints)
- [Community](#community) (2 endpoints)
- [Content](#content) (4 endpoints)
- [Crypto Others](#crypto-others) (1 endpoints)
- [Cryptocurrency](#cryptocurrency) (19 endpoints)
- [Deprecated](#deprecated) (22 endpoints)
- [Derivatives](#derivatives) (6 endpoints)
- [Exchange](#exchange) (7 endpoints)
- [Global Metrics](#global-metrics) (6 endpoints)
- [Holder](#holder) (5 endpoints)
- [OHLCV](#ohlcv) (2 endpoints)
- [Platform](#platform) (2 endpoints)
- [Real World Assets](#real-world-assets) (7 endpoints)
- [Token](#token) (16 endpoints)
- [Tools](#tools) (4 endpoints)

---

## CMC Index

### `GET` /v3/index/cmc100-historical

**CoinMarketCap 100 Index Historical**

Function: `getV3IndexCMC100Historical`

**Query parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `time_start` | string | No | Timestamp (Unix or ISO 8601) to start returning CoinMarketCap 100 Index data for |
| `time_end` | string | No | Timestamp (Unix or ISO 8601) to stop returning CoinMarketCap 100 Index data for  |
| `count` | string | No | The number of interval periods to return results for. Optional, required if both |
| `interval` | string | No | Optionally adjust the interval of data returned.Valid values:"5m","15m","daily". |

---

### `GET` /v3/index/cmc100-latest

**CoinMarketCap 100 Index Latest**

Function: `getV3IndexCMC100Latest`

---

### `GET` /v3/index/cmc20-historical

**CoinMarketCap 20 Index Historical**

Function: `getV3IndexCMC20Historical`

**Query parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `time_start` | string | No | Timestamp (Unix or ISO 8601) to start returning CoinMarketCap 20 Index data for. |
| `time_end` | string | No | Timestamp (Unix or ISO 8601) to stop returning CoinMarketCap 20 Index data for ( |
| `count` | string | No | The number of interval periods to return results for. Optional, required if both |
| `interval` | string | No | Optionally adjust the interval of data returned.Valid values:"5m","15m","daily". |

---

### `GET` /v3/index/cmc20-latest

**CoinMarketCap 20 Index Latest**

Function: `getV3IndexCMC20Latest`

---

## Community

### `GET` /v1/community/trending/token

**Community Trending Tokens**

Function: `getV1CommunityTrendingToken`

**Query parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `limit` | integer | No | Optionally specify the number of results to return. |

---

### `GET` /v1/community/trending/topic

**Community Trending Topics**

Function: `getV1CommunityTrendingTopic`

**Query parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `limit` | integer | No | Optionally specify the number of results to return. |

---

## Content

### `GET` /v1/content/latest

**Content Latest**

Function: `getV1ContentLatest`

**Query parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `start` | integer | No | Optionally offset the start (1-based index) of the paginated list of items to re |
| `limit` | integer | No | Optionally specify the number of results to return. Use this parameter and the " |
| `id` | string | No | Optionally pass a comma-separated list of CoinMarketCap cryptocurrency IDs. Exam |
| `slug` | string | No | Optionally pass a comma-separated list of cryptocurrency slugs. Example: "bitcoi |
| `symbol` | string | No | Optionally pass a comma-separated list of cryptocurrency symbols. Example: "BTC, |
| `news_type` | string | No | Optionally specify a comma-separated list of supplemental data fields: `news`, ` |
| `content_type` | string | No | Optionally specify a comma-separated list of supplemental data fields: `news`, ` |
| `category` | string | No | Optionally pass a comma-separated list of categories. Example: "GameFi,NFT". |
| `language` | string | No | Optionally pass a language code. Example: "en". If not specified the default val |

---

### `GET` /v1/content/posts/comments

**Content Post Comments**

Function: `getV1ContentPostsComments`

**Query parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `post_id` | string | Yes | Required post ID. Example: 325670123 |

---

### `GET` /v1/content/posts/latest

**Content Latest Posts**

Function: `getV1ContentPostsLatest`

**Query parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `id` | string | No | Optional one cryptocurrency CoinMarketCap ID. Example: 1027 |
| `slug` | string | No | Alternatively pass one cryptocurrency slug. Example: "ethereum" |
| `symbol` | string | No | Alternatively pass one cryptocurrency symbols. Example: "ETH" |
| `last_score` | string | No | Optional. The score is given in the response for finding next batch posts. Examp |

---

### `GET` /v1/content/posts/top

**Content Top Posts**

Function: `getV1ContentPostsTop`

**Query parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `id` | string | No | Optional one cryptocurrency CoinMarketCap ID. Example: 1027 |
| `slug` | string | No | Alternatively pass one cryptocurrency slug. Example: "ethereum" |
| `symbol` | string | No | Alternatively pass one cryptocurrency symbols. Example: "ETH" |
| `last_score` | string | No | Optional. The score is given in the response for finding next batch of related p |

---

## Crypto Others

### `GET` /v1/blockchain/statistics/latest

**Statistics Latest**

Function: `getV1BlockchainStatisticsLatest`

**Query parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `id` | string | No | One or more comma-separated cryptocurrency CoinMarketCap IDs to return blockchai |
| `symbol` | string | No | Alternatively pass one or more comma-separated cryptocurrency symbols. Pass `BTC |
| `slug` | string | No | Alternatively pass a comma-separated list of cryptocurrency slugs. Pass `bitcoin |

---

## Cryptocurrency

### `GET` /v1/cryptocurrency/airdrop

**Airdrop**

Function: `getV1CryptocurrencyAirdrop`

**Query parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `id` | string | Yes | Airdrop Unique ID. This can be found using the Airdrops API. |

---

### `GET` /v1/cryptocurrency/airdrops

**Airdrops**

Function: `getV1CryptocurrencyAirdrops`

**Query parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `start` | integer | No | Optionally offset the start (1-based index) of the paginated list of items to re |
| `limit` | integer | No | Optionally specify the number of results to return. Use this parameter and the " |
| `status` | string | No | What status of airdrops. |
| `id` | string | No | Filtered airdrops by one cryptocurrency CoinMarketCap IDs. Example: 1 |
| `slug` | string | No | Alternatively filter airdrops by a cryptocurrency slug. Example: "bitcoin" |
| `symbol` | string | No | Alternatively filter airdrops one cryptocurrency symbol. Example: "BTC". |

---

### `GET` /v1/cryptocurrency/categories

**Categories**

Function: `getV1CryptocurrencyCategories`

**Query parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `start` | integer | No | Optionally offset the start (1-based index) of the paginated list of items to re |
| `limit` | integer | No | Optionally specify the number of results to return. Use this parameter and the " |
| `id` | string | No | Filtered categories by one or more comma-separated cryptocurrency CoinMarketCap  |
| `slug` | string | No | Alternatively filter categories by a comma-separated list of cryptocurrency slug |
| `symbol` | string | No | Alternatively filter categories one or more comma-separated cryptocurrency symbo |

---

### `GET` /v1/cryptocurrency/category

**Category**

Function: `getV1CryptocurrencyCategory`

**Query parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `id` | string | Yes | The Category ID. This can be found using the Categories API. |
| `start` | integer | No | Optionally offset the start (1-based index) of the paginated list of coins to re |
| `limit` | integer | No | Optionally specify the number of coins to return. Use this parameter and the "st |
| `convert` | string | No | Optionally calculate market quotes in up to 120 currencies at once by passing a  |
| `convert_id` | string | No | Optionally calculate market quotes by CoinMarketCap ID instead of symbol. This o |

---

### `GET` /v1/cryptocurrency/listings/historical

**Listings Historical**

Function: `getV1CryptocurrencyListingsHistorical`

**Query parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `date` | string | Yes | date (Unix or ISO 8601) to reference day of snapshot. |
| `start` | integer | No | Optionally offset the start (1-based index) of the paginated list of items to re |
| `limit` | integer | No | Optionally specify the number of results to return. Use this parameter and the " |
| `convert` | string | No | Optionally calculate market quotes in up to 120 currencies at once by passing a  |
| `convert_id` | string | No | Optionally calculate market quotes by CoinMarketCap ID instead of symbol. This o |
| `sort` | string | No | What field to sort the list of cryptocurrencies by. |
| `sort_dir` | string | No | The direction in which to order cryptocurrencies against the specified sort. |
| `cryptocurrency_type` | string | No | The type of cryptocurrency to include. |
| `aux` | string | No | Optionally specify a comma-separated list of supplemental data fields to return. |

---

### `GET` /v1/cryptocurrency/listings/new

**Listings New**

Function: `getV1CryptocurrencyListingsNew`

**Query parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `start` | integer | No | Optionally offset the start (1-based index) of the paginated list of items to re |
| `limit` | integer | No | Optionally specify the number of results to return. Use this parameter and the " |
| `convert` | string | No | Optionally calculate market quotes in up to 120 currencies at once by passing a  |
| `convert_id` | string | No | Optionally calculate market quotes by CoinMarketCap ID instead of symbol. This o |
| `sort_dir` | string | No | The direction in which to order cryptocurrencies against the specified sort. |

---

### `GET` /v1/cryptocurrency/map

**Cryptocurrency ID Map**

Function: `getV1CryptocurrencyMap`

**Query parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `listing_status` | string | No | Only active cryptocurrencies are returned by default. Pass `inactive` to get a l |
| `start` | integer | No | Optionally offset the start (1-based index) of the paginated list of items to re |
| `limit` | integer | No | Optionally specify the number of results to return. Use this parameter and the " |
| `sort` | string | No | What field to sort the list of cryptocurrencies by. |
| `symbol` | string | No | Optionally pass a comma-separated list of cryptocurrency symbols to return CoinM |
| `aux` | string | No | Optionally specify a comma-separated list of supplemental data fields to return. |

---

### `GET` /v1/cryptocurrency/trending/gainers-losers

**Trending Gainers & Losers**

Function: `getV1CryptocurrencyTrendingGainerslosers`

**Query parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `start` | integer | No | Optionally offset the start (1-based index) of the paginated list of items to re |
| `limit` | integer | No | Optionally specify the number of results to return. Use this parameter and the " |
| `time_period` | string | No | Adjusts the overall window of time for the biggest gainers and losers. |
| `convert` | string | No | Optionally calculate market quotes in up to 120 currencies at once by passing a  |
| `convert_id` | string | No | Optionally calculate market quotes by CoinMarketCap ID instead of symbol. This o |
| `sort` | string | No | What field to sort the list of cryptocurrencies by. |
| `sort_dir` | string | No | The direction in which to order cryptocurrencies against the specified sort. |

---

### `GET` /v1/cryptocurrency/trending/latest

**Trending Latest**

Function: `getV1CryptocurrencyTrendingLatest`

**Query parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `start` | integer | No | Optionally offset the start (1-based index) of the paginated list of items to re |
| `limit` | integer | No | Optionally specify the number of results to return. Use this parameter and the " |
| `time_period` | string | No | Adjusts the overall window of time for the latest trending coins. |
| `convert` | string | No | Optionally calculate market quotes in up to 120 currencies at once by passing a  |
| `convert_id` | string | No | Optionally calculate market quotes by CoinMarketCap ID instead of symbol. This o |

---

### `GET` /v1/cryptocurrency/trending/most-visited

**Trending Most Visited**

Function: `getV1CryptocurrencyTrendingMostvisited`

**Query parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `start` | integer | No | Optionally offset the start (1-based index) of the paginated list of items to re |
| `limit` | integer | No | Optionally specify the number of results to return. Use this parameter and the " |
| `time_period` | string | No | Adjusts the overall window of time for most visited currencies. |
| `convert` | string | No | Optionally calculate market quotes in up to 120 currencies at once by passing a  |
| `convert_id` | string | No | Optionally calculate market quotes by CoinMarketCap ID instead of symbol. This o |

---

### `GET` /v2/cryptocurrency/info

**Metadata**

Function: `getV2CryptocurrencyInfo`

**Query parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `id` | string | No | One or more comma-separated CoinMarketCap cryptocurrency IDs. Example: "1,2" |
| `slug` | string | No | Alternatively pass a comma-separated list of cryptocurrency slugs. Example: "bit |
| `symbol` | string | No | Alternatively pass one or more comma-separated cryptocurrency symbols. Example:  |
| `address` | string | No | Alternatively pass in a contract address. Example: "0xc40af1e4fecfa05ce6bab79dcd |
| `skip_invalid` | boolean | No | Pass `true` to relax request validation rules. When requesting records on multip |
| `aux` | string | No | Optionally specify a comma-separated list of supplemental data fields to return. |

---

### `GET` /v2/cryptocurrency/market-pairs/latest

**Market Pairs Latest**

Function: `getV2CryptocurrencyMarketpairsLatest`

**Query parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `id` | string | No | A cryptocurrency or fiat currency by CoinMarketCap ID to list market pairs for.  |
| `slug` | string | No | Alternatively pass a cryptocurrency by slug. Example: "bitcoin" |
| `symbol` | string | No | Alternatively pass a cryptocurrency by symbol. Fiat currencies are not supported |
| `start` | integer | No | Optionally offset the start (1-based index) of the paginated list of items to re |
| `limit` | integer | No | Optionally specify the number of results to return. Use this parameter and the " |
| `sort_dir` | string | No | Optionally specify the sort direction of markets returned. |
| `sort` | string | No | Optionally specify the sort order of markets returned. By default we return a st |
| `aux` | string | No | Optionally specify a comma-separated list of supplemental data fields to return. |
| `matched_id` | string | No | Optionally include one or more fiat or cryptocurrency IDs to filter market pairs |
| `matched_symbol` | string | No | Optionally include one or more fiat or cryptocurrency symbols to filter market p |
| `category` | string | No | The category of trading this market falls under. Spot markets are the most commo |
| `fee_type` | string | No | The fee type the exchange enforces for this market. |
| `convert` | string | No | Optionally calculate market quotes in up to 120 currencies at once by passing a  |
| `convert_id` | string | No | Optionally calculate market quotes by CoinMarketCap ID instead of symbol. This o |

---

### `GET` /v2/cryptocurrency/ohlcv/historical

**OHLCV Historical**

Function: `getV2CryptocurrencyOhlcvHistorical`

**Query parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `id` | string | No | One or more comma-separated CoinMarketCap cryptocurrency IDs. Example: "1,1027" |
| `slug` | string | No | Alternatively pass a comma-separated list of cryptocurrency slugs. Example: "bit |
| `symbol` | string | No | Alternatively pass one or more comma-separated cryptocurrency symbols. Example:  |
| `time_period` | string | No | Time period to return OHLCV data for. The default is "daily". If hourly, the ope |
| `time_start` | string | No | Timestamp (Unix or ISO 8601) to start returning OHLCV time periods for. Only the |
| `time_end` | string | No | Timestamp (Unix or ISO 8601) to stop returning OHLCV time periods for (inclusive |
| `count` | number | No | Optionally limit the number of time periods to return results for. The default i |
| `interval` | string | No | Optionally adjust the interval that "time_period" is sampled. For example with i |
| `convert` | string | No | By default market quotes are returned in USD. Optionally calculate market quotes |
| `convert_id` | string | No | Optionally calculate market quotes by CoinMarketCap ID instead of symbol. This o |
| `skip_invalid` | boolean | No | Pass `true` to relax request validation rules. When requesting records on multip |

---

### `GET` /v2/cryptocurrency/ohlcv/latest

**OHLCV Latest**

Function: `getV2CryptocurrencyOhlcvLatest`

**Query parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `id` | string | No | One or more comma-separated cryptocurrency CoinMarketCap IDs. Example: 1,2 |
| `symbol` | string | No | Alternatively pass one or more comma-separated cryptocurrency symbols. Example:  |
| `convert` | string | No | Optionally calculate market quotes in up to 120 currencies at once by passing a  |
| `convert_id` | string | No | Optionally calculate market quotes by CoinMarketCap ID instead of symbol. This o |
| `skip_invalid` | boolean | No | Pass `true` to relax request validation rules. When requesting records on multip |

---

### `GET` /v2/cryptocurrency/price-performance-stats/latest

**Price Performance Stats**

Function: `getV2CryptocurrencyPriceperformancestatsLatest`

**Query parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `id` | string | No | One or more comma-separated cryptocurrency CoinMarketCap IDs. Example: 1,2 |
| `slug` | string | No | Alternatively pass a comma-separated list of cryptocurrency slugs. Example: "bit |
| `symbol` | string | No | Alternatively pass one or more comma-separated cryptocurrency symbols. Example:  |
| `time_period` | string | No | Specify one or more comma-delimited time periods to return stats for. `all_time` |
| `convert` | string | No | Optionally calculate quotes in up to 120 currencies at once by passing a comma-s |
| `convert_id` | string | No | Optionally calculate quotes by CoinMarketCap ID instead of symbol. This option i |
| `skip_invalid` | boolean | No | Pass `true` to relax request validation rules. When requesting records on multip |

---

### `GET` /v2/simple/price

**Simple Price**

Function: `getV2SimplePrice`

**Query parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `id` | string | No | One or more comma-separated CoinMarketCap cryptocurrency IDs. Example: `1,1027`. |
| `slug` | string | No | Alternatively pass comma-separated cryptocurrency slugs. Example: `bitcoin,ether |
| `symbol` | string | No | Alternatively pass comma-separated cryptocurrency symbols. Example: `BTC,ETH`. W |
| `convert` | string | No | Optionally calculate price in up to 120 fiat or cryptocurrency conversions at on |
| `convert_id` | string | No | Same as `convert`, but by CoinMarketCap currency ID instead of symbol. Example:  |
| `include_market_cap` | boolean | No | Include `market_cap` in each quote object. |
| `include_24h_volume` | boolean | No | Include `volume_24h` in each quote object. |
| `include_24h_change` | boolean | No | Include `percent_change_24h` in each quote object. |
| `include_last_updated` | boolean | No | Include `last_updated` (ISO 8601) in each quote object. |
| `include_all` | boolean | No | Shortcut to enable `include_market_cap`, `include_24h_volume`, `include_24h_chan |
| `precision` | integer | No | Round all price, market-cap, and volume values to this many decimal places. Omit |
| `skip_invalid` | boolean | No | When multiple assets are requested, skip invalid lookups and return the valid on |

---

### `GET` /v3/cryptocurrency/listings/latest

**Listings Latest**

Function: `getV3CryptocurrencyListingsLatest`

**Query parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `start` | string | No | Optionally offset the start (1-based index) of the paginated list of items to re |
| `limit` | string | No | Optionally specify the number of results to return. Use this parameter and the \ |
| `price_min` | string | No | Optionally specify a threshold of minimum USD price to filter results by. |
| `price_max` | string | No | Optionally specify a threshold of maximum USD price to filter results by. |
| `market_cap_min` | string | No | Optionally specify a threshold of minimum market cap to filter results by. |
| `market_cap_max` | string | No | Optionally specify a threshold of maximum market cap to filter results by. |
| `volume_24h_min` | string | No | Optionally specify a threshold of minimum 24 hour USD volume to filter results b |
| `volume_24h_max` | string | No | Optionally specify a threshold of maximum 24 hour USD volume to filter results b |
| `circulating_supply_min` | string | No | Optionally specify a threshold of minimum circulating supply to filter results b |
| `circulating_supply_max` | string | No | Optionally specify a threshold of maximum circulating supply to filter results b |
| `percent_change_24h_min` | string | No | Optionally specify a threshold of minimum 24 hour percent change to filter resul |
| `percent_change_24h_max` | string | No | Optionally specify a threshold of maximum 24 hour percent change to filter resul |
| `convert` | string | No | Optionally calculate market quotes in up to 120 currencies at once by passing a  |
| `convert_id` | string | No | Optionally calculate market quotes by CoinMarketCap ID instead of symbol. This o |
| `sort` | string | No | What field to sort the list of cryptocurrencies by. |
| `sort_dir` | string | No | The direction in which to order cryptocurrencies against the specified sort. |
| `cryptocurrency_type` | string | No | The type of cryptocurrency to include. |
| `tag` | string | No | The tag of cryptocurrency to include. |
| `aux` | string | No | Optionally specify a comma-separated list of supplemental data fields to return. |

---

### `GET` /v3/cryptocurrency/quotes/historical

**Quotes Historical**

Function: `getV3CryptocurrencyQuotesHistorical`

**Query parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `id` | string | No | One or more comma-separated CoinMarketCap cryptocurrency IDs. Example: "1,2" |
| `symbol` | string | No | Alternatively pass one or more comma-separated cryptocurrency symbols. Example:  |
| `time_start` | string | No | Timestamp (Unix or ISO 8601) to start returning quotes for. Optional, if not pas |
| `time_end` | string | No | Timestamp (Unix or ISO 8601) to stop returning quotes for (inclusive). Optional, |
| `count` | number | No | The number of interval periods to return results for. Optional, required if both |
| `interval` | string | No | Interval of time to return data points for. See details in endpoint description. |
| `convert` | string | No | By default market quotes are returned in USD. Optionally calculate market quotes |
| `convert_id` | string | No | Optionally calculate market quotes by CoinMarketCap ID instead of symbol. This o |
| `aux` | string | No | Optionally specify a comma-separated list of supplemental data fields to return. |
| `skip_invalid` | boolean | No | Pass `true` to relax request validation rules. When requesting records on multip |

---

### `GET` /v3/cryptocurrency/quotes/latest

**Quotes Latest**

Function: `getV3CryptocurrencyQuotesLatest`

**Query parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `id` | string | No | One or more comma-separated cryptocurrency CoinMarketCap IDs. |
| `slug` | string | No | Alternatively pass a comma-separated list of cryptocurrency slugs. |
| `symbol` | string | No | Alternatively pass one or more comma-separated cryptocurrency symbols. |
| `convert` | string | No | Optionally calculate market quotes in up to 120 currencies at once by passing a  |
| `convert_id` | string | No | Optionally calculate market quotes by CoinMarketCap ID instead of symbol. |
| `aux` | string | No | Optionally specify a comma-separated list of supplemental data fields to return. |
| `skip_invalid` | string | No | Pass true to relax request validation rules. When requesting records on multiple |

---

## Deprecated

### `GET` /v1/cryptocurrency/info

**Metadata v1 (deprecated)**

Function: `getV1CryptocurrencyInfo`

**Query parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `id` | string | No | One or more comma-separated CoinMarketCap cryptocurrency IDs. Example: "1,2" |
| `slug` | string | No | Alternatively pass a comma-separated list of cryptocurrency slugs. Example: "bit |
| `symbol` | string | No | Alternatively pass one or more comma-separated cryptocurrency symbols. Example:  |
| `address` | string | No | Alternatively pass in a contract address. Example: "0xc40af1e4fecfa05ce6bab79dcd |
| `skip_invalid` | boolean | No | Pass `true` to relax request validation rules. When requesting records on multip |
| `aux` | string | No | Optionally specify a comma-separated list of supplemental data fields to return. |

---

### `GET` /v1/cryptocurrency/listings/latest

**Listings Latest v1 (deprecated)**

Function: `getV1CryptocurrencyListingsLatest`

**Query parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `start` | integer | No | Optionally offset the start (1-based index) of the paginated list of items to re |
| `limit` | integer | No | Optionally specify the number of results to return. Use this parameter and the " |
| `price_min` | number | No | Optionally specify a threshold of minimum USD price to filter results by. |
| `price_max` | number | No | Optionally specify a threshold of maximum USD price to filter results by. |
| `market_cap_min` | number | No | Optionally specify a threshold of minimum market cap to filter results by. |
| `market_cap_max` | number | No | Optionally specify a threshold of maximum market cap to filter results by. |
| `volume_24h_min` | number | No | Optionally specify a threshold of minimum 24 hour USD volume to filter results b |
| `volume_24h_max` | number | No | Optionally specify a threshold of maximum 24 hour USD volume to filter results b |
| `circulating_supply_min` | number | No | Optionally specify a threshold of minimum circulating supply to filter results b |
| `circulating_supply_max` | number | No | Optionally specify a threshold of maximum circulating supply to filter results b |
| `percent_change_24h_min` | number | No | Optionally specify a threshold of minimum 24 hour percent change to filter resul |
| `percent_change_24h_max` | number | No | Optionally specify a threshold of maximum 24 hour percent change to filter resul |
| `self_reported_circulating_supply_min` | ['number', 'null'] | No | Optionally specify a threshold of minimum self reported circulating supply to fi |
| `self_reported_circulating_supply_max` | ['number', 'null'] | No | Optionally specify a threshold of maximum self reported circulating supply to fi |
| `self_reported_market_cap_min` | number | No | Optionally specify a threshold of minimum self reported market cap to filter res |
| `self_reported_market_cap_max` | number | No | Optionally specify a threshold of maximum self reported market cap to filter res |
| `unlocked_market_cap_min` | number | No | Optionally specify a threshold of minimum unlocked market cap to filter results  |
| `unlocked_market_cap_max` | number | No | Optionally specify a threshold of maximum unlocked market cap to filter results  |
| `unlocked_circulating_supply_min` | number | No | Optionally specify a threshold of minimum unlocked circulating supply to filter  |
| `unlocked_circulating_supply_max` | number | No | Optionally specify a threshold of maximum unlocked circulating supply to filter  |
| `convert` | string | No | Optionally calculate market quotes in up to 120 currencies at once by passing a  |
| `convert_id` | string | No | Optionally calculate market quotes by CoinMarketCap ID instead of symbol. This o |
| `sort` | string | No | What field to sort the list of cryptocurrencies by. |
| `sort_dir` | string | No | The direction in which to order cryptocurrencies against the specified sort. |
| `cryptocurrency_type` | string | No | The type of cryptocurrency to include. |
| `tag` | string | No | The tag of cryptocurrency to include. |
| `aux` | string | No | Optionally specify a comma-separated list of supplemental data fields to return. |

---

### `GET` /v1/cryptocurrency/market-pairs/latest

**Market Pairs Latest v1 (deprecated)**

Function: `getV1CryptocurrencyMarketpairsLatest`

**Query parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `id` | string | No | A cryptocurrency or fiat currency by CoinMarketCap ID to list market pairs for.  |
| `slug` | string | No | Alternatively pass a cryptocurrency by slug. Example: "bitcoin" |
| `symbol` | string | No | Alternatively pass a cryptocurrency by symbol. Fiat currencies are not supported |
| `start` | integer | No | Optionally offset the start (1-based index) of the paginated list of items to re |
| `limit` | integer | No | Optionally specify the number of results to return. Use this parameter and the " |
| `sort_dir` | string | No | Optionally specify the sort direction of markets returned. |
| `sort` | string | No | Optionally specify the sort order of markets returned. By default we return a st |
| `aux` | string | No | Optionally specify a comma-separated list of supplemental data fields to return. |
| `matched_id` | string | No | Optionally include one or more fiat or cryptocurrency IDs to filter market pairs |
| `matched_symbol` | string | No | Optionally include one or more fiat or cryptocurrency symbols to filter market p |
| `category` | string | No | The category of trading this market falls under. Spot markets are the most commo |
| `fee_type` | string | No | The fee type the exchange enforces for this market. |
| `convert` | string | No | Optionally calculate market quotes in up to 120 currencies at once by passing a  |
| `convert_id` | string | No | Optionally calculate market quotes by CoinMarketCap ID instead of symbol. This o |

---

### `GET` /v1/cryptocurrency/multiplier

**Cryptocurrency Multiplier**

Function: `getV1CryptocurrencyMultiplier`

**Query parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `crypto_id` | string | No | One or more comma-separated CoinMarketCap cryptocurrency IDs. Example: `1,1027`. |
| `crypto_slug` | string | No | One or more comma-separated cryptocurrency slugs. Example: `bitcoin,ethereum`. M |
| `symbol` | string | No | One or more comma-separated cryptocurrency symbols. Example: `BTC,ETH`. Symbols  |
| `token_address` | string | No | One or more comma-separated contract addresses. Mutually exclusive with `crypto_ |
| `skip_invalid` | boolean | No | Pass `true` to skip invalid `crypto_id`, `crypto_slug`, `symbol`, or `token_addr |
| `start` | integer | No | Optionally offset the start (1-based index) of the paginated list. Non-positive  |
| `limit` | integer | No | Optionally specify the number of results to return. Use this parameter and the " |

---

### `GET` /v1/cryptocurrency/ohlcv/historical

**OHLCV Historical v1 (deprecated)**

Function: `getV1CryptocurrencyOhlcvHistorical`

**Query parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `id` | string | No | One or more comma-separated CoinMarketCap cryptocurrency IDs. Example: "1,1027" |
| `slug` | string | No | Alternatively pass a comma-separated list of cryptocurrency slugs. Example: "bit |
| `symbol` | string | No | Alternatively pass one or more comma-separated cryptocurrency symbols. Example:  |
| `time_period` | string | No | Time period to return OHLCV data for. The default is "daily". If hourly, the ope |
| `time_start` | string | No | Timestamp (Unix or ISO 8601) to start returning OHLCV time periods for. Only the |
| `time_end` | string | No | Timestamp (Unix or ISO 8601) to stop returning OHLCV time periods for (inclusive |
| `count` | number | No | Optionally limit the number of time periods to return results for. The default i |
| `interval` | string | No | Optionally adjust the interval that "time_period" is sampled. For example with i |
| `convert` | string | No | By default market quotes are returned in USD. Optionally calculate market quotes |
| `convert_id` | string | No | Optionally calculate market quotes by CoinMarketCap ID instead of symbol. This o |
| `skip_invalid` | boolean | No | Pass `true` to relax request validation rules. When requesting records on multip |

---

### `GET` /v1/cryptocurrency/ohlcv/latest

**OHLCV Latest v1 (deprecated)**

Function: `getV1CryptocurrencyOhlcvLatest`

**Query parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `id` | string | No | One or more comma-separated cryptocurrency CoinMarketCap IDs. Example: 1,2 |
| `symbol` | string | No | Alternatively pass one or more comma-separated cryptocurrency symbols. Example:  |
| `convert` | string | No | Optionally calculate market quotes in up to 120 currencies at once by passing a  |
| `convert_id` | string | No | Optionally calculate market quotes by CoinMarketCap ID instead of symbol. This o |
| `skip_invalid` | boolean | No | Pass `true` to relax request validation rules. When requesting records on multip |

---

### `GET` /v1/cryptocurrency/price-performance-stats/latest

**Price Performance Stats v1 (deprecated)**

Function: `getV1CryptocurrencyPriceperformancestatsLatest`

**Query parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `id` | string | No | One or more comma-separated cryptocurrency CoinMarketCap IDs. Example: 1,2 |
| `slug` | string | No | Alternatively pass a comma-separated list of cryptocurrency slugs. Example: "bit |
| `symbol` | string | No | Alternatively pass one or more comma-separated cryptocurrency symbols. Example:  |
| `time_period` | string | No | Specify one or more comma-delimited time periods to return stats for. `all_time` |
| `convert` | string | No | Optionally calculate quotes in up to 120 currencies at once by passing a comma-s |
| `convert_id` | string | No | Optionally calculate quotes by CoinMarketCap ID instead of symbol. This option i |
| `skip_invalid` | boolean | No | Pass `true` to relax request validation rules. When requesting records on multip |

---

### `GET` /v1/cryptocurrency/quotes/historical

**Quotes Historical v1 (deprecated)**

Function: `getV1CryptocurrencyQuotesHistorical`

**Query parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `id` | string | No | One or more comma-separated CoinMarketCap cryptocurrency IDs. Example: "1,2" |
| `symbol` | string | No | Alternatively pass one or more comma-separated cryptocurrency symbols. Example:  |
| `time_start` | string | No | Timestamp (Unix or ISO 8601) to start returning quotes for. Optional, if not pas |
| `time_end` | string | No | Timestamp (Unix or ISO 8601) to stop returning quotes for (inclusive). Optional, |
| `count` | number | No | The number of interval periods to return results for. Optional, required if both |
| `interval` | string | No | Interval of time to return data points for. See details in endpoint description. |
| `convert` | string | No | By default market quotes are returned in USD. Optionally calculate market quotes |
| `convert_id` | string | No | Optionally calculate market quotes by CoinMarketCap ID instead of symbol. This o |
| `aux` | string | No | Optionally specify a comma-separated list of supplemental data fields to return. |
| `skip_invalid` | boolean | No | Pass `true` to relax request validation rules. When requesting records on multip |

---

### `GET` /v1/cryptocurrency/quotes/latest

**Quotes Latest v1 (deprecated)**

Function: `getV1CryptocurrencyQuotesLatest`

**Query parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `id` | string | No | One or more comma-separated cryptocurrency CoinMarketCap IDs. Example: 1,2 |
| `slug` | string | No | Alternatively pass a comma-separated list of cryptocurrency slugs. Example: "bit |
| `symbol` | string | No | Alternatively pass one or more comma-separated cryptocurrency symbols. Example:  |
| `convert` | string | No | Optionally calculate market quotes in up to 120 currencies at once by passing a  |
| `convert_id` | string | No | Optionally calculate market quotes by CoinMarketCap ID instead of symbol. This o |
| `aux` | string | No | Optionally specify a comma-separated list of supplemental data fields to return. |
| `skip_invalid` | boolean | No | Pass `true` to relax request validation rules. When requesting records on multip |

---

### `GET` /v1/partners/flipside-crypto/fcas/listings/latest

**FCAS Listings Latest (deprecated)**

Function: `getV1PartnersFlipsidecryptoFcasListingsLatest`

**Query parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `start` | integer | No | Optionally offset the start (1-based index) of the paginated list of items to re |
| `limit` | integer | No | Optionally specify the number of results to return. Use this parameter and the " |
| `aux` | string | No | Optionally specify a comma-separated list of supplemental data fields to return. |

---

### `GET` /v1/partners/flipside-crypto/fcas/quotes/latest

**FCAS Quotes Latest (deprecated)**

Function: `getV1PartnersFlipsidecryptoFcasQuotesLatest`

**Query parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `id` | string | No | One or more comma-separated cryptocurrency CoinMarketCap IDs. Example: 1,2 |
| `slug` | string | No | Alternatively pass a comma-separated list of cryptocurrency slugs. Example: "bit |
| `symbol` | string | No | Alternatively pass one or more comma-separated cryptocurrency symbols. Example:  |
| `aux` | string | No | Optionally specify a comma-separated list of supplemental data fields to return. |

---

### `GET` /v1/simple/price

**Simple Price v1 (deprecated)**

Function: `getV1SimplePrice`

**Query parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `ids` | string | Yes | Comma-separated list of CoinMarketCap cryptocurrency IDs. Example: "1,1027". Max |
| `include_market_cap` | boolean | No | Include market cap values in the response. |
| `include_volume_24h` | boolean | No | Include 24-hour volume in the response. |
| `include_percent_change_24h` | boolean | No | Include 24-hour price change percentage in the response. |
| `include_last_updated` | boolean | No | Include last updated timestamp in the response. |

---

### `GET` /v1/tools/price-conversion

**Price Conversion v1 (deprecated)**

Function: `getV1ToolsPriceconversion`

**Query parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `amount` | number | Yes | An amount of currency to convert. Example: 10.43 |
| `id` | string | No | The CoinMarketCap currency ID of the base cryptocurrency or fiat to convert from |
| `symbol` | string | No | Alternatively the currency symbol of the base cryptocurrency or fiat to convert  |
| `time` | string | No | Optional timestamp (Unix or ISO 8601) to reference historical pricing during con |
| `convert` | string | No | Pass up to 120 comma-separated fiat or cryptocurrency symbols to convert the sou |
| `convert_id` | string | No | Optionally calculate market quotes by CoinMarketCap ID instead of symbol. This o |

---

### `GET` /v2/cryptocurrency/quotes/historical

**Quotes Historical v2**

Function: `getV2CryptocurrencyQuotesHistorical`

**Query parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `id` | string | No | One or more comma-separated CoinMarketCap cryptocurrency IDs. Example: "1,2" |
| `symbol` | string | No | Alternatively pass one or more comma-separated cryptocurrency symbols. Example:  |
| `time_start` | string | No | Timestamp (Unix or ISO 8601) to start returning quotes for. Optional, if not pas |
| `time_end` | string | No | Timestamp (Unix or ISO 8601) to stop returning quotes for (inclusive). Optional, |
| `count` | number | No | The number of interval periods to return results for. Optional, required if both |
| `interval` | string | No | Interval of time to return data points for. See details in endpoint description. |
| `convert` | string | No | By default market quotes are returned in USD. Optionally calculate market quotes |
| `convert_id` | string | No | Optionally calculate market quotes by CoinMarketCap ID instead of symbol. This o |
| `aux` | string | No | Optionally specify a comma-separated list of supplemental data fields to return. |
| `skip_invalid` | boolean | No | Pass `true` to relax request validation rules. When requesting records on multip |

---

### `GET` /v2/cryptocurrency/quotes/latest

**Quotes Latest v2**

Function: `getV2CryptocurrencyQuotesLatest`

**Query parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `id` | string | No | One or more comma-separated cryptocurrency CoinMarketCap IDs. Example: 1,2 |
| `slug` | string | No | Alternatively pass a comma-separated list of cryptocurrency slugs. Example: "bit |
| `symbol` | string | No | Alternatively pass one or more comma-separated cryptocurrency symbols. Example:  |
| `convert` | string | No | Optionally calculate market quotes in up to 120 currencies at once by passing a  |
| `convert_id` | string | No | Optionally calculate market quotes by CoinMarketCap ID instead of symbol. This o |
| `aux` | string | No | Optionally specify a comma-separated list of supplemental data fields to return. |
| `skip_invalid` | boolean | No | Pass `true` to relax request validation rules. When requesting records on multip |

---

### `GET` /v2/dex/multiplier

**Get token multiplier**

Function: `getV2DexMultiplier`

**Query parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `platform` | string | No | Platform name. If both `platform` and `platform_id` are provided, `platform_id`  |
| `platform_id` | integer | No | Platform id. If both `platform` and `platform_id` are provided, `platform_id` ta |
| `token_address` | string | No | Token address. If provided, at least one of `platform` or `platform_id` is requi |
| `start` | integer | No | Pagination start (1-based index). Default: 1. |
| `limit` | integer | No | Number of results per page. Default: 100. |

---

### `GET` /v4/dex/listings/info

**DEX Metadata**

Function: `getListingsInfo`

**Query parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `id` | string | No | One or more comma-separated CoinMarketCap cryptocurrency exchange ids. |
| `aux` | string | No | Default:`""` Valid values: `"urls"` `"logo"` `"description"` `"date_launched"` ` |

---

### `GET` /v4/dex/listings/quotes

**DEX Listings Latest**

Function: `getLatestListings`

**Query parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `start` | string | No | Optionally offset the start (1-based index) of the paginated list of items to re |
| `limit` | string | No | Optionally specify the number of results to return. Use this parameter and the   |
| `sort` | string | No | Default:`"volume_24h"` Valid values: `"name"` `"volume_24h"` `"market_share"` `" |
| `sort_dir` | string | No | Default:`"desc"` Valid values: `"desc"` `"asc"` The direction in which to order  |
| `type` | string | No | Default:`"all"` Valid values: `"all"` `"orderbook"` `"swap"` `"aggregator"` The  |
| `aux` | string | No | Default:`""` Valid values: `"date_launched"` Optionally specify a comma-separate |
| `convert_id` | string | No | Optionally calculate market quotes in up to 30 currencies at once by passing a c |

---

### `GET` /v4/dex/networks/list

**CoinMarketCap ID Map**

Function: `getNetworks`

**Query parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `start` | string | No | Optionally offset the start (1-based index) of the paginated list of items to re |
| `limit` | string | No | Optionally specify the number of results to return. Use this parameter and the   |
| `sort` | string | No | Default:`"id"` Valid values: `"id"` `"name"` What field to sort the list of netw |
| `sort_dir` | string | No | Default:`"desc"` Valid values: `"desc"` `"asc"` The direction in which to order  |
| `aux` | string | No | Default:`""` Valid values: `"alternativeName"` `"cryptocurrencyId"` `"cryptocurr |

---

### `GET` /v4/dex/pairs/ohlcv/historical

**OHLCV Historical**

Function: `getPairsHistoricalOHLCV`

**Query parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `contract_address` | string | No | One contract address. Example:"0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640". If n |
| `network_id` | string | No | One or more CoinMarketCap cryptocurrency network ids |
| `network_slug` | string | No | Alternatively, one network names in URL friendly shorthand "slug" format (all lo |
| `time_period` | string | No | Default:`"daily"` Valid values: `"daily"` `"hourly"` `"1m"` `"5m"` `"15m"` `"4h" |
| `time_start` | string | No | Timestamp (Unix or ISO 8601) to start returning OHLCV time periods for. Only the |
| `time_end` | string | No | Timestamp (Unix or ISO 8601) to stop returning OHLCV time periods for (inclusive |
| `count` | string | No | Optionally limit the number of time periods to return results for. The default i |
| `interval` | string | No | Default:`"daily"` Valid values: `"1m"` `"5m"` `"15m"` `"30m"` `"1h"` `"4h"` `"8h |
| `aux` | string | No | Default:`""` Valid values: `"pool_created"` `"percent_pooled_base_asset"` `"num_ |
| `convert_id` | string | No | Optionally calculate market quotes by CoinMarketCap ID instead of symbol. This o |
| `skip_invalid` | string | No | Pass true to relax request validation rules. When requesting records on multiple |
| `reverse_order` | string | No | Pass true to invert the order of a spot pair. For example, a trading pair is set |

---

### `GET` /v4/dex/pairs/ohlcv/latest

**OHLCV Latest**

Function: `getPairsLatestOHLCV`

**Query parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `contract_address` | string | No | One or more comma-separated contract addresses. |
| `network_id` | string | No | One or more CoinMarketCap cryptocurrency network ids |
| `network_slug` | string | No | Alternatively, one network names in URL friendly shorthand "slug" format (all lo |
| `aux` | string | No | Default:`""` Valid values: `"pool_created"` `"percent_pooled_base_asset"` `"num_ |
| `convert_id` | string | No | Optionally calculate market quotes by CoinMarketCap ID instead of symbol. This o |
| `skip_invalid` | string | No | Pass true to relax request validation rules. When requesting records on multiple |
| `reverse_order` | string | No | Pass true to invert the order of a spot pair. For example, a trading pair is set |

---

### `GET` /v4/dex/pairs/trade/latest

**Trades Latest**

Function: `getPairsLatestTrade`

**Query parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `contract_address` | string | No | One or more comma-separated contract addresses. |
| `network_id` | string | No | One CoinMarketCap cryptocurrency network id. |
| `network_slug` | string | No | Alternatively, one network names in URL friendly shorthand "slug"  format (all l |
| `aux` | string | No | Default:`""` Valid values: `"transaction_hash"` `"blockchain_explorer_link"` Opt |
| `convert_id` | string | No | Optionally calculate market quotes in up to 30 currencies at once by passing a c |
| `skip_invalid` | string | No | Pass true to relax request validation rules. When requesting records on multiple |
| `reverse_order` | string | No | Pass true to invert the order of a spot pair. For example, a trading pair is set |

---

## Derivatives

### `GET` /v5/cryptocurrency/derivatives/market-pairs/list/latest

**Derivative market pairs by cryptocurrency**

Function: `getV5CryptocurrencyDerivativesMarketPairsListLatest`

**Query parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `crypto_id` | integer | No | A CoinMarketCap cryptocurrency ID. Example: "1" |
| `crypto_slug` | string | No | Alternatively pass a cryptocurrency "slug" (URL friendly all lowercase shorthand |
| `crypto_symbol` | string | No | Alternatively pass a cryptocurrency symbol. Example: "BTC". One "crypto_id", "cr |
| `start` | integer | No | Optionally offset the start (1-based index) of the paginated list of items to re |
| `limit` | integer | No | Optionally specify the number of results to return. Use this parameter and the " |
| `sort_dir` | string | No | Optionally specify the sort direction. Options: `asc`, `desc`. |
| `sort` | string | No | Optionally specify the field used to sort market pairs. Options: `volume_24h_str |
| `category` | string | No | The derivative category of trading this market falls under. Options: `all`, `per |
| `fee_type` | string | No | The fee type the exchange enforces for this market. |
| `matched_id` | string | No | Optionally include one or more comma-delimited fiat or cryptocurrency IDs to fil |
| `matched_symbol` | string | No | Optionally include one or more comma-delimited fiat or cryptocurrency symbols to |
| `center_type` | string | No | Optionally filter by exchange center type. Options: `all`, `cex`, `dex`. |
| `convert` | string | No | Optionally calculate market quotes in multiple currencies at once by passing a c |
| `convert_id` | string | No | Optionally calculate market quotes by CoinMarketCap ID instead of symbol. This o |

---

### `GET` /v5/derivatives/liquidations/cryptocurrency/list/latest

**Latest Liquidations by Cryptocurrency**

Function: `getV5DerivativesLiquidationsCryptocurrencyListLatest`

**Query parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `crypto_id` | string | No | Optionally filter to one or more comma-separated CoinMarketCap cryptocurrency ID |
| `crypto_slug` | string | No | Alternatively filter by comma-separated cryptocurrency slugs. Example: `bitcoin, |
| `symbol` | string | No | Alternatively filter by comma-separated cryptocurrency symbols. Example: `BTC,ET |
| `skip_invalid` | boolean | No | Pass `true` to relax request validation: nonexistent identifiers in a filter lis |
| `sort` | string | No | Field to sort the list by (values compared in USD terms). |
| `sort_dir` | string | No | Direction to order against the `sort` field. |
| `start` | integer | No | Optionally offset the start (1-based index) of the paginated list of items to re |
| `limit` | integer | No | Optionally specify the number of results to return. Use with `start` to page thr |
| `convert` | string | No | Optionally calculate values in up to 120 fiat or cryptocurrency conversions at o |
| `convert_id` | string | No | Same as `convert`, but by CoinMarketCap currency ID instead of symbol. Example:  |

---

### `GET` /v5/derivatives/liquidations/exchange/list/latest

**Latest Liquidations by Exchange**

Function: `getV5DerivativesLiquidationsExchangeListLatest`

**Query parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `exchange_id` | string | No | Optionally filter to one or more comma-separated CoinMarketCap exchange IDs. Exa |
| `exchange_slug` | string | No | Alternatively filter by comma-separated exchange slugs. Example: `binance,bybit` |
| `skip_invalid` | boolean | No | Pass `true` to relax request validation: nonexistent identifiers in a filter lis |
| `sort` | string | No | Field to sort the list by (values compared in USD terms). |
| `sort_dir` | string | No | Direction to order against the `sort` field. |
| `start` | integer | No | Optionally offset the start (1-based index) of the paginated list of items to re |
| `limit` | integer | No | Optionally specify the number of results to return. Use with `start` to page thr |
| `convert` | string | No | Optionally calculate values in up to 120 fiat or cryptocurrency conversions at o |
| `convert_id` | string | No | Same as `convert`, but by CoinMarketCap currency ID instead of symbol. Example:  |

---

### `GET` /v5/derivatives/liquidations/quotes/latest

**Latest Total Liquidations**

Function: `getV5DerivativesLiquidationsQuotesLatest`

**Query parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `convert` | string | No | Optionally calculate values in up to 120 fiat or cryptocurrency conversions at o |
| `convert_id` | string | No | Same as `convert`, but by CoinMarketCap currency ID instead of symbol. Example:  |

---

### `GET` /v5/exchange/derivatives/list

**List derivatives exchanges**

Function: `getV5ExchangeDerivativesList`

**Query parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `start` | integer | No | Optionally offset the start (1-based index) of the paginated list of items to re |
| `limit` | integer | No | Optionally specify the number of results to return. Use this parameter and the " |
| `sort` | string | No | Optionally specify the field used to sort the list of exchanges. Options: `name` |
| `sort_dir` | string | No | Optionally specify the sort direction. Options: `asc`, `desc`. |
| `convert` | string | No | Optionally calculate market quotes in multiple currencies at once by passing a c |
| `convert_id` | string | No | Optionally calculate market quotes by CoinMarketCap ID instead of symbol. This o |

---

### `GET` /v5/exchange/derivatives/market-pairs/list/latest

**Derivative market pairs by exchange**

Function: `getV5ExchangeDerivativesMarketPairsListLatest`

**Query parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `exchange_id` | integer | No | A CoinMarketCap exchange ID. Example: "270" |
| `exchange_slug` | string | No | Alternatively pass an exchange "slug" (URL friendly all lowercase shorthand vers |
| `start` | integer | No | Optionally offset the start (1-based index) of the paginated list of items to re |
| `limit` | integer | No | Optionally specify the number of results to return. Use this parameter and the " |
| `sort` | string | No | Optionally specify the field used to sort market pairs. Options: `volume_24h_str |
| `sort_dir` | string | No | Optionally specify the sort direction. Options: `asc`, `desc`. |
| `category` | string | No | The derivative category of trading this market falls under. Options: `all`, `per |
| `fee_type` | string | No | The fee type the exchange enforces for this market. |
| `matched_id` | string | No | Optionally include one or more comma-delimited fiat or cryptocurrency IDs to fil |
| `matched_symbol` | string | No | Optionally include one or more comma-delimited fiat or cryptocurrency symbols to |
| `convert` | string | No | Optionally calculate market quotes in multiple currencies at once by passing a c |
| `convert_id` | string | No | Optionally calculate market quotes by CoinMarketCap ID instead of symbol. This o |

---

## Exchange

### `GET` /v1/exchange/assets

**Exchange Assets**

Function: `getV1ExchangeAssets`

**Query parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `id` | string | No | A CoinMarketCap exchange ID. Example: 270 |

---

### `GET` /v1/exchange/info

**Metadata**

Function: `getV1ExchangeInfo`

**Query parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `id` | string | No | One or more comma-separated CoinMarketCap cryptocurrency exchange ids. Example:  |
| `slug` | string | No | Alternatively, one or more comma-separated exchange names in URL friendly shorth |
| `aux` | string | No | Optionally specify a comma-separated list of supplemental data fields to return. |

---

### `GET` /v1/exchange/listings/latest

**Listings Latest**

Function: `getV1ExchangeListingsLatest`

**Query parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `start` | integer | No | Optionally offset the start (1-based index) of the paginated list of items to re |
| `limit` | integer | No | Optionally specify the number of results to return. Use this parameter and the " |
| `sort` | string | No | What field to sort the list of exchanges by. |
| `sort_dir` | string | No | The direction in which to order exchanges against the specified sort. |
| `market_type` | string | No | The type of exchange markets to include in rankings. This field is deprecated. P |
| `category` | string | No | The category for this exchange. |
| `aux` | string | No | Optionally specify a comma-separated list of supplemental data fields to return. |
| `convert` | string | No | Optionally calculate market quotes in up to 120 currencies at once by passing a  |
| `convert_id` | string | No | Optionally calculate market quotes by CoinMarketCap ID instead of symbol. This o |

---

### `GET` /v1/exchange/map

**Exchange ID Map**

Function: `getV1ExchangeMap`

**Query parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `listing_status` | string | No | Only active exchanges are returned by default. Pass `inactive` to get a list of  |
| `slug` | string | No | Optionally pass a comma-separated list of exchange slugs (lowercase URL friendly |
| `start` | integer | No | Optionally offset the start (1-based index) of the paginated list of items to re |
| `limit` | integer | No | Optionally specify the number of results to return. Use this parameter and the " |
| `sort` | string | No | What field to sort the list of exchanges by. |
| `aux` | string | No | Optionally specify a comma-separated list of supplemental data fields to return. |
| `crypto_id` | string | No | Optionally include one fiat or cryptocurrency IDs to filter market pairs by. For |

---

### `GET` /v1/exchange/market-pairs/latest

**Market Pairs Latest**

Function: `getV1ExchangeMarketpairsLatest`

**Query parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `id` | string | No | A CoinMarketCap exchange ID. Example: "1" |
| `slug` | string | No | Alternatively pass an exchange "slug" (URL friendly all lowercase shorthand vers |
| `start` | integer | No | Optionally offset the start (1-based index) of the paginated list of items to re |
| `limit` | integer | No | Optionally specify the number of results to return. Use this parameter and the " |
| `aux` | string | No | Optionally specify a comma-separated list of supplemental data fields to return. |
| `matched_id` | string | No | Optionally include one or more comma-delimited fiat or cryptocurrency IDs to fil |
| `matched_symbol` | string | No | Optionally include one or more comma-delimited fiat or cryptocurrency symbols to |
| `category` | string | No | The category of trading this market falls under. Spot markets are the most commo |
| `fee_type` | string | No | The fee type the exchange enforces for this market. |
| `convert` | string | No | Optionally calculate market quotes in up to 120 currencies at once by passing a  |
| `convert_id` | string | No | Optionally calculate market quotes by CoinMarketCap ID instead of symbol. This o |

---

### `GET` /v1/exchange/quotes/historical

**Quotes Historical**

Function: `getV1ExchangeQuotesHistorical`

**Query parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `id` | string | No | One or more comma-separated exchange CoinMarketCap ids. Example: "24,270" |
| `slug` | string | No | Alternatively, one or more comma-separated exchange names in URL friendly shorth |
| `time_start` | string | No | Timestamp (Unix or ISO 8601) to start returning quotes for. Optional, if not pas |
| `time_end` | string | No | Timestamp (Unix or ISO 8601) to stop returning quotes for (inclusive). Optional, |
| `count` | number | No | The number of interval periods to return results for. Optional, required if both |
| `interval` | string | No | Interval of time to return data points for. See details in endpoint description. |
| `convert` | string | No | By default market quotes are returned in USD. Optionally calculate market quotes |
| `convert_id` | string | No | Optionally calculate market quotes by CoinMarketCap ID instead of symbol. This o |

---

### `GET` /v1/exchange/quotes/latest

**Quotes Latest**

Function: `getV1ExchangeQuotesLatest`

**Query parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `id` | string | No | One or more comma-separated CoinMarketCap exchange IDs. Example: "1,2" |
| `slug` | string | No | Alternatively, pass a comma-separated list of exchange "slugs" (URL friendly all |
| `convert` | string | No | Optionally calculate market quotes in up to 120 currencies at once by passing a  |
| `convert_id` | string | No | Optionally calculate market quotes by CoinMarketCap ID instead of symbol. This o |
| `aux` | string | No | Optionally specify a comma-separated list of supplemental data fields to return. |

---

## Global Metrics

### `GET` /v1/altcoin-season-index/historical

**Altcoin Season Index Historical**

Function: `getV1AltcoinSeasonIndexHistorical`

**Query parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `timeframe` | string | No | Timeframe for historical data. Valid values are 7d, 30d, and 90d. Default is 7d. |

---

### `GET` /v1/altcoin-season-index/latest

**Altcoin Season Index Latest**

Function: `getV1AltcoinSeasonIndexLatest`

---

### `GET` /v1/global-metrics/quotes/historical

**Quotes Historical**

Function: `getV1GlobalmetricsQuotesHistorical`

**Query parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `time_start` | string | No | Timestamp (Unix or ISO 8601) to start returning quotes for. Optional, if not pas |
| `time_end` | string | No | Timestamp (Unix or ISO 8601) to stop returning quotes for (inclusive). Optional, |
| `count` | number | No | The number of interval periods to return results for. Optional, required if both |
| `interval` | string | No | Interval of time to return data points for. See details in endpoint description. |
| `convert` | string | No | By default market quotes are returned in USD. Optionally calculate market quotes |
| `convert_id` | string | No | Optionally calculate market quotes by CoinMarketCap ID instead of symbol. This o |
| `aux` | string | No | Optionally specify a comma-separated list of supplemental data fields to return. |

---

### `GET` /v1/global-metrics/quotes/latest

**Quotes Latest**

Function: `getV1GlobalmetricsQuotesLatest`

**Query parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `convert` | string | No | Optionally calculate market quotes in up to 120 currencies at once by passing a  |
| `convert_id` | string | No | Optionally calculate market quotes by CoinMarketCap ID instead of symbol. This o |

---

### `GET` /v3/fear-and-greed/historical

**CMC Crypto Fear and Greed Historical**

Function: `getV3FearandgreedHistorical`

**Query parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `start` | integer | No | Optionally offset the start (1-based index) of the paginated list of items to re |
| `limit` | integer | No | Optionally specify the number of results to return. Use this parameter and the " |

---

### `GET` /v3/fear-and-greed/latest

**CMC Crypto Fear and Greed Latest**

Function: `getV3FearandgreedLatest`

---

## Holder

### `GET` /v1/dex/holders/count

**Get holder count**

Function: `getHolderCount`

**Query parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `platform` | string | Yes |  |
| `tokenAddress` | string | Yes |  |

---

### `POST` /v1/dex/holders/detail

**Get holder detail**

Function: `getHolderDetail`

---

### `POST` /v1/dex/holders/list

**Get holders list**

Function: `getHolders`

---

### `GET` /v1/dex/holders/tag_count

**Get holder tag count**

Function: `getHolderTagCount`

**Query parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `platform` | string | Yes |  |
| `tokenAddress` | string | Yes |  |

---

### `GET` /v1/dex/holders/trend/list

**Get holder trend list**

Function: `getHoldTrendList`

**Query parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `platform` | string | No | Platform name or id |
| `tokenAddress` | string | No | Token  address |
| `interval` | string | No | Kline interval: 1d |
| `from` | integer | No | start timestamp |
| `to` | integer | No | End timestamp |
| `limit` | integer | No | Number of to load |

---

## OHLCV

### `GET` /v1/k-line/candles

**Get K-line candles**

Function: `getKlineCandles`

**Query parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `platform` | string | No | Platform name or id |
| `address` | string | No | Token or pool address |
| `interval` | string | No | Kline interval: 1s/5s/30s/1min/3min/5min/15min/30min/1h/2h/4h/6h/8h/12h/1d/3d/1w |
| `from` | integer | No | Start timestamp (UNIX epoch) |
| `to` | integer | No | End timestamp (UNIX epoch) |
| `unit` | string | No | Kline unit: usd, native, quote |
| `limit` | integer | No | Number of candles to load |
| `pm` | string | No | Kline type: p (price), m (marketcap) |

---

### `GET` /v1/k-line/points

**Get K-line points**

Function: `getKlinePoints`

**Query parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `platform` | string | No | Platform name or id |
| `address` | string | No | Token or pool address |
| `interval` | string | No | Kline interval: 1s/5s/30s/1min/3min/5min/15min/30min/1h/2h/4h/6h/8h/12h/1d/3d/1w |
| `from` | integer | No | Start timestamp (UNIX epoch) |
| `to` | integer | No | End timestamp (UNIX epoch) |
| `unit` | string | No | Kline unit: usd, native, quote |
| `limit` | integer | No | Number of points to load |
| `pm` | string | No | Kline type: p (price), m (marketcap) |

---

## Platform

### `GET` /v1/dex/platform/detail

**Get platform detail**

Function: `getPlatformDetail`

**Query parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `platformName` | string | No | Platform name |

---

### `GET` /v1/dex/platform/list

**Get platform list**

Function: `getPlatformList`

---

## Real World Assets

### `GET` /v5/real-world-assets/assets/list

**RWA List**

Function: `getV5RealWorldAssetsAssetsList`

**Query parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `rwa_id` | string | No | One or more comma-separated RWA asset IDs. Example: `1,2`. Only one identifier t |
| `rwa_slug` | string | No | Alternatively pass RWA asset slugs. Example: `nvidia,gold`. |
| `symbol` | string | No | Alternatively pass RWA asset symbols / tickers. Example: `NVDA,GOLD`. |
| `asset_type` | string | No | Optionally filter by asset type. One of `stock`, `commodity`, `currency`, `gover |
| `sort` | string | No | Optionally specify the field used to sort the list. Options: `rwa_rank`, `tokeni |
| `sort_dir` | string | No | Optionally specify the sort direction. Options: `asc`, `desc`. |
| `start` | integer | No | Optionally offset the start (1-based index) of the paginated list of items to re |
| `limit` | integer | No | Optionally specify the number of results to return. Use this parameter and the " |
| `convert` | string | No | Optionally calculate market quotes in up to 120 currencies at once by passing a  |
| `convert_id` | string | No | Optionally calculate market quotes by CoinMarketCap ID instead of symbol. This o |
| `skip_invalid` | string | No | Pass `true` to relax request validation rules. When requesting records on multip |

---

### `GET` /v5/real-world-assets/info

**Metadata**

Function: `getV5RealWorldAssetsInfo`

**Query parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `rwa_id` | string | No | One or more comma-separated RWA asset IDs. Example: `1,2`. At least one of `rwa_ |
| `rwa_slug` | string | No | Alternatively pass RWA asset slugs. Example: `gold,nvidia`. |
| `symbol` | string | No | Alternatively pass RWA asset symbols / tickers. Example: `NVDA,GOLD`. |
| `skip_invalid` | string | No | Pass `true` to relax request validation rules. When requesting records on multip |

---

### `GET` /v5/real-world-assets/issuers

**Issuer**

Function: `getV5RealWorldAssetsIssuers`

**Query parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `issuer_id` | string | Yes | A single issuer ID (24-char hex). Example: `6a2d54b697c45356b1a634f4`. Obtain it |
| `start` | integer | No | Optionally offset the start (1-based index) into the linked-tokens list. |
| `limit` | integer | No | Optionally specify the page size for the linked-tokens list. Default 100, max 25 |

---

### `GET` /v5/real-world-assets/issuers/list

**Issuers List**

Function: `getV5RealWorldAssetsIssuersList`

**Query parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `issuer_id` | string | No | Optionally filter to one or more comma-separated issuer IDs (24-char hex). Examp |
| `active` | boolean | No | Optionally filter by active status. Omit to return all issuers. |
| `start` | integer | No | Optionally offset the start (1-based index) of the paginated list of items to re |
| `limit` | integer | No | Optionally specify the number of results to return. Use this parameter and the " |
| `skip_invalid` | string | No | Pass `true` to relax request validation rules. When requesting records on multip |

---

### `GET` /v5/real-world-assets/map

**RWA ID Map**

Function: `getV5RealWorldAssetsMap`

**Query parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `asset_type` | string | No | Optionally filter by asset type. One of `stock`, `commodity`, `currency`, `gover |
| `symbol` | string | No | Optionally pass a comma-separated list of RWA asset symbols / tickers to return  |
| `sort` | string | No | Optionally specify the field used to sort the list. Options: `rwa_id`, `rwa_rank |
| `start` | integer | No | Optionally offset the start (1-based index) of the paginated list of items to re |
| `limit` | integer | No | Optionally specify the number of results to return. Use this parameter and the " |

---

### `GET` /v5/real-world-assets/market-pairs/list

**Market Pairs**

Function: `getV5RealWorldAssetsMarketPairsList`

**Query parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `rwa_id` | string | No | A single RWA asset by `rwa_id`. Example: `2`. Only one identifier type (`rwa_id` |
| `rwa_slug` | string | No | Alternatively pass the RWA asset slug. Example: `nvidia`. |
| `symbol` | string | No | Alternatively pass the RWA asset symbol / ticker. Example: `NVDA`. |
| `sort` | string | No | Optionally specify the field used to sort the market pairs. Options: `volume_24h |
| `sort_dir` | string | No | Optionally specify the sort direction. Options: `asc`, `desc`. |
| `start` | integer | No | Optionally offset the start (1-based index) of the paginated list of items to re |
| `limit` | integer | No | Optionally specify the number of results to return. Use this parameter and the " |
| `convert` | string | No | Optionally calculate market quotes in up to 120 currencies at once by passing a  |
| `convert_id` | string | No | Optionally calculate market quotes by CoinMarketCap ID instead of symbol. This o |

---

### `GET` /v5/real-world-assets/quotes/latest

**Quotes Latest**

Function: `getV5RealWorldAssetsQuotesLatest`

**Query parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `rwa_id` | string | No | One or more comma-separated RWA asset IDs. Example: `1,2`. Only one identifier t |
| `rwa_slug` | string | No | Alternatively pass RWA asset slugs. Example: `nvidia,gold`. |
| `symbol` | string | No | Alternatively pass RWA asset symbols / tickers. Example: `NVDA,GOLD`. |
| `convert` | string | No | Optionally calculate market quotes in up to 120 currencies at once by passing a  |
| `convert_id` | string | No | Optionally calculate market quotes by CoinMarketCap ID instead of symbol. This o |
| `skip_invalid` | string | No | Pass `true` to relax request validation rules. When requesting records on multip |

---

## Token

### `POST` /v1/dex/gainer-loser/list

**Get top gainers and losers**

Function: `getGainerLoserList`

---

### `GET` /v1/dex/liquidity-change/list

**Get liquidity change list**

Function: `getLiquidityChangeList`

**Query parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `platform` | string | No | Blockchain platform name (bsc/sol/etc) |
| `address` | string | No | Token contract address |
| `type` | integer | No | Liquidity change type |
| `maker` | string | No | Maker address, support comma separated list |
| `sortBy` | string | No | Field to sort by (currently only supports 'ts') |
| `sortType` | string | No | Sort direction ('asc' or 'desc', default is 'desc') |
| `startTime` | integer | No | Start timestamp (inclusive) |
| `endTime` | integer | No | End timestamp (inclusive) |
| `minVolume` | number | No | Minimum USD volume (inclusive) |
| `maxVolume` | number | No | Maximum USD volume (inclusive) |
| `lastId` | string | No | Cursor for pagination, format: ts_txHash_logId |
| `limit` | integer | No | Result limit |

---

### `POST` /v1/dex/meme/list

**Get meme tokens**

Function: `getMemeList`

---

### `POST` /v1/dex/new/list

**Get new tokens**

Function: `getNewList`

---

### `GET` /v1/dex/search

**Search tokens**

Function: `search`

**Query parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `q` | string | No | Search keyword |
| `platform` | string | No | Platform filter |
| `sort` | string | No | Sort field |
| `limit` | integer | No | Result limit |
| `code` | string | No | Code filter |

---

### `GET` /v1/dex/security/detail

**Get security detail**

Function: `getSecurityDetail`

**Query parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `platformName` | string | No | Platform name |
| `address` | string | No | Token address |

---

### `GET` /v1/dex/token

**Get token detail**

Function: `getToken`

**Query parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `platform` | string | No | Platform name |
| `address` | string | No | Token address |

---

### `GET` /v1/dex/token-liquidity/query

**Query token liquidity**

Function: `queryTokenLiquidity`

**Query parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `platform` | string | No | Platform name |
| `address` | string | No | Token address |
| `interval` | string | No | Time interval |
| `limit` | integer | No | Result limit |
| `to` | integer | No | End timestamp |
| `needLatest` | boolean | No | Whether to include latest value |

---

### `GET` /v1/dex/token/pools

**Get token pools**

Function: `getTokenPools`

**Query parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `platform` | string | No | Platform name |
| `address` | string | No | Token address |
| `size` | integer | No |  |

---

### `GET` /v1/dex/token/price

**Get token price**

Function: `getTokenPrice`

**Query parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `platform` | string | No | Platform name |
| `address` | string | No | Token address |

---

### `POST` /v1/dex/token/price/batch

**Batch get token prices**

Function: `batchGetTokenPrice`

---

### `POST` /v1/dex/tokens/batch-query

**Batch query tokens**

Function: `batchQueryTokens`

---

### `GET` /v1/dex/tokens/transactions

**Get swap list**

Function: `getSwapList`

**Query parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `platform` | string | No | Blockchain platform name (bsc/sol/etc) |
| `address` | string | No | Token contract address |
| `type` | integer | No | Transaction type (0 for buy, 1 for sell) |
| `types` | array | No | Transaction types filter, supports: buy, sell, open, close, add, reduce |
| `maker` | string | No | Maker address, support comma separated list |
| `sortBy` | string | No | Field to sort by (currently only supports 'time') |
| `sortType` | string | No | Sort direction ('asc' or 'desc', default is 'desc') |
| `startTime` | integer | No | Start timestamp (inclusive) |
| `endTime` | integer | No | End timestamp (inclusive) |
| `minVolume` | number | No | Minimum volume (inclusive) |
| `maxVolume` | number | No | Maximum volume (inclusive) |
| `lastId` | string | No | Cursor for pagination, format: ts_txHash_logId |
| `limit` | integer | No | Result limit |
| `version` | string | No | Version |

---

### `POST` /v1/dex/tokens/trending/list

**Get trending tokens**

Function: `getTrendingList`

---

### `GET` /v4/dex/pairs/quotes/latest

**Quotes Latest**

Function: `getLatestPairsQuotes`

**Query parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `contract_address` | string | No | One or more comma-separated contract addresses. |
| `network_id` | string | No | One or more CoinMarketCap cryptocurrency network ids |
| `network_slug` | string | No | Alternatively, one network names in URL friendly shorthand "slug" format (all lo |
| `aux` | string | No | Default:`""` Valid values: `"pool_created"` `"percent_pooled_base_asset"` `"num_ |
| `convert_id` | string | No | Optionally calculate market quotes by CoinMarketCap ID instead of symbol. This o |
| `skip_invalid` | string | No | Pass true to relax request validation rules. When requesting records on multiple |
| `reverse_order` | string | No | Pass true to invert the order of a spot pair. For example, a trading pair is set |

---

### `GET` /v4/dex/spot-pairs/latest

**Pairs Listings Latest**

Function: `getSpotPairsLatest`

**Query parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `network_id` | string | No | One or more comma-separated CoinMarketCap cryptocurrency network ids. |
| `network_slug` | string | No | Alternatively, one or more comma-separated network names in URL friendly shortha |
| `dex_id` | string | No | One or more comma-separated CoinMarketCap dex exchange ids |
| `dex_slug` | string | No | Alternatively, one or more comma-separated dex exchange names in URL friendly sh |
| `base_asset_id` | string | No | One or more comma-separated CoinMarketCap cryptocurrency ids. |
| `base_asset_symbol` | string | No | Alternatively, one or more comma-separated network symbol in URL friendly shorth |
| `base_asset_contract_address` | string | No | Alternatively, one base asset contract address in URL friendly shorthand slug fo |
| `base_asset_ucid` | string | No | One or more comma-separated CoinMarketCap cryptocurrency IDs. |
| `quote_asset_id` | string | No | One or more comma-separated CoinMarketCap cryptocurrency ids. |
| `quote_asset_symbol` | string | No | Alternatively, one or more comma-separated network symbol in URL friendly shorth |
| `quote_asset_contract_address` | string | No | Alternatively, one quote asset contract address in URL friendly shorthand slug f |
| `quote_asset_ucid` | string | No | One or more comma-separated CoinMarketCap cryptocurrency IDs. |
| `scroll_id` | string | No | After your initial query, the API responds with the initial set of results and a |
| `limit` | string | No | Optionally specify the number of results to return. Use this parameter and the s |
| `liquidity_min` | string | No | Optionally specify a threshold of minimum liquidity to filter results by. |
| `liquidity_max` | string | No | Optionally specify a threshold of maximum liquidity to filter results by. |
| `volume_24h_min` | string | No | Optionally specify a threshold of minimum 24 hour USD volume to filter results b |
| `volume_24h_max` | string | No | Optionally specify a threshold of maximum 24 hour USD volume to filter results b |
| `no_of_transactions_24h_min` | string | No | Optionally specify a threshold of minimum 24h no. of transactions to filter resu |
| `no_of_transactions_24h_max` | string | No | Optionally specify a threshold of maximum 24h no. of transactions to filter resu |
| `percent_change_24h_min` | string | No | Optionally specify a threshold of minimum 24 hour percent change to filter resul |
| `percent_change_24h_max` | string | No | Optionally specify a threshold of maximum 24 hour percent change to filter resul |
| `sort` | string | No | Default:`"volume_24h"` Valid values:  `"volume_24h"` `"liquidity"` `"no_of_trans |
| `sort_dir` | string | No | Default:`"desc"` Valid values: `"desc"` `"asc"` The direction in which to order  |
| `aux` | string | No | Default:`""` Valid values: `"pool_created"` `"percent_pooled_base_asset"` `"num_ |
| `reverse_order` | string | No | Pass true to invert the order of a spot pair. For example, a trading pair is set |
| `convert_id` | string | No | Optionally calculate market quotes by CoinMarketCap ID instead of symbol. This o |

---

## Tools

### `GET` /v1/fiat/map

**Fiat ID Map**

Function: `getV1FiatMap`

**Query parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `start` | integer | No | Optionally offset the start (1-based index) of the paginated list of items to re |
| `limit` | integer | No | Optionally specify the number of results to return. Use this parameter and the " |
| `sort` | string | No | What field to sort the list by. |
| `include_metals` | boolean | No | Pass `true` to include precious metals. |

---

### `GET` /v1/key/info

**Key Info**

Function: `getV1KeyInfo`

---

### `GET` /v1/tools/postman

**Postman Conversion v1**

Function: `getV1ToolsPostman`

---

### `GET` /v2/tools/price-conversion

**Price Conversion v2**

Function: `getV2ToolsPriceconversion`

**Query parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `amount` | number | Yes | An amount of currency to convert. Example: 10.43 |
| `id` | string | No | The CoinMarketCap currency ID of the base cryptocurrency or fiat to convert from |
| `symbol` | string | No | Alternatively the currency symbol of the base cryptocurrency or fiat to convert  |
| `time` | string | No | Optional timestamp (Unix or ISO 8601) to reference historical pricing during con |
| `convert` | string | No | Pass up to 120 comma-separated fiat or cryptocurrency symbols to convert the sou |
| `convert_id` | string | No | Optionally calculate market quotes by CoinMarketCap ID instead of symbol. This o |

---
