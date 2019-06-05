title: 前端开发面试题收集-HTML 篇
date: 2014-12-10 18:05:32
categories: ['其他']
tags: ['面试', '题目', 'html']

---

> 收集经典的前端开发面试题

## Doctype 是什么？说明特点。

- <!doctype>声明必须处于HTML文档的头部，在<html>标签之前。
- <!doctype>声明不是一个HTML标签，是一个用于告诉浏览器使用哪种HTML规范的。
- 该标签可以声明三种 DTD 类型，分别表示严格版本、过渡版本以及基于框架的版本。

## img 的 title 和 alt 有什么区别

- title 用于为元素提供附加的提示，通常鼠标滑动到元素上会显示。
- alt 是 img 特有的属性，是图片内容的自定义描述，用于图片无法加载时，描述图片内容。
- 搜索引擎会分析 alt 描述。

## 什么是 web 语义化，为什么需要语义化。

- 是指通过 HTML 标记表示页面包含的信息，包含了 HTML 标签的语义化和 CSS 命名的语义化。
- HTML 标签的语义化是指：使用例如 H1-H6 等恰当的表达文档结构。
- CSS 命名的语义化是指：为 HTML 标签添加有意义的 class、id。
  需要语义化的原因：
  _ 去掉样式后页面依然呈现清晰的结构。
  _ 盲人使用读屏器更好的阅读。
  _ 搜索引擎更好的理解页面，有利于收录。
  _ 团队项目可持续运作和维护。

<!-- more -->

## 行内元素、块级元素、空元素有哪些？

- 每个元素都有 display 属性表示元素的类型，例如 div 默认 display 是 block,是块级元素，而 span 是 inline，是行内元素。
- 行内元素：a b span img input select strong
- 块级元素：div ul ol li dl dt dd h1 h2 h3 h4 h5 p
- 空元素　：br hr img input link meta 等

## 浏览器的内核分别有哪些？

- IE 浏览器的内核是 Trident
- Mozilla 的内核是 Gecko
- Chrome 的内核是 Blink (Webkit 的分支)
- 其他浏览器略

## iframe 有哪些缺点？

- iframe 会阻塞主页面的 onload 事件。
- iframe 和主页面共享连接池，而浏览器对相同域的连接有限制，所以会影响页面的并行加载。
- 动态给 iframe 添加 src 属性，可以避免以上的问题。

## cookies、seesionStorage 和 localStorage 的区别？

- cookie 在浏览器和服务器之间来回传递，其他不会。
- sessionStorage 和 localStorage 有更丰富的接口。
- sessionStorage 和 localStorage 有各自独立的存储空间。

## 如果在浏览器内多个标签页间通信？

- 使用 localStorage、cookies 等本地存储方式。

## webSocket 如果兼容低浏览器？

- Adobe Flash Socket
- ActiveX HTMLFile (IE)
- 基于 multipart 编码发送 XHR
- 基于长轮询的 XHR

## src 与 href 的区别？

- src 是 source 的缩写，指向外部资源的位置，指向的内容将会下载嵌入到文档中当前标签的位置，例如 js、img、frame。
- href 是 Hypertext Reference 的缩写，指向网络资源的位置，建立和当前元素或者当前文档之间的链接。

## HTML 与 XHTML 有什么区别？

- XHTML 元素必须被正确嵌套
- XHTML 元素必须被关闭，空标签也要被关闭。
- XHTML 必须用小写字母。
- XHML 必须拥有根元素
- XHTML 要求所有属性都要有值。
- XHTML 要求所有属性必须是""括起来。
- XHTML 需要把所有<、>、&等特殊符号用编码表示。
- XHTML 文档不要在注释内容中使用"--"。
- XHTML 图片必须有说明文字。
- XHTML 中用 ID 代替 name。

## HTML5 新增了哪些特性？

- 新的 meta 声明
- 标签 header、nav、video、audio、canvas、svg
- 表单新特性 email、number、color、tel 等
- JS API localstorage、seesionstorage、classList、DeviceMotionEvent、FileReader、Drag 等
