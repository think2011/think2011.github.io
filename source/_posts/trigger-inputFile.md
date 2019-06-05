title: javascript触发input-file的click事件
date: 2014-5-16 19:38:18
categories: ['js']
tags: ['上传', 'input-file', 'javascript']
---

## 概述
* input:file本身自带的样式不太好看，但是又没法设置样式。
* 由于系统限制，不能通过代码触发，只允许用户自主点击。
* 通常的解决办法是，把input:file透明化，实际上点击的还是input:file。

<!-- more -->

## 方案
* 虽然可以通过概述中的办法用css实现，但始终还是占据了位置。
* 以下的通过javascript实现的触发事件，简单的一行代码即可搞定：D
```html
<body>
  <input type="file" id="demo">
  <hr>

  <h5 onclick="document.querySelector('#demo').click()")>虽然我不是按钮，不过你点我的话，是可以触发上传的哦，
    <br>
    p.s:即使input:file隐藏了也能。</h5>
</body>
```

<a class="jsbin-embed" href="http://jsbin.com/wiyog/1/embed">JS Bin</a><script src="http://static.jsbin.com/js/embed.js"></script>


> ##### 技术： javascript
> ##### 时间： 2014年5月
