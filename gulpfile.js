const gulp = require("gulp");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const watch = require("gulp-watch");
const cssnano = require("gulp-cssnano");



gulp.task("sass-compile", function(){
  return gulp.src("src/main.scss")
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(cssnano())
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest("./build/main.css"))
})


gulp.task("watch", function(){
  gulp.watch("./src/main.scss", gulp.series("sass-compile"))
})

  
