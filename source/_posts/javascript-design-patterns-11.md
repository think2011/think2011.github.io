title: javascript设计模式笔记-11 适配器模式
date: 2014-4-27 15:24:54
categories: ['笔记']
tags: ['设计模式', 'javascript', 'javascript设计模式', '笔记']
---

## 简述
* 大概就是说，适配器模式相当于一个万能手机充电器。
* 在不变动原有API的基础下，通过适配器模式将旧API改进成新的API。
* 例如某个API原来是输出XML的，可以通过适配器改进成输出为JSON。
* 如果有重写代码的必要，在这种情况下不必采用适配器模式。

<!-- more -->

## 例子
```javascript
	var fruits = ['苹果', '香蕉', '草莓'];

	var basket = function (fruit) {
		alert(fruit);
	}
	basket(fruits[0]);
	basket(fruits[1]);
	basket(fruits[2]);

	// 适配器模式
	var basketAdapter = function (obj) {
		obj.forEach(function (v) {
			basket(v);
		});
	}
	basketAdapter(fruit);
```
