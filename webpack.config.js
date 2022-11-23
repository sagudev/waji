const path = require('path');

module.exports = {
  entry: './lib.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js'
    ],
  },
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'waji.js',
    library: 'WAJI',
    libraryTarget: 'var'
  },
};