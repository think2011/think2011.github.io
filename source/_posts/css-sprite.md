title: 有效解决 css sprite 图片使用 rem 单位边角缺失的问题
date: 2017-03-31 08:20:44
categories: ['css']
tags: ['css', 'sprite', 'rem']
---

## 起因
<center>

![](/images/css-sprite-1.gif)
![](/images/css-sprite-1_1.png)

</center> 

在移动端使用 rem 布局时 sprite 图片也需要用 rem 单位。
但由于浏览器对小数单位精度解析的差异，在不同设备上一些图片看起来会缺了一点点，或者多了一点点..

## 有哪些方案？

1. 【百分比 background-position】
    既然不能写固定单位，那么用百分比应该可以吧？
    其实上面的截图正是用的百分比，网络上见到大多数也有提到这个方法，但博主的实践来看，并没有效果，或许是哪里没做好..
2. 【提高数值精度】
    浏览器没办法精确的处理小数，那么提高数值精度就好了吧。
    例如原本 `23.12456rem` ,提高 100 倍, 写成 `2312.456rem` 这样浏览器解析就会准确多了。

<!-- more -->

下面提到的办法就是 【2】 的方案


## 怎么做？

#### 思路
* 单位数值变大了，整体也会变得很大，需要缩小回原来的尺寸。
* 缩小尺寸可以使用 css 的 zoom，或者 transform scale，建议使用后者，原因可以看下最后的【参考文档】

#### 小障碍

<center>

![](/images/css-sprite-3.gif)

</center>

* 从图中可以看到，scale 的缩放并不会影响到布局
* 那么可以借助 伪元素 让要缩放的图片脱离文档流

#### 编写代码

最后写下以下代码
<center>

![](/images/css-sprite-2.gif)

</center>

```css
.icon-my {
    width: 2.13333rem;
    height: 2.13333rem;
    position: relative; /* 相对定位 */
}

.icon-my:after {
    content: '';
    width: 10000%;  /* 放大100倍 */
    height: 10000%;
    position: absolute; 
    left: 0;
    top: 0;
    background: url(icon-index.png) no-repeat -245.33333rem 0; /* 单位尺寸放大100倍 */
    background-size: 593.06667rem 458.66667rem;
    transform-origin: 0 0; /* 不从中心点缩放 */
    transform: scale(0.01); /* 缩放回原尺寸 */
}
```

## 一些别的研究

* 相对于维护麻烦的 css sprite，其实还有 Data URI（base64的方式），而且不会遇到文章里想要解决的问题，推荐阅读【参考文档】里的资料

<center>

![盗图一张🐶](https://img.aotu.io/FqFshsS87Z4RBBjVkGA80JkxMD1j)

</center>

* 在 ~~不远的将来~~ 人们会逐渐用上 http2，借助 多路复用 的特性，不做 css sprite 看样子性能会更好。
* 据说缩放 100 倍，在移动页面上会导致严重性能问题，但博主暂时没试出来..

## 参考文档

[移动端性能大比拼：CSS Sprites vs. Data URI](http://www.csdn.net/article/2013-09-13/2816925-CSS-Sprites-vs.-Data-URIs:-Which-is-Faster-on-Mobile)
[假如HTTP/2已经普及](https://aotu.io/notes/2016/06/14/http2/)
[zoom和transform:scale()的区别](http://www.cnblogs.com/Hchun/p/5291400.html)
[移动端适配之雪碧图(sprite)背景图片定位 (百分比方案)](http://www.jianshu.com/p/d3b19968a4c2)
[移动端web app自适应布局探索与总结 (提高数值精度方案)](https://segmentfault.com/a/1190000003931773)


## github库

[https://github.com/think2011/gulp-icons](https://github.com/think2011/gulp-icons)
相关代码和调试可以看下上面的代码库，也欢迎 star 收藏。