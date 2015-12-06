module.exports = {
  entry: './app/demo.tsx',
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
