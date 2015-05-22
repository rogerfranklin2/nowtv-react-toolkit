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
          { test: /\.sass$/, loader: "style!css!sass?indentedSyntax"}
      ]
    }
}
