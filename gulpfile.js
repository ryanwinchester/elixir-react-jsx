var gulp = require("gulp");
var elixir = require("laravel-elixir");

elixir.extend("message", function(message) {

    gulp.task("say", function() {
        gulp.src("").pipe(shell("say " + message));
    });

    return this.queueTask("say");

 });
