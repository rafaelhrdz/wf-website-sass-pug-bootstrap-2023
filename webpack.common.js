const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/scripts/index.js",
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/templates/index.pug",
    }),
    new HtmlWebpackPlugin({
      filename: "page.html",
      template: "./src/templates/page.pug",
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
