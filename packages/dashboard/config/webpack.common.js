const { VueLoaderPlugin } = require('vue-loader');
const webpack = require('webpack');

module.exports = {
  // entry: './src/index.js',
  // ouput: {
  //   filename: '[name].[contenthash].js',
  // },
  // resolve: {
  //   extensions: ['.js', '.vue'],
  // },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|woff|svg|eot|ttf)$/i,
        use: [{ loader: 'file-loader' }],
      },
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.scss|\.css$/,
        use: ['vue-style-loader', 'style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.LoaderOptionsPlugin({
      options: {
        entry: './src/index.js',
        ouput: {
          filename: '[name].[contenthash].js',
        },
        resolve: {
          extensions: ['.js', '.vue'],
        },
      }
    })
  ],
};
