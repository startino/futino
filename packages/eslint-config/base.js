import { resolve } from "node:path";

const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    "eslint:recommended",
    "prettier",
    require.resolve("@vercel/style-guide/eslint/typescript"),
    "eslint-config-turbo",
  ],
  plugins: ["only-warn"],
  globals: {
    Svelte: true,
  },
  env: {
    node: true,
  },
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: [
    "node_modules/",
    ".svelte-kit/",
    ".vercel/",
    "build/",
    "dist/",
    "out/",
  ],
};
