title: javascript设计模式笔记-5 单例模式
date: 2014-4-17 23:42:44
categories: ['笔记']
tags: ['设计模式', 'javascript', 'javascript设计模式', '笔记']
---

## 单例模式简述
* 单例模式保证某个类只有一个实例，这个类称为单例类。
* 减少全局变量，达到了命名空间的效果。
* 代码模块化，使得容易阅读和维护。
* 耦合度高，不容易做单元测试。

<!-- more -->

## 最简单的单例模式
```
var person = {
	name: 'jason',
	getName: function () {
		return this.name;
	}
}
```

## 有私用成员的单例模式
```
var person = (function(){
	var name = 'jason';
	function getName () {
		return name;
	}

	return {
		getName: getName
	}
})()
```
