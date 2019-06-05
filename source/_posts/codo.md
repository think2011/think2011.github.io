title: Codo - Coffeescript的文档生成工具
date: 2014-9-17 18:03:10
categories: ['效率']
tags: ['文档', 'coffeescript', 'node.js', '文档生成工具']
---

![CODO](/images/codo-2.png)

## 概述
* Codo就是相对javascript的jsdoc，codo是coffeescript的文档生成工具。（真绕口..）
* 以前并没有太在意文档，随着能力提升，发现开发文档是有多么的重要，真的很重要！
* 那么介绍就到这里吧！


<!-- more -->

## 例子
```coffeescript
# 这是一个用来造人的类
# 
# @example 演示怎么造一个人
# 	jason = new Human 'jason', '男'
#
# @todo 下次进化就增加更多的实例方法
# 
class Human 
  # 默认有头
  @head  = true

  # 默认有身体
  @body  = true

  # 默认有四肢
  @limbs = true

  # 构造一个人出来
  #
  # @param name [String] 姓名
  # @param sex  [String] 性别
  # @param birthDate [Date] 生日
  #
  constructor: (@name, @sex, @birthDate = Date.now()) ->
  
  # 会说话
  #
  # @example 默认说中文
  #  jason.talk '大家好，我是jason，我中国人，中文名？我没有哦！'
  #
  # @param word [String] 要说的话
  # @param language [Object] 语言
  # @option language [String] country 国家
  # @option language [String] localism 口音
  # @return [String] word
  #
  talk: (word, language = {country: 'cn', localism: 'normal'}) ->
  	return word
```

## 使用方法
![CODO](/images/codo-1.gif)

是的，并不麻烦，以上的方式会自动在当前目录下寻找.coffee文件，然后生成文档，更多的参数可以查看文档。

## 生成结果
![CODO](/images/codo-2.png)


## 结语
遗憾的是目前没有找到构建工具gulp对应的插件，如果有的真的太方便了。

---
> ##### 技术： coffeescript
> ##### 时间： 2014年9月
> ##### 参考： [codo](https://github.com/coffeedoc/codo)
> ##### 博客： [think2011](http://think2011.github.io)