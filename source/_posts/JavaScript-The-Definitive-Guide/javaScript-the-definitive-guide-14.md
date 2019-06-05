title: 阅读大块头《javascript 权威指南》笔记 14-window 对象
date: 2014-11-06 23:10:50
categories: ['笔记']
tags: ['javascript', 'javascript 权威指南', '笔记']

---

- document 对象的 location 属性也引用到了 Location 对象：`window.location === document.location // true`

- location.replace() 方法会在载入新文档之前删除浏览历史记录，也就是说无法通过后退键回到之前的文档。

- navigator.onLine boolean 表示浏览器当前是否连接到了网络。

- <iframe>元素有 contentWindow属性，也就是对应的window对象。

- 一个窗口关闭了，代表它的 window 对象仍然存在，其中会有个 closed 属性的值为 true，它的 document 会是 null，它的方法也不再工作。

- 如果一个窗口是顶级窗口或者标签，它的 parent 属性的是这个窗口本身。 `parent === self // true`

- 每个 window 都有自己的原型对象，也意味着 instanceof 不能跨窗口工作，会返回 false。
