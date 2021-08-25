const path = require('path');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const sharedConfig = require('./webpack.shared');
const {
  productionOptimization,
  developmentOptimization,
} = require('./webpack.shared');

const config = {
  target: 'node',
  externals: [nodeExternals()],
  entry: path.resolve(__dirname, 'src/server/app.js'),
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'build/server'),
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
        generator: {
          emit: false,
        },
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              emit: false,
            },
          },
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
  plugins: [...sharedConfig.plugins],
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
