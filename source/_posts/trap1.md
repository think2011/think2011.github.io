title: 今天把自己给坑了，在大型项目中，你能看出来坑在哪里吗？
date: 2014-10-24 12:35:03
categories: ['js']
tags: ['javascript', '坑', '陷阱']
---

以下情况，`#demo1` 永远不会变色，知道为什么吗？

这个把我坑惨了，在复杂的构造函数中很难找出原因，也说明了基础很重要，哦不，实战更重要。

## coffee版
```coffeescript
class Test1
    constructor: (el) ->
        @el   = el
        @set1()
        @set2()
        
    set1: ->
        p = """<p>这是一个测试</p>"""
        document.body.innerHTML += p
        
    set2: ->
        @el.style.background = 'blue'
        
demo1 = new Test1 document.querySelector('#demo1')
```

<!-- more -->

## javascript版
```javascript
var Test1, demo1;

Test1 = (function() {
  function Test1(el) {
    this.el = el;
    this.set1();
    this.set2();
  }

  Test1.prototype.set1 = function() {
    var p;
    p = "<p>这是一个测试</p>";
    return document.body.innerHTML += p;
  };

  Test1.prototype.set2 = function() {
    return this.el.style.background = 'blue';
  };

  return Test1;

})();

demo1 = new Test1(document.querySelector('#demo1'));

```

> ##### 时间： 2014年10月
