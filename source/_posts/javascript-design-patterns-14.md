title: javascript设计模式笔记-14 代理模式
date: 2014-5-18 22:20:05
categories: ['笔记']
tags: ['设计模式', 'javascript', 'javascript设计模式', '笔记']
---

## 简述
* 很好理解，就是原来自己做的事情，交给别人做。
* 当需要隐藏信息时可以使用。
* 当需要延迟处理时可以使用。
* 当需要安全权限时可以使用。

## 例子
通常工资都是由 财务 代发的，财务负责统计和发放之类的，但是钱是由 BOSS 出的。
财务就是一个代理，来看例子。
```javascript
var Employee = function (name) {
    this.name = name;
}

var AccountantProxy = function (name, money) {
    this.name = (new Employee(name)).name;
    
    // 这里假如做了一大堆计算之后
    this.money = money;
}

AccountantProxy.prototype.grant = function () {
    alert(this.name + ', 给你发 '+ this.money +' 工资啦！');
}

// 发放工资
var haoMoney = new AccountantProxy('曾浩', 1000);
haoMoney.grant();
```