// Requires the gulp plugin
var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');
// Requires the browser-sync plugin
var browserSync = require('browser-sync').create();

gulp.task('hello', function() {
  console.log('If you are reading this. It means you have successfully installed task manager and gulp.');
});

gulp.task('sass:assets', function() {
  return gulp.src('resources/sass/assets/**/*.scss') // Gets all files ending with .scss in resources/scss and children dirs
    .pipe(sass())
    .pipe(gulp.dest('resources/assets/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
})

gulp.task('sass:plugins', function() {
  return gulp.src('resources/sass/plugins/**/*.scss') // Gets all files ending with .scss in resources/scss and children dirs
    .pipe(sass())
    .pipe(gulp.dest('resources/plugins/'))
    .pipe(browserSync.reload({
      stream: true
    }))
})


gulp.task('watch', ['browsersync', 'sass:assets', 'sass:plugins'], function(){
  gulp.watch('resources/sass/assets/**/*.scss', ['sass:assets']); 
  gulp.watch('resources/sass/plugins/**/*.scss', ['sass:plugins']); 
  // Other watchers
})


gulp.task('browsersync', function() {
  browserSync.init({
    server: {
      baseDir: 'resources'
    },
  })
})