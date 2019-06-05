title: 阅读大块头《javascript 权威指南》笔记 5-语句
date: 2014-9-3 0:05:58
categories: ['笔记']
tags: ['javascript', 'javascript 权威指南', '笔记']

---

- 如果说表达式在 javascript 中是短语，那么语句就是 javascript 中的整句或者命令。
- 语句是以分号结束的。
- var 和 function 都是声明语句，分别是定义变量和函数。
- 如果 var 语句中变量没有指定初始化表达式，那么这个变量的值为 undefined
- break 是跳转到循环或者其他语句的结束。
- continue 是停止本次循环并执行下一次循环。
- return 可以让解释器挑出函数体的执行，并提供本次调用的返回值。
- 在严格模式中禁止用 with 语句。
- 严格模式中所有变量必须先声明。
- 严格模式中调用的函数中的 this 值是 undefined 而不是全局对象，可以用这个特性来判断是否严格模式。
