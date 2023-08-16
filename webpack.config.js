const path = require('path');
const ShebangPlugin = require('webpack-shebang-plugin');

module.exports = {
  mode: 'production',
  target: 'node',
  entry: {
    index: './src/index.ts',
    'bin/gendiff': './src/bin/gendiff.ts',
  },
  output: {
    filename: '[name].js',
    path: `${__dirname}/dist`,
    library: 'gendiff-wrapper',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts', '.json'],
  },
  plugins: [
    new ShebangPlugin(),
  ],
};
