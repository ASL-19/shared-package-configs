// @ts-expect-error
require("@rushstack/eslint-patch/modern-module-resolution");

/** @type {import('eslint').Linter.Config} */
const eslintConfig = {
  extends: ["@asl-19/eslint-config"],
};

module.exports = eslintConfig;
