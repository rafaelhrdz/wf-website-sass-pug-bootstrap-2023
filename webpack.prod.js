const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "css/[name].[contenthash].css" }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          { loader: MiniCssExtractPlugin.loader }, //3. Extract css into files
          { loader: "css-loader" }, //2. Turn css into commonjs
          { loader: "sass-loader" }, //1. Turn sass into css
        ],
      },
    ],
  },
});
