---
title: three topics
date: 2018-11-01
categories: 
- 笔记
---
<font size="36pt">度娘Super Fast</font>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;首页包大小gzip后只有11.1k左右。耗时也就是500多毫秒
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;首页是没有js和css外链的，不然会再发起多次请求。其他的首屏所需要的js与css，全部在上线前，编译时，编译内联至HTML中
<font color="blue">1.缓存</font>（cookie，服务端传读local还是读写local）
<font color="blue">2.外链合并</font>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;每个文件以自己文件内容生成的版本号为戳，标识自己的唯一性。每次服务端返回页面时，会把当前在服务器上的所有静态文件版本号，返给前端
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;前端首屏加载完成后，会用这些版本号与local中进行一一对比，发现不一致的js/css，会一起发送一个合并请求。这样可以保证每个文件的缓存与版本迭代。同时，也避免了过多的外链。
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;模板和数据，也会被缓存至localstorage中
<font color="blue">3.使用iconfont</font>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;很多业务是不需要多彩色图的，这些icon就可以使用iconfont。
<font color="blue">4.卡片的异步加载与缓存</font>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们首屏也就需要2张卡片，也将卡片内容(html/css/js)存储到了local中。异步拉取卡片的时候，如果卡片内容没有变。服务端就不要返回了。
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;不在首屏的就要异步化！：触发时才会进行加载，采用按需加载。
<font color="blue">5.少量静态文件的域名</font>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们的logo与iconfont均是放在m.baidu.com域下的，这样节省了DNS的解析
<font color="blue">6.极小的图片base64化（对于小于1k的图片）</font>
</dr>
</dr>
</dr>
<font size="36pt">PC到移动，渲染:</font>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;浏览器就按照了980宽的方式，渲染出来页面图像。苹果再把这张图像，缩放一下，缩为屏幕大小。在手机上观察****的电脑版
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;图像是基于像素点的描述，放大后，之前图像的一个像素，被放大为多个像素。自然是会失真的
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;可以更改的布局宽度：浏览器的渲染依据，layout viewport（ 屏幕有多宽，浏览器就照着多宽去去渲染）
<font color="green">**逻辑分辨率：就是照着宽度去写代码**</font>
<font color="green">**物理分辨率：单位屏幕上的像素点变多了，貌似就更清晰了**</font>
1.iphone3   iphone4 屏幕不变，像素密度变大 然后骗浏览器，为的是让布局不变，也就是让图片大小不变，然后iphone4里的图片大小和3里的一样，但是那张图片里的像素翻倍了
2.到了iphone6,屏幕变大了，然后就上调了逻辑分辨率（375/320），就是放大了页面和图片，然后物理分辨率（750/640）也上去了，但貌似清晰度没有变吧
3.iPhone6 plus扩大清晰度，屏幕大小还是和6一样，然后屏幕上的像素点又多了，也就是物理分辨率上去了，图片更加清楚了，然后为了好算什么的就用了缩放和像素什么的让物理分辨率成了逻辑分辨率的三倍，然后除以3去写代码
<table>
      <tr>
         <th>iphone3   iphone4</th>
         <th>屏幕不变</th>
         <th>像素变大</th>
         <th> 然后骗浏览器，为的是让布局不变，也就是让图片大小不变，然后iphone4里的图片大小和3里的一样，但是那张图片里的像素翻倍了</th>
      </tr>
      <tr>
         <th>iphone6</th>
         <th>屏幕变大</th>
         <th>上调了逻辑分辨率（375/320），然后物理分辨率（750/640）也上去了</th>
         <th>就是放大了页面和图片，但貌似清晰度没有变吧</th>
      </tr>
      <tr>
         <th>iPhone6 plus</th>
         <th>屏幕不变</th>
         <th>物理分辨率上去了</th>
         <th>图片更加清楚了，然后为了好算什么的就用了缩放和像素什么的让物理分辨率成了逻辑分辨率的三倍，然后除以3去写代码</th>
      </tr>
</table>
</dr>
</dr>
</dr>
<font size="36pt">iconfont:1.怎么做 2.浏览器的兼容性</font>
</dr>
</dr>
</dr>
<font size="36pt">前端模板与渲染</font>：
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.页面级渲染：前端与后端的交互，浏览器端发出URL，后端返回一张拼好了的HTML串。（html中可能会混有一些php(或者php中混有一些html)。在服务端将数据与模板进行拼装，生成要返回浏览器端的html串。)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.异步的请求与新增模板：1）把数据拿到前端拼装成页面--貌似有模板、不变的+有更新的 2）在后端拼装直接把渲染生成的HTML传给前端，前端直接用
![show up please](/asset-an-image/IMG_0070.JPG)
未完待续hiahia
笔记来源：https://segmentfault.com/a/1190000005882953
欢迎吐槽、批评
<a href="mailto:1282308134@qq.com? subject=tips &body=吐槽批评快来吧">吐槽批评快来吧</a>
