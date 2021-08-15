module.exports = {
  env: {
    'jest/globals': true,
    es6: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['react', 'jest', 'prettier', 'import'],
  parser: '@typescript-eslint/parser',
  rules: {
    semi: ['error', 'never'], // No semicolom
    'react/jsx-uses-react': 'off', // No need of react in the scope
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off', // No need proptypes validation
    'object-curly-spacing': ['error', 'always'], // Standard for always put spaces on object props
    'no-multiple-empty-lines': ['error', { max: 1 }], // Standard not allow more than one empty line
    'eol-last': ['error', 'always'], // No EOL
    'no-trailing-spaces': ['error', { skipBlankLines: true }],
    'no-unused-expressions': ['error'], // Error if a expresion is not used
    'no-unused-vars': 'warn', // Warning for not unused vars
    'no-console': 'warn', // warning if I keep any console
    'import/prefer-default-export': 'off', // Default export could cause naming issues on import
    'no-undef': 'off', // No error if not defined var for types
  },
}
