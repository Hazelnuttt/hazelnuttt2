---
title: Trample!!!
date: 2018-12-10
tags: 心态崩的历程
categories:
- 杂记
---
+ livereload说是可以网页同步更新，但其实呢？它要和下载一个chrome插件一起用，那我还不如用connect呢，我还试了半天。。。就算我要编译scss我也只要watch，然后执行任务啊，我要livereload干啥捏？
+ .sass-cache缓存相关的东西，预处理器编译一次就会生成，可以删除，但是下次再编译的时候还会产生的，所以就放那好了，产品要发布的时候只要css就可以了。
+ .gitignore 
+ clean掉dist太迷了，一开始还有映射输出去一些在开发时，帮助watch，帮助scss编译的东西，帮助合并看效果的东西。到了build就只有压缩的了，神奇，佷跳。dev和build
+ container 和padding有点太太。。。
+ git  
```
git rm --cached readme.txt
git rm -r --cached public
```
+ 先`git fetch origin master `，然后要自己建个分支吗,
```
git merge origin/master
```
上面的是把你本地的更新到和远程仓库一样。如果你有一些新的或者修改的东西还没上传到远程仓库，可以用stash先隐藏起来。
```
git diff master origin/master
git push origin master
git push origin dev
```
怎么又要master，又要dev
+ scroll
+ vs快捷键，vs不能联想css
+ onepage样式，衔接
+ `npm run dev` 编译scss为css，生成.map，输出，监听
              把css输出，监听
              把js合并，输出，监听
              把images输出，监听
              把html输出，监听
之前自动clean
+ `npm run build` 把sass编译（压缩），兼容，重命名min，输出
                把css兼容，压缩，重命名min，输出
                把js合并，压缩，重命名min，输出
                把images压缩，输出
                把html压缩，输出
之前自动clean
+ 同步 ，serve后直接watch，watch和serve一起，并不影响，而且很完美
+ 开发时不要在src里打开html，用`npm run dev`或者在dist里打开
+ build时，把src里的HTML引入的css/js改成压缩的`npm run build`
+ npm脚本，也就是package.js里的scripts。例如：命令行使用npm run命令，`npm run serve`就会执行这段脚本，等同于`npm run dev && gulp serve`
+ 通配符 `*` `**`  
+ `&`同时执行，`&&`一次执行
+ 钩子              
        

