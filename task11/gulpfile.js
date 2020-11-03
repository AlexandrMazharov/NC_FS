// var gulp = require("gulp");
import gulp from "gulp";

// var ts = require("gulp-typescript");
import ts from "gulp-typescript";

var tsProject = ts.createProject("tsconfig.json");

gulp.task("default", function () {
    return tsProject.src()
        .pipe(ts(tsProject))
        .js.pipe(gulp.dest("dist"));
});
