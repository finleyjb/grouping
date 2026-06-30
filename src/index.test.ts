import { expect, test } from 'vitest';
import { fn } from '.';

test('fn works', () => {
  expect(fn()).toEqual('Hello, tsdown!');
});
