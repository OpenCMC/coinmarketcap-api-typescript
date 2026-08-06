/**
 * Basic usage example for @coinmarketcap/sdk
 *
 * Run:
 *   export CMC_PRO_API_KEY="your-key"
 *   npx tsx examples/basic.ts
 */

import { CoinMarketCap } from '../src/index';

async function main() {
  // --- Pro mode (requires API key) ---
  const cmc = new CoinMarketCap({
    apiKey: process.env.CMC_PRO_API_KEY!,
  });

  // Get latest quotes for Bitcoin and Ethereum
  console.log('=== Cryptocurrency Quotes ===');
  const quotes = await cmc.api.cryptocurrency.quotesLatest({
    query: { id: '1,1027' },
  });
  if (quotes.data) {
    console.log(JSON.stringify(quotes.data, null, 2));
  } else {
    console.error('Error:', quotes.error);
  }

  // Get top 5 listings
  console.log('\n=== Top 5 Listings ===');
  const listings = await cmc.api.cryptocurrency.listingsLatest({
    query: { limit: 5 },
  });
  if (listings.data) {
    console.log(JSON.stringify(listings.data, null, 2));
  } else {
    console.error('Error:', listings.error);
  }

  // Global metrics
  console.log('\n=== Global Metrics ===');
  const global = await cmc.api.globalMetrics.quotesLatest({});
  if (global.data) {
    console.log(JSON.stringify(global.data, null, 2));
  } else {
    console.error('Error:', global.error);
  }
}

main().catch(console.error);
