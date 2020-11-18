const gulp = require("gulp"),
    concat = require('gulp-concat'),
    // uglify = require('gulp-uglify');
    uglify = require('gulp-uglify-es').default;
gulp.task('concat-task', () => {
    return gulp.src('./src/*/*.js')

        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/'));
});
