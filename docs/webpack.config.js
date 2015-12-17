var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path')

module.exports = {
  entry: path.join(process.cwd(), 'docs', 'client-render.js'),
  output: {
    path: './docs/dist/',
    filename: 'docs.js'
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader']},
      {test: /\.scss$/, loader: ExtractTextPlugin.extract("css!sass")},
      {test: /\.css$/, loader: "file?name=../toolkit.css"}
    ]
  },
  plugins: [
    new ExtractTextPlugin("/css/app.css")
  ]
}
