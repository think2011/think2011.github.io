title: 阅读大块头《javascript 权威指南》笔记 9-类和模块
date: 2014-10-30 22:48:56
categories: ['笔记']
tags: ['javascript', 'javascript 权威指南', '笔记']

---

- 在 javascript 中，类的实现是基于原型继承机制的。

- 如果两个实例都从同一个原型对象上继承了属性，我们称之为同一个类的实例。

- 使用 `instanceof` 运算符来检测对象是否属于某个类，例如 `r instanceof Range`，返回布尔值。

- 实际上 `instanceof` 不会检测 r 是否由 `Range()` 构造函数初始化而来，而会检查 r 是否继承自 `Range.prototype`，这也说明了构造函数是类的共有标示的概念。

- 基于原型的继承机制是动态的，也就是说如果修改了原型，会影响到所有继承这个原型的实例对象，当然也意味着可以通过给原型添加新方法来扩充 javascript 类。

- 通过 `isPrototypeOf()` 可以检测对象的原型链上是否存在某个原型对象。 `range.methods.isPrototypeOf(r);` ,返回布尔值。

- 但是 `instanceof` 和 `isPrototypeOf` 的缺点是无法通过对象来获得类名，只能检测对象是否属于指定的类名，在客户端 javascript 中有个严重的不足，就是在多窗口和多框架中，每个都居中单独的执行上下文，每个上下文都包含独有的全局变量和构造函数，所以例如来自两个框架的 `Array()` 返回的结果是 `false`的。

* `null` 和 `undefined` 没有构造函数。

* `constructor` 可以 类名来判断是否来自同一个构造函数。
