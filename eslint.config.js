// @ts-check
import globals from "globals";
import reactRefresh from 'eslint-plugin-react-refresh'
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
// import reactHooks from 'eslint-plugin-react-hooks';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.ts", "**/*.tsx"],
  ignores: ["dist"],
  languageOptions: {
    ecmaVersion: 'latest',
    globals: {
      ...globals.browser,
    },
    parser: tseslint.parser,
  },
  plugins: {
    '@typescript-eslint': tseslint.plugin,
    "react-refresh": reactRefresh,
    // "react-hooks": reactHooks
  },
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
    // "react-hooks/exhaustive-deps": ["warn", {
    //   "additionalHooks": "(useDrag|useDrog)"
    // }],
  },
  }
)
