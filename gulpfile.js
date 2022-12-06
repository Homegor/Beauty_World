const {src, dest, series, watch, parallel} = require('gulp');

const gulp          = require("gulp");
const sass          = require('gulp-sass')(require('sass'));
const csso          = require('gulp-csso');
const htmlMin       = require('gulp-htmlmin');
const del           = require('del');
const autoprefixer  = require('gulp-autoprefixer')
const concat        = require('gulp-concat')
const sourcemaps    = require('gulp-sourcemaps')
const sync          = require('browser-sync').create();

//Работа с SCSS
function scss() {
    return src('src/style/**/*.scss')
        .pipe(sourcemaps.init({largeFile: true}))
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(autoprefixer({overrideBrowserslist: ['last 10 versions'],cascade: false}))
        .pipe(csso())
        .pipe(concat('mine.css'))
        .pipe(sourcemaps.write('', {includeContent: false}))
        .pipe(gulp.dest('src/css/'))
        .pipe(gulp.dest('dist/css/'));
}
//Работа с HTML
function html(){
    return src('src/**/*.html')
        .pipe(htmlMin({
            collapseWhitespace: true
        }))
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
    return del(['dist','src/css/']);
}

//Режим дев-сервер
function devServe(){
    sync.init({
        server: './dist',
        notify: true
    })
}

//Режим просмотра
function serve(){
    watch('src/**.html', series(html)).on('change', sync.reload)
    watch('src/style/**.scss', series(scss)).on('change', sync.reload)
}
exports.scss = scss;
exports.html = html;
exports.media = media;
exports.clear = clear;


exports.build = series(clear, html, scss, media);
exports.default = series(clear, html, scss, media, scss, parallel(devServe,serve));