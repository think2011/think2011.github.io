title: Gulp.js-livereload 不用F5了，实时自动刷新页面来开发
date: 2014-4-7 18:20:22
categories: ['效率']
tags: ['gulp', 'node.js', '效率', 'npm']
---


![](/images/gulp-livereload1.gif)

前言
---
正如上图所示，使用 `gulp-livereload`，可以实时保存刷新，那样就不用按F5和切换界面了，无形中省了好多时间，有没有！：D

<!-- more -->

* Gulp.js：比 `Grunt` 更简单的`自动化项目构建工具`
* gulp-livereload：顾名思义，这是 Gulp.js 中的`其中一个插件`，本文的主题就是它了。

安装
---
第一步：`全局安装`gulp 和 `当前目录部署` gulp 和 gulp-livereload
```
npm install gulp -g
npm install gulp gulp-livereload --save-dev
```

第二步：安装 `chrome` 插件，[点我就去安装](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei)

使用
---
第一步： 当前目录新建 `gulpfile.js` 文件，写入以下代码。
```
var gulp = require('gulp'),
    livereload = require('gulp-livereload');

gulp.task('watch', function () {    // 这里的watch，是自定义的，写成live或者别的也行
    var server = livereload();
    
    // app/**/*.*的意思是 app文件夹下的 任何文件夹 的 任何文件
    gulp.watch('app/**/*.*', function (file) {
        server.changed(file.path);
    });
});
```

第二步： 命令行下运行
```
gulp watch
```
此时，你会发现当你修改 `app` 文件夹下的任何文件，命令行都会有内容输出，说明能够监控到文件的变化，运作正常了。

第三步： 以服务器的方式打开页面，例如 `localhost:3000`，而不是 `file:///F:/web/app/index.html`
接着点击刚刚安装的 `chrome插件` ，中间变为实心黑色圆点表示开始运作了。

![](/images/gulp-livereload2.gif)


**现在只要文件一保存，浏览器就会马上刷新了。**

> 后续的问题：2014年8月28日18:04:59

* 有不少朋友问到这篇文章的问题。
* 首先很抱歉，这篇文章**已经过时了**，现在有更简单方便的代替方案了。
* 更方便的是 [gulp-webserver](https://www.npmjs.org/package/gulp-webserver) 或者 [livereload](https://github.com/mockko/livereload) 


> ##### 技术： node.js+npm
> ##### 扩展： [Gulp.js—比Grunt更易用的前端构建工具](http://www.36ria.com/6373)
> ##### 时间： 2014年4月
