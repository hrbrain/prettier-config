const prettier = require("prettier");

/**
 * Get Prettier's default option
 */
const getPrettierDefaultOption = prettier
  .getSupportInfo()
  .options.reduce((acc, option) => {
    acc[option.name] = option.default;
    return acc;
  }, {});

// /**
//  * Get option from .prettierrc
//  */
const getPrettierRcOption = (filePath) =>
  prettier.resolveConfig.sync(filePath, {
    editorconfig: true,
  });

// /**
//  * Get option merged getPrettierDefaultOption and getPrettierRcOption
//  */
const getMergedPrettierOption = (prettierDefaultOption, prettierRcOption) => ({
  ...prettierDefaultOption,
  ...prettierRcOption,
});

module.exports = {
  getPrettierDefaultOption,
  getPrettierRcOption,
  getMergedPrettierOption,
};
