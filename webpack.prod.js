const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "js/[name].[contenthash].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "css/[name].[contenthash].css" }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          { loader: MiniCssExtractPlugin.loader }, //4. Extract css into files
          { loader: "css-loader" }, //3. Turn css into commonjs
          { loader: "postcss-loader" }, //2. Run postcss actions i.e. autoprefixer
          { loader: "sass-loader" }, //1. Turn sass into css
        ],
      },
    ],
  },
});
