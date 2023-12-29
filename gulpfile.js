const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');
const imagemin =require('gulp-imagemin');

function comprimeImagens(){
    return gulp.src('./source/images/*')
     .pipe(imagemin())
     .pipe(gulp.dest('./build/images'));
}

function comprimeJavaScript(){
    return gulp.src("./source/scripts/.js")
    .pipe(uglify())
    .pipe(obfuscate())
    .pipe(gulp.dest('./build/scripts'))
}

function compilasass(){
    return gulp.src('./source/styles/*.scss')
    .pipe(sourcemaps.init())
     .pipe(sass({
        outputstyle:'compressed'
}))
     .pipe(sourcemaps.write)
     .pipe(gulp.dest('./build/styles'));
}



exports.watch = function(){
    gulp.watch('./source/styles/*.scss',{IgnoredInitial: false}, gulp.series(compilasass));
    gulp.watch('./source/scripts/.js',{IgnoredInitial: false}, gulp.series( comprimeJavaScript));
    gulp.watch('./source/images/*',{IgnoredInitial: false}, gulp.series(comprimeImagens));
}
