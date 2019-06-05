title: 目前为止找到最好的移动端调试工具-debugGap
date: 2015-03-11 00:04:36
categories: ['效率']
tags: ['调试', '移动端']
---

## 一些牢骚
* 在桌面端调试目前已经很方便了，结构查看、CSS实时修改、网络请求、断点调试、性能检测、控制台...

* 但在移动端，额.. 仿佛又回到了IE时代，最方便也只能到处 alert 来调试。

* 当然也可以安装虚拟机、Android、IOS真机远程调试等办法，但我不喜欢，我是个怕麻烦的人。

* 最后找到这一款应用 - DebugGap，还是基于 node-webkit 的，node.js爱好者表示\\(^o^)/~。


![](/images/debugGap-0.png)

<!-- more -->

## 介绍一下
* windows、mac、linux支持
* 凡是支持HTML5的都支持，不仅限手机内置浏览器，及应用或平台。
* 多设备调试
* 调试功能：
    * Elements - css修改、结构查看
    * Network  - 网络请求查看
    * Resources - cookie、本地存储查看
    * Sources - 断点调试（据说目前仅支持android，未实测）
    * Console - 控制台

## 第一步：
在需要调试的页面中引入 `<script src="debuggap.js" type="text/javascript"></script>`。

## 第二步：
> 以下演示为 mac版，其他版本大同小异。

在电脑上运行 `DebugGap.app`，接着输入 本机IP地址 和 自定义的端口。

![](/images/debugGap-1.png)

## 第三步
访问页面，会发现页面上多了个蓝色按钮，点击后进入 config，配置地址为上述的地址。

![](/images/debugGap-2.gif)

## 最后
抬头望望电脑屏幕，你会发现已经配置完成了，那么就开始愉快的调试吧！
![](/images/debugGap-4.png)

### 目前为止又找到更好的调试工具了，请各位看看[browsersync](http://www.browsersync.io/)

---
> ##### 官网： [debugGap](http://www.debuggap.com/)
> ##### 扩展： [移动端前端开发调试](http://yujiangshui.com/multidevice-frontend-debug/)
> ##### 时间： 2015年03月