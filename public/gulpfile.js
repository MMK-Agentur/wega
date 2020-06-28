const { src, watch, series } = require('gulp');
const sass = require('gulp-sass');
const pug = require('gulp-pug');
const count = require('gulp-file-count');
const multiDest = require('gulp-multi-dest');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();
const buildCssCore = function (done) {
    src(['./Sass/theme.scss', './Sass/*.scss'])
        .pipe(count({
            getFileCount: function (fileCount) {
                console.log(`SASS files to process ${fileCount}`);
            }
        }))
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write('./maps'))
        .pipe(multiDest(['./Sass'], {
            mode: 0755
        }))
        .pipe(browserSync.stream());
    done();
}

;
const serve = series( buildCssCore, function (done) {  
    watch(['./Sass/**/*.scss', './Sass/*.scss'], buildCssCore);
    watch("./*.html").on('change', browserSync.reload);
    browserSync.init({
        serveStatic: ['.'],
    });
});
// Move the javascript files into our /src/js folder
// gulp.task('js', function() {
//     return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/tether/dist/js/tether.min.js'])
//         .pipe(gulp.dest("src/dist/js"))
//         .pipe(browserSync.stream());
// });
exports.serve = serve;
exports.default = series( buildCssCore);