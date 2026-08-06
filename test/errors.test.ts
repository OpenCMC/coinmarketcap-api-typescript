import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  CMCError,
  BadRequestError,
  AuthenticationError,
  RateLimitError,
  InternalServerError,
  APIConnectionError,
  APITimeoutError,
} from '../src/errors';

describe('CMCError.from()', () => {
  const headers = new Headers();

  it('returns BadRequestError for 400', () => {
    const err = CMCError.from(400, { message: 'bad' }, headers);
    assert(err instanceof BadRequestError);
    assert.equal(err.status, 400);
    assert.equal(err.name, 'BadRequestError');
  });

  it('returns AuthenticationError for 401', () => {
    const err = CMCError.from(401, {}, headers);
    assert(err instanceof AuthenticationError);
  });

  it('returns RateLimitError for 429', () => {
    const err = CMCError.from(429, {}, headers);
    assert(err instanceof RateLimitError);
  });

  it('returns InternalServerError for 500+', () => {
    const err = CMCError.from(502, {}, headers);
    assert(err instanceof InternalServerError);
  });

  it('extracts error_message from CMC status object', () => {
    const body = { status: { error_message: 'API key invalid' } };
    const err = CMCError.from(401, body, headers);
    assert.equal(err.message, 'API key invalid');
  });
});

describe('APITimeoutError', () => {
  it('includes timeout value in message', () => {
    const err = new APITimeoutError(5000);
    assert.match(err.message, /5000ms/);
    assert(err instanceof APIConnectionError);
  });
});
