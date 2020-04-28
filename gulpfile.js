"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync").create();

sass.compiler = require("node-sass");

gulp.task("sass", () => {
	return gulp
		.src("./styles/dev/*.scss")
		.pipe(sass().on("error", sass.logError))
		.pipe(gulp.dest("./styles/css"))
		.pipe(browserSync.stream());
});

gulp.task("serve", () => {
	browserSync.init({
		server: {
			baseDir: "./"
		}
	});

	gulp.watch("./styles/dev/*.scss", gulp.series(["sass"]));
});

gulp.task("default", gulp.series(["serve"]));
