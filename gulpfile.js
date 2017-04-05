var gulp = require('gulp')
   ,util = require('gulp-util')
   ,fileinclude = require('gulp-file-include')
   ,clean = require('gulp-clean')
   ,uglify = require('gulp-uglify')
   ,usemin = require('gulp-usemin')
   ,cssmin = require('gulp-cssmin')
   ,autoprefixer = require('gulp-autoprefixer')
   ,sass = require('gulp-sass')
   ,sourcemaps = require('gulp-sourcemaps')
   ,sequence = require('gulp-sequence')
   ,jshint = require('gulp-jshint')
   ,jshintStylish = require('jshint-stylish')
   ,imagemin = require('gulp-imagemin')
   ,htmlmin = require('gulp-htmlmin')
   ,uncss = require('gulp-uncss')
   ,browserSync = require('browser-sync').create()
   ,sassdoc = require('sassdoc');






gulp.task('default', function(callback) {
  sequence(['includes','sass'],'browsersync', callback);
});

gulp.task('build', function(callback) {
  sequence(['includes', 'sass', 'clean:dist'], ['minify:jscss','copy:fonts','copy:plugins','minify:img'],['minify:html'], callback);
});

gulp.task('browsersync', function() {
  browserSync.init({
    server: {
      baseDir: 'dev'
    }
  });
  gulp.watch('dev/pages/*.html', ['includes']);
  gulp.watch('dev/src/scss/**/*.scss', ['sass']);
  gulp.watch('dev/modules/*.html', ['includes']);
  gulp.watch('dev/src/js/**/*.js').on('change', function(event) {
    console.log("Linting " + event.path);
    gulp.src(event.path)
      .pipe(jshint())
      .pipe(jshint.reporter(jshintStylish));
  }); 
  gulp.watch('dev/*.html').on('change', browserSync.reload);
  gulp.watch('dev/src/css/*.css').on('change', browserSync.reload);
  gulp.watch('dev/src/js/*.js').on('change', browserSync.reload); 
  gulp.watch('dev/src/img/*').on('change', browserSync.reload);
  gulp.watch('dev/src/font/*').on('change', browserSync.reload); 
});

gulp.task('includes', ['clean:html'], function() {
  return gulp.src('dev/pages/*.html')
    .pipe(fileinclude({
      prefix: '@@',
      basepath: 'dev/modules'
    }))
    .pipe(gulp.dest('dev'));
});

gulp.task('sass', function () {
  return gulp.src('dev/src/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('maps'))
    .pipe(gulp.dest('dev/src/css'));
});

gulp.task('clean:html', function() {
  return gulp.src('dev/*.html')
    .pipe(clean());
});

gulp.task('clean:dist', function() {
  return gulp.src('dist')
    .pipe(clean());
});

gulp.task('clean:img-samples', function() {
  return gulp.src('dist/src/img/samples')
    .pipe(clean());
});

gulp.task('minify:jscss', function() {
  return gulp.src('dev/*.html')
    .pipe(usemin({
      js: [uglify],
      css: [autoprefixer, cssmin]
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('minify:img', function() {
  return gulp.src('dev/src/img/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/src/img'));
});

gulp.task('minify:html', function() {
  return gulp.src('dist/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'));
});


gulp.task('copy:fonts', function () {
    return gulp.src('dev/src/fonts/**/*')
      .pipe(gulp.dest('dist/src/fonts/'));
});

gulp.task('copy:plugins', function () {
    return gulp.src('dev/src/css/**/*')
      .pipe(gulp.dest('dist/src/css/'));
});


gulp.task('sassdoc', function () {
  var options = {
    dest: 'docs',
    verbose: true,
    display: {
      access: ['public', 'private'],
      alias: true,
      watermark: true,
    },
    groups: {
      'undefined': 'Theme',
      foo: 'Foo group',
      bar: 'Bar group',
    },
    basePath: 'https://github.com/SassDoc/sassdoc',
  };

  return gulp.src('dev/src/scss/**/*.scss')
    .pipe(sassdoc(options));
});