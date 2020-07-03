const path = require("path");

/**
 * Tradutor e gerenciador de loaders
 */

module.exports = {
  // ponto de entrada da aplicação
  entry: path.resolve(__dirname, "src", "index.js"),
  // local onde o bundle será criado
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
  },

  // webpack-dev-server com live-reload e outras coisas boas
  devServer: {
    contentBase: path.resolve(__dirname, "public"),
  },

  module: {
    // registro de todos os loaders
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },
      {
        test: /.*\.(gif|png|jpe?g)$/i,
        use: {
          loader: "file-loader",
        },
      },
    ],
  },
};
