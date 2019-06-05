title: 编写高质量javascript代码的68个有效方法 笔记1-让自己习惯javascript
date: 2014-12-08 16:16:24
categories: ['笔记']
tags: ['编写高质量javascript代码的68个有效方法', '笔记']
---

* 严格模式（strict mode）允许在受限制的javascript版本中禁止使用一些问题较多易出错的特性。该特性向后兼容，但是旧引擎不会进行任何的严格模式检查，也不会出错。

* javascript的数值类型只有一种，不管是整数还是浮点数，都归类为数字。事实上javascript中所有的数字都是双精度浮点数。

* javascript中有7个假值：false、0、-0、""、NaN、null和undefined，其他都是真值。

* 除了对象之外，javascript有5个原始值类型：布尔值、数字、字符串、null和undefined，但是对null进行typeof运算却得到 "object"，是因为ECMA标准描述其为一个独特的类型。

* 可以在每个文件前缀加一个额外的分号';'来避免受粗心连接的影响。

