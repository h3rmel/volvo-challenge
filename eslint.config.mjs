import { dirname } from 'path';
import { fileURLToPath } from 'url';

import { FlatCompat } from '@eslint/eslintrc';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  eslintPluginPrettierRecommended,
  ...compat.config({
    ignorePatterns: [
      'node_modules/',
      '.next/',
      'out/',
      'public/',
      'coverage/',
      'dist/',
      'build/',
      'src/components/ui/*.*',
      '/*.*',
    ],
    rules: {
      /**
       * Default rules
       * @see https://eslint.org/docs/latest/rules/
       */
      // Disable console.log to encourage more explicit logging
      'no-console': [
        'warn',
        {
          allow: [
            'warn',
            'error',
            'info',
            'dir',
            'table',
            'assert',
            'count',
            'time',
            'timeLog',
            'trace',
            'groupCollapsed',
            'groupEnd',
          ],
        },
      ],
      'no-alert': 'error',
      'no-template-curly-in-string': 'error',
      'prefer-template': 'warn',
      'no-implicit-coercion': 'warn',
      'require-await': 'warn',
      'no-plusplus': ['warn', { allowForLoopAfterthoughts: true }],
      'no-restricted-imports': 'off',
      'padding-line-between-statements': 'warn',
      /**
       * Prettier
       *
       * @see https://github.com/prettier/eslint-plugin-prettier?tab=readme-ov-file
       */
      'prettier/prettier': 'error',
    },
  }),
];

export default eslintConfig;
