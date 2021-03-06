var env         = require('minimist')(process.argv.slice(2)),
    gulp        = require('gulp'),
    gutil       = require('gulp-util'),
    plumber     = require('gulp-plumber'),
    jade        = require('gulp-jade'),
    browserify  = require('gulp-browserify'),
    browserSync = require('browser-sync'),
    gulpif      = require('gulp-if'),
    stylus      = require('gulp-stylus'),
    csso        = require('gulp-csso'),
    concat      = require('gulp-concat'),
    prefixer    = require('autoprefixer-stylus'),
    imagemin    = require('gulp-imagemin'),
    cache       = require('gulp-cache'),
    sourcemaps = require('gulp-sourcemaps'),
    ftp         = require('gulp-ftp'),
    rsync       = require('rsyncwrapper');

// Компиляция Jade
gulp.task('jade', function () {
    return gulp.src('app/src/jade/*.jade')
        .pipe(plumber())
        .pipe(jade({pretty: !env.p}))
        .pipe(gulp.dest('app/dist/'));
});


// Компиляция Stylus
gulp.task('stylus', function(){
    return gulp.src('app/src/stylus/**/*.styl')
        .pipe(stylus({
          'include css': true,
          use:[prefixer('last 10 versions')]
    }))
        .pipe(gulp.dest('app/dist/css/'))
});

//Минификация стилей
gulp.task('csso', function () {
    return gulp.src('app/dist/css/*.css')
        .pipe(csso())
        .pipe(gulp.dest('app/dist/css/min'));
});

// External sourcemaps 
gulp.task('sourcemaps', function () {
  return gulp.src('app/dist/css/*.css')
    .pipe(sourcemaps.init())
    .pipe(stylus())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('app/dist/css/'));
});

gulp.task('copy', function() {
    return gulp.src(['app/src/*.html', 'app/src/*.txt'])
        .pipe(gulp.dest('app/dist/'))
});

// Конкатинация JS
gulp.task('js', function () {
    return gulp.src('app/src/js/**/*.js')
        .pipe(plumber())
        .pipe(concat('app.js'))
        .pipe(gulp.dest('app/dist/js'));
});

// Конкатинация vendors-js
gulp.task('vendors-js', function () {
    return gulp.src('app/src/vendors/*.js')
        .pipe(plumber())
        .pipe(concat('vendors.js'))
        .pipe(gulp.dest('app/dist/vendors'));
});

// Конкатинация vendors-css
gulp.task('vendors-css', function () {
    return gulp.src('app/src/vendors/*.css')
        .pipe(plumber())
        .pipe(concat('vendors.css'))
        .pipe(gulp.dest('app/dist/vendors'));
});

// Сжатие изображений
gulp.task('imagemin', function () {
    return gulp.src('app/src/img/**/*')
        .pipe(plumber())
        .pipe(cache(imagemin({optimizationLevel: 5, progressive: true, interlaced: true})))
        .pipe(gulp.dest('app/dist/img'));
});


gulp.task('watch', function () {
    gulp.watch('app/src/jade/**/*.jade', ['jade']);
    gulp.watch('app/src/jade/blocks/*.jade', ['jade']);
    gulp.watch('app/src/stylus/**/*.styl', ['stylus']);
    gulp.watch('app/src/stylus/blocks/*.styl', ['stylus']);
    gulp.watch('app/src/js/**/*.js', ['js']);
    gulp.watch('app/src/js/**/*.js', [(env.fy) ? 'browserify' : 'js']);
    gulp.watch('app/src/img/**/*.{jpg,jpeg,png,gif}', ['imagemin']);
});

gulp.task('browser-sync', function () {
    var files = [
       'app/dist/**/*.html',
       'app/dist/css/**/*.css',
       'app/dist/img/**/*',
       'app/dist/js/**/*.js',
    ];

    browserSync.init(files, {
        server: {
            baseDir: 'app/dist/',
        },
    });
});

// Деплой
gulp.task('deploy', function () {
    return gulp.src('app/dist/**/*/')
        .pipe(ftp({
            host: 'divan-tech-jino.myjino.ru',
            user: 'divan-tech-jino_maxho',
            pass: '6sD-5v#Yfe',
            remotePath: '/'
        }))
        .pipe(gutil.noop());
});

// Дев
gulp.task('default', [(env.fy) ? 'browserify' : 'jade', 'sourcemaps', 'vendors-js', 'vendors-css', 'copy', 'watch', 'browser-sync']);

// Боевая сборка
gulp.task('build', [(env.fy) ? 'browserify' : 'jade', 'copy', 'vendors-js', 'vendors-css', 'imagemin', 'csso', 'deploy']);
