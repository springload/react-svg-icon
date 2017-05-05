# [react-svg-icon](https://springload.github.io/react-svg-icon/) [![npm](https://img.shields.io/npm/v/react-svg-icon.svg?style=flat-square)](https://www.npmjs.com/package/react-svg-icon) [![Build Status](https://travis-ci.org/springload/react-svg-icon.svg?branch=master)](https://travis-ci.org/springload/react-svg-icon) [![Coverage Status](https://coveralls.io/repos/github/springload/react-svg-icon/badge.svg)](https://coveralls.io/github/springload/react-svg-icon)

> Accessible SVG icon component for React.

Check out the [online demo](https://springload.github.io/react-svg-icon/)!

## Usage

```sh
npm install --save react-svg-icon
```

```jsx
import Icon from 'react-svg-icon';

<Icon name="i-rocket" />
<Icon name="i-rocket" className="i--red" />
// Optionally, use a title to add an accessible label
<Icon name="i-rocket" title="Start the trip" />
```

### Inline SVG assets

Create your SVG sprite and inline them at the start of you HTML document. There's a nice tutorial on how to do this on [CSS-Tricks](https://css-tricks.com/svg-sprites-use-better-icon-fonts/).

## Development

### Install


> Clone the project on your computer, and install [Node](https://nodejs.org). This project also uses [nvm](https://github.com/creationix/nvm).

```sh
nvm install
# Then, install all project dependencies.
npm install
# Install the git hooks.
./.githooks/deploy
```

### Working on the project

> Everything mentioned in the installation process should already be done.

```sh
# Make sure you use the right node version.
nvm use
# Start the server and the development tools.
npm run start
# Runs linting.
npm run lint
# Runs tests.
npm run test
# View other available commands with:
npm run
```

### Releases

- Make a new branch for the release of the new version.
- Update the [CHANGELOG](CHANGELOG.md).
- Update the version number in `package.json`, following semver.
- Make a PR and squash merge it.
- Back on master with the PR merged, follow the instructions below.

```sh
npm run dist
# Use irish-pub to check the package content. Install w/ npm install -g first.
irish-pub
npm publish
```

- Finally, go to GitHub and create a release and a tag for the new version.
- Done!
