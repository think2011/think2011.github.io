title: coffeeScript学习笔记-2 class
date: 2014-6-4 23:26:19
categories: ['笔记']
tags: ['coffeeScript', 'javascript', 'coffeeScript学习笔记']
---
![](/images/2.png)
<!-- more -->

## 构造函数
定义构造函数（在实例化前调用的函数）很简单，使用名为constructor作为参数即可。
```coffeescript
# coffeescript
class Animal
  constructor: (@name) ->
  
// javascript
  Animal = (function() {
    function Animal(name) {
      this.name = name;
    }
    return Animal;
  })();
```

## @
@，我的理解是等同于this。
```coffeescript
# coffeescript
class Animal
  @name: '长颈鹿',
  name: '河马'
  
// javascript
 Animal = (function() {
    function Animal() {}
    Animal.name = '长颈鹿';
    
    Animal.prototype.name = '河马';
    return Animal;
  })();
```

## =>
=>是用来绑定上下文的，等同于自动做了 `var that = this;` 这个过程
```coffeescript
#这个this会指向到$('body')
class Animal
  show: ->
    $('body').click () ->
      console.log(this)

#这个this会指向到Animal
class Animal
  show: ->
    $('body').click () =>
      console.log(this)
```

## 继承
继承也非常方便，一句代码就完成了继承。
```coffeescript
class Animal
  name: '猴子'

class Human extends Animal
  show: ->
    console.log(@name)
```

