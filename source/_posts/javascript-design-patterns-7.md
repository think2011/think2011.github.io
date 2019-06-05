title: javascript设计模式笔记-7 工厂模式
date: 2014-4-20 20:14:39
categories: ['笔记']
tags: ['设计模式', 'javascript', 'javascript设计模式', '笔记']
---

---
    终于正式开始写设计模式了，希望接下来能够尽量用形象合适的例子讲解自己理解的设计模式。

## 简述
* 顾名思义，就是根据 人们 `（调用者）` 的需求 `（参数）`，生产对应的产品 `（对象）`。
* 弱化了对象间的耦合。
* 减少代码重复代码。

<!-- more -->

## 简单工厂模式
就拿 `做饭吃` 举个例子好了。

1. 准备食材 
2. 根据食材做出相应的饭菜

工厂模式的方式就是不用去关注细节 `(做饭过程)`，关注结果就好了，细节在别的部分完成。
```javascript
var home = {
    eat: function (material) {
        var food;
        switch (material) {
            case '鸡蛋':
                food = '鸡蛋炒饭';
                break;

            case '白菜':
                food = '白菜炒饭';
                break;

            case '黄瓜':
                food = '黄瓜炒饭';
                break;

            default:
                food = '剩饭炒饭';
        }

        return food;
    }
}

var m1 = home.eat('鸡蛋');     // 周一 吃鸡蛋炒饭
var m2 = home.eat('黄瓜');     // 周二 吃黄瓜炒饭，真难吃！！
var m3 = home.eat();        // 周三 太晚下班了，没买到食材，吃剩饭。 ：（
```

这种 `简单工厂模式` 是挺简单的，但不够灵活，正如例子中，老是自己做饭好累的。：（

## 复杂工厂模式
所以还可以去饭店、餐厅吃饭。
只要是饭店，都可以 吃饭`(通用的方法)`，做饭什么的`(不同的方法)` 都交给饭店就好了，只管吃。

```
var Restaurant = {
        eat: function (material) {
            var food = this.menu(material);
            return food;
        },
        menu: function (material) {
            // 空白的菜单
        }
}

// 来自 笔记4 的继承方法
 function clone (object) {
        function F() {}
        F.prototype = object;
        return new F();
 }

// 开张了一家沙县
var shaXian = clone(Restaurant);
shaXian.menu = function (material) {
    var food;
        switch (material) {
            case '鸡蛋':
                food = '鸡蛋蒸饺';
                break;

            case '白菜':
                food = '白菜蒸饺';
                break;

            case '黄瓜':
                food = '黄瓜蒸饺';
                break;

            default:
                food = '蒸饺';
        }
        return food;
}

// 开张了一家 清真面馆
var qingZhen = clone(Restaurant);
qingZhen.menu = function (material) {
    var food;
        switch (material) {
            case '鸡蛋':
                food = '鸡蛋面';
                break;

            case '白菜':
                food = '白菜面';
                break;

            case '黄瓜':
                food = '黄瓜面';
                break;

            default:
                food = '面';
        }
        return food;
}

var m4 = shaXian.eat('鸡蛋');  // 周四去 沙县 吃鸡蛋蒸饺，不好吃。
var m5 = qingZhen.eat('鸡蛋');     // 周五去 清真面馆 吃鸡蛋面，还可以吧。
```