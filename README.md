# Website Development workflow with sass and pug

## Development notes

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

### Browserlist

The values used on the browserlist property are from Bootstrap 5. This should be analyzed in a per project basis.
