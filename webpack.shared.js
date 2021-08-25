const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
  resolve: {
    extensions: ['.js', '.jsx', '...'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        include: [path.resolve(__dirname, 'src')],
      },
    ],
  },
  plugins: [
    new ESLintPlugin({
      extensions: ['js', 'jsx'],
    }),
    new MiniCssExtractPlugin(),
  ],
};

const productionOptimization = {
  moduleIds: 'deterministic',
  runtimeChunk: 'single',
  splitChunks: {
    cacheGroups: {
      vendor: {
        test: /[\\/]node_modules[\\/]/,
        name: 'vendors',
        chunks: 'all',
      },
    },
  },
};

// https://webpack.js.org/guides/build-performance/#avoid-extra-optimization-steps
// https://webpack.js.org/guides/build-performance/#minimal-entry-chunk
const developmentOptimization = {
  runtimeChunk: true,
  removeAvailableModules: false,
  removeEmptyChunks: false,
  splitChunks: false,
};

module.exports = config;
module.exports.productionOptimization = productionOptimization;
module.exports.developmentOptimization = developmentOptimization;
