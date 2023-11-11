const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

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
    new CopyWebpackPlugin({
      patterns: [
        { from: "./src/root-files/favicon.ico" },
        { from: "./src/root-files/icon.svg" },
        { from: "./src/root-files/icon-192.png" },
        { from: "./src/root-files/icon-512.png" },
        { from: "./src/root-files/apple-touch-icon.png" },
        { from: "./src/root-files/manifest.webmanifest" },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: ["simple-pug-loader"],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
