title: javascript设计模式笔记-17 职责链模式（完结）
date: 2014-5-23 0:13:23
categories: ['笔记']
tags: ['设计模式', 'javascript', 'javascript设计模式', '笔记']
---


## 简述
* 职责链是一个对象A向对象B发起请求，如果B不处理，那就转给C，如果C不处理，再转给D，一直到有对象能够处理为止。
* 这个理解类似转接电话等。
* 类似DOM中的事件冒泡，及javascript中的prototype链。

## 例子
这个一个比较难理解的例子

<!-- more -->

```javascript

    function Queue (person) {
        this.person = person;
    }

    Queue.prototype = {
        find: function () {
            this.person.find();
        }
    };

    var xiaoM = new Queue({
        name: '小明',
        find: function () {
            console.log('我是' + this.name);
        }
    });

    var xiaoH = new Queue(xiaoM);

    var xiaoG = new Queue(xiaoH);
    xiaoG.name = '小刚';
    xiaoG.find = function () {
        console.log('我是' + this.name);

        // 通过原型链的原理执行上一层find();
        Queue.prototype.find.call(this);
    };

    xiaoG.find();
```


