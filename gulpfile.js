var gulp = require('gulp'),
	sass = require('gulp-sass'),
	svgstore = require('gulp-svgstore'),
	svgmin = require('gulp-svgmin'),
	rename = require('gulp-rename'),
	sourcemaps = require('gulp-sourcemaps'),
	prefix = require('gulp-autoprefixer'),
	htmlbeautify = require('gulp-html-beautify'),
	connect = require('gulp-connect'),
	pug = require('gulp-pug');

var options = { indentSize: 2 };

//Local server
gulp.task('connect', function () {
	connect.server({
		host: 'localhost',
		port: 7000,
		livereload: true
	});
});

gulp.task('pug', function () {
	gulp.src('pug/**/!(_)*.pug')
		.pipe(pug())
		.pipe(htmlbeautify(options))
		.pipe(gulp.dest('dist/'));
});

//sass compiler
gulp.task('sass', function () {
	return gulp.src('scss/**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
		.pipe(prefix({
			browsers: ['> 1%', 'IE 9'],
			cascade: false
		}))
		.pipe(sourcemaps.write(''))
		.pipe(gulp.dest('dist/assets/css'));
});
//svgstore
gulp.task('svgstore', function () {
	var filename = 'sprite';
	gulp.src('svgs/*.svg', {})
		.pipe(svgmin())
		.pipe(svgstore())
		.pipe(rename(`${filename}.svg`))
		.pipe(gulp.dest('dist/assets/images/'))
});

//watch
gulp.task('watch', ['sass', 'svgstore', 'pug'], function () {
	// watch scss files
	gulp.watch('scss/**/*.scss', ['sass']);
	gulp.watch('svgs/**/*.svg', ['svgstore']);
	gulp.watch('pug/**/*.pug', ['pug']);
});

gulp.task('default', ['sass', 'watch', 'connect']);