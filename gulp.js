var gulp = require('gulp');

var tinify = require('gulp-tinify');
var newer = require('gulp-newer');

gulp.task('imagesTask',['start'], function() {
    var out = "dist/";
    return gulp.src('img/**/*')
        .pipe(newer(out))
        .pipe(tinify('prtRLScGqZccyBGxW6H95th4nT9C1TLH'))
        .pipe(gulp.dest(out));
});

gulp.task('run',['imagesTask']);
