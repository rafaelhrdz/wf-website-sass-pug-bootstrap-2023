const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = {
  plugins: [
    require("autoprefixer"), //Using browserslist on package.json
    purgecss({
      content: ["**/*.html"],
    }),
  ],
};
