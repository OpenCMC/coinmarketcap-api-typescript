import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { CoinMarketCap, ENVIRONMENTS } from '../src/index';

describe('CoinMarketCap', () => {
  it('throws if apiKey missing in pro mode', () => {
    assert.throws(
      () => new CoinMarketCap({ environment: 'pro' }),
      /apiKey is required/,
    );
  });

  it('does not throw in public mode without apiKey', () => {
    assert.doesNotThrow(() => new CoinMarketCap({ environment: 'public' }));
  });

  it('creates client with correct baseUrl for pro', () => {
    const cmc = new CoinMarketCap({ apiKey: 'test-key' });
    const config = cmc.client.getConfig();
    assert.equal(config.baseUrl, ENVIRONMENTS.pro);
  });

  it('creates client with correct baseUrl for public', () => {
    const cmc = new CoinMarketCap({ environment: 'public' });
    const config = cmc.client.getConfig();
    assert.equal(config.baseUrl, ENVIRONMENTS.public);
  });

  it('respects custom baseUrl over environment', () => {
    const cmc = new CoinMarketCap({
      apiKey: 'test-key',
      baseUrl: 'https://custom.example.com',
    });
    const config = cmc.client.getConfig();
    assert.equal(config.baseUrl, 'https://custom.example.com');
  });

  it('exposes api namespace on instance', () => {
    const cmc = new CoinMarketCap({ apiKey: 'test-key' });
    assert.equal(typeof cmc.api, 'object');
    assert.equal(typeof cmc.api.cryptocurrency, 'object');
    assert.equal(typeof cmc.api.cryptocurrency.quotesLatest, 'function');
  });
});
