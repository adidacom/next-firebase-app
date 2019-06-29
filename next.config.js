/* eslint-disable */
const withPlugins = require('next-compose-plugins');
const withOptimizedImages = require('next-optimized-images');
const withFonts = require('next-fonts');
const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { ANALYZE } = process.env;

const webpackConfig = {
  webpack: (config, options) => {
    if (ANALYZE) {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'server',
          analyzerPort: 8888,
          openAnalyzer: true,
        })
      );
    }
    return config;
  },
};

// fix: prevents error when .css files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.css'] = file => {};
}

module.exports = withPlugins(
  [withOptimizedImages, withFonts, withSass, withCSS],
  webpackConfig
);
