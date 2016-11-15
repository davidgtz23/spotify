var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var debug = require('gulp-debug');

gulp.task('default', function() {
	gulp.src('app/**/*.js')
		.pipe(debug())
		.pipe(concat('build.js'))
		.pipe(uglify())
		.pipe(gulp.dest('build'));
});