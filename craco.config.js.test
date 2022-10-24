const fs = require('fs');
const path = require('path');
const CracoAlias = require('craco-alias');
const CracoSwcPlugin = require('craco-swc');

// const { getLessVars } = require('antd-theme-generator');

// const themeVariables = getLessVars(path.join(__dirname, './src/styles/variables.less'));
// const defaultVars = getLessVars('./node_modules/antd/lib/style/themes/default.less');
// const darkVars = {
//   ...getLessVars('./node_modules/antd/lib/style/themes/dark.less'),
//   '@primary-color': defaultVars['@primary-color'],
//   '@picker-basic-cell-active-with-range-color': 'darken(@primary-color, 20%)',
// };
// const lightVars = {
//   ...getLessVars('./node_modules/antd/lib/style/themes/compact.less'),
//   '@primary-color': defaultVars['@primary-color'],
// };

// // Create file theme.json
// fs.writeFileSync('./src/theme/dark.json', JSON.stringify(darkVars));
// fs.writeFileSync('./src/theme/light.json', JSON.stringify(lightVars));
// fs.writeFileSync('./src/theme/theme.json', JSON.stringify(themeVariables));

module.exports = {
  // eslint: {
  //   enable: false,
  // },
  plugins: [
    {
      // Speed up build project
      plugin: {
        ...CracoSwcPlugin,
        // overrideCracoConfig: ({ cracoConfig }) => {
        //   if (typeof cracoConfig.eslint.enable !== 'undefined') {
        //     cracoConfig.disableEslint = !cracoConfig.eslint.enable;
        //   }
        //   delete cracoConfig.eslint;
        //   return cracoConfig;
        // },
        // overrideWebpackConfig: ({ webpackConfig, cracoConfig }) => {
        //   if (typeof cracoConfig.disableEslint !== 'undefined' && cracoConfig.disableEslint === true) {
        //     webpackConfig.plugins = webpackConfig.plugins.filter(
        //       instance => instance.constructor.name !== 'ESLintWebpackPlugin'
        //     );
        //   }
        //   return webpackConfig;
        // },
      },
      options: {
        swcLoaderOptions: {
          jsc: {
            externalHelpers: true,
            target: 'es5',
            parser: {
              syntax: 'typescript',
              tsx: true,
              dynamicImport: true,
            },
          },
        },
      },
    },
    {
      // Create absolute path
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        baseUrl: './src',
        tsConfigPath: './tsconfig.extend.json',
      },
    },
  ],
};
