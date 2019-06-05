title: javascript设计模式笔记-10 门面模式
date: 2014-4-27 1:59:21
categories: ['笔记']
tags: ['设计模式', 'javascript', 'javascript设计模式', '笔记']
---

## 简述
* 门面模式简化了复杂接口。
* 解耦合，统一提供接口。

<!-- more -->

## 例子
例如添加事件，在旧版本IE浏览器中使用attachEvent，而其他浏览器则是其他，这里可以用门面模式统一提供接口。
```javascript
        var addEvent = function (el, type, fn) {
            if(el.addEventListener) {
                el.addEventListener(type, fn, false);
            } else if (el.attachEvent) {
                el.attachEvent('on' + type, fn);
            } else {
                el['on' + type] = fn;
            }
        }
```

