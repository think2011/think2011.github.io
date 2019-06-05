title: coffeeScript学习笔记-1 基本语法
date: 2014-5-29 0:34:34
categories: ['笔记']
tags: ['coffeeScript', 'javascript', 'coffeeScript学习笔记']
---

## 概述
* 声明变量不需要 `var`
* 结束不需要 `;`
* 函数能够设置默认参数
* 函数不需要 `return` 返回值，函数中最后一个表达式会自动作为返回值。
* 严格的空行，这个并不碍事，反倒觉得整洁规范了。
* 因为会自动产生 `map` 文件，所以浏览器能够直接定位到 `coffeescript` 文件对应的错误代码行。

![](/images/coffeescript1-1.gif)

## 注释
* 单行注释
```coffeescript
# 我是注释
```

<!-- more -->


* 多行注释
```coffeescript
###
	我是多行注释
###
```

## 变量
* `coffeescript` 不必担心创建全局变量
```coffeescript
a = '变量A'
```

* 当然也还是可以声明全局变量
```coffeescript
window.a = '全局变量A'
# 或者以下方式
this.a = '全局变量A'
```

## 函数
* `coffeescript` 的function语句特别简单，似乎有点简单的发指了，害怕写错，还是得习惯吧。：D
* 默认会 `return` 最后一个表达式作为返回值。
* 可以指定默认值
* 更简单 `arguments` 对象
```coffeescript
# 普通函数
count = (a, b) -> alert(a + b)
count(5,5)

# 带默认值的函数
count = (a = 5, b = 5) -> alert(a + b)
count()

###
    任意传参 原来的arguments对象
    forEach是子函数
###
count = (arg...) ->
    arg.forEach (v) -> alert(v)
count(1,2,3,4,5,6,7,8,9,0)
```

## 对象和数组
* 对象和数组可以省略 `;` 及 括号。
* `注意` 数组中的对象必须得带有括号，否则会被解析为单个对象。
```coffeescript
# 对象1
object1 = {one: 1, two: 2}

# 对象2
object2 =
  one: 1
  two: 2

# 数组1
array1 = [1, 2, 3, 4, {one: 1}, {two: 2}]

# 数组2
array2 = [
  1
  2
  3
  4
  {one: 1}
  {two: 2}
]
```

## 判断
* `==` 会被替换成 强等于 `===`
* 这种语法感觉很顺口，即使是中文。
```coffeescript
# 以下为节选，非完整版

# 1
if 5 == 5
  alert("我肯定会被执行了！")

# 2
if 5 == 5 then "ok" else "no ok"

# 3
alert("如果1<5，我会出现了") if 1 < 5

# 4
name = name ? '曾浩'
```

## 拼接字符串
* `coffeescript` 的拼接方式非常方便。
```coffeescript
name = "曾浩"
age = "23"

# 单行
alert("我叫#{name},今年#{age}岁！")

# 多行
str = "
       <p>我叫#{name}</p>
       <p>今年#{age}岁！</p>
      "
alert(str)
```

## 循环遍历
```coffeescript
# 以下为节选，非完整版

# 简单方式
for i in [1, 2, 3, 4]
  alert("当前数字是 #{i}")

# 带索引的
for index, i in [1, 2, 3, 4]
  alert("当前数字是 #{i}, 当前索引是 #{index}")
```