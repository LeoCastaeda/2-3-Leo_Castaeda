import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    verbose: true,
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },
};

export default config;
