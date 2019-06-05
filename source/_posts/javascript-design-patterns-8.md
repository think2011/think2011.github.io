title: javascript设计模式笔记-8 桥接模式
date: 2014-4-22 0:24:29
categories: ['笔记']
tags: ['设计模式', 'javascript', 'javascript设计模式', '笔记']
---

## 简述
* GoF定义，桥接模式的作用在于“将抽象与其实现隔离开来，以便二者独立变化”。
* 设计API接口时，桥接模式非常有用，可以确保类和对象之间的依赖是低耦合的。
* 桥接模式其实很容易实现，可能你已经很多次不经意的使用过它。

<!-- more -->

## 桥接模式
```
var Class1 = function (a, b, c) {
 this.a = a;
 this.b = b;
 this.c = c;
}

var Class2 = function (d) {
    this.d = d;
}

var BridgeClass = function (a, b, c, d) {
    new Class1(a, b, c);
    new Class2(d);
}
```