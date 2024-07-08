"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = memoize;
function memoize(func) {
    const cache = new Map();
    return function (...args) {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            return cache.get(key);
        }
        const result = func(...args);
        cache.set(key, result);
        return result;
    };
}
