import { Command } from 'commander';
import memoize from './memoize';
const program = new Command();

program
    .version('1.0.0')
    .description('CLI for memoizing functions');

program
    .command('fibonacci <n>')
    .description('Calculate fibonacci number using memoization')
    .action((n: string) => {
        const fibonacci = memoize((num: number): number => {
            if (num <= 2) {
                return 1;
            }
            return fibonacci(num - 1) + fibonacci(num - 2);
        });

        const result = fibonacci(parseInt(n, 10));
        console.log(`Fibonacci(${n}) = ${result}`);
    });

program.parse(process.argv);

export default program;
