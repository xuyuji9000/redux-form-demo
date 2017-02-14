var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: __dirname,
  devtool: debug ? "inline-sourcemap" : null,
  entry: [
    "./src/app.js",
    "webpack-dev-server/client?http://localhost:8080",
    "webpack/hot/dev-server"
  ],
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js",
    publicPath: "/assets/"
  },
  plugins: debug ? [
    new webpack.HotModuleReplacementPlugin()
  ] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
  module: {
    loaders: [{
      test: /.jsx?$/,
      exclude: /node_modules/,
        loaders: ['react-hot-loader/webpack', 'babel-loader?'+JSON.stringify({
        presets: ['es2015', 'react', 'stage-2'],
        plugins: ["transform-decorators-legacy", "transform-class-properties"]
      })],
      include: path.join(__dirname, 'src')
    }]
  }
};
