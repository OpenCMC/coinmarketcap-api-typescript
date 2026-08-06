/**
 * Public (keyless) API usage example
 *
 * Run:
 *   npx tsx examples/public-api.ts
 */

import { CoinMarketCap } from '../src/index';

async function main() {
  // --- Public mode (no API key needed) ---
  const cmc = new CoinMarketCap({ environment: 'public' });

  console.log('=== Public: Top 10 Listings ===');
  const listings = await cmc.api.cryptocurrency.listingsLatest({
    query: { limit: 10 },
  });

  if (listings.data) {
    console.log(JSON.stringify(listings.data, null, 2));
  } else {
    console.error('Error:', listings.error);
  }
}

main().catch(console.error);
