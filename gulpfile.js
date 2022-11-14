const {src, dest} = require('gulp');
const gulp = require("gulp");
const sass = require('gulp-sass')(require('sass'));

function scss() {
    return gulp.src('src/style/**.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'))
        .pipe(gulp.dest('src/style/css'));
}

exports.scss = scss;