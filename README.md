# eslint-config-rv-web-nestjs

## Installation

### Yarn

```sh
  yarn add -D @eslint-community/eslint-plugin-eslint-comments eslint
  yarn add -D git+https://github.com/runtimeverification/eslint-config-rv-web-nestjs.git#master
```

### NPM

```sh
  npm install --save-dev @eslint-community/eslint-plugin-eslint-comments eslint prettier
  npm install --save-dev git+https://github.com/runtimeverification/eslint-config-rv-web-nestjs.git#master
```

## Usage

Create `eslint.config.js` in the root of your project and add the following configuration and adjust the settings to your needs

```javascript
// eslint.config.js
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import { fileURLToPath } from 'node:url';
import eslintComments from '@eslint-community/eslint-plugin-eslint-comments';
import rv from 'eslint-config-rv-web-nestjs';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig([
  {
    ignores: [
      // files that should be ignored
      '**/.eslintrc.js',
      'src/@generated/**',
      'build/**',
      'build-web/**',
    ],
  },
  { plugins: { '@eslint-community/eslint-comments': eslintComments } },

  // ⬇️ flatten the shared config (no nested `extends`)
  ...rv,
  // Custom rules
  {
    rules: {
      'unicorn/prevent-abbreviations': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      'unicorn/filename-case': [
        'error',
        {
          cases: {
            kebabCase: false,
            pascalCase: false,
            camelCase: true,
          },
        },
      ],
    },
  },
  {
    files: ['src/**/*.ts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        // path to your tsconfig
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
        sourceType: 'module',
      },
      globals: { ...globals.node, ...globals.jest },
    },
    plugins: { '@typescript-eslint': tsPlugin },
  },
]);

```

Create `.prettierrc` in the root of your project and add the following configuration

```json
{
  "singleQuote": true,
  "trailingComma": "all",
  "tabWidth": 2
}
```

## Add script to `package.json`

```json
{
  "scripts": {
    "format": "prettier --config .prettierrc --write .",
    "lint": "eslint",
    "fix": "eslint --fix"
  }
}
```

## Reference

- [Share Configurations](https://eslint.org/docs/latest/extend/shareable-configs)
