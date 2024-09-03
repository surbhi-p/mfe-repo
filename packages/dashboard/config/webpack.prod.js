const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json');

const domain = process.env.PRODUCTION_DOMAIN

const pordConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/auth/latest',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'auth',
      exposes: {
        './AuthApp': './src/bootstrap',
      },
      shared: packageJson.dependencies
    })
  ]
}

module.exports = merge(commonConfig, pordConfig);