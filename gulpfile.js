const {src, dest, series, watch} = require('gulp');
const gulp = require("gulp");
const sass = require('gulp-sass')(require('sass'));
const csso = require('gulp-csso');
const include = require('gulp-file-include');
const htmlMin = require('gulp-htmlmin');
const del = require('del');
const sync = require('browser-sync').create();


//Работа с SCSS
function scss() {
    return src('src/style/**/*.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('dist/css/'))
        .pipe(gulp.dest('src/css/'));
}
//Работа с HTML
function html(){
    return src('src/**/*.html')
        .pipe(dest('dist'));
}
//Работа с media
function media(){
    return src('src/media/*.*')
        .pipe(dest('dist/media'))
        .pipe(gulp.dest('src/media'));
}

//Удаляет файлы из dist
function clear(){
    return del('dist');
}
//todo: Обновить del до 7.0 версии

//Режим просмотра
function serve(){
    sync.init({
        server: './dist'
    })
    watch('src/**.html', series(html)).on('change', sync.reload)
    watch('src/style/**.scss', series(scss)).on('change', sync.reload)
}


exports.build = series(clear, html, scss, media, serve);
