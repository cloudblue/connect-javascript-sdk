// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['lib/**/*.js'],
  coverageDirectory: 'coverage',
  setupFiles: [
    './tests/helpers/setup.js'
  ],
  testEnvironment: 'node',
  verbose: true,
};
