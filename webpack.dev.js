const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          { loader: "style-loader" }, //3. Inject styles into DOM
          { loader: "css-loader" }, //2. Turn css into commonjs
          { loader: "sass-loader" }, //1. Turn sass into css
        ],
      },
    ],
  },
  devServer: {
    //Without hot module replacement enabled
    hot: false,
    liveReload: true,
    //With Hot module replacement enabled
    //liveReload: true,
    //watchFiles: ["src/**/*.html", "dist/**/*"],
  },
});
