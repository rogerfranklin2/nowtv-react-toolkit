# Now TV Toolkit

Toolkit following Now TV design style guide.

## Usage 

A few options:

The toolkit CSS is served at http://development.toolkit.divshot.io/dist/toolkit.css

Reference it 
```html
<link rel="stylesheet" type="text/css" href="http://development.toolkit.divshot.io/dist/toolkit.css">
```
  or copy it in to your project.


   
#### React
```bash
npm install git://github.com/nowtv/toolkit.git
```

and then 

```js 
(ES6)
import Toolkit from 'nowtv-toolkit'
```

```js 
(ES5)
var Toolkit = require('nowtv-toolkit')
```

More info at http://development.toolkit.divshot.io/docs/


#### Bundle the Toolkit into your Sass project with Webpack

```bash
npm install git://github.com/nowtv/toolkit.git
```

In one of your your Sass files:
```sass
@import '[path-to-node_modules]/nowtv-toolkit/dist/toolkit';
```


## Install for development

To install `toolkit` locally for development:

```bash
git clone git@github.com:nowtv/toolkit.git
cd toolkit
npm install
```

Then run `webpack` to compile
