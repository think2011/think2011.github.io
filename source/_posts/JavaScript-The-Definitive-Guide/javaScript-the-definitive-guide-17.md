title: 阅读大块头《javascript 权威指南》笔记 17-事件处理
date: 2014-11-09 16:19:32
categories: ['笔记']
tags: ['javascript', 'javascript 权威指南', '笔记']

---

- `onbeforeunload`事件不会响应`alert`，所以需要这样写：`window.onbeforeunload = function(){return '要离开了吗？';}`

- 事件传播是浏览器决定哪个对象触发其事件处理程序的过程。

- 对于单个对象的特定事件（例如 window 的 load 事件）必须是不能传播的。

- 在`keydown`和`keyup`之间会触发一个`keypress`事件，当按下键重复产生字符时，在`keyup`事件之前会产生很多`keypress`事件，其对象指定产生的字符而非按下的键。

- `document.readyState`属性表示文档加载完毕（图片等未加载完毕），这样方式比`window.onload`要快，现代浏览器的监听方式为 `addEventListener('DOMContentLoaded', fn, false)`。
