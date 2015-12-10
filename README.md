# React SVG Icon [![npm](https://img.shields.io/npm/v/react-svg-icon.svg?style=flat-square)](https://www.npmjs.com/package/react-svg-icon) [![Build Status](https://travis-ci.org/springload/react-svg-icon.svg?branch=master)](https://travis-ci.org/springload/react-svg-icon) [![devDependency Status](https://david-dm.org/springload/react-svg-icon/dev-status.svg)](https://david-dm.org/springload/react-svg-icon#info=devDependencies)

React SVG icon component

## Inline SVG assets

Create your SVG sprite and inline them at the start of you HTML document. There's a nice tutorial on how to do this on [CSS-Tricks](https://css-tricks.com/svg-sprites-use-better-icon-fonts/)

## Commands

You need `rackt-cli v0.5.3` to execute some of these commands.

- `npm install` install node dependencies
- `npm start` run server
- `npm test` run tests
- `npm build` build component
- `npm publish` publish component to npm (verify versions in package.json and bower.json)
- `rackt pages` rebuild gh-pages branch


## Include your icon component

```js
import Icon from 'react-svg-icon';

<Icon
    name='icon-name'
    className='icon-class'
/>
```

## Example

You can find an example here: https://springload.github.io/react-svg-icon/