[react-svg-icon](https://springload.github.io/react-svg-icon/) [![npm](https://img.shields.io/npm/v/react-svg-icon.svg?style=flat-square)](https://www.npmjs.com/package/react-svg-icon) [![Build Status](https://travis-ci.org/springload/react-svg-icon.svg?branch=master)](https://travis-ci.org/springload/react-svg-icon) [![devDependency Status](https://david-dm.org/springload/react-svg-icon/dev-status.svg)](https://david-dm.org/springload/react-svg-icon#info=devDependencies)
=====================

> SVG icon component for React. [Demo](https://springload.github.io/react-svg-icon/)

## Inline SVG assets

Create your SVG sprite and inline them at the start of you HTML document. There's a nice tutorial on how to do this on [CSS-Tricks](https://css-tricks.com/svg-sprites-use-better-icon-fonts/).

## Installation

`npm install --save react-svg-icon`

## Usage

```jsx
import Icon from 'react-svg-icon';

<Icon name='icon-name' className='optional-class' />

// Optionally, use a title to add an accessible label
<Icon name='icon-name' title="Icon label" />
```

## Contributing

### Install / useful commands

You need `npm install -g rackt-cli@0.5.4` to execute some of these commands.

- `npm install` install node dependencies
- `npm run start` run server
- `npm run test` run tests
- `npm run build` build component
- `npm run lint` lint the JS code
- `rackt release` publish component to npm (verify version in package.json)
- `rackt pages` rebuild gh-pages branch

### Guidelines

- Use pull requests to collaborate around new changes
- Document changes in the project's [CHANGELOG](CHANGELOG.md)

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
