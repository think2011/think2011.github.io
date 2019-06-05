title: 前后端coffeescript解析效率测试
date: 2014-6-30 0:15:51
categories: ['js']
tags: ['javascript', 'coffeescript']
---
## 概述
* 觉得总是引用编译后的coffeescript很麻烦，而且文件有些累赘。
* 所以打算直接引用coffeescript试试。
* 这是一个简单的测试，目的是衡量选择效率还是选择时间。


## 测试代码(节选)

前端
``` javascript
for (var i = 0; i <= 10000000; i++) {}
document.write('前端javascript运行时间：' + (Date.now() - window.timestamp) + '毫秒');
```

``` coffeescript
i = 0
while i <= 10000000
    i++
document.write "前端coffeescript运行时间：#{(Date.now() - window.timestamp)}毫秒"
```

<!-- more -->

后端
``` javascript
var http = require('http');

http.createServer(function (req, res) {
    var timestamp = Date.now();
    for (var i = 0; i <= 10000000; i++) {}
    res.end('后端javascript运行时间：' + (Date.now() - timestamp) + '毫秒');
}).listen(3000);
```

``` coffeescript
http = require "http"

http.createServer((req, res) ->
  timestamp = Date.now()
  i = 0
  while i <= 10000000
    i++
  res.end "后端coffeescript运行时间：#{(Date.now() - timestamp)}毫秒"
).listen 3000
```

## 结果
![](/images/nodejs-blog-refactor-coffeescript-report.png)

* 虽然这是一个不严谨的测试，但结果也能说明，在前端引用 `coffee-script.js` 是不明智的。
* 但出乎意料的是，后端的 `coffeescript` 居然比原生的还快？？ Σ( ° △ °|||)︴
* 希望懂专业测试的朋友能够验证一下上一条的结论。

## 总结
* coffeescript真心好用，既然前端麻烦一些，但我也还是很愿意用的！
* 之前以为会难于在原生和coffeescript之间切换思维，现在看来是多虑了，我能够很顺畅的转换两种语法思维。：D


---
> ##### 技术： javascript & coffeescript
> ##### 时间： 2014年6月

