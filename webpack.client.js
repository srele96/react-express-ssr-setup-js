const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const sharedConfig = require('./webpack.shared');
const {
  productionOptimization,
  developmentOptimization,
} = require('./webpack.shared');

const config = {
  entry: path.resolve(__dirname, 'src/client/index.jsx'),
  output: {
    filename: '[name].[contenthash].bundle.js',
    path: path.resolve(__dirname, 'build/public'),
    clean: true,
    publicPath: '/',
  },
  resolve: {
    extensions: [...sharedConfig.resolve.extensions],
  },
  module: {
    rules: [
      ...sharedConfig.module.rules,
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                auto: true,
              },
            },
          },
          {
            loader: 'postcss-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    ...sharedConfig.plugins,
    new HtmlWebpackPlugin({
      filename: '../template.html',
      template: path.resolve(__dirname, 'public/template.html'),
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'public'),
          globOptions: {
            ignore: ['**/template.html'],
          },
          noErrorOnMissing: true,
        },
      ],
    }),
  ],
};

module.exports = function (_, argv) {
  if (argv.mode === 'development') {
    config.devtool = 'eval-source-map';
  }

  config.optimization =
    argv.mode === 'development'
      ? developmentOptimization
      : productionOptimization;

  return config;
};
