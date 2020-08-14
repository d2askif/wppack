const webpack = require('webpack');
const path = require('path');
const config = {
  entry: './src/js/app.js',

  output: {
    path: __dirname + '/public',
    filename: 'bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.worker\.js$/,
        use: ['worker-loader', 'babel-loader'],
        include: [path.join(__dirname, 'src/js')],
      },

      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};

module.exports = config;
