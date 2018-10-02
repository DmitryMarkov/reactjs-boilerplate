module.exports = {
  collectCoverageFrom: ['src/**/*.js*', '!src/app.js', '!src/components/Routes.js'],
  globals: {
    APP_NAME: 'sample app',
    APP_VERSION: '0.0.1'
  },
  moduleDirectories: ['node_modules'],
  moduleFileExtensions: ['js'],
  moduleNameMapper: {
    '\\.(css|scss)$': 'babel-jest',
    '\\.(png|svg|jpg|gif)$': 'babel-jest'
  },
  setupTestFrameworkScriptFile: './setupTests.js',
  testRegex: '__tests__/.+\\.test\\.(js|jsx)$',
  transform: {
    '^.+\\.js?$': 'babel-jest'
  }
}
