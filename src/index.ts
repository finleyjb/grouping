export function fn() {
  return 'Hello, tsdown!';
}

if (import.meta.vitest) {
  const { expect, test } = import.meta.vitest;

  test('runs', () => {
    expect(fn()).toEqual('Hello, tsdown!');
  });
}
