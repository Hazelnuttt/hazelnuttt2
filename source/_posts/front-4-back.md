---
title: 什么是前后端分离
date: 2019-5-22
tags: 前后端分离
categories:
  - 笔记
---

# 什么是前后端分离

开始该项目前，我的理解其实是错的，我一开始搞不懂什么是`ASP`和`JSP`，我本来以为他们是相似的语言，因为能动态的获取服务器的信息，即动态网页，之前用`laravel`写的`PHP`，到最近才发现他们是一类的，接着恍然大悟。。。oo\

## 整理一波

1. 浏览器根本不关心服务器端是 JSP、ASP、PHP，或者还是原始的 Servlet，或是静态服务器上的 HTML，只要返回的是合法的 HTML 就可以。
2. 把 JSP 中静态的 HTML 部分拿出来，变成简单的 HTML 文件，放在 HTTP 服务器上，浏览器只要获取到这些 HTML 就可以了。动态的数据部分用 HTML 里的 JS 通过 AJAX 的方式从服务器端获取，然后动态操作 Dom，完成动态内容的展示。
3. JSP 所在的服务器被称为 Consumer(消费者，也就是服务的使用者)，另一台提供数据的服务器被称为 Producer(生产者，也就是服务的提供者)。<---->如果上面为 JSP 提供数据的服务又调用了第三个服务的接口获取数据，那么就又产生了新的 Consumer 和 Producer 关系。(据我现在的经验，`React`和`Java`也是这样的关系)
4. 两种协作方式：服务器端渲染 && 前后端分离。然后我看到了一个生动的例子(盒马生鲜貌似是我第一次对计算机有点感兴趣)，分享一哈--->

   > > 盒马生鲜提供两种方式，一种是前后端分离，一种是服务器端渲染。

   > > 前后端分离是哪种方式呢？就是外卖或者是直接买生鲜，自己回家去做。

   > > 服务器端渲染是哪种方式呢？就是直接在盒马鲜生自己加工，直接吃，或者是带回家吃。

   > > 这里的生鲜就是数据。

   > > 做出来的食物就是 Html 网页。

## 看资料时的 QS

1. 什么是首屏渲染
2. --->为了安全，我们使用了 httpOnly，这样前端无法读取 cookie 信息， 完全靠服务器判断。那么我们怎么知道第一次是渲染登录界面还是进入主界面呢？这里使用了类似 jsonP 的实现原理。在网关里做了拦截， 当访问主界面时，如果发现用户没有登录， 就在返回的结果前面插入一个 script 标签，调用一段 js 代码，使主界面隐藏并显示登录页面。 jsonP 实现跨域访问的方法也是类似这样的。--->这个`jsonP`我知道是`axios`里的东西，我现在也有一个这样的问题，我退出登录时，把本地的 localstorage 的东西删掉了，但是我还是到达了 home 页面。--->首先，`react`在第一次访问过之后，可能它本地的一些静态的资源已经存储了，加上 home 页面暂时没有动态渲染，即静态页面--->受该信息的启发，然并卵，我还是不知道怎么办--->再受启发，比如某些路由或者说当你的权限不同时，导航栏上的某些内容是不同的，有些路由，你是没有权限到达的。。。。。。

## 烦

好烦、气/**权限**有你这么造的吗！！!