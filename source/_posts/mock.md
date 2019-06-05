title: mock.js-无需等待，让前端独立于后端进行开发
date: 2014-8-22 18:13:37
categories: ['效率']
tags: ['效率', 'mock.js']
---

![](/images/mock.png)

概述
---
* 首先啦，我不认识mock.js的作者，带着需求找到mock.js让我觉得很惊艳。
* 相对于其他同类的框架的实现，mock.js超出了我的意料。
	* 基于 数据模板 生成模拟数据。
	* 基于 HTML模板 生成模拟数据。
	* 拦截并模拟 ajax 请求。
* 是的，mock.js只做上述的几件事，但做的足够出色。

<!-- more -->

解决的问题
---
开发时，后端还没完成数据输出，前端只好写静态模拟数据。

* 数据太长了，将数据写在js文件里，完成后挨个改url。
* 某些逻辑复杂的代码，加入或去除模拟数据时得小心翼翼。
* 想要尽可能还原真实的数据，要么编写更多代码，要么手动修改模拟数据。
* 特殊的格式，例如IP,随机数，图片，地址，需要去收集。
* 超烂的破网速..
* ...

以上都不再是问题
---
接下来体验 `拦截ajax请求并返回模拟数据`。

步骤1 - 安装
---
安装太简单，跳过

步骤2 - 配置模拟数据
---
```javascript
Mock.mock('http://g.cn', {
    'name'	   : '@name()',
    'age|1-100': 100,
    'color'	   : '@color'
});
```

步骤3 - 发送ajax请求(jquery版)
---
```javascript
$.ajax({
    url: 'http://g.cn',
}).done(function(data, status, xhr){
    console.log(
        JSON.stringify(data, null, 4)
    )    
})
```

步骤4 - 查看响应的结果
---
```javascript
// 结果1
{
    "name": "Elizabeth Hall",
    "age": 91,
    "color": "#0e64ea"
}

// 结果2
{
    "name": "Michael Taylor",
    "age": 61,
    "color": "#081086"
}

// 结果N ..
```

结尾
---
> ##### 演示： [mock-demo](http://mockjs.com/editor.html#help)
> ##### 演示： [mock-angular-demo](http://think2011.github.io/mock-angular/)


---
> ##### 技术： javascript
> ##### 时间： 2014年8月
> ##### 参考： [mock.js](http://mockjs.com/) 
> ##### 源码： [mock-angular](https://github.com/think2011/mock-angular)
> ##### 博客： [think2011](http://think2011.github.io/)