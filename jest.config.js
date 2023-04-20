module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/__tests__/**/*.ts?(x)", "**/?(*.)+(spec|test).ts?(x)"],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    "\\.(css|less)$": "identity-obj-proxy"
  },
};
