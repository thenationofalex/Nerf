// ------------------------------------------------ Paths config
var paths = {
  js: 'public/js/',
  app: 'app/'
}

// ------------------------------------------------ Resources
var gulp = require('gulp')
var sourcemaps = require('gulp-sourcemaps')
var uglify = require('gulp-uglify')
var browserify = require('browserify')
var source = require('vinyl-source-stream')
var buffer = require('vinyl-buffer')
var nodemon = require('gulp-nodemon')
var babelify = require('babelify')

gulp.task('webview', function () {
  return browserify({
    entries: ['./app/Webviews/index.js'],
    debug: true,
    cache: {}, packageCache: {}, fullPaths: true
  })
    .transform(babelify, {presets: ['es2015', 'react']})
    .bundle()
    .pipe(source('webview.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(uglify({mangle: false}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(paths.js))
})

// ------------------------ Server Tasks
gulp.task('server', function () {
  nodemon({
    script: 'nerf.js'
  })
  .on('restart', function () {
    console.log('---Restarted')
  })
})

// ------------------------------------------------ Default tasks
gulp.task('default', function () {
  gulp.start('server')
})

// ------------------------------------------------ Watch tasks
gulp.task('watch', function () {
  gulp.watch(paths.app + '**/*.js', ['webview'])
})
