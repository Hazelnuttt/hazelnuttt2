---
title: gulp learning
date: 2018-12-1
tags: gulp
categories:
- 笔记 
---
# 前端开发
除了HTML+CSS+Javascript,需要提高效率，减少重复工作
自动化工具
# 我用到的5个基本的
task、watch、src、dest、run
# 插件
gulp
gulp-minifycss
gulp-uglify
gulp-rename
gulp-imagemin(本来还有一个cache，所说可以只压缩新的，但貌似是要缓存的所以我就没用)
gulp-concat
gulp-notify
gulp-htmlmin
gulp-livereload(和reload有点混，reload在同步更新里用到)
del
gulp-connect(还没有成功)
# 问题
function(cb)
cb是什么东西，貌似好像是说明那件事情做好了，如果有些特定的返回值才会执行下一个任务
异步的callback、promise、stream 有一些凌乱，为什么task里又有var
connect写的貌似不对，同步不了
# gulpfile.js
### js压缩、合并、重命名
```javascript
// Scripts
gulp.task('scripts', function() {
  return gulp.src('./public/src/scripts/**/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/assets/js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('dist/assets/js'))
    .pipe(notify({ message: 'Scripts task complete' }));
});
```
### css压缩
```javascript
// Styles
gulp.task('styles', function() {
  return gulp.src('./public/src/styles/**/*.css')
    .pipe(minifycss())
    .pipe(gulp.dest('dist/styles'))
    .pipe(notify({ message: 'Styles task complete' }));
});
```
### 图片压缩
```javascript
// Images
gulp.task('images', function() {
  return gulp.src('./public/src/images/**/*')
    .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
    .pipe(gulp.dest('dist/images'))
    .pipe(notify({ message: 'Images task complete' }));
});
```
### 清理和默认任务（这里有一个异步）
```javascript
// Clean
gulp.task('clean', function(cb) {
    del(['dist/assets/css', 'dist/assets/js', 'dist/assets/img'], cb)//返回了一个cb
});
// Default task
gulp.task('default', ['clean'], function() {
    gulp.start('styles', 'scripts', 'images')//使用回调函数告诉gulp任务完成
});
```
参考链接：[Gulp 中异步任务的处理](https://blog.csdn.net/xyr05288/article/details/53114554")
### html压缩
```javascript
// Html
gulp.task('html',function(){
  return gulp.src('./public/hello.html')
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
```
### 通过watch 看修改的文件 自动执行相关命令
用到了livereload和change
```javascript
// Watch
gulp.task('watch', function() {
  // Watch .scss files
  gulp.watch('src/styles/**/*.scss', ['styles']);
  // Watch .js files
  gulp.watch('src/scripts/**/*.js', ['scripts']);
  // Watch image files
  gulp.watch('src/images/**/*', ['images']);
  // Create LiveReload server
  livereload.listen();
  // Watch any files in dist/, reload on change
  gulp.watch(['dist/**']).on('change', livereload.changed);
});
```
### 用reload 同步更新不用f5
首先通过connect创建一个服务器，默认端口号8080，然后watch，最后reload
```javascript
 //connect
 gulp.task('serve',function(){
   connect.server({
     root: 'public',
     livereload: true
   });
   gulp.watch('./public/**/*.*',['reload']);
 });
 gulp.task('reload',function(){
   gulp.src('./public/*.html')
    .pipe(connect.reload());
 });
 ```



