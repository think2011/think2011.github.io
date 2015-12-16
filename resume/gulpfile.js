var gulp = require('gulp');
var watch = require('gulp-watch');
var clean = require('gulp-clean');
var webserver = require('gulp-webserver');
var runSequence = require('run-sequence');
var staticHash = require('gulp-static-hash');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var minifyHTML = require('gulp-minify-html');
var autoprefixer = require('gulp-autoprefixer');

var paths = {
	dest: 'dist',
	src: 'src'
};

var files = {
	js: paths.src + "/**/*.js",
	html: paths.src + "/**/*.html",
	css: paths.src + "/**/*.css",
	jpg: paths.src + "/**/*.jpg",
	png: paths.src + "/**/*.png",
	gif: paths.src + "/**/*.gif",
	eot: paths.src + "/**/*.eot",
	svg: paths.src + "/**/*.svg",
	ttf: paths.src + "/**/*.ttf",
	woff: paths.src + "/**/*.woff",
	pdf: paths.src + "/**/*.pdf",
	otf: paths.src + "/**/*.otf"
};

// 开发模式
gulp.task('default', function() {
	runSequence('clean', 'copy', 'js', 'html', 'css', 'watch', 'webserver');
});

// 部署模式
gulp.task('build', function() {
	runSequence('clean', 'copy', 'build-js', 'build-html', 'build-css');
});

// 复制基本文件
gulp.task('copy', function() {
	gulp.src([
		files.jpg,
		files.png,
		files.gif
	]).pipe(gulp.dest(paths.dest));
});

// web server
gulp.task('webserver', function() {
	gulp.src(paths.dest).pipe(webserver({
		host: '127.0.0.1',
		port: 1991,
		livereload: true,
		open: true,
		directoryListing: {
			enable: true,
			path: paths.dest
		}
	}));
});

// watch server
gulp.task('watch', function() {
	watch(files.js, function(files, callback) {
		gulp.start("js");
		callback();
	});

	watch(files.html, function(files, callback) {
		gulp.start("html");
		callback();
	});

	watch(files.css, function(files, callback) {
		gulp.start("css");
		callback();
	});
});

// 清洁工作
gulp.task('clean', function() {
	gulp.src([paths.dest, 'index.html','img', 'js', 'css']).pipe(clean({
		force: true
	}));
});

gulp.task('js', function() {
	gulp.src(files.js).pipe(gulp.dest(paths.dest));
});

gulp.task('html', function() {
	gulp.src(files.html).pipe(gulp.dest(paths.dest));
});

gulp.task('css', function() {
	gulp.src(files.css)
		.pipe(autoprefixer())
		.pipe(gulp.dest(paths.dest));
});

gulp.task('build-js', function() {
	gulp.src(files.js)
		.pipe(uglify())
		.pipe(gulp.dest(paths.dest));
});

gulp.task('build-html', function() {
	gulp.src(files.html)
		.pipe(staticHash({
			asset: paths.dest
		}))
		// .pipe(minifyHTML({empty:true}))
		.pipe(gulp.dest(paths.dest));
});

gulp.task('build-css', function() {
	gulp.src(files.css)
		.pipe(autoprefixer())
		.pipe(staticHash({
			asset: paths.dest
		}))
		.pipe(minifyCSS({
			keepBreaks: true
		}))
		.pipe(gulp.dest(paths.dest));
});