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
- `rackt pages` rebuild gh-pages branch


## Include your icon component

```js
import Icon from 'react-svg-icon';

<Icon name='icon-name' className='icon-class' />
```

## Example

You can find an example here: https://springload.github.io/react-svg-icon/

## Contributing

Have a look at [our contribution guidelines](CONTRIBUTING.md).

### Releasing a new version

Use `rackt release`

## LICENSE

The MIT License (MIT)

Copyright (c) 2016 Springload

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
