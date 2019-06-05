title: directive中的transclude里的scope BUG
date: 2014-5-15 11:23:48
categories: ['js']
tags: ['angularjs', 'directive', 'transclude']
---

## 概述
恩，这个标题起的很有逻辑的样子 ：D
直接来看一小段代码。
```javascript
// html
<body ng-controller="appCtrl">
 <blue-label>
   我是在 transclude 里的 a: {{ a }}
   <br />
   <input type="text" ng-model="a">
  </blue-label>
  
  我是在 外面 里的 a: {{ a }}
</body>

// javascript
var appModule = angular.module('app', []);

appModule.directive('blueLabel', function() {
    return {
        restrict: 'E',
        template: '<div style="background:skyblue;"><span ng-transclude></span></div>',
        transclude: true
    };
});

appModule.controller('appCtrl',function($scope) {
    $scope.a = '初始化内容';
});
```

可能你会认为 `scope.a` 要么就是在directive里，要么就是在controller里，可事实有点诡异。

* controller把 `scope.a` 初始化了。
* `scope.a` 却在directive里（不确定），未与controller同步。

<!-- more -->

---

<a class="jsbin-embed" href="http://jsbin.com/tojuk/1/embed">JS Bin</a><script src="http://static.jsbin.com/js/embed.js"></script>

## 解决方案
解决的办法很简单。

* 在 controller 中 初始化 `scope.a` 为 `Object` 类型。
* `scope.a` 改为 `scope.a.data`，即 `data` 作为原属性。

---

<a class="jsbin-embed" href="http://jsbin.com/tojuk/2/embed">JS Bin</a><script src="http://static.jsbin.com/js/embed.js"></script>

---
> ##### 技术： angularjs v1.2
> ##### 时间： 2014年5月
