module.exports = {
  publishCommand: () =>
    `npm_config_registry=https://npm.pkg.github.com npm publish --access public`,
  buildCommand: () => null,
};
