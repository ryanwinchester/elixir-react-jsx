var elixir = require('laravel-elixir');
var gulp = require('gulp');
var gulpif = require('gulp-if');
var react = require('gulp-react');
var concat = require('gulp-concat');

elixir.extend("jsx", function(src, dest) {
    src = src || 'resources/assets/jsx/*.jsx';
    dest = dest || 'public/js';

    var doConcat = ~dest.indexOf('.js');

    gulp.task("jsx", function() {
        gulp.src(src)
            .pipe(react())
            .pipe(gulpif(doConcat, concat(dest)))
            .pipe(gulp.dest(dest));
    });

    return this.queueTask("jsx");
});
