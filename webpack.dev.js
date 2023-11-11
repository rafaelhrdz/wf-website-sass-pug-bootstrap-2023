const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
  mode: "development",
  devtool: "eval",
  output: {
    filename: "js/[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          { loader: "style-loader" }, //4. Inject styles into DOM
          { loader: "css-loader" }, //3. Turn css into commonjs
          { loader: "postcss-loader" }, //2. Run postcss actions i.e. autoprefixer
          { loader: "sass-loader" }, //1. Turn sass into css
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        type: "asset/resource",
        generator: {
          filename: "img/[name]-[hash][ext][query]",
        },
      },
      {
        test: /\.svg/,
        type: "asset/inline",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
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
