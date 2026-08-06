import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { DEFAULT_RETRY, shouldRetry, getRetryDelay } from '../src/retry';

describe('shouldRetry', () => {
  it('retries on 429', () => {
    assert.equal(shouldRetry(429, DEFAULT_RETRY), true);
  });

  it('retries on 500', () => {
    assert.equal(shouldRetry(500, DEFAULT_RETRY), true);
  });

  it('does not retry on 400', () => {
    assert.equal(shouldRetry(400, DEFAULT_RETRY), false);
  });

  it('does not retry on 401', () => {
    assert.equal(shouldRetry(401, DEFAULT_RETRY), false);
  });
});

describe('getRetryDelay', () => {
  it('respects Retry-After header for 429', () => {
    const headers = new Headers({ 'Retry-After': '3' });
    const delay = getRetryDelay(0, 429, DEFAULT_RETRY, headers);
    assert.equal(delay, 3000);
  });

  it('uses exponential backoff without Retry-After', () => {
    const headers = new Headers();
    const d0 = getRetryDelay(0, 500, DEFAULT_RETRY, headers);
    const d1 = getRetryDelay(1, 500, DEFAULT_RETRY, headers);
    // d1 should be roughly 2x d0 (with jitter)
    assert(d1 > d0);
  });

  it('caps at maxDelayMs', () => {
    const headers = new Headers();
    const delay = getRetryDelay(10, 500, DEFAULT_RETRY, headers);
    assert(delay <= DEFAULT_RETRY.maxDelayMs);
  });
});
