title: 为什么不可以提前 new 构造函数？
date: 2015-1-13 12:38:37
categories: ['作品', 'js']
tags: ['javascript', '作用域', '声明提升']
---
> 查看本文之前，期待您了解过 javascript变量声明提升(hoisting)的机制

### 先来看一段函数声明的代码
``` javascript
f();

function f() {
    alert('正常运行');
}
```
这段代码能够正常执行吗？

显然是可以的。
根据javascript的机制，这段代码将被解析为：
``` javascript
var f;

f = function() {
  alert("正常运行");
};

f();

```

### 如果是构造函数呢？
``` javascript
new F();

function F() {
    this.init();
}
F.prototype.init = function () {
    alert('正常运行');
}
```
凭直觉，这段代码能够正常执行吗？

<!-- more -->

答案却是：不能
`prototype`并不会一起被提前声明，所以解析之后的代码是：
``` javascript
var F;

F = function() {
  this.init();
};

new F(); // 在这时候，prototype还没有init属性

F.prototype.init = function() {
  alert("正常运行");
};
```

### 那么构造函数的 new 运算符都做了什么呢？

1. 创建一个新的对象，这个对象的类型是object。
2. 该对象的prototype设置为构造器的prototype属性，即this.prototype = Foo.prototype (伪代码)
3. 执行构造器函数。
4. 如果构造器函数有返回值，则以该对象作为返回值。若没有return或return了基本类型，则将上述的新对象作为返回值。


### 总结
实际上在构造函数的`第2步` 已经定义了好了 `prototype`，这时自定义的 `prototype` 还不存在，自然就无效了。
那么就最好的方式，函数还是提前声明后执行吧！
