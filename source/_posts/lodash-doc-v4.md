title: Lodash4正式版发布了！以及提前翻译的中文文档
date: 2016-1-13 22:44:07
categories: ['作品', '翻译']
tags: ['javascript', 'lodash', '中文文档', '翻译']
---

2015年对 Lodash 来说是很赞的一年。

Lodash 成为了 [npm 依赖最多的包](https://gist.github.com/anvaka/8e8fa57c7ee1350e3491#file-01-most-dependent-upon-md)，多达[十亿次](http://npm-stat.com/charts.html?package=&author=jdalton)的下载次数， v3版本已经广泛的使用了！

![](/images/lodash4-intro-1.png)

在 2016 与 [lodash v4.0.0](https://github.com/lodash/lodash/wiki/Changelog#v400)，我们想要摆脱束缚，更进一步！

## 仅限于现代化

<!-- more -->

在 v4在 中我们将会更新[旧项目](https://github.com/lodash-archive) & 运行环境 & [放弃支持 IE 9 以下](https://www.microsoft.com/en-us/WindowsForBusiness/End-of-IE-support)！

## 4 kB 的核心

Lodash 的大小会随着时间继续增长，新的方法 & 功能的增加，无论如何，我们依然保持 [4 kB (gzipped)](https://github.com/lodash/lodash/tree/4.0.0/dist) 的核心构建。兼容 Backbone v1.2.4 和 不喜欢累赘的朋友。

## 更多的 ES6+

在 v4 中增加了支持：拷贝 & 比较 maps, sets, & symbols, 比较 array buffers, 转换 iterators 到 arrays, & Lodash itself, _(...), is an iterable.

[继续拥抱 ES6+](https://github.com/lodash/lodash/tree/4.0.0-es/)，增加类似：_.isSafeInteger, _.isSymbol, &_.toInteger & 重命名方法 trimLeft 到 trimStart的方法。

## 更多模块化

突击测试！ 📣

bindAll 是属于哪个的分类？

A) require('lodash/function/bindAll')
B) function('lodash/utility/bindAll')
C) require('lodash/util/bindAll')

不知道？没关系，在 v4 中已经无所谓了，现在的模块路径变得简单了：

`var bindAll = require('lodash/bindAll');`

我们让最小化构建变得简单，协助了类似 [Async](https://github.com/caolan/async/pull/996) & [Redux](https://github.com/rackt/redux/pull/611) 容易使用 lodash！

## 一等的FP(函数式编程)

在 v3 中 我们引入了 [lodash-fp](https://github.com/lodash-archive/lodash-fp)。我们学到了很多，并决定纳入 v4 的核心中。

现在你可以容易的 get immutable iteratee-first, data-last auto-curried methods：

```js
var _ = require('lodash/fp');
var object = { 'a': 1 };
var source = { 'b': 2 };
var newObject = _.assign(source)(object);

console.log(newObject);
// => { 'a': 1, 'b': 2 }

console.log(object);
// => { 'a': 1 }

var convert = require('lodash/fp/convert');
var assign = convert('assign', require('lodash.assign'));
// 一样有效!
```

## Chakra 优化

事实上，我们对 [Chakra非常感兴趣](https://blogs.windows.com/msedgedev/2015/12/05/open-source-chakra-core/)，Lodash 是对**所有引擎**优化的。不同于很多库，我们不喜欢单引擎，所以无论你使用的是什么引擎依然都有很好的性能。

在 v4 中，我们继续承诺扩展性能支持惰性计算 & 提高例如循环引用这样的核心功能的性能。

## Emojis

更上一个档次，Lodash v4 支持了 emojis！包括：
astral symbols, unicode modifiers, variation selector characters, zero-width joiners, & regional indicator symbols.

![](/images/lodash4-intro-2.png)

## 重大变化

我们在这个版本中做了很多改进，所以请记得看 [changelog](https://github.com/lodash/lodash/wiki/Changelog#compatibility-warnings)。以及提供了 [lodash-migrate](https://www.npmjs.com/package/lodash-migrate) (即将发布) 方便更新到最新版本。

要是你喜欢 lodash v4，别忘了 [star the repo](https://github.com/lodash/lodash/stargazers) 或者 npm star lodash！

## 中文文档

最后楼主在之前就在翻译中文文档 [http://think2011.github.io/lodash-zh/](http://think2011.github.io/lodash-zh//)，会在近期内翻译完成与官方同步，有任何疑问和意见非常在站内留言！;-)