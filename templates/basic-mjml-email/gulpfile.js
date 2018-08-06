var gulp         = require('gulp'),
    plumber      = require('gulp-plumber'),
    gutil        = require('gulp-util'),
    mjml         = require('gulp-mjml'),
    browserSync  = require('browser-sync'),
    reload       = browserSync.reload,
    output       = 'index.html';

// File path variables

var basePaths = {
    src: 'mjml/input/',
    dest: 'output/'
};
var paths = {
    html: {
        src: basePaths.src + 'index.mjml',
        dest: basePaths.dest + ''
    },
    includes: {
        src: basePaths.src + 'includes/*.mjml'
    }
};

// Tasks

gulp.task('browserSync', function() {
  browserSync({
      server: {
        baseDir: "./output/"
      }
    });
  });

gulp.task('watch', function() {
  gulp.watch(paths.html.src, ['html']);
  gulp.watch(paths.includes.src, ['html']);
  gulp.watch(paths.html.dest + output).on('change', reload);
});

gulp.task('html', function() {
  return gulp.src(paths.html.src)
    .pipe(mjml())
    .pipe(gulp.dest(paths.html.dest))
});

gulp.task('default', ['browserSync','watch']);
