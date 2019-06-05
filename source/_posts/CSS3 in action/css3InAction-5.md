title: CSS3实战 笔记5-完善的和模型和UI设计
date: 2015-03-09 00:46:34
categories: ['笔记']
tags: ['CSS3实战', 'CSS', '笔记']
---

## border-color
* CSS3 增加了这个属性，使用它可以为边框设置更多的颜色。
* 如果只为该属性设置一个颜色值时，表示宽边设置为纯色，如果设置N个值，且边框宽度为N像素，那么可以在该边框上使用N中颜色，每个颜色显示1像素的宽度，如果边框宽度为10个像素，但是只声明了5种颜色，那么最后一种颜色用于剩下的宽度。
* 可设置四个边框的颜色属性
	* border-top-color
	* border-right-color
	* border-bottom-color
	* border-left-color

<!-- more -->

## border-radius
定义边框圆角

## box-shadow
* 与 text-shadow 属性相同，但是作用对象不同。
* 默认阴影为 外阴影，可以设置 inset 表示内阴影。
* 可以设置多组参数。

## background
* CSS3允许在该属性中添加多个背景图像组，背景之间通过 "," 进行分割。
* 子属性
	* background-image 定义图像背景
	* background-color 定义背景颜色
	* background-origin 定义背景的显示区域
	* background-clip 定义背景的裁剪区域
	* background-repeat 定义图像如何重复
	* background-size 定义图像大小
	* background-position 定义图像的位置
	* background-attchment 定义图像的显示方式

## overflow-x 和 overflow-y
* 定义块级元素的内容溢出时，是否裁剪显示。
* 属性说明
	* visible 默认值
	* auto 
	* hidden
	* scroll
	* no-display 超出元素尺寸时，不显示元素
	* no-content 超出元素尺寸时，不显示内容。

## box-sizing
定义和模型尺寸的解析方式。

## resize
允许用户自定义缩放元素的尺寸。
* 属性说明
	* none
	* both 允许调整宽度和高度
	* horizontal 允许调整宽度
	* vertical 允许调整高度
	* inherit 继承

## outline
定义外轮廓线，不占据空间。

## content
为元素添加内容
* 属性说明
	* normal
	* string 文本内容
	* attr() 插入元素的属性值
	* uri 外部资源，图像、音频、视频等
	* counter() 计数器，用于插入排序标示
	* none 无内容

> [实战练习源码](https://github.com/think2011/css3InActive-practice)