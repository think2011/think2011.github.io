title: 阅读大块头《javascript 权威指南》笔记 22-html5 api
date: 2014-11-14 11:30:05
categories: ['笔记']
tags: ['javascript', 'javascript 权威指南', '笔记']

---

- 获取地理位置有 3 个方法： 1. `navigator.geolocation.getCurrentPosition()` 获取当前位置 2. `navigator.geolocation.watchPostion()` 不断监控当前位置 3. `navigator.geolocation.clearWatch()` 停止获取位置

- 在有 GPS 的硬件设备上，可以获取精确的位置，或者是通过 Web 获取的，当浏览器提交 Internet IP 地址的时候，该服务能够直到该 IP 数据哪个城市，进而获取地址。

- 当`location.hash`改变时，会触发`window.onhashchange`绑定的函数，很适合用来实现分页效果。

- `Blob`是对大数据块的不透明引用或者句柄。
