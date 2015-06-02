var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: "./src/toolkit.js",
    output: {
        path:"./dist",
        context: __dirname,
        filename: "toolkit.js",
        libraryTarget: "commonjs2"
    },
    module: {
      loaders: [
          { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
          { test: /\.sass$/, loader: ExtractTextPlugin.extract("css!sass?indentedSyntax") }
      ]
    },
    plugins: [
        new ExtractTextPlugin("./toolkit.css")
    ]
};
