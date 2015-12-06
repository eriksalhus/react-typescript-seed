var path = require('path');

module.exports = {
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    path.resolve(__dirname, 'app/app.tsx')
  ],
  output: {
    filename: 'dist/build.js',
  },
  module: {
    loaders: [{
      test: /\.tsx?$/,
      loader: 'ts-loader?instance=jsx'
    }]
  }
};
