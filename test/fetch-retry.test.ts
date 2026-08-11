import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { CoinMarketCap } from '../src/index';

const okBody = JSON.stringify({ status: { error_code: 0, error_message: null }, data: {} });

function jsonResponse(status: number, body = okBody): Response {
  return new Response(body, { status, headers: { 'content-type': 'application/json' } });
}

describe('retry fetch — POST body replay (#1)', () => {
  it('re-sends the request body on retry instead of an unusable stream', async () => {
    const bodies: string[] = [];
    let call = 0;

    const mockFetch: typeof fetch = async (input) => {
      // Our wrapper passes a Request as `input`; reading it must not throw
      // "Body is unusable" on the retried attempt.
      const req = input as Request;
      bodies.push(await req.text());
      call += 1;
      // First attempt: transient 503 (consumes the body) → triggers a retry.
      return call === 1 ? jsonResponse(503, '{}') : jsonResponse(200);
    };

    const cmc = new CoinMarketCap({ apiKey: 'k', fetch: mockFetch, maxRetries: 2 });
    await cmc.api.token.batchGetTokenPrice({ body: { addresses: ['0xabc'] } } as never);

    assert.equal(bodies.length, 2, 'should have made two attempts');
    assert.ok(bodies[0].includes('0xabc'), 'first attempt carries the body');
    assert.equal(bodies[1], bodies[0], 'retry replays the identical body (not empty/unusable)');
  });
});

describe('retry fetch — respects caller AbortSignal (#2)', () => {
  it('aborts the in-flight request and does not run to completion or retry', async () => {
    const ctrl = new AbortController();
    let completed = false;
    let calls = 0;

    const mockFetch: typeof fetch = (input, init) => {
      calls += 1;
      // The effective signal is the wrapper's combined controller passed via init.
      const signal = init?.signal ?? (input as Request).signal;
      return new Promise<Response>((resolve, reject) => {
        const t = setTimeout(() => {
          completed = true;
          resolve(jsonResponse(200));
        }, 1000);
        signal?.addEventListener(
          'abort',
          () => {
            clearTimeout(t);
            reject(new DOMException('The operation was aborted', 'AbortError'));
          },
          { once: true },
        );
      });
    };

    const cmc = new CoinMarketCap({ apiKey: 'k', fetch: mockFetch, timeout: 5000, maxRetries: 2 });
    const promise = cmc.api.cryptocurrency.quotesLatest({
      query: { symbol: 'BTC' },
      signal: ctrl.signal,
      throwOnError: true,
    } as never);

    setTimeout(() => ctrl.abort(), 10);

    await assert.rejects(promise, 'caller cancellation should reject the call');
    assert.equal(completed, false, 'request must be cancelled, not run to completion');
    assert.equal(calls, 1, 'user-initiated abort must not be retried');
  });
});
