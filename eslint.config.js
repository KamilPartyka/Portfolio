import eslintJs from '@eslint/js';
const { configs } = eslintJs;

import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
const { configs: TSEslintPluginConf } = tsPlugin;

import importPlugin from 'eslint-plugin-import';

import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
const { configs: EslintPluginJsxA11yConf } = jsxA11yPlugin;

import reactPlugin from 'eslint-plugin-react';
const { configs: eslintPluginReactConf } = reactPlugin;

import prettierConfig from 'eslint-config-prettier';

export default [
  {
    ignores: ['node_modules/', 'public/', '.cache/'],
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
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
        Element: true,
        HTMLInputElement: true,
        HTMLDivElement: true,
        HTMLFormElement: true,
        HTMLTextAreaElement: true,
        setTimeout: true,
      },
    },
    plugins: {
      react: reactPlugin,
      'jsx-a11y': jsxA11yPlugin,
      import: importPlugin,
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      ...configs.recommended.rules,
      ...TSEslintPluginConf.recommended.rules,
      ...eslintPluginReactConf.recommended.rules,
      ...EslintPluginJsxA11yConf.recommended.rules,
      ...prettierConfig.rules,
    },
  },
];
