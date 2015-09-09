var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
  {
    name: "toolkit",
    entry: "./src/toolkit.js",
    output: {
      path: "./dist",
      filename: "toolkit.js",
      libraryTarget: "commonjs2"
    },
    module: {
      loaders: [
        {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
        {test: /\.svg$/, loader: 'url-loader'},
        {test: /\.sass$/, loader: ExtractTextPlugin.extract("css!sass?indentedSyntax")},
        {test: /\.woff(2)?$/, loader: "url-loader?mimetype=application/font-woff"},
        {test: /\.ttf?$/, loader: "url-loader?limit=100000&mimetype=application/x-font-ttf"},
      ]
    },
    plugins: [
      new ExtractTextPlugin("/toolkit.css"),
      new ExtractTextPlugin("/toolkit.scss")
    ]
  },
  {
    name: "docs",
    entry: "./docs/js/app.js",
    output: {
      path: "./docs/dist/",
      filename: "bundle.js"
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
];
