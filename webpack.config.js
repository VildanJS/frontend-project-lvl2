const ShebangPlugin = require('webpack-shebang-plugin');
const webpack = require('webpack');

// eslint-disable-next-line fp/no-mutation
module.exports = {
  mode: 'development',
  target: 'node',
  entry: {
    index: './src/index.ts',
    'bin/gendiff': './src/bin/gendiff.ts',
  },
  output: {
    filename: '[name].js',
    path: `${__dirname}/dist`,
    library: 'myLibNamespace',
    libraryExport: 'default',
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
    new webpack.BannerPlugin({
      banner: '/* eslint-ignore */',
      raw: true,
      entryOnly: true,
    }),
  ],
};
