var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path')

module.exports = {
  entry: path.join(process.cwd(), 'docs', 'client-render.js'),
  output: {
    path: './docs/dist/',
    filename: 'docs.js'
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader']},
      {test: /\.scss$/, loader: ExtractTextPlugin.extract("css!sass")},
      {test: /\.css$/, loader: "file?name=../toolkit.css"},
      {test: /\.svg$/, loader: 'url-loader'},
      {test: /\.sass$/, loader: ExtractTextPlugin.extract("css!sass?indentedSyntax")},
      {test: /\.woff(2)?$/, loader: "url-loader?mimetype=application/font-woff"},
      {test: /\.eot?$/, loader: "url-loader?mimetype=application/font-eot"},
      {test: /\.ttf?$/, loader: "url-loader?limit=100000&mimetype=application/x-font-ttf"},
    ]
  },
  plugins: [
    new ExtractTextPlugin("/css/app.css")
  ]
}
