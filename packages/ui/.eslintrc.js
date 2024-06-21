/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    "@repo/eslint-config/react-internal.js",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:storybook/recommended",
  ],
  parser: "@typescript-eslint/parser",
  ignorePatterns: ["dist", ".eslintrc.js"],
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
};
