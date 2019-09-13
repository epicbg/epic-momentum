import gulp from 'gulp'
import uglify from 'gulp-uglify'
import concat from 'gulp-concat'
import babel from 'gulp-babel'
import browserify from 'gulp-browserify'
import gutil from 'gulp-util'

gulp.task('compile:scripts', function(done){
    

    // gulp.src([
    //     './index.js'
    // ]).pipe(babel())
    // .pipe(browserify({ transform: ['babelify'] }))
    // .pipe(concat('animations.min.js'))
    // .pipe(uglify()).on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })

    // .pipe(gulp.dest('./dist'))

    gulp.src([
        './index.js'
    ]).pipe(browserify({ transform: ['babelify'] }))
    .pipe(concat('animations.js'))
    .pipe(babel())
    .pipe(gulp.dest('./dist'))

    return new Promise(function(resolve) {
      resolve();
    });
})

gulp.task('watch', function(){
    gulp.watch('index.js', gulp.series('compile:scripts'))
    gulp.watch('./src/*.js', gulp.series(['compile:scripts']))
})