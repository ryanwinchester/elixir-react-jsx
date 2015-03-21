# Laravel Elixir - React JSX transforming

`npm install elixir-jsx --save-dev`

```
var elixir = require('laravel-elixir');

require('elixir-jsx');

elixir(function(mix) {

    mix.jsx();

});
```

By default, that is the same as using `mix.jsx('resources/assets/jsx/**/*.jsx', 'app-react.js', 'public/js')`.

Arguments:
 - input src
 - output filename
 - destination directory
