title: 前端开发面试题收集-CSS 篇
date: 2014-12-12 14:01:34
categories: ['其他']
tags: ['面试', '题目', 'CSS']

---

> 收集经典的前端开发面试题

## 什么是 CSS 盒子模型

- 页面上的每个元素都被浏览器看做是一个矩形的盒子。
- 由内容、填充、边框、边界组成。

## 什么是 css sprite

- 将多个图片拼接在一个图片中，通过 background-position 和元素尺寸调节显示想要的背景的方案。
- 优点：
  _ 减少 HTTP 请求数，加快页面加载速度。
  _ 提高压缩比、减少图片大小 \* 更换风格方便，只需在一张或者几张图片上修改颜色或者样式即可。
- 缺点：
  _ 图片合并麻烦
  _ 维护麻烦，修改一个图片可能需要重新布局整个图片、样式

## display:none; 于 visibility:hidden; 的区别？

- 前者让元素在 dom 中消失，不占据空间，后者不会消失、并占据，只是内容不可见。
- 前者是非继承的，父节点消失、子节点也会消失，后者相反，即使父节点消失，设置子节点为 visibility: visible;可显现子节点。
- 修改前者会造成文档重排，后者只会造成元素重绘。
- 读屏器不会读取前者，会读取后者。

<!-- more -->

## 样式的优先级？

- !important > style > id > class > 标签 > \*

## 为什么被访问过的链接颜色没有变化？

- 定义链接样式时，需要按照 :link、：visited、:hover、:active 的顺序定义。

## 如何在点击文字时也选中 checkbox?

- 在 input 上设置 id，并设置 lable 的 for 属性为对应的 id。

## CSS3 新增了哪些特性

- 新的属性 box-shadow、text-shadow、border-image、background-clip 等
- 动画属性 transform、transition、animation 等
- 新的选择器 结构伪类、目标伪类、状态伪类等
