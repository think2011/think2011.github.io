title: CSS3实战 笔记2-CSS3新增的选择器
date: 2014-12-08 16:19:09
categories: ['笔记']
tags: ['CSS3实战', 'CSS', '笔记']
---

* 新增了3个属性选择器。
	* `E[foo^="bar"]` 匹配元素E，且该元素定义了foo属性，属性值以bar开头。
	* `E[foo$="bar"]` 匹配元素E，且该元素定义了foo属性，属性值以bar结尾。
	* `E[foor*="bar"]` 匹配元素E，且该元素定义了foo属性，属性值包含bar。

* 新增了结构伪类选择器，就是利用DOM实现元素过滤。
	* `E:root` 匹配E元素所在的根目录
	* `E:nth-child(n)` 匹配父元素中第n个位置的E元素，n可以是数字，odd、even、公式(2n、2n+3)
	* `E:nth-last-child(n)` 同上，但倒数
	* `E:nth-of-type(n)` 匹配父元素中第n个位置的E元素，且类型是E。
	* `E:nth-last-of-type(n)` 同上，但倒叙
	* `E:last-child` 匹配元素中最后一个E元素
	* `E:first-of-type` 匹配父元素中第一个E元素，且类型是E。
	* `E:last-of-type` 同上，但倒叙
	* `E:only-child` 匹配父元素只包含一个子元素，且元素是E。
	* `E:only-of-type` 匹配父元素中只包含一个类型为E的子元素。
	* `E:empty` 匹配E元素，且不包含子节点，文本也算是节点。

* 新增了状态伪类选择器
	* `E:enabled`
	* `E:disabled`
	* `E:checked`


> [实战练习源码](https://github.com/think2011/css3InActive-practice)