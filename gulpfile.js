var  gulp = require('gulp');

var  tinify = require('gulp-tinify');
var  newer = require('gulp-newer');

gulp.task('compress', function() {
    var out = "dist/";
    return gulp.src('img/**/*')
        .pipe(newer(out))
        .pipe(tinify('zM54SJP6NVmhvZ0kWvd35LGcYVSj3H0f'))
        .pipe(gulp.dest(out));
});

gulp.task('createFolders', function () {
    return gulp.src('*.*', {read: false})
        .pipe(gulp.dest('./dist'))
        .pipe(gulp.dest('./img'));
});

