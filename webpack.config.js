module.exports = {
    entry: "./src/toolkit.js",
    output: {
        path:"./dist",
        filename: "toolkit.js"
    },
    module: {
      loaders: [
          { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
      ]
    }
}