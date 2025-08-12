module.exports = {
  // eslint-configs
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:unicorn/recommended',
  ],
  // eslint-plugins
  plugins: ['@typescript-eslint/eslint-plugin'],
  // enabling/disabling/changing level of rules
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/prefer-nullish-coalescing': 'error',
    'unicorn/no-null': 'off',
    'unicorn/prefer-module': 'off',
    'unicorn/prefer-top-level-await': 'off',
    'unicorn/prevent-abbreviations': [
      'error',
      {
        replacements: {
          e: {
            event: false,
          },
          res: false,
          req: false,
          obj: false,
          env: false,
          cmd: {
            command: true,
          },
        },
      },
    ],
    quotes: ['error', 'single', { avoidEscape: true }],
  },
};
