title: javascript设计模式笔记-13 享元模式
date: 2014-5-6 0:41:44
categories: ['笔记']
tags: ['设计模式', 'javascript', 'javascript设计模式', '笔记']
---

## 简述
* 公司里的打印机就是一个很好的享元模式的例子。
* 如果不使用享元模式，就意味着每个员工都一台打印机，现实中很浪费是不是。
* 享元模式的做法就是仅需一台或几台打印机，每个人都可以去用，这样就节省了很多开支。
* 享元模式的主要功能是优化内存占用。
* 调试、维护会相应变得复杂。

<!-- more -->

## 未使用享元模式
```javascript
    var Doc = function (text, type) {
        this.text= text;
        this.type = type;
    };

    Doc.prototype = {
        getType: function () {
            return this.type;
        }
        print: function () {
            alert('打印：' + this.text);
        }
    };

    var doc1 = new Doc('doc1', 'doc文档');
    doc1.print();

    var doc2 = new Doc('doc2', 'excel文档');
    doc2.print();
```

## 使用享元模式
```javascript
    var Doc = function (text, type) {
        this.text= text;
        this.type = type;
    };

    var docManager = function () {
        var docs = {};

        return {
            add: function (text, type) {
                var doc = docs[text];
                return doc ? doc : docs[text] = new Doc(text, type);
            },
            print: function (text) {
                alert('打印：' + docs[text].text);
            }
        }
    }();

    var doc1 = docManager.add('doc1', 'doc文档');
    docManager.print(doc1.text);

    var doc2 = docManager.add('doc2', 'excel文档');
    docManager.print(doc2.text);
```