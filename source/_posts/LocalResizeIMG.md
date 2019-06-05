title: LocalResizeIMG-前端HTML5本地压缩图片
date: 2014-5-16 3:24:01
categories: ['作品', 'js']
tags: ['javascript', '上传', '压缩', 'LocalResizeIMG']
---


# 前端HTML5本地压缩图片，兼容移动设备IOS,android。

## 概述
* 通常压缩图片需要上传到后端，由后端处理。
* 但是如果要上传的图片很大，特别是手机当场拍摄下来的照片（约2M+），那样效率会很低，用户也不会愿意等待。
* 现在能够由前端本地压缩的话，效率将会极大的提升。

## BUG修复 1.0
* 修复android下压缩无效果的问题
* 修复IOS压缩图片扭曲的问题。
* 微信的话... 经过测试，目前新版本都支持触发上传了，大赞！XD


## BUG修复 1.1
* 修复某些网友反映IOS图片方向不对的问题。（说出原因估计会被打死.. 因为我写错参数了..）
* 增加 `angularJs` 支持，双向绑定方式。

![图1](/images/LocalResizeIMG1.gif)


## 使用方法-jquery
```javascript
	$('input:file').localResizeIMG({
	     width: 100,
	     quality: 0.1,
	     // before: function () {},
	     success: function (result) {
	     var img = new Image();
	     img.src = result.base64;

	     $('body').append(img);
	     console.log(result);
	     }
	 });
```

## 使用方法-angularjs
1. 引入 `patch/angular-localResizeIMG.js`
2. 直接看代码吧。
```coffeescript
	# js（coffeescript版）
	app = angular.module 'app', ['localResizeIMG']

	# html (任何元素都能够响应上传，无关view，意味着你可以用任何姿势调用)
	<button local-resize-img l-width="300" l-quality="0.7" ng-model="pic">上传</button>
	<img ng-src="pic.base64" />
```

demo
---
具体详情请查看 源代码，或者 [demo](http://think2011.github.io/localResizeIMG/)。

## PS
这是8个月前的测试文章的延伸，[点我去看看](http://my.oschina.net/hzplay/blog/160806)。


> ##### 技术： jquery
> ##### 时间： 2014年5月
> ##### 源码： [Guthub](https://github.com/think2011/LocalResizeIMG)
