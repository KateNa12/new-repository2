import globals from 'globals';
import pluginJs from '@eslint/js';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{*.js}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  {
    rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'single'], // Enforce single quotes for strings
      indent: ['error', 2], // Enforce 2-space indentation for better readability
      'comma-dangle': ['error', 'always-multiline'], // Require trailing commas in multiline lists/objects
    },
  },
];
