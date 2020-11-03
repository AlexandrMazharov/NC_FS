const gulp     = require("gulp"),
    concat = require('gulp-concat');

gulp.task('concat-task', () => {
    return gulp.src('./src/*/*.js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./dist/'));
});
