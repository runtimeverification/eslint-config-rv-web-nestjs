import tseslint from 'typescript-eslint';
import unicorn from 'eslint-plugin-unicorn';
import eslintComments from '@eslint-community/eslint-plugin-eslint-comments';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import prettierCompat from 'eslint-config-prettier/flat';

export default tseslint.config(
  tseslint.configs.recommended,
  prettierRecommended,
  {
    plugins: { eslintComments },
    rules: eslintComments.configs.recommended.rules,
  },
  unicorn.configs.recommended,
  prettierCompat,
  {
    rules: {
      'unicorn/no-null': 'off',
      'unicorn/prefer-module': 'off',
      'unicorn/prefer-top-level-await': 'off',
      'unicorn/prevent-abbreviations': [
        'error',
        {
          replacements: {
            e: { event: false },
            res: false,
            req: false,
            obj: false,
            env: false,
            cmd: { command: true },
          },
        },
      ],
      quotes: ['error', 'single', { avoidEscape: true }],
    },
  },

  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      '@typescript-eslint/prefer-nullish-coalescing': 'error',
      '@typescript-eslint/interface-name-prefix': 'off',
    },
  },
);
