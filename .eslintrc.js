module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb", "airbnb-typescript", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "sort-imports-es6-autofix",
    "sort-exports",
  ],
  rules: {
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "react/jsx-filename-extension": [1, { extensions: [".tsx"] }],
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "react/static-property-placement": ["error", "static public field"],
    "react/jsx-props-no-spreading": "off",
    "react/default-props-match-prop-types": "off",
    "import/prefer-default-export": "off",
    "import/no-default-export": "error",
    "no-bitwise": "off",
    "no-plusplus": "off",
    "sort-imports-es6-autofix/sort-imports-es6": [
      2,
      {
        ignoreCase: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
      },
    ],
    "no-restricted-imports": [
      "error",
      {
        patterns: ["*/features/*/*"],
      },
    ],
    "react/prop-types": "off",
    "react/require-default-props": "off",
    "@typescript-eslint/no-redeclare": ["off"],
    "@typescript-eslint/no-use-before-define": "off",
    "react/react-in-jsx-scope": "off",
  },
  overrides: [
    {
      files: ["src/*/index.ts"],
      rules: {
        "sort-exports/sort-exports": ["error", { sortDir: "asc" }],
      },
    },
  ],
  ignorePatterns: [".eslintrc.js"],
};
