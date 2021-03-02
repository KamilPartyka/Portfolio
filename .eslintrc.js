module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: `react-app`,
  root: true,
  extends: ['plugin:react/recommended', 'plugin:prettier/recommended'],
  plugins: ['react', 'prettier'],
  parserOptions: {
    ecmaVersion: 2015,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'no-console': 1,
    'react/prop-types': 1,
    'prettier/prettier': [
      'error',
      {
        printWidth: 85,
        trailingComma: 'es5',
        semi: true,
        jsxSingleQuote: true,
        singleQuote: true,
        useTabs: false,
        tabWidth: 2,
        endOfLine: 'auto',
      },
    ],
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
  globals: {
    window: true,
    process: true,
    localStorage: true,
    Promise: true,
    document: true,
    console: true,
    test: true,
    expect: true,
    module: true,
    alert: true,
  },
};
