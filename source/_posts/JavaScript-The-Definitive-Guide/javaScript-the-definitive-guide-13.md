title: 阅读大块头《javascript 权威指南》笔记 13-web 浏览器中的 javascript
date: 2014-11-02 20:50:50
categories: ['笔记']
tags: ['javascript', 'javascript 权威指南', '笔记']

---

- `window`对象是所有客户端 javascript 的特性和 API 的主要接入点，表示浏览器的窗口或窗体。

- `window`对象中其中一个最重要的属性是`document`，它引用`document`对象，表示在窗口中的文档。

- `window、document、element`对象上另一个重要的属性集合是事件处理程序相关的属性。可以在脚本中绑定一个函数，这个函数会在某个事件发生时以异步的方式调用，事件的属性名以单词`on`开头。

- 用 `type="text/vbscript"` 表示脚本用 MIME 类型，这里表示的用非标准的 vbscript，这也意味着可以使用`script`元素来嵌入任意的数据，只要这`type`属性声明为一个不可执行的类型，想要获取数据时可以获取此元素的`text`属性。。

- 可以在 `URL`后面跟一个 `javascript:`协议限定符是另一种嵌入代码到客户端的方式。

- `script` 元素中有 `defer`和`async`属性，可以改变脚本的执行方式（在支持的浏览器中）,是布尔值属性，没有值。

- 大部分浏览器事件中，会把一个对象传递给事件处理程序作为参数，这个对象包含了事件的详细信息，例如传递给单机事件的对象，会有一个属性说明鼠标的哪个按钮被点击了。

- 有些事件的目标是文档元素，它们会经常往上传递给文档树，这个过程叫做`冒泡`.

- 客户端 javascript 的时间线是(简化)： 1. 浏览器创建`document`对象，并开始解析 html 元素和它们的文本内容后面添加`element`对象和`text`节点到文档中，这个时候`document.readystate`的值为`loading`.

      	2. 在html解释器遇到没有`async`和`defer`属性的`script`元素时，它把这些元素添加到文档中，然后执行脚本，并且在执行时解释器会暂定，这样脚本就可以用`document.write()`把文本插入到输入流中。

      	3. 当文档解析完毕，`document.readyState`变为`interactive`

      	4. 这个时候文档已经解析完毕，但是浏览器可能还在等待其他内容载入，例如图片，所有完成后，`document.readyState`变为`complete`，浏览器接着触发`window`上的`load`事件。

      	5. 此刻起，会调用异步事件，以响应用户的输入输入事件，网络事件，计时器过期等.

- `XSS`攻击指的是攻击者向目标站点注入 html 标签，或者脚本。
