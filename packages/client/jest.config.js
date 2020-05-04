const packageName = require('./package.json').name.split('@mevn/').pop();

module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  name: packageName,
  displayName: packageName,
};
