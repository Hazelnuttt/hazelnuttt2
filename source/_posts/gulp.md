---
title: gulp learning
date: 2018-12-1
tags: gulp
categories:
- 笔记 
---
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

