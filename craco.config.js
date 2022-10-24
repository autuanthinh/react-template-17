const CracoAlias = require('craco-alias');
const CracoSwcPlugin = require('craco-swc');

const PreconnectHtmlWebpackPlugin = require('preconnect-html-webpack-plugin');
const PreloadWebpackPlugin = require('preload-webpack-plugin');

module.exports = {
  webpack: {
    // Modify webpack config
    plugins: {
      add: [
        [new PreconnectHtmlWebpackPlugin(), 'append'],
        [
          new PreloadWebpackPlugin({
            rel: 'preload',
            include: 'allChunks', // or 'initial', or 'allAssets'
          }),
          'append',
        ],
      ],
    },
    configure: (webpackConfig, { env, paths }) => {
      const plugins = webpackConfig.plugins;

      // Edit HtmlWebpackPlugin to attach preconnect of PreconnectHtmlWebpackPlugin
      const HtmlWebpackPluginOptions = plugins[0].options;
      HtmlWebpackPluginOptions.preconnect = [
        { url: process.env.REACT_APP_VALIDATE_URL },
        { url: process.env.REACT_APP_MSS_SERVICES_URL + '/vendor_performance' },
      ];

      return webpackConfig;
    },
  },
  plugins: [
    {
      // Speed up build project
      plugin: CracoSwcPlugin,
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
