title: 阅读大块头《javascript 权威指南》笔记 15-脚本化文档
date: 2014-11-09 01:57:13
categories: ['笔记']
tags: ['javascript', 'javascript 权威指南', '笔记']

---

- 在低于 IE 8 的版本中， `getElementById()`对匹配的元素的 ID 不区分大小写。

- html 属性不区分大小写，但是 javascript 属性则区分大小写。

- `getBoundingClientRect()` 方法返回元素在窗口坐标的位置信息。

- `getSelection()` 得到用户选中的文字，但是不支持`input`和`textarea`。

- `el.value.substring(el.selectionStart, el.selectionEnd)` 可以实现上一条不支持的作用。
