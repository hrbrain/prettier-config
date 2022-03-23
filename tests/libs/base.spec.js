const path = require("path");

const filePath = path.join(
  __dirname,
  "../../",
  "libs",
  "base",
  ".prettierrc.js"
);

const {
  getPrettierDefaultOption,
  getPrettierRcOption,
  getMergedPrettierOption,
} = require("../utils/get-prettier-options");

describe("base", () => {
  it("when require this file, then return expected prettier config's options", () => {
    const config = getMergedPrettierOption(
      getPrettierDefaultOption,
      getPrettierRcOption(filePath)
    );

    expect(config).toStrictEqual({
      arrowParens: "always",
      bracketSameLine: false,
      bracketSpacing: true,
      cursorOffset: -1,
      embeddedLanguageFormatting: "auto",
      endOfLine: "lf",
      filepath: undefined,
      htmlWhitespaceSensitivity: "css",
      insertPragma: false,
      jsxSingleQuote: false,
      parser: undefined,
      pluginSearchDirs: [],
      plugins: [],
      printWidth: 80,
      proseWrap: "preserve",
      quoteProps: "as-needed",
      rangeEnd: Infinity,
      rangeStart: 0,
      requirePragma: false,
      semi: true,
      singleAttributePerLine: false,
      singleQuote: false,
      tabWidth: 4,
      trailingComma: "all",
      useTabs: false,
      vueIndentScriptAndStyle: false,
    });
  });
});
