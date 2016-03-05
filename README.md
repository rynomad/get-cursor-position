# get-cursor-position

 > Get cursor's absolute position in the terminal.
 
 [![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/bubkoo/get-cursor-position/blob/master/LICENSE)
 
 [![NPM](https://nodei.co/npm/get-cursor-position.png)](https://nodei.co/npm/get-cursor-position/)
 

## Install
 
 
First make sure you have installed the latest version of [node.js](http://nodejs.org/) 
(You may need to restart your computer after this step).

Install with npm:

```
$ npm install restful-mock-server --save
```

## Usage

```js

var getCursorPosition = require('get-cursor-position');

getCursorPosition(function(pos) {
    console.log('x: ' + pos.x);
    console.log('y: ' + pos.y);
});

```

## License

[MIT](https://github.com/bubkoo/get-cursor-position/blob/master/LICENSE) © bubkoo

