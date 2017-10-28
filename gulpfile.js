var gulp = require('gulp'),
    minifycss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    livereload = require('gulp-livereload'),
    karma = require('gulp-karma'),
    nodemon = require('gulp-nodemon'),
    del = require('del'),
    ngAnnotate = require('gulp-ng-annotate');


var testFiles = [
    'tests/*.js'
];


// Styles
// gulp.task('styles', function() {
//    return gulp.src('public/src/css/*.css')
//        .pipe(minifycss())
//        .pipe(gulp.dest('public/dist/css'))
// });
//
// //Scripts
// gulp.task('scripts', function() {
//     return gulp.src('public/src/js/**/*.js')
//         .pipe(uglify())
//         .pipe(ngAnnotate())
//         .pipe(gulp.dest('public/dist/js'));
// });

// Clean
// gulp.task('clean', function(cb) {
//     del(['public/dist/css/', 'public/dist/js/'], cb)
// });



// gulp.task('test', function() {
//     // Be sure to return the stream
//     return gulp.src(testFiles)
//         .pipe(karma({
//             configFile: 'karma.conf.js',
//             action: 'run'
//         }))
//         .on('error', function(err) {
//             // Make sure failed tests cause gulp to exit non-zero
//             throw err;
//         });
// });

gulp.task('start', function () {
    nodemon({
        script: 'server.js'
    })
});


// gulp.task('default', ['clean','styles','scripts','start']);
gulp.task('default', ['start']);


// gulp.task('watch', function() {
//
//     // Watch .css files
//     gulp.watch('public/src/css/**/*.css', ['styles']);
//
//     // Watch .js files
//     gulp.watch('public/src/js/**/*.js', ['scripts']);
//
//     // Create LiveReload server
//     livereload.listen();
//
//     // Watch any files in dist/, reload on change
//     gulp.watch(['public/dist/**']).on('change', livereload.changed);
//
// });
