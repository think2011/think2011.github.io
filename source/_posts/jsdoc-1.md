title: 用jsdoc3自动生成JS API文档
date: 2014-3-29 17:18:16
categories: ['效率']
tags: ['jsdoc', '效率', '文档']
---

简介
---
* `jsdoc`是一款自动产生JS文档的工具。
* 你得按照它的`注释规范`来写代码注释，才能够生成合适的文档。
* 我曾经写过`各种风格`的混乱注释，用`一个个文本`来存放管理我的代码库，当我不想再写某段重复难懂的代码的时候，我不得不在我的代码库里游来游去，好头疼啊！！它救了我！！ 

预览
---
* 它可以根据你写的代码自动生成这样的文档出来，[看这里](http://davidshimjs.github.io/jaguarjs/doc/)。
![](/images/jsdoc-1.jpg)
* 能够搜索，有详细的注释，保存了完整的代码... 很方便，是不是！
* 接下来就动手吧！

<!-- more -->

安装
---
 1. 安装 [node.js](http://nodejs.org/) 
 2. 通过`node包管理器(NPM)`安装`jsdoc`，`cmd`下运行以下代码
 3. 安装完毕


 ```
 npm install jsdoc -g 
 ```


示例
---
* 写类似这样的代码
``` javascript
/**
 * @name Uploader
 * @class 异步文件上传组件，支持ajax、flash、iframe三种方案
 * @constructor
 * @extends Base
 * @requires UrlsInput
 * @requires IframeType
 * @requires  AjaxType
 * @param {Object} config 组件配置（下面的参数为配置项，配置会写入属性，详细的配置说明请看属性部分）
 * @param {Button} config.button *，Button按钮的实例
 * @param {Queue} config.queue *，Queue队列的实例
 * @param {String|Array} config.type *，采用的上传方案
 * @param {Object} config.serverConfig *，服务器端配置
 * @param {String} config.urlsInputName *，存储文件路径的隐藏域的name名
 * @param {Boolean} config.isAllowUpload 是否允许上传文件
 * @param {Boolean} config.autoUpload 是否自动上传
 * @example
 * var uploader = new Uploader({button:button,queue:queue,serverConfig:{action:'test.php'}})
 */
function Uploader(config) { ... }
```
> 完整的注释规范：[看这里](http://usejsdoc.org/#JSDoc_Examples)

* 配置 `conf.json`
```
{
    "tags": {
        "allowUnknownTags": true
    },
    "source": {
    	"include": ["src"],
        "includePattern": ".+\\.js(doc)?$",
        "excludePattern": "(^|\\/|\\\\)_"
    },
	"templates": {
		"cleverLinks": true,
		"monospaceLinks": true,
		"default": {
			"outputSourceFiles" : true
		},
		"applicationName": "demo",
		"openGraph": {},
		"meta": {}
	}
}

```
> 完整的conf.json介绍 [看这里](http://usejsdoc.org/about-configuring-jsdoc.html)


* `cmd`下输入 `jsdoc -c conf.json` ，出现的`out`文件夹就是生成好的文档。


![](/images/jsdoc-2.gif)

模板
---
> Q: 博主，怎么我生成的文档界面跟你的不一样啊... ( ⊙ o ⊙ )啊！
> A: 哦，那是因为我为了吸引你进来特地换了个好看的模板呀。
> p.s: 自带模板除了没有搜索，都挺好的。

我直接把jsdoc`默认的模板`替换了

1. 图中的模板是 [jaguarjs-jsdoc](https://github.com/davidshimjs/jaguarjs-jsdoc) ，下载下来，解压，待用。
2. 删除清空 `C:\%user%\%用户名%\AppData\Roaming\npm\node_modules\jsdoc\templates\default` ，然后把 [jaguarjs-jsdoc](https://github.com/davidshimjs/jaguarjs-jsdoc) 放入进去即可
![](/images/jsdoc-3.gif)

参考资料
---
> 文中代码来自 [使用jsdoc生成组件API文档—jsdoc实战](http://www.36ria.com/5101)