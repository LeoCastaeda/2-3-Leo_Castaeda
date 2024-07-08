"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const memoize_1 = __importDefault(require("./memoize"));
const program = new commander_1.Command();
program
    .version('1.0.0')
    .description('CLI for memoizing functions');
program
    .command('fibonacci <n>')
    .description('Calculate fibonacci number using memoization')
    .action((n) => {
    const fibonacci = (0, memoize_1.default)((num) => {
        if (num <= 2) {
            return 1;
        }
        return fibonacci(num - 1) + fibonacci(num - 2);
    });
    const result = fibonacci(parseInt(n, 10));
    console.log(`Fibonacci(${n}) = ${result}`);
});
program.parse(process.argv);
exports.default = program;
