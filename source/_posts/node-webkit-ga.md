title: 用node-webkit开发桌面应用
date: 2014-03-15 00:38:27
categories: ['作品', 'node.js']
tags: ['桌面应用', 'node-webkit', 'angularjs']
---
![](/images/ga1.jpg)

![](/images/ga5.gif)

<!-- more -->

node-webkit能做什么？
===
用Web技术（Node.JS，JavaScript，HTML5）开发桌面应用程序。**（对，我理解的就是这样）**

大家都做了什么？
===
这里有一份 **优秀作品** 的列表，点[这里看看](https://github.com/rogerwang/node-webkit/wiki/List-of-apps-and-companies-using-node-webkit)。

准备工作
===
怎么样，看完那些作品，有没有血液沸腾，不知道你有没有，反正我是有的。
接下来实现一个对话聊天的桌面应用，叫做 **葫芦鸭**！，好吧，就是山寨 **小黄鸡** 啦。

本文重点不在于 **葫芦鸭**，而是node-webkit的简单尝试，所以就不废话了，材料我都准备好了。
所需材料如下：

- [葫芦鸭](https://github.com/think2011/node-webkit-example.git) `(通过web技术写好的应用)`
- [node-webkit](https://github.com/rogerwang/node-webkit)

第一步
===
跟node.js一样，在源码的根目录下需要建立 `package.json`，详细的参数和介绍在[这里](https://github.com/rogerwang/node-webkit/wiki/Manifest-format)。
```
{
  "main": "index.html", // 启动页面
  "name": "ga",
  "window": {
    "toolbar": false, // 工具栏
    "frame": false,   // 框架
    "width": 430,
    "height": 450,
    "resizable": false  
  }
}
```

第二步
===
运行
---
1. 将源码压缩成zip文件 `注意哦，要如图那样的压缩，不能包含文件夹`
![](/images/ga2.gif)

2. 直接将打包好的zip拖入到 `nw.exe`，就算是运行成功了。
![](/images/ga3.gif)
打包
---
在当前目录下用命令行执行 `我的用的是shift+右键调出的菜单`

    copy /b nw.exe+ga.zip app.exe

注意，第三个参数 `nw.exe+ga.zip`是有顺序的，不能对调
![](/images/ga4.gif)

第三步
===
没了，写完了。

后续
===
	Q 博主，你写的文章怎么这么坑，好像什么都没讲！
	A 对，我的文章就是这么坑，因为我对node-webkit不是很了解，想了好久，才写了这么点。
当然node-webkit能做的并不是本文写的那么浅显，例如

- 解除了浏览器 `沙盒` 限制，像 **葫芦鸭** 中用到的跨域，原本单凭前端是无法实现的。
- 可以使用node.js，除了node.js本身的特性，意味着npm中那么多的扩展可以供你使用。
- node-webkit还实现了本地化的API，例如`菜单栏`，系统的`托盘图标`支持，`系统剪贴板`等


---
> ##### 技术： jquery + node-webkit
> ##### 时间： 2014年3月
> ##### 源码： [Guthub](https://github.com/think2011/node-webkit-example.git)


