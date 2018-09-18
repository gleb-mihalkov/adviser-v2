const rewireCssModules = require('react-app-rewire-css-modules');
const rewireCSSNext = require('react-app-rewire-postcss-cssnext');

module.exports = function override(config, env) {
  config = rewireCssModules(config, env);
  config = rewireCSSNext(config, env);
  return config;
}