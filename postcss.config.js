const purgecss = require("@fullhuman/postcss-purgecss");

//Run purgecss only during production
module.exports = (ctx) => {
  //console.log(ctx);
  return {
    plugins: [
      require("autoprefixer"),
      ...(ctx.env === "production"
        ? [
            purgecss({
              content: ["**/*.pug"],
            }),
          ]
        : []),
    ],
  };
};
