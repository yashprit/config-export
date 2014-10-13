/***********
* INCLUDES *
************/
var gulp = require('gulp')
  , nodeunit = require('gulp-nodeunit')
  , jshint = require('gulp-jshint');


/*********
*  TASKS *
**********/

gulp.task('lint', function() {
  return gulp.src('./lib/*.js')
    .pipe(jshint());
});

gulp.task('test', function () {
  gulp.src('**/*.test.js')
    .pipe(nodeunit({
      reporter: 'junit',
      reporterOptions: {
      output: 'test'
    }
  }));
});


