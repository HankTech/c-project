module.exports = {
  root: true,

  env: {
    browser: true,
    es2021: true,
    node: true
  },

  extends: [
    'plugin:react/recommended',
    './node_modules/standard/eslintrc.json'
  ],

  parser: '@typescript-eslint/parser',

  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },

  plugins: [
    'react',
    '@typescript-eslint'
  ],

  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off'
      }
    }
  ],

  rules: {
    'no-use-before-define': 'off'
  }
}
