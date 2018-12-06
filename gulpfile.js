var gulp = require('gulp'),
    minifycss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    livereload = require('gulp-livereload'),
    del = require('del'),
    htmlmin = require('gulp-htmlmin')
// Styles
gulp.task('styles',function(){
  return gulp.src('./public/**/*.css')
    .pipe(minifycss())
    .pipe(gulp.dest('dist/css'))
    .pipe(notify({message:'Styles task complete'}));
});
// Scripts
gulp.task('scripts',function(){
  return gulp.src('./public/**/*js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('dist/js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(notify({message:'Scripts task complete'}));
});
// Images
gulp.task('images',function(){
  return gulp.src('./public/asset-an-image/**/*')
    .pipe(imagemin({
      optimizationLevel: 3,
      progressive: true,
      interlaced: true,
      multipass: true
     }))
    .pipe(gulp.dest('dist/img'))
    .pipe(notify({ message: 'Images task complete' }));
});
// Html
gulp.task('html',function(){
  return gulp.src('./public/index.html')
    .pipe(htmlmin({
      removeComments: true,//清除HTML注释
      collapseWhitespace: true,//压缩HTML
      collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
      removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
      removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
      removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
      minifyJS: true,//压缩页面JS
      minifyCSS: true,//压缩页面CSS
    }))
    .pipe(gulp.dest('dist/html'))
    .pipe(notify({ message: 'Html task complete'}));
});
//Clean
gulp.task('clean',function(cb){
  del(['dist/css','dist/js','dist/img'],cb)
});
//Watch
gulp.task('watch',function(){
  gulp.watch('./public/**/*.css',['styles'])
  gulp.watch('./public/**/*js',['scripts'])
  gulp.watch('./public/asset an image/**/*',['images'])
  livereload.listen()
  gulp.watch('dist/**').on('change',livereload.changed)
});


