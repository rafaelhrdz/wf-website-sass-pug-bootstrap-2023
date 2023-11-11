const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
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
      {
        test: /\.(jpe?g|png|svg)$/i,
        type: "asset",
        generator: {
          //For production images will preserve original folder structure
          filename: (content) => {
            //console.log(content);
            //Remove 'src/assets/' from the filename
            return content.filename.replace("src/assets/", "");
          },
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[name][ext]",
        },
      },
    ],
  },
  optimization: {
    minimizer: [
      new ImageMinimizerPlugin({
        minimizer: {
          //Implementation
          implementation: ImageMinimizerPlugin.imageminMinify,
          //Options
          options: {
            plugins: [
              ["mozjpeg", { progressive: true }],
              [
                "pngquant",
                {
                  quality: [0.65, 0.9],
                  speed: 4,
                },
              ],
              //["gifsicle", { interlaced: false }],
              //Svgo configuration here https://github.com/svg/svgo#configuration
              [
                "svgo",
                {
                  plugins: [
                    {
                      name: "preset-default",
                      params: {
                        overrides: {
                          removeViewBox: false,
                          addAttributesToSVGElement: {
                            params: {
                              attributes: [
                                { xmlns: "http://www.w3.org/2000/svg" },
                              ],
                            },
                          },
                        },
                      },
                    },
                  ],
                },
              ],
            ],
          },
        },
      }),
    ],
  },
});
