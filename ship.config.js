module.exports = {
  publishCommand: ({ tag }) =>
    `npm_config_registry=https://npm.pkg.github.com npm publish --access public --tag ${tag}`,
  buildCommand: () => null,
};
