title: javascript设计模式笔记-16 命令模式
date: 2014-5-22 22:40:53
categories: ['笔记']
tags: ['设计模式', 'javascript', 'javascript设计模式', '笔记']
---

## 简述
* 命令模式就是将函数的调用、请求和操作封装成一个单一的对象。
* 然后就像下命令一样，直接通过命令就可以运行函数了。
* 或许是我没有理解清楚，感觉是个挺怪异的模式。
* 参考 [深入理解JavaScript系列（34）：设计模式之命令模式](http://www.cnblogs.com/TomXu/archive/2012/03/08/2358593.html)

## 例子
就拿一个电话的功能来作例子吧。

<!-- more -->

```javascript
var phone = {
    call : function (name, number) {
        alert('给 '+ name +'（'+ number +'）拨打电话。');
    },
    sms : function (name, number) {
        alert('给 '+ name +'（'+ number +'）发送信息。');
    }
}

// 增加命令模式
phone.execute = function (command) {
    return this[command.action](command.name, command.number);
};

phone.execute({
    action: 'call',
    name: '小明',
    number: '15555555555'
});

phone.execute({
    action: 'sms',
    name: '小明',
    number: '15555555555'
});
```