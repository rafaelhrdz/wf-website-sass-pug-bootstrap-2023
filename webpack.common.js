const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/scripts/index.js",
    page: "./src/scripts/page.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/templates/index.pug",
      chunks: ["main"],
    }),
    new HtmlWebpackPlugin({
      filename: "page.html",
      template: "./src/templates/page.pug",
      chunks: ["page"],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: ["simple-pug-loader"],
      },
    ],
  },
};
