const path = require('path');

module.exports = {
  mode: 'production',
  target: 'node',
  entry: {
    index: path.resolve(__dirname, 'src', 'index.ts'),
    gendiff: path.resolve(__dirname, 'src', 'bin', 'gendiff.ts'),
  },
  output: {
    filename: '[name].js',
    path: `${__dirname}/dist`,
    library: {
      type: 'commonjs',
    },
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
};
