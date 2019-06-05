title: CSS3实战 笔记3-增强的文本和颜色功能
date: 2014-12-10 17:36:44
categories: ['笔记']
tags: ['CSS3实战', 'CSS', '笔记']
---

* 新增了几个文本属性
	* `text-shadow` 定义文本阴影或者模糊效果
	* `text-overflow` 定义省略文本的处理方式
	* `word-wrap` 定义文本超过指定容器的边界时是否断开转行。

* 完善了颜色控制，实现了对不透明效果的支持。
	* `HSL`  通过色调（H）、饱和度（S）、亮度（L）三个颜色通道的变化来表示颜色。
	* `HSLA` 在上面的基础上增加了透明度（A）的设置
	* `RGBA` 在 RGB 基础上增加了透明度（A）的设置
	* `opacity` 定义不透明度

* text-shadow 属性接受一个以逗号分隔的阴影效果列表。



> [实战练习源码](https://github.com/think2011/css3InActive-practice)