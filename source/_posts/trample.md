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
+ `&`同时执行，`&&`依次执行
+ 钩子   
+ 栅格系统 row 一行-->移动端适配
+ 用栅格系统，貌似还是有一个刺出来的问题
+ 图标 除了需要css、还依赖于fonts里边的一些文件，可是那些文件放在src哪里呢？我还是觉得用网址吧，emmmm还没有尝试
navbar 折叠和还有一些套路（下次补全）
+ script 放在body最后
+ 有时候你搜个东西，有好多种方法或者插件，然后我们基本认为第一个是最火的，比如toc，然后他就接着讲到最好用vim（插件管理），我就蒙了，这个管理器是什么，它和npm是什么关系，和nodejs有什么关系。接着换教程，Windows自带tree，然而呢，它只有两个参数。在此之前，鬼知道我经历了什么，1.Windows 有命令行，貌似是终端->2.到d盘特定文件夹下面去，我cd了半天，应该之间d：,好吧我承认没学好。然后我终于找到了一个tree-cli的插件。
+ git bash 是不能用apt-get这个命令的，于是我就走了如下多的坑，还好有点收获
>> 安装git，同时会安装git bash，Git Bash是Windows下的命令行工具。**基于msys GNU 环境**，有git分布式版本控制工具，主要用于git。但是除了使用git命令以外，还可以使用linux命令。（当然也有一些命令不能使用，比如apt-get等）
- 知道上面的一些东西后，又查到说
 >> Win10提供的WSL相当于一个Linux“模拟器”（原理不完全一致），可以直接运行Linux二进制文件
 然后心里知道win10好像和linux之间有点东西，接着查到
 >> Win10 有个特殊的功能，就是可以使用 Ubuntu 的 bash，只需要开启这个有趣的功能，就可以将 Win10 当 Ubuntu 使用，从而像 Linux 那样只输入相关命令即可显示树形结构文件目录。
- 其实就是打开 bash 后，提示你是否下载安装 Ubuntu on Windows，（ubuntu就是基于linux的）那就等于装了个linux系统，没意思了。中途我还试了个东西*Windows下Git Bash自带的MinGW以及MinTTY使用说明*git bash就是mingw，使用ssh链接linux服务器，我这里真的是太蠢了，不清楚ssh到底该怎么用，其实它是用来连别人的linux机器的。然后跟这个东西说再见吧。

所有参考文件：
+ [Windows中使用git bash执行Linux命令](https://www.cnblogs.com/acm-bingzi/p/gitBash.html)
+ [Win10开启Ubuntu](https://cniter.github.io/posts/c3f26b1.html)
+ [Windows下Git Bash自带的MinGW以及MinTTY使用说明](https://blog.csdn.net/cleverlzc/article/details/50904673)
