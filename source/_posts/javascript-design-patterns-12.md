title: javascript设计模式笔记-12 装饰者模式
date: 2014-4-29 1:46:48
categories: ['笔记']
tags: ['设计模式', 'javascript', 'javascript设计模式', '笔记']
---

## 简述
* 像是包装礼品一样，一层一层的包装起来。
* 装饰者模式适合给对象添加新特性。

<!-- more -->

## 例子
```javascript
    function Water () {
        this.desc = '水';
        this.cost = function () {
            return 0;
        };
    }

    // 咖啡
    function Coffee (water) {
        this.desc = '咖啡';
        this.cost = function () {
            return 5 + water.cost();
        };
    }

    // 糖
    function Sugar (water) {
        this.desc = '糖';
        this.cost = function () {
            return 2 + water.cost();
        };
    }

    // 咖啡
    var coffee = new Coffee(new Water());
    console.log(coffee.cost()); // 5

    //加糖的咖啡
    var coffee2 = new Sugar(coffee);
    console.log(coffee2.cost()); // 7
```