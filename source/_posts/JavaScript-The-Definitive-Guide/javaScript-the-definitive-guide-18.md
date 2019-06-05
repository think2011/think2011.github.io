title: 阅读大块头《javascript 权威指南》笔记 18-脚本化 http
date: 2014-11-11 16:16:18
categories: ['笔记']
tags: ['javascript', 'javascript 权威指南', '笔记']

---

- `Comet` 是一种新的 web 应用构架，跟`ajax`不同的是服务端会自动向客户端推送数据，而不是客户端请求数据。

- 一个 http 请求由 4 个部分组成：
  _ http 请求方法
  _ URL
  _ 一个可选的请求头集合，其中可能包括身份验证信息
  _ 一个可选的请求主体

- 服务端返回的 http 响应包括 3 个部分：
  _ 一个数字和文字组成的状态码，用来显示请求的成功和失败
  _ 一个响应头集合 \* 响应主体

- 重复调用 `setRequestHeader()`，新值不会取代旧值，相反，会叠加。

- 不能指定 `Content-Length`、`Data`、`Referer`、`User-Agent`头，`XMLHttpRequest`会自动添加从而防止伪造。

- HTTP 的请求有指定顺序，请求方法和 URL 会首先到达，然后是请求头，最后是请求体。

- 如果在`open()`方法的第三个参数传入`false`，则是同步响应，同时也会阻塞，直到完成响应。

- 表单数据有一个正式 MIME 类型：`application/x-www-form-urlencoded`，必须指定。

- XHR2 API 允许向`send()`方法传入 File 对象来实现上传。

- 通过 `onprogress`事件可以监听上传进度。
