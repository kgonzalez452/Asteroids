const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'prod.js',
    path: path.resolve(__dirname, 'dist')
  }
};