"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const memoize_1 = __importDefault(require("../app/memoize"));
describe('memoize function', () => {
    it('should memoize the result of a function', () => {
        const expensiveFunction = jest.fn((x) => x * x);
        const memoizedFunction = (0, memoize_1.default)(expensiveFunction);
        expect(memoizedFunction(2)).toBe(4);
        expect(expensiveFunction).toHaveBeenCalledTimes(1);
        expect(memoizedFunction(2)).toBe(4);
        expect(expensiveFunction).toHaveBeenCalledTimes(1);
    });
    it('should cache results for fibonacci function', () => {
        function fibonacci(n) {
            if (n <= 2) {
                return 1;
            }
            return fibonacci(n - 1) + fibonacci(n - 2);
        }
        const memoizedFibonacci = (0, memoize_1.default)(fibonacci);
        expect(memoizedFibonacci(10)).toBe(55);
        expect(memoizedFibonacci(10)).toBe(55); // Should return the cached result
    });
});
