# Laravel Elixir - React JSX transforming

[![Version](https://img.shields.io/npm/v/elixir-react-jsx.svg?style=flat-square)](https://www.npmjs.com/package/elixir-react-jsx) 
 [![License](https://img.shields.io/npm/l/elixir-react-jsx.svg?style=flat-square)](https://www.npmjs.com/package/elixir-react-jsx)
 [![Monthly downloads](https://img.shields.io/npm/dm/elixir-react-jsx.svg?style=flat-square)](https://www.npmjs.com/package/elixir-react-jsx) 

`npm install elixir-react-jsx --save-dev`

Then require `elixir-react-jsx` in your gulpfile, and you can use `mix.jsx()`.

Pretty simple.

```js
var elixir = require('laravel-elixir');

require('elixir-react-jsx');

elixir(function(mix) {

    mix.jsx();

});
```

By default, using `mix.js()` without any arguments is the same as using:

```js
mix.jsx('resources/assets/jsx/*.jsx', 'app-react.js', 'public/js');
```

Arguments:

 - input src
 - output filename
 - destination directory

e.g.

```js
var inputSrc = 'resources/assets/jsx/*.jsx';
var destFile = 'app-react.js';
var destDir  = 'public/js';

mix.jsx(inputSrc, destFile, destDir);
```


