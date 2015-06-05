var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
    {
        name: "toolkit",
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
            new ExtractTextPlugin("/toolkit.css")
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
              { test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader']},
              { test: /\.scss$/, loader: ExtractTextPlugin.extract("css!sass") }
          ]
        },
        plugins: [
            new ExtractTextPlugin("/css/app.css")
        ]
    }
]
