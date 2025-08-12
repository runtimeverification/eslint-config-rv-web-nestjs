// index.js (ESM)
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import unicorn from 'eslint-plugin-unicorn';
import eslintComments from '@eslint-community/eslint-plugin-eslint-comments';
import prettierRecommended from 'eslint-plugin-prettier/recommended'; // flat-config export
import prettierCompat from 'eslint-config-prettier/flat';

export default tseslint.config(
  js.configs.recommended,
  tseslint.configs.recommended,
  unicorn.configs.recommended,                                   // plugin flat preset
  { plugins: { 'eslint-comments': eslintComments },
    rules: eslintComments.configs?.recommended?.rules ?? {} },    // apply recommended rules
  prettierRecommended,                                            // enable prettier rule + set
  prettierCompat,                                                 // turn off conflicting rules
  {
    rules: {
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/prefer-nullish-coalescing': 'error',
      'unicorn/no-null': 'off',
      'unicorn/prefer-module': 'off',
      'unicorn/prefer-top-level-await': 'off',
      'unicorn/prevent-abbreviations': ['error', { replacements: { e: { event: false }, res: false, req: false, obj: false, env: false, cmd: { command: true } } }],
      quotes: ['error', 'single', { avoidEscape: true }],
    },
  },
);
