title: javascript设计模式笔记-3 封装和信息隐藏
date: 2014-4-13 2:54:21
categories: ['笔记']
tags: ['设计模式', 'javascript', 'javascript设计模式', '笔记']
---
## 为什么要封装和隐藏信息？
1. 封装是面向对象的基石。
2. 让对象的实现细节对其他对象保密，只要结果不变，可以任意重构对象实现细节。
3. 简单来说封装就是为了隐藏信息，调用者只需关心实现的结果，从而达到面向对象编程的方式。

<!-- more -->

## 公开的封装
假如要实现登记用户的封装
```
var User = function (name, age) {
	this.name = name;
	this.age = age;
}

User.prototype.display = function () {
	return '姓名是：' + this.name + ' 年龄是：' + this.age;
}
```

使用这种方式实现的封装，虽然达到了封装的目的，但数据可能会被修改。
```
var xiaoM = new User('小明', 5);
xiaoM.name = '小红';	// 同事手贱，不小心修改了姓名
xiaoM.age = 40;		// 自己脑残，不小心修改了年龄
xiaoM.display();	// 输出："姓名是：小红 年龄是：40"	悲剧了吧。
```

## 命名规范进行区别
通过给属性加上下划线（-）来区分私用属性可以达到命名规范的作用，但若要修改，依旧还是可以修改的，并无法隐藏信息。
```
var User = function (name, age) {
	this._name = name;
	this._age = age;
}
...
```

## 不公开的封装
```
var User = function (name, age) {
	var name = name;
	var age = age;

	this._getName = function () {
		return name;
	}

	this._getAge = function () {
		return age;
	}
}

User.prototype.display = function () {
	return '姓名是：' + this._getName() + ' 年龄是：' + this._getAge();
}

var xiaoM = new User('小明', 5);
xiaoM.name = '小红';	
xiaoM.age = 40;		
xiaoM.display();	// 输出：“姓名是：小明 年龄是：5”
```

## 封装的好处
* 封装保护了内部数据的完整性；
* 封装使对象的重构更轻松；
* 有助于避免命名空间冲突；
* ...

## 封装的坏处
* 私用方法很难测试；
* 容易形成过度封装；
* JavaScript并不原生支持封装，所以在JavaScript中实现封装存在复杂性的问题；
* ...
