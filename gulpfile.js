var gulp = require('gulp'),
  connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    root: 'site',
    livereload: true,
    port: 9090
  });
});

gulp.task('html', function () {
  gulp.src('./site/**/**/*')
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['./site/**/**/*'], ['html']);
});

gulp.task('default', ['connect', 'watch']);
