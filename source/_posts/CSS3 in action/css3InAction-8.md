title: CSS3实战 笔记8-动画设计
date: 2015-03-31 23:44:20
categories: ['笔记']
tags: ['CSS3实战', 'CSS', '笔记']
---

## transform
设置变形函数，可以是一个或多个变形函数列表。

* matrix() 矩阵变换
* translate() 移动元素对
* scale() 缩放元素
* rotate() 旋转元素
* skew() 倾斜对象

## transform-origin
CSS变形的原点默认是对象的中心点，可以通过此属性重新定义。

## transition
动画转换过程，例如渐现、渐弱等。

* transition-property 定义转换动画的名称，例如 background-color
* transition-duration 定义转换动画的时长
* transition-delay 定义动画的延迟时间
* transition-timing-function 定义动画的效果，例如 ease、linear等

## animation
定义动画

* animation-name 定义动画名称
* animation-duration 定义动画时长
* animation-timing-function 定义播放方法，例如 ease、linear等
* animation-delay 定义动画的延迟时间
* animation-iteration-count 定义动画播放的次数
* animation-direction 定义动画播放的方向


> [实战练习源码](https://github.com/think2011/css3InActive-practice)