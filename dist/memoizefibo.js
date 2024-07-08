"use strict";
function fibonacci(n) {
    let result;
    if (n <= 2) {
        result = 1;
    }
    else {
        result = fibonacci(n - 1) + fibonacci(n - 2);
    }
    return result;
}
function memoize(fn) {
    let diccionario = {};
    return function (...args) {
        const clave = args.join("_");
        if (diccionario.hasOwnProperty(clave)) {
            return diccionario[clave];
        }
        ;
        const result = fn(...args);
        diccionario[clave] = result;
        return result;
    };
}
;
const fib = memoize(fibonacci);
