/* eslint-disable import/no-anonymous-default-export */
/** @type {import("prettier").Config} */
export default {
  printWidth: 90,
  tabWidth: 2,
  singleQuote: true,
  jsxSingleQuote: false,
  trailingComma: "all",
  arrowParens: "always",
  semi: true,
  endOfLine: "auto",
  bracketSpacing: true,
  bracketSameLine: false,
  plugins: [
    "prettier-plugin-tailwindcss",
    "@ianvs/prettier-plugin-sort-imports",
  ],
  importOrder: [
    "",
    "^react$",
    "",
    "^next(.*)$",
    "",
    "<THIRD_PARTY_MODULES>",
    "",
    "^@/features(/.*)$",
    "",
    "^@/components(/.*)$",
    "",
    "^@/lib(/.*)$",
    "",
    "^@/assets(/.*)$",
    "",
    "^@/(.*)$",
    "",
    ".css$",
    "",
    "^[.]",
  ],
  importOrderCaseSensitive: false,
};