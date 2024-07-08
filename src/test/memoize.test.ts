import memoize from "../app/memoize";
describe('memoize function', () => {
  it('should memoize the result of a function', () => {
    const expensiveFunction = jest.fn((x: number) => x * x);
    const memoizedFunction = memoize(expensiveFunction);

    expect(memoizedFunction(2)).toBe(4);
    expect(expensiveFunction).toHaveBeenCalledTimes(1);

    // Subsequent call with the same argument should return the memoized result
    expect(memoizedFunction(2)).toBe(4);
    expect(expensiveFunction).toHaveBeenCalledTimes(1);
  });

  it('should cache results for fibonacci function', () => {
    function fibonacci(n: number): number {
      if (n <= 2) {
        return 1;
      }
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
    const memoizedFibonacci = memoize(fibonacci);

    expect(memoizedFibonacci(10)).toBe(55);
    expect(memoizedFibonacci(10)).toBe(55); // Should return the cached result
  });
});