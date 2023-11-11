const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
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
