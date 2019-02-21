---
title: System
date: 2018-12-10
tags: Windows/Linux
categories:
- 笔记
---

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
