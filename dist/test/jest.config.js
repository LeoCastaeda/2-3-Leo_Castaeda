"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    verbose: true,
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },
};
exports.default = config;
