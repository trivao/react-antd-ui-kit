module.exports = {
    collectCoverage: true,
    collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}", "!src/**/*.d.ts"],
    coverageReporters: ["text", "lcov"],
    coverageDirectory: "coverage",
    testEnvironment: "jsdom",
    moduleNameMapper: {
        "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    },
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
};