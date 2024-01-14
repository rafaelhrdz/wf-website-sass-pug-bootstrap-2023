# Website Development workflow with sass and pug. Configured with Bootstrap 5

This webpack 5 boilerplate is to create optimized multi page websites using pug templates and sass

## Features

- Bootstrap 5
- Live reload
- Sass processing
- Automatic removal of unused CSS using purgecss
- Automatic prefixing
- Jpeg, png and gif optimization
- SVG optimization with inlining when the file is smaller than 8k
- JS transpiling through babel
- Polyfills using core-js and regenerator-runtime(async)
- Source maps for js and css files
- Templates through pug
- Locally hosted fonts processing

# Development notes

### PostCSS and autoprefixer

This configuration uses the browserlist property to configure autoprefixer. I use the recommendation of using "defaults" which gives a reasonable configuration for most users. For the purpose of this repository this is appropiate but it should be revised depending on the project.

There is a lot of information regarding configuration of the browserslist in the browserslist documentation.

One of most important recommendations is to update the browserlist with this command

```shell
npx browserslist@latest --update-db
```

NOTE: Be careful with the very common typo of naming browserslist as browserlist. This will not install the proper package. Previous version of this workflow has this problem.

[autoprefixer documentation](https://github.com/postcss/autoprefixer)

[browserslist documentation](https://browsersl.ist/)

[browserslist github](https://github.com/browserslist/browserslist)

css tricks has an article from May 2021 about autoprefixing:

[Is vendor prefixing dead](https://css-tricks.com/is-vendor-prefixing-dead/)

### Transpiling

Use "ie 11" in the browserslist to test that the ES6 code is transpiled to vanilla ES5 javascript

### Polyfilling

@babel/polyfill is deprecated but it's equivalent to:

```shell
import 'core-js/stable';
import 'regenerator-runtime/runtime';
```

[core-js documentation](https://github.com/zloirock/core-js/blob/master/README.md)

Good, brief explantion of polyfills and transpilers
[transpiling and polyfills](https://javascript.info/polyfills)

### PurgeCSS

I modified the postcss.config.js file to run purgecss only during production. This solves a problem where changes were not being updated during development because purgecss was removing styles in the background and it's better for performance specially for larger projects.

I found this solution in a github repository but it was out of date. I had to console.log(ctx) to see the current version of that variable and test for the prover environment when set to production

### Github repository for reference

I found a repository which does something similar. It's no longer supported but it helped me solve the problem I had with purgecss

[tirs webpack boilerplate](https://github.com/tr1s/tris-webpack-boilerplate)
