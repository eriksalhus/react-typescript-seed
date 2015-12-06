module.exports = {
  entry: './app/app.tsx',
  output: {
    filename: 'app/build.js'
  },
  module: {
    loaders: [{
      test: /\.tsx?$/,
      loader: 'ts-loader?instance=jsx'
    }]
  }
};
