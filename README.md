# NowTV React Toolkit [![Circle CI](https://circleci.com/gh/sky-uk/nowtv-react-toolkit.svg?style=svg)](https://circleci.com/gh/sky-uk/nowtv-react-toolkit)

> http://nowtv-react-toolkit.herokuapp.com/

This is a toolkit of NowTV React UI components.

## Installation

```bash
npm install @nowtv/nowtv-react-toolkit --save
```

## Usage

### Javascript

```javascript
// ES5
var Toolkit = require('nowtv-react-toolkit');

// ES6
import Toolkit from 'nowtv-react-toolkit';
```

### CSS

You will need to require the CSS into your project which can be done in two ways:

#### Require it into your sass / scss file.
```scss
@import '[path-to-node_modules]/nowtv-react-toolkit/dist/toolkit';
```

### Importing Individual ES6 Components Directly

If you're running an ES6 project and wish to only import specific components that you will compile within your project.

1. Install the project from NPM, this is to avoid .babelrc conflicts when using github installs. You'll need to have access to scoped npm packages for @nowtv.

```
npm install @nowtv/nowtv-react-toolkit --save
```

2. Use the @nowtv/nowtv-styleguide css

E.g.
```html
<link rel="stylesheet" href="/node_modules/@nowtv/nowtv-styleguide/dist/toolkit.css">
```

3. Make sure you're compiling `nowtv-react-toolkit` that lives in `node_modules` during your project's build.

Server E.g.
```js
require('babel/register')({
  only: [/nowtv-react-toolkit/, /* YOUR_SOURCE, etc... */]
});
```

**Note: The above example uses babel/register instead of a .babelrc file, as regex options are advised and easier to debug. This is also babel v5 syntax, babel v6 uses `babel-register`**

Client E.g.
```js
// webpack config
module: {
  loaders: [{
    test: /\.jsx?$/,
    loader: 'babel',
    include: [/nowtv-react-toolkit/, /* YOUR_SOURCE, etc... */],
    // babel version 6 style query
    query: {
      presets: ["react", "stage-1", "es2015"]
    }
  }]
}
```

**Note: You'll need to also support class properties in your compilation due to the components use of static properties.**

4. Import the specific components directly

```js
import Button from '@nowtv/nowtv-react-toolkit/src/components/Button/Button.react';
```

**Note: if the component you wish to use depends on its own sass file, you will need to also compile or ignore sass files in your build.**


## Components

To see all the avaliable components see the docs which can be found at [http://sky-uk.github.io/nowtv-react-toolkit](http://sky-uk.github.io/nowtv-react-toolkit)

## Contributing

 > [contributing](CONTRIBUTING.md)
