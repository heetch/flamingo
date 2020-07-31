// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // Automatically reset mock state between every test
  resetMocks: true,

  // We only want to test JS components and not other stuff
  // Like webpack's test.js
  roots: ['./src/components'],
  moduleNameMapper: {
    '\\.(css)$': '<rootDir>/src/__mocks__/styleMock.js',
  },
};
