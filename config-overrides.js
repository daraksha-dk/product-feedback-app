/* config-overrides.js */
const { override, addBabelPlugins } = require("customize-cra");

module.exports = override(addBabelPlugins("babel-plugin-styled-components"));

// need this file for the babel plugin for style components to work

// module.exports = (config) => {
//   config.module.rules[1].oneOf.splice(0, 0, {
//     test: /\.svg$/,
//     use: ["@svgr/webpack", "url-loader"],
//   });

//   return config;
// };
