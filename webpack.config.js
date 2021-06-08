const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/main.js',
  mode: 'production',
  devtool: false,
  output: {
    filename: 'lovelace-fullcalendar-card.js',
    path: path.resolve(__dirname)
  },
  plugins: [
    // Ignore all locale files of moment.js
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['css-loader'],
      },
    ],
  },
};