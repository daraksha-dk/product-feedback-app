/* config-overrides.js */
const { override, addBabelPlugins } = require('customize-cra')

module.exports = override(
  addBabelPlugins(
    'babel-plugin-styled-components',
  )
)

// need this file for the babel plugin for style components to work