const path = require('path');

module.exports = {
  entry: './src/main.js',
  mode: 'production',
  devtool: false,
  output: {
    filename: 'lovelace-fullcalendar-card.js',
    path: path.resolve(__dirname)
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['lit-css-loader'],
      },
    ],
  },
};