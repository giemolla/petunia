"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync").create();
const autoprefixer = require("gulp-autoprefixer");

sass.compiler = require("node-sass");

gulp.task("sass", () => {
	return gulp
		.src("./styles/dev/*.scss")
		.pipe(sass().on("error", sass.logError))
		.pipe(gulp.dest("./styles/css"))
		.pipe(browserSync.stream());
});

gulp.task("autoprefixer", () => {
	return gulp
		.src("./styles/css/styles.css")
		.pipe(
			autoprefixer({
				cascade: false,
			})
		)
		.pipe(gulp.dest("./styles/dist"));
});

gulp.task("serve", () => {
	browserSync.init({
		server: {
			baseDir: "./",
		},
	});

	gulp.watch("./styles/dev/*.scss", gulp.series(["sass", "autoprefixer"]));
});

gulp.task("default", gulp.series(["serve"]));
