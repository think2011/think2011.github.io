title: 实践MEAN开发留言博客-1 (Mongodb+Express+Angularjs+Node.js)
date: 2014-4-1 0:10:14
categories: ['作品', 'node.js']
tags: ['MEAN', 'angularjs', 'node.js', 'express', 'mongoose', 'mongodb']
---


前言
===

既然题目设定为实践，那就简单点好了吧。
功能如下：

1. 任何人都可以 `发表` 文章
2. 任何人都可以 `阅读` 文章
3. 任何人都可以 `留言` 到文章

![图1](/images/MAEN_BLOG-1.png)

<!-- more -->

![图2](/images/MAEN_BLOG-2.png)

![图3](/images/MAEN_BLOG-3.png)

![图4](/images/MAEN_BLOG-4.png)

准备
===
* 以上功能通过MEAN的方式实现，为了不浪费大家时间，博主已经做好了 [静态页面，一点就下！](https://github.com/think2011/MEAN-BLOG/archive/static.zip)，让我们关注在实现过程吧。

动手
===
目录
---

```
├── app  // 存放前端页面
|    ├── index.html
|    ├── add.html
|    ├── posts.html
|    ├── content.html
|    └── ...
├── app.js
├── package.json
├── routes
|    └── index.js
└── ...
```

1. 实现页面切换
---
用 `NG(angularjs)` 的 `路由模块` 实现 `无刷新` 页面切换，达到以下效果。

* 进入 `首页` 载入 `posts.html`
* 点击 `发表文章` 载入 `add.html`
* 点击 `某篇文章` 载入 `content.html`

增加： `app/js/index.js` 

```
// 声明模块
var app = angular.module('app', ['ngRoute']); // 在模块中注入ngRoute（路由）模块

// 配置路由信息
app.config(function ($routeProvider) {
    $routeProvider.
        when('/', { 
            templateUrl: 'posts.html', // 当打开链接为 "/", 载入posts.html
            controller: postsCtrl // 对应的控制器为 postsCtrl, 以下雷同
        }).
        when('/post/add', {
            templateUrl: 'add.html',
            controller: postCtrl
        }).
        when('/post/:_id', {
            templateUrl: 'content.html',
            controller: contentCtrl
        }).
        otherwise({
            redirectTo: '/' // 其他情况，跳到链接"/"
        });
});

// 路由对应控制器
function postsCtrl ($scope) {
}

function postCtrl ($scope) {
}

function contentCtrl ($scope) {
}

// 启动模块
angular.bootstrap(document, ['app']);
```

修改： `app/index.html` 
```
    <div id="main">
        <!-- 路由区域 -->
        <ng-view />
    </div>
```

好了，现在可以去尝试点击链接了。
扩展阅读：[理解AngularJS ngRoute](http://congjf.info/2014/02/17/%E3%80%8Ejavascript%E3%80%8F%E7%90%86%E8%A7%A3ngroute/)

2. 尝试下NG指令
---
NG指令`(directive)`是NG框架里一个非常强大实用的一个功能，灵活的运用可以减少很多重复的工作，在这里，建立一个focus指令。

修改：  `app/js/index.js` 

```
var app = angular.module('app', ['ngRoute']);
...

// 声明一个指令
app.directive('focus', function () {
    return  {
        restrict: 'A', // 限制只能通过 属性(attribute) 调用
        link: function (scope, element, attr) {
            element[0].focus();
        }
    }
});
```
接下来应用到元素上去

修改： `app/add.html` 
```
<input focus type="text" placeholder="标题" />
```

修改： `app/content.html` 
```
<textarea focus placeholder="我想说.."></textarea>
```

效果：
![](/images/MAEN_BLOG-5.gif)

扩展阅读：[《AngularJS》5个实例详解Directive（指令）机制](http://damoqiongqiu.iteye.com/blog/1917971)

待续
===
前端部分基本上布置好了，下一篇继续吧！

---
> ##### 技术： angularjs
> ##### 时间： 2014年4月
> ##### 源码： [MEAN-BLOG](https://github.com/think2011/MEAN-BLOG/tree/master)