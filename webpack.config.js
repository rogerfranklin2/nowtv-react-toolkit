var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path')

module.exports = {
  name: "toolkit",
  entry: "./src/toolkit.js",
  output: {
    path: "./dist",
    filename: "toolkit.js",
    libraryTarget: "commonjs2"
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
      {test: /\.svg$/, loader: 'url-loader'},
      {test: /\.sass$/, loader: ExtractTextPlugin.extract("css!autoprefixer?browsers=last 2 versions!sass?indentedSyntax")},
      {test: /\.woff(2)?$/, loader: "url-loader?mimetype=application/font-woff"},
      {test: /\.eot?$/, loader: "url-loader?mimetype=application/font-eot"},
      {test: /\.ttf?$/, loader: "url-loader?limit=100000&mimetype=application/x-font-ttf"},
    ]
  },
  plugins: [
    new ExtractTextPlugin("/toolkit.css"),
    new ExtractTextPlugin("/toolkit.scss")
  ]
}
