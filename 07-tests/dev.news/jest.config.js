module.exports = {
  testPathIgnorePatterns: ["/node_modules", "/.next/"],
  setupFilesAfterEnv: [
    "<rootDir>/src/tests/SetupTests.ts"
  ],
  // Transformando os arquivos typescript
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest"
  },
  // Para fazer o parse de arquivos de estilização.
  moduleNameMapper: {
    "\\.(scss|css|sass)$": "identity-obj-proxy"
  },
  testEnvironment: 'jsdom' 
}