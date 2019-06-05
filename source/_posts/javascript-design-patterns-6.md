title: javascript设计模式笔记-6 链式调用
date: 2014-4-19 23:25:29
categories: ['笔记']
tags: ['设计模式', 'javascript', 'javascript设计模式', '笔记']
---

## 简述链式调用
* 链式调用是一个语法的小技巧。
* 原理是通过返回this的方式达到链式调用的目的。
* 链式调用很适合做赋值类的连续操作。

<!-- more -->

## 一个简单的链式调用的例子
```javascript
var api = {
	name: 'jason',

	getName: function () {
		alert(this.name);
		return this;
	},
	
	setName: function (name) {
		this.name = name;
		return this;
	}
}

api.getName().setName('think2011').getName();
```
