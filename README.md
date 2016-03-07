# get-cursor-position

> Get the cursor's current position in your terminal.
 
[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/bubkoo/get-cursor-position/blob/master/LICENSE)
 
[![NPM](https://nodei.co/npm/get-cursor-position.png)](https://nodei.co/npm/get-cursor-position/)
 

## Install

```
$ npm install get-cursor-position --save
```

## Usage

Async:

```js

var getCursorPosition = require('get-cursor-position');

getCursorPosition.async(function(row, col) {
    console.log('row: ' + row);
    console.log('col: ' + col);
});

```

Sync:

```js
var pos = getCursorPosition.sync();
console.log('row: ' + pos.row);
console.log('col: ' + pos.col);
```


## License

[MIT](https://github.com/bubkoo/get-cursor-position/blob/master/LICENSE) © bubkoo

