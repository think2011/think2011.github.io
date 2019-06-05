title: 用node.js实现HTML5原生的comet(长连接)
date: 2014-11-12 23:57:39
categories: ['作品', 'node.js']
tags: ['javascript', 'comet', '长连接', 'websocket']
---

## 介绍一下
* `comet`跟`ajax`不同的地方在于，`ajax`是主动'拉'服务端的内容，而`comet`是服务端主动'推'内容给客户端。
* 实现成本及其简单，比起`ajax`模拟的 `间隔一段去查询服务端内容` 的方式在性能等各方面都要好。

## 那么优点是：
* 上面说了，实现很简单。
* 实时性好，消息延迟小。
* ...

![demo](/images/comet-demo.gif)

<!-- more -->

## 那么缺点是：
* 超霸道，只说话，不听话，不像 `websocket`，仔细听，听了还会回答。
* 既然提到 `websocket`了，那么如果想要更强大的话，建议还是 `websocket`，有种 `jquery` 跟 `angular` 衡量的意思。
* 很适合小数据传输，但是不适合大数据。

## 用来做什么？
* 聊天室啦
* 股票什么的
* 就想到那么多了..


## 第一步
那么开始动手吧，首先是浏览器的客户端。
```javascript
// 1. 声明EventSource
var es = new EventSource('/msg');

// 2. 监听数据
es.onmessage = function (e) {
    // 然后做点什么..
    document.querySelector('#msg').innerHTML += '<li>'+ e.data +'</li>'
};
```

客户端编码完毕，对，就TM这么简单！ ;-)

## 第二步
然后是服务端，这里用 `node.js`实现。
node.js:
```javascript
// 1. 设定头信息
res.writeHead(200, {
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive"
});

// 2. 输出内容，必须 "data:" 开头 "\n\n" 结尾（代表结束）
setInterval(function () {
    res.write("data: " + Date.now() + "\n\n");
}, 1000);
```
服务端完毕，对，还是TM这么简单！ ;-)


## 最后
* 写了个例子，在我的github上。
* 实现长连接的办法其实有不少，这种方式看起来比较"轻量"。
* 如果需求比较丰富，建议用比较完善的 [socket.io](http://socket.io/)


---
> ##### 技术： html5+javascript
> ##### 时间： 2014年11月
> ##### 实例： [html5-comet-EventSource--node.js-example](https://github.com/think2011/html5-comet-EventSource--node.js-example)
> ##### 参考： [EventSource](https://developer.mozilla.org/zh-CN/docs/Server-sent_events/EventSource)
