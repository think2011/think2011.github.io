title: 体验异步的终极解决方案-ES7的Async/Await
date: 2015-11-09 22:44:07
categories: ['作品', 'js']
tags: ['javascript', 'node.js', 'ES7','async','await']
---

> 阅读本文前，期待您对promise和ES6(ECMA2015)有所了解，会更容易理解。
> 本文以体验为主，不会深入说明，结尾有详细的文章引用。

## 第一个例子
Async/Await应该是目前最简单的异步方案了，首先来看个例子。

这里我们要实现一个暂停功能，输入N毫秒，则停顿N毫秒后才继续往下执行。

```js
var sleep = function (time) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve();
        }, time);
    })
};

var start = async function () {
    // 在这里使用起来就像同步代码那样直观
    console.log('start');
    await sleep(3000);
    console.log('end');
};

start();
```

控制台先输出`start`，稍等`3秒`后，输出了`end`。

## 基本规则
1. async 表示`这是一个async函数`，`await只能用在这个函数里面`。

2. await 表示在这里`等待promise返回结果`了，再继续执行。

3. await 后面跟着的`应该是一个promise对象`（当然，其他返回值也没关系，只是会立即执行，不过那样就没有意义了..）

<!-- more -->

## 获得返回值
await等待的虽然是promise对象，但不必写`.then(..)`，直接可以得到返回值。

```js
var sleep = function (time) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            // 返回 ‘ok’
            resolve('ok');
        }, time);
    })
};

var start = async function () {
    let result = await sleep(3000);
    console.log(result); // 收到 ‘ok’
};
```

## 捕捉错误
既然`.then(..)`不用写了，那么`.catch(..)`也不用写，可以直接用标准的`try catch`语法捕捉错误。

```js
var sleep = function (time) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            // 模拟出错了，返回 ‘error’
            reject('error');
        }, time);
    })
};

var start = async function () {
    try {
        console.log('start');
        await sleep(3000); // 这里得到了一个返回错误
        
        // 所以以下代码不会被执行了
        console.log('end');
    } catch (err) {
        console.log(err); // 这里捕捉到错误 `error`
    }
};
```

## 循环多个await
await看起来就像是同步代码，所以可以理所当然的写在`for`循环里，不必担心以往需要`闭包`才能解决的问题。

```js
..省略以上代码

var start = async function () {
    for (var i = 1; i <= 10; i++) {
        console.log(`当前是第${i}次等待..`);
        await sleep(1000);
    }
};
```

值得注意的是，`await`必须在`async函数的上下文中`的。

```js
..省略以上代码

let 一到十 = [1,2,3,4,5,6,7,8,9,10];

// 错误示范
一到十.forEach(function (v) {
    console.log(`当前是第${v}次等待..`);
    await sleep(1000); // 错误!! await只能在async函数中运行
});

// 正确示范
for(var v of 一到十) {
    console.log(`当前是第${v}次等待..`);
    await sleep(1000); // 正确, for循环的上下文还在async函数中
}
```

## 第二个例子
这个例子是一个小应用，根据电影文件名，自动下载对应的海报。

![](https://raw.github.com/think2011/ES7-Async-Await-Demo/master/app-demo.gif)

直接贴出代码，就不说明了。
```js
import fs from 'fs';
import path from 'path';
import request from 'request';

var movieDir = __dirname + '/movies',
    exts     = ['.mkv', '.avi', '.mp4', '.rm', '.rmvb', '.wmv'];

// 读取文件列表
var readFiles = function () {
    return new Promise(function (resolve, reject) {
        fs.readdir(movieDir, function (err, files) {
            resolve(files.filter((v) => exts.includes(path.parse(v).ext)));
        });
    });
};

// 获取海报
var getPoster = function (movieName) {
    let url = `https://api.douban.com/v2/movie/search?q=${encodeURI(movieName)}`;

    return new Promise(function (resolve, reject) {
        request({url: url, json: true}, function (error, response, body) {
            if (error) return reject(error);

            resolve(body.subjects[0].images.large);
        })
    });
};

// 保存海报
var savePoster = function (movieName, url) {
    request.get(url).pipe(fs.createWriteStream(path.join(movieDir, movieName + '.jpg')));
};


(async () => {
    let files = await readFiles();

    // await只能使用在原生语法
    for (var file of files) {
        let name = path.parse(file).name;

        console.log(`正在获取【${name}】的海报`);
        savePoster(name, await getPoster(name));
    }

    console.log('=== 获取海报完成 ===');
})();
```

## 其他信息
微软的Edge浏览器已经率先支持了async/await语法，相信不久之后chrome等浏览器、node.js也会跟进的，超期待！~(≧▽≦)/~

## 一些资料和工具
* [文中讲到的例子的源代码 https://github.com/think2011/ES7-Async-Await-Demo](https://github.com/think2011/ES7-Async-Await-Demo)
* [方便的在线babel运行环境 https://babeljs.io/repl/](https://babeljs.io/repl/)
* [很详细的异步编程教程 http://es6.ruanyifeng.com/#docs/async](http://es6.ruanyifeng.com/#docs/async)
* [很详细的promise小书 http://liubin.github.io/promises-book/#introduction](http://liubin.github.io/promises-book/#introduction)
