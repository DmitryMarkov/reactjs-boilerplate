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
    '\\.(png|svg|jpg|gif)$': 'babel-jest',
    '@/(.*)$': '<rootDir>/src/$1'
  },
  setupTestFrameworkScriptFile: './setupTests.js',
  testRegex: '\\.test\\.js',
  transform: {
    '^.+\\.js?$': 'babel-jest'
  }
}
