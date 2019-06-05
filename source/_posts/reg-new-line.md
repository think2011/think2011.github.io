title: javascript正确匹配换行符
date: 2015-12-21 13:19:45
categories: ['js']
tags: ['javascript', '中文','正则表达式','换行符']
---


![](/images/reg-new-line-1.png)

根据文档匹配换行符的方式应该是`\r\n`，实测却无效，原因是换行符在各系统下的匹配都是不一致的。

* windows \r 匹配换行
* *unix \r\n 匹配换行
* mac \n 匹配换行

所以最终的写法应该是`\r\n|\r|\n`。

P.S：截图是我常用的匹配工具，找到几款在线的正则匹配都无法高亮换行和溢出，顺手修复BUG还联系不上作者就先放到的自己的空间了。

[http://think2011.net/regex-tester/](http://think2011.net/regex-tester/)

