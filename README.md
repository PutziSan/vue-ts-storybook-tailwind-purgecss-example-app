# vue-typescript-with-vue-cli

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## tailwindcss

tailwind with custom config in `scripts/tailwind.config.js` + `scripts/tailwind-base.css`.
use `yarn run build-tailwind` to generate the new stylesheet. 
We do not create the stylesheets on-the-fly but once only, to make the generated class-names easier to use with auto-completion of an IDE like webstorm or VS Code.

### PurgeCSS

[PurgeCSS](https://purgecss.com/) is configured in postcss.config.js only for production-builds.
PurgeCSS removes unused css-rules and reduces the final bundle size.

> The [documentation for integrating purgecss with vue](https://purgecss.com/guides/vue.html) is not correct ATM

## storybook

storybook is configured in the `.storybook` dir.

`.storybook/main.js` configures the storybook with the following addons:

- [`@storybook/addon-actions`](https://www.npmjs.com/package/@storybook/addon-actions) - log actions like clicks in the storybook
- [`@storybook/addon-knobs`](https://www.npmjs.com/package/@storybook/addon-knobs) - add dynamic values in the storybook
- [`@storybook/addon-viewpor`](https://www.npmjs.com/package/@storybook/addon-viewpor) - use a static size like the google responsive view

`.storybook/preview.js` imports tailwindcss and defines the default viewport.
