import eslintPkg from '@eslint/js';
import {config, configs as _configs} from 'typescript-eslint';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

const {configs} = eslintPkg;

export default config(
  configs.recommended,
  ..._configs.recommended,
  ..._configs.stylistic,
  {
    files: ['**/*.ts'],
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      semi: ['error', 'always'],
      'object-curly-spacing': ['error', 'never'],

      'prettier/prettier': 'error',

      '@typescript-eslint/no-unused-vars': ['warn', {argsIgnorePattern: '^_'}],
    },
  },

  prettierConfig,
);
