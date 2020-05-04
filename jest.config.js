module.exports = {
  projects: [
    '<rootDir>/packages/common/jest.config.js',
    '<rootDir>/packages/server/jest.config.js',
  ],
  
  collectCoverageFrom: [
    'src/**/*.{ts,vue,tsx}'
  ],
  coverageReporters: ['text', 'text-summary', 'html-spa'],
}
