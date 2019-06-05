title: angularjs 实现的省市区地址级联选择器
date: 2014-06-27 03:45:02
categories: ['作品', 'angularjs']
tags: ['地址联动', 'angularjs', 'directive', '级联']
---
select-address2.1
========================

angularjs 实现的省市区地址级联选择器
---
找了很久的jquery地址联动的插件都没有合适的，封装进angularjs也略麻烦，干脆自己用angularjs写了一份。

目前是2.1.2版本 (已支持多例)


![](/images/select-address-1.gif)

<!-- more -->

![](/images/select-address-2.png)

说明：
```
#
# 地址选择器 2.1.2
# @param {scope} p 省份
# @param {scope} a 区域
# @param {scope} c 县级
# @param {scope} d 地址
# @example
# <input select-address p="p" c="c" a="a" d="d" ng-model="xxx" placeholder="请选择所在地" type="text" class="form-control" />
#
```

demo: [点我去看](http://think2011.github.io/cascading-select-address/)

---
> ##### 技术： angularjs
> ##### 时间： 2014年4月
> ##### 源码： [cascading-select-address](https://github.com/think2011/cascading-select-address/tree/master)