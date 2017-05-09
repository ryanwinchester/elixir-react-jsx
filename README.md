# Laravel Elixir - React JSX transforming

[![Version](https://img.shields.io/npm/v/elixir-react-jsx.svg?style=flat-square)](https://www.npmjs.com/package/elixir-react-jsx)
 [![License](https://img.shields.io/npm/l/elixir-react-jsx.svg?style=flat-square)](https://www.npmjs.com/package/elixir-react-jsx)
 [![Monthly downloads](https://img.shields.io/npm/dm/elixir-react-jsx.svg?style=flat-square)](https://www.npmjs.com/package/elixir-react-jsx)
 
 ## No longer being maintained!
 
 I'll merge PRs as you want, but it would be better to fork.
 
 ## Install
 
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
mix.jsx('resources/assets/jsx/*.jsx', 'public/js');
```

Arguments:

 - input src
 - output dest

### Transforming all your jsx files, and saving them to **public/js**

```js
var src = 'resources/assets/jsx/*.jsx';

mix.jsx(src);
```

### Transforming all your jsx files, and saving them to **public/react**

```js
var src = 'resources/assets/jsx/*.jsx';
var dest = 'public/react';

mix.jsx(src, dest);
```

### Concatenating all your jsx files to one js file

```js
var src = 'resources/assets/jsx/*.jsx';
var dest = 'public/js/app-react.js';

mix.jsx(src, dest);
```


