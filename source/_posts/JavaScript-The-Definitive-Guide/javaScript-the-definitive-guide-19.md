title: 阅读大块头《javascript 权威指南》笔记 19-jquery 类库
date: 2014-11-13 17:50:52 
categories: ['笔记']
tags: ['javascript', 'javascript 权威指南', '笔记']

---

- `$(fn)`的完整写法是`$(document).ready(fn)`

- `each()` 方法中的 `this` 指向的是`element`对象，而不是`jquery`对象。

- `data()` 方法用来给`jquery`对象添加 or 获取数据，该数据可以是一个对象。

- 如果插入的元素已经是文档的一部分了，这些元素只会移动到新位置，而不会复制一份，如果需要复制，则使用`clone()`

- `unbind()`只注销`jquery`注册的事件处理，例如通过`addEventListener()`注册的是不会被注销的。

- 通过`Jquery.fx.off = true`可以一键关闭所有的动画效果。
