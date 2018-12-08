---
title: css还没看完，sass直接学行不？哈哈哈
date: 2018-12-7
tags: Ruby&sass/scss
categories:
- 笔记 
---
# 安装Ruby、Sass、Compass
+ 安装后，ruby -v检查一下（说是要换gem源，但我失败了，然后还是https://rubygems.org/）
+ Ruby自带一个叫做RubyGems的系统，用来安装基于Ruby的软件。用这个系统来安装Sass、Compass（与node，npm很像了，而且也有一个命令行）
# Sass是什么
+ css扩展语言
### sass与scss 
+ 用法有一点不一样，scss更好用（所以我看了scss，嘿嘿）
### sass与less
Sass与Less都可以视为一种基于CSS之上的高级语言，其目的是使得CSS开发更灵活和更强大，Sass的功能比Less强。
他们俩当然有区别：[sass/scss与less的区别](https://www.cnblogs.com/wangpenghui522/p/5467560.html)
# Learn Scss
### 变量
```scss
$primary-color:#1269b5;
div.box{
  background-color:$primary-color;
}

h1.page-header{
  border:1px solid $primary-color
}
```
+ 变量里还可以引用其他变量
+ 当变量定义在css规则块内，那么该变量只能在此规则块内使用。
### 嵌套/嵌套**调用**一个父选择器
```scss
.nav{
  height:100px;
  ul{
    margin:0;
    li{
      float:left;
      list-style:none;
      padding:5px;
    }
    a{
      display:block;
      color:#000;
      padding:5px;
      &:hover{
        background-color:#0d2f74;
        color:#fff;
      }
    }
  }
  & &-text{
    font-size:15px;
  }
}
```
### 嵌套属性
```scss
body{
  font:{
    family:Arial;
    size:15px;
    weight:normal;
  }
}
.nav{
  border:1px solid #000{
    left:0;
    right:0;
  }
}
```
### Mixins 有名字的定义好的样式,还可以加参数,还可以嵌套
```scss
@mixin alert{
  color:#8a6d3b;
  background-color:#fcf8e3;
  a{
    color:#664c2b;
  }
}
.alert-warning{
  @include alert;
}
```
```scss
@mixin alert($text-color,$background){
  color:$text-color;
  background-color:$background;
  a{
    color:darken($text-color,10%);
  }
}
.alert-warning{
  @include alert(#8a6d3b,#fcf8e3);
}
```
### 继承、扩展(群组选择器)(继承所有相关的)
```scss
.alert{
  padding:15px;
}
.alert a{
  font-weight:bold;
}
.alert-info{
  @extend .alert;
  background-color:#d9edf7;
}
```
### 原生的css导入
+ sass兼容原生的css，可用css@import导入，这样浏览器就要去解析和下载。变慢。
+ 也可用使用@import，就是先把css改成.scss后缀，即不能直接导入一个原生css文件。下列三种情况下会生成原生的CSS@import，变慢
  * 被导入文件的名字以.css结尾；
  * 被导入文件的名字是一个URL地址（比如http://www.sass.hk/css/css.css）
  * 被导入文件的名字是CSS的url()值。
### Partials嵌套导入
+ 在一个css文件里我们可以把其他的css文件包含进来，不过每次使用@import，浏览器都会发出一次新的http的请求，去下载被导入的http文件，会消耗服务器资源，变慢。
+ 在一个scss文件中把其他scss文件包含进来，把他们编译成一个css文件，partials(有下划线)，**不会单独编译成css**
```scss
@import "base";
.alert{
  padding:15px;
}
```
### 注释
+ 多行注释，会在css文件中保留。在压缩的css里边会去掉。
```scss
/*
*美滋滋
*爽歪歪
*/
```
+ 单行注释,不会出现在css中
```scss
//嘿嘿嘿
```
+ 强制注释
```scss
/*!
*啦啦啦
*/
```
### 子组合选择器和同层组合选择器
```scss
article {
  ~ article { border-top: 1px dashed #ccc }//同层全体组合选择器~，选择所有跟在article后的同层article元素。
  > section { background: #eee }//选择article下紧跟着的子元素中命中section选择器的元素。
  dl > {
    dt { color: #333 }
    dd { color: #555 }
  }
  nav + & { margin-top: 0 }//同层相邻组合选择器+选择nav元素后紧跟的article元素。
}
```
### 默认变量值
+ 反复声明一个变量，只有最后一处声明有效且它会覆盖前边的值。
### @if/@else if/@else
### @for
### @each
### @while
# 问题
+ 用css@import导入，这样浏览器就要去解析和下载。
+ 用@import把没有下划线的导入进来，(没有下划线的还会编译成css)，也要发出http请求，下载？
+ 用@import把有下划线的导入进来，(不会单独编译，会编译成一个css)，要消耗浏览器资源，变慢吗？



