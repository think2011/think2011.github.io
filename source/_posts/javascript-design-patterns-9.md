title: javascript设计模式笔记-9 组合模式
date: 2014-4-24 22:56:01
categories: ['笔记']
tags: ['设计模式', 'javascript', 'javascript设计模式', '笔记']
---

## 简述
* 组合模式是将一系列类似的小对象组合成大的对象，由这个大对象提供接口来对里面的小对象进行操作。
* 组合模式可以理解为树状结构。
* 因此组合模式适合对大批对象的操作，特别是层次结构分明的。

<!-- more -->

## 组合模式例子
```javascript
        function ImagesStore (id) {
            this.children = [];

            this.element = document.createElement('div');
            this.element.id = id;
            this.element.className = 'imgs-store';
        }
        ImagesStore.prototype = {
            constructor: ImagesStore,

            add: function (child) {
                this.children.push(child);
                this.element.appendChild(child.getElement());
            },

            remove: function (child) {
                    for(var node, i = 0; node = this.getChild(i); i++) {
                    if(node === child) {
                        this.children.splice(i, 1);
                        break;
                    }
                    this.element.removeChild(child.getElement());
                }
            },

            getChild: function (i) {
                return this.children[i];
            },

            getElement: function () {
                return this.element;
            },

            show: function () {
                this.element.style.display = '';
                for(var node, i = 0; node = this.getChild(i); i++) {
                    node.show();
                }
            },

            hide: function () {
                for(var node, i = 0; node = this.getChild(i); i++) {
                    node.hide();
                }
                this.element.style.display = 'none';
            }
        };

        function ImageItem (src) {
            this.element = document.createElement('img');
            this.element.src = src;
            this.element.className = 'img-item';
        }

        ImageItem.prototype = {
            constructor: ImagesStore,

            getElement: function () {
                return this.element;
            }
        };

        var store = new ImagesStore('imgs');
        store.add(new ImageItem('1.jpg'));
        store.add(new ImageItem('2.jpg'));

        document.body.appendChild(store.element);
```
