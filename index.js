var elixir = require('laravel-elixir');
var gulp = require('gulp');
var react = require('gulp-react');
var concat = require('gulp-concat');

elixir.extend("jsx", function(src, outputFile, dest) {
    src = src || 'resources/assets/jsx/*.jsx';
    dest = dest || 'public/js';
    outputFile = outputFile || 'app-react.js';

    gulp.task("jsx", function() {
        gulp.src(src)
            .pipe(react())
            .pipe(concat(outputFile))
            .pipe(gulp.dest(dest));
    });

    return this.queueTask("jsx");
});
