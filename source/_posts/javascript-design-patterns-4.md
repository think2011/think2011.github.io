title: javascript设计模式笔记-4 继承
date: 2014-4-16 23:41:55
categories: ['笔记']
tags: ['设计模式', 'javascript', 'javascript设计模式', '笔记']
---

## 简述继承
* 据说javascript的继承比其他面向对象的语言复杂，是少数使用 `原型式继承` 的语言之一，这也是javascript的优点。
* 做好继承能够达到代码复用，易维护的好处。
* 继承主要分为两种：`类继承` 和 `原型式继承`两种。

<!-- more -->

## 类继承
``` javascript
    function Person (name) {
        this.name = name;
    }

    Person.prototype.getName = function () {
        return this.name;
    };

    function Author (name, books) {
        Person.call(this, name);
        this.books = books;
    }

    Author.prototype = new Person();
    Author.prototype.constructor = Author;
    Author.prototype.getBooks = function () {
        return this.books;
    };
```

## 原型式继承
原型式继承 比 类继承感觉要容易理解得多。
```
    var Person = {
        name: null,
        getName: function () {
         return this.name;
        }
    }

    var Author = clone(Person);
    Author.name = 'jason';
    Author.getName();   // 输出jason

    function clone (object) {
        function F() {}
        F.prototype = object;
        return new F();
    }
```

## 一个原型式继承的例子

```
    var Fruit = {
        name: null,
        price: 0,
        count: function () {
            return this.name + '售价：' + this.price;
        }
    };

    var apple = clone(Fruit);
    apple.name = '苹果';
    apple.price = 5;
    alert(apple.count());

    var banana = clone(apple);
    banana.name = '香蕉';
    alert(banana.count());


    function clone (object) {
        function F() {}
        F.prototype = object;
        return new F();
    }
```
<a class="jsbin-embed" href="http://jsbin.com/ciretixi/3/embed?js,console">JS Bin</a><script src="http://static.jsbin.com/js/embed.js"></script>
