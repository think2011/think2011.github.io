title: 实践MEAN开发留言博客-2 (Mongodb+Express+Angularjs+Node.js)
date: 2014-4-2 0:04:03
categories: ['作品', 'node.js']
tags: ['MEAN', 'angularjs', 'node.js', 'express', 'mongoose', 'mongodb']
---

继续
===
[上一篇](http://think2011.github.io/2014/04/01/MEAN-BLOG-1/)中基本上完成前端的构架，现在来完成后端的内容。

准备
===
1. 安装并启动 `mongodb` 数据库，[没用过？看这里](http://www.cnblogs.com/qq4004229/archive/2011/11/11/2245599.html)
2. 通过 `package.json` 下载模块 `express` 和 `mongoose` 
```
npm install
```

<!-- more -->

动手
===

1. 搭建后端路由
---
新增： `/app.js`

```
var express = require('express'),
    routes = require('./routes');

var app = express();
app.use(express.bodyParser());  // 用于接收GET和POST的请求及解析等 (据说在新版本的express会被取代，但目前能用)
app.use(express.static(__dirname + '/app'));    // 设置静态文件目录路径

// 把app传入routes中，在routes/index.js中处理路由请求
routes(app);

// 启动服务
app.listen(3000);
```

新增： `/routes/index.js`

```
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/MEAN-BLOG');  // 连接数据库，记得要启动mongodb数据库哦

// 建立文章schema
var PostSchema = new Schema({
    title: String,
    content: String,
    comments: [{comment: String}],
    date: {type: Date, default: Date.now()}
});

// 建立文章model
var Post = mongoose.model('Post', PostSchema);

module.exports = function (app) {

    // 输出所有文章，并按时间排序
    app.get('/posts', function (req, res) {
        Post.find({}).sort({date: -1}).exec(function (err, docs) {
            res.json(docs);
        });
    });

    // 接收并保存文章到数据库
    app.post('/post/add', function (req, res) {
        var post = new Post(req.body);

        post.save(function (err, docs) {
            res.json({status: 'done'});
        });
    });

    // 根据获取的_id，输出对应的文章
    // 评论是包含在文章的JSON里面的，所以无需另外获取
    app.get('/post/:_id', function (req, res) {
        var _id = req.params._id;

        Post.findOne({_id: _id}).exec(function (err, docs) {
            res.json(docs);
        });
    });

    // 存储文章对应的评论
    app.post('/post/:_id/comment', function (req, res) {
        var _id = req.params._id,
            comment = req.body;

        Post.update({_id: _id}, {$push: {comments: comment}}).exec(function (err, docs) {
            res.json({status: 'done'});
        });
    });

    // 其他任何未定义的路由情况都默认输出 index.html 页面
    app.get('*', function (req, res) {
        res.sendfile('app/index.html');
    });
    
};
```
> 扩展阅读： [Mongoose学习参考文档](http://cnodejs.org/topic/504b4924e2b84515770103dd)

2. 前端路由处理
---
修改： `/app/js/index.js`
```
// 文章列表控制器
function postsCtrl ($scope, $http) {    // 注入$Http服务,类似于jquery的ajax
    $http.get('/posts').success(function (data) {
        $scope.posts = data; // 将获得的数据保存到NG的数据模型
    });
}

// 发布文章控制器
function postCtrl ($scope, $http, $location) {  // 注入$location服务
    $scope.form = {};   // 初始化一个NG数据模型
    $scope.form.submit = function () {
        $http.post('/post/add', $scope.form).success(function () {
            $location.url('/'); // 返回首页
        });
    };
}

// 文章内容控制器
function contentCtrl ($scope, $http) {
    // 根据点击的链接，发送对应的请求
    $http.get('/post/' + $routeParams._id).success(function (data) {
        $scope.post = data; // 将获取到的数据 通过$scope绑定成NG的数据模型
    });

// 文章内容控制器
function contentCtrl ($scope, $http, $routeParams) {
    // 根据点击的链接，发送对应的请求
    $http.get('/post/' + $routeParams._id).success(function (data) {
        $scope.post = data; // 将获取到的数据 通过$scope绑定成NG的数据模型
    });

    // 文章内评论处理
    $scope.form = {};
    $scope.form.submit = function () {
        $http.post('/post/' + $routeParams._id + '/comment', $scope.form).success(function () {
             // 因为NG会自动根据数据模型更新HTML页面，所以这里只需修改数据模型
            $scope.post.comments.push({
                comment: $scope.form.comment
            });

            $scope.form.comment = '';   // 清空输入框
        });
    };
}
```

看起来似乎内容非常多，其实很多是重复的，并不复杂。

> 精简注释版

```
// 文章列表控制器
function postsCtrl ($scope, $http) {    
    $http.get('/posts').success(function (data) {
        $scope.posts = data;
    });
}

// 发布文章控制器
function postCtrl ($scope, $http, $location) {
    $scope.form = {}; 
    $scope.form.submit = function () {
        $http.post('/post/add', $scope.form).success(function () {
            $location.url('/'); 
        });
    };
}

// 文章内容控制器
function contentCtrl ($scope, $http, $routeParams) {
    $http.get('/post/' + $routeParams._id).success(function (data) {
        $scope.post = data;
    });

    $scope.form = {};
    $scope.form.submit = function () {
        $http.post('/post/' + $routeParams._id + '/comment', $scope.form).success(function () {
            $scope.post.comments.push({
                comment: $scope.form.comment
            });

            $scope.form.comment = ''; 
        });
    };
}
```

3. 前端页面处理
---

修改： `/app/add.html`

![](/images/MAEN_BLOG-5.png)

修改： `/app/content.html`

![](/images/MAEN_BLOG-6.png)

结语
===
到这里就完成了整个功能了，我个人认为这种模式是很方便的，后端只需提供数据，前端
负责显示，逻辑比较清晰，最后是完成后的效果图。

![](/images/MAEN_BLOG-6.gif)

---
> ##### 技术： angularjs + express + node.js + mongoose
> ##### 时间： 2014年4月
> ##### 源码： [MEAN-BLOG](https://github.com/think2011/MEAN-BLOG/tree/master)