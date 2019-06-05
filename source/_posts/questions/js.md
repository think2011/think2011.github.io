title: 前端开发面试题收集-JS 篇
date: 2014-12-12 18:53:30
categories: ['其他']
tags: ['面试', '题目', 'JS']

---

> 收集经典的前端开发面试题

## setTimeout 的时间定义为 0 有什么用？

- javascript 引擎是单线程处理任务的，它把任务放在队列中，不会同步执行，必须在完成一个任务后才开始另一个任务。
- 由于 setTimeout 可以把任务从某个队列中跳出成为新队列，因此能够得到期望的结果。

## 怎么理解 this

- this 指向的总是调用函数的那个对象。
- this 一般情况下，是全局对象 Global。

## 什么是闭包

- 闭包是一个概念，我的理解是函数里的函数，能够读取函数内部变量的函数。
- 就是将函数内部和函数外部连接起来的一座桥梁。
- 闭包是不被内存回收机制回收的。

<!-- more -->

## "use strict"有什么作用？

- 严格模式会抛出更多错误，从而发现潜在问题。
- 会禁止某些不稳定的特性，例如去除 with 关键字，this 不再默认指向全局等。

## new 操作符做了什么工作？

- 创建了一个空对象，并且 this 变量引用此对象，同时继承了该函数的原型。
- 属性和方法被加入到 this 引用的对象中。
- 新创建的对象由 this 引用，并且最后返回 this。

## 延迟加载 JS 的方式有哪些？

- defer 和 async
- 动态创建 dom

## 原型继承的原理

- 当查找一个对象的属性时，javascript 会向上遍历原型链，直到找到给定名称的属性为止。

## 什么是 AJAX

- AJAX 是指一种创建交互式网页应用的开发技术。
- AJAX 可以在无需刷新页面的情况下与发起与后端的请求。

## 什么是跨域，如何做到?

- 基于安全考虑，浏览器只允许 javascript 访问相同域名下的文档。
- 解决跨域都需要服务端配合。
- JSONP
  _ 创建一条 script 标签请求，并带上参数请求后端。
  _ 后端根据相应的参数包装一个带所需数据的 JS 函数返回给前端。 \* 缺点是只能发出 get 请求，并难于确定请求是否成功。
- web sockets
  _ web sockets 会发送一个 http 请求到后端，获取响应后协议会升级为 web socket 协议，不受跨域限制。
  _ 缺点是只有现代浏览器支持。
- CORS
  _ 后端在头信息中设置允许接收请求的域名即可。
  _ 缺点是只有现代浏览器支持。

## javascript 继承有哪些方式？

- 对象冒充
- 原型链
- call
- apply

## cookie 是什么？都有哪些属性？

- cookie 是浏览器提供的一种机制，保存在用户硬盘上，可以在客户端与服务端之间传送。
- 属性有：
  _ expires 有效时间
  _ path 能够读取 cookie 的顶级目录
  _ domain 创建 cookie 所在网页所拥有的域名
  _ secure 默认是 false，如果为 true，cookie 的传输协议需要为 https。

## 怎么添加、移除、移动、复制、创建和查找节点？

- 添加：
  _ append
  _ prepend
  _ after
  _ before
- 移除
  _ remove
  _ empty
- 替换
  _ replaceWith
  _ replaceAll
- 复制
  _ clone
  创建
  _ creatElement
  _ createTextNode
  查找
  _ getElementById
  _ getElementsByTagName
  _ getElementByName
