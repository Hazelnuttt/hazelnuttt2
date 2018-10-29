<font color="blue">URL(Uniform Resource Location)</font>:
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;统一资源定位器 网页地址的意思
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;每个网页都有只属于自己发URL地址（我们俗称网址）具有全球唯一性
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;上网浏览网页，在鼠标点击之间连接到不同的URL的这个过程都显示在电脑的浏览器的地址栏里。
<font color="blue">CDN（Content Delivery Network)</font>:
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;内容分发网络 依靠部署在各地的边缘服务器，通过中心平台的负载均衡，内容分发调度，使用户就近获取所需内容，降低网络拥塞，提高用户访问响应速度和命中度。
<font color="blue">代理、网关</font>：
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;对URL从一个浏览器到外部服务器和返回结果，传递一个请求的系统。
<font color="blue">应用服务器</font>：
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;通过各种协议把商业逻辑到客户端的程序
对<font color="blue">TCP/UDP</font>：
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;传输层协议 请求
<font color="blue">TLS</font>:
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;安全传输层协议
<font color="blue">LVS（Linux 虚拟服务器）</font>给后端ECS集群
对<font color="blue">HTTP</font>:
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;超文本传输协议 
给Tengine集群 再给后端ECS集群
<font color="blue">DNS</font>：
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;指保存有该网络中所有主机的域名和对应IP地址，并具有将域名转换为IP地址功能的服务器。
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;整个系统架构分为流量层、应用层、数据层，利用 DNS 技术实现 GSLB（Global Server Load Balance，全局负载均衡），实现用户就近访问。
<font color="blue">ISP</font>（Internet Service Provider，互联网服务提供商):  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本地 DNS 地址
<font color="blue">DHCP</font>（Dynamic Host Configuration Protocol):
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;动态主机配置协议
</dr>
</dr>
</dr>
<font size=“36pt” color="blue">HTTP请求</font>：
在上一步我们通过 DNS 解析拿到服务器 IP 地址后，浏览器再通过系统调用 Socket 接口与服务器 443 端口进行通信，整个过程可以分解为<font color="green">**建立连接、发送 HTTP 请求、返回 HTTP 响应、维持连接、释放连接**</font>五个部分
<font color="blue">socket</font>：网络上的两个程序通过一个双向的通信连接实现数据的交换，这个连接的一端称为一个socket。建立网络通信连接至少要一对端口号。
<font size=“36pt” color="blue">浏览器解析过程</font>：
现代浏览器是一个及其庞大的大型软件，在某种程度上甚至不亚于一个操作系统，它由多媒体支持、图形显示、GPU 渲染、进程管理、内存管理、沙箱机制、存储系统、网络管理等大大小小数百个组件组成.
</dr>
一个 Browser 进程
多个 Renderer 进程
一个 GPU 进程
多个 NPAPI Render 进程
多个 Pepper Plugin 进程
而每个进程包括若干个线程：
一个主线程
在<font color="green"> Browser 进程中：渲染更新界面</font>
在<font color="green">Renderer 进程中：使用持有的内核 Blink 实例解析渲染更新界面</font>
一个 IO 线程
在 Browser 进程中：处理 IPC 通信和网络请求
在 Renderer 进程中：处理与 Browser 进程之间的 IPC 通信
一组专用线程
一个通用线程池
</dr>
</dr>
</dr>
<font size=“36pt” color="blue">主流程</font>：
页面的解析工作是在 Renderer 进程中进行的，Renderer 进程通过在主线程中持有的 Blink 实例边接收边解析 HTML 内容。
<font size=“36pt” color="blue">渲染流程</font>：
DOM 树、RenderObject 树（也叫 Render 树）、 RenderLayer 树，1.同一个坐标系（比如 canvas、absolute）时 ，合并（由CPU）RenderLayer，   GraphicsLayer 树 2.当 RenderLayer 满足合成层条件（比如 transform，熟知的硬件加速）时，会有自己的 GraphicsLayer。每个 GraphicsLayer 都有一个 GraphicsContext 对象，负责将层绘制成位图作为纹理上传给 GPU，由 GPU 负责合成多个纹理，最终显示在屏幕上。
<font size=“26pt”>笔记来源</font>：https://zhuanlan.zhihu.com/p/43369093
和<font size=“26pt”>百度百科</font>