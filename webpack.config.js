/* eslint-disable */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({ template: 'index.html' });
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
  },
  eslint: {
    configFile: './.eslintrc',
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015'],
        },
      },
    ],
  },
  plugins: [HTMLWebpackPluginConfig],
};