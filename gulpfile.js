'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var nodemon = require('gulp-nodemon');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var sourcemaps = require('gulp-sourcemaps');

// 编译scss
gulp.task('sass', function () {
  return gulp.src('./public/scss/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(sourcemaps.write('./sourcemap'))
    .pipe(gulp.dest('./public/css'));
});

// 监听scss文件变化并编译
gulp.task('sass:watch', function () {
  gulp.watch('./public/scss/*.scss', ['sass'], function (e) {
    console.log(e);
  });
});

// 
gulp.task('node', function () {
  nodemon({
    script: './bin/www',
    ext: 'js html',
    env: {
      'NODE_ENV': 'development'
    }
  });
});

gulp.task('server', ['node', 'sass:watch'], function () {
  var files = [
    'routes/*.js',
    'routes/**/*.js',
    'views/**/*.htlm',
    'views/**/*.ejs',
    'public/**/*.*'
  ];

  browserSync.init(files, {
    proxy: 'http://localhost:8091',
    browser: 'chrome',
    notify: false,
    port: 8090
  });

  gulp.watch(files).on('change', reload);
});

gulp.task('default', ['sass:watch'], function () {
  //
});
