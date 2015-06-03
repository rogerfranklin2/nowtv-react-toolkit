var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: "./src/toolkit.js",
    output: {
        path:"./dist",
        filename: "toolkit.js",
        libraryTarget: "commonjs2"
    },
    module: {
      loaders: [
          { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
          { test: /\.svg$/, loader: 'url-loader' },
          { test: /\.sass$/, loader: ExtractTextPlugin.extract("css!sass?indentedSyntax") }
      ]
    },
    plugins: [
        new ExtractTextPlugin("./toolkit.css")
    ]
};
