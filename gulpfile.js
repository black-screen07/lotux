const {src, dest, watch, series} = require('gulp')
const sass = require('gulp-sass')(require('sass'))

function buildStyles(){
    return src('lotux_css/**/*.scss')
           .pipe(sass())
           .pipe(dest('lotux/css'))
}

function watchTask() {
    watch(['lotux_css/**/*.scss'], buildStyles)
}

exports.default = series(buildStyles, watchTask)