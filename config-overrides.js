const rewireSass = require('react-app-rewire-scss');
const rewireCssModules = require('react-app-rewire-css-modules');

/* config-overrides.js */
module.exports = function override(config, env) {
  config = rewireCssModules(config, env);
  config = rewireSass(config, env);
  return config;
}