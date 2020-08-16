const gulp = require('gulp');
const zip = require('gulp-zip');

function now() {
  var today = new Date();
  return today.getFullYear()
          + "-" + today.getMonth()+ 1
          + "-" + today.getDate()
          + "-" + today.getHours()
          + "-" + today.getMinutes()
          + "-" + today.getSeconds();
}

async function compressor() {
  return await gulp.src('build/*')
		.pipe(zip('build-'+ now() +'.zip'))
		.pipe(gulp.dest('dist'))
}

exports.default = compressor
