const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

const customJestConfig = {
  moduleNameMapper: {
    // Handle module aliases (this will be automatically configured for you soon)
    "^@/(.*)$": "<rootDir>/src/$1",

    "^@/public/(.*)$": "<rootDir>/public/$1",
    "@atoms": "<rootDir>/src/components/atoms",
    "@atoms/*": "<rootDir>/src/components/atoms/*",
    "@molecules": "<rootDir>/src/components/molecules",
    "@molecules/*": "<rootDir>/src/components/molecules/*",
    "@organisms": "<rootDir>/src/components/organisms",
    "@organisms/*": "<rootDir>/src/components/organisms/*",
    "~/*": ["./public/*"],
  },
  setupFilesAfterEnv: ["./jest.setup.js"],
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "!./src/**/_*.{js,jsx,ts,tsx}",
    "!**/*.d.ts",
    "!**/node_modules/**",
  ],
  coverageThreshold: {
    global: {
      branches: 30,
      functions: 30,
      lines: 30,
      statements: 30,
    },
  },
  testEnvironment: "jest-environment-jsdom",
};

module.exports = createJestConfig(customJestConfig);
