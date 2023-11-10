const {src, dest, watch, series} = require('gulp')
const sass = require('gulp-sass')(require('sass'))

function buildStyles(){
    return src('lotux/**/*.scss')
           .pipe(sass())
           .pipe(dest('dist/lotux/css'))
}

function watchTask() {
    watch(['lotux/**/*.scss'], buildStyles)
}

exports.default = series(buildStyles, watchTask)