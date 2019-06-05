title: 用node.js实现验证码简单识别
date: 2016-01-31 21:01:50
categories: ['作品', 'js']
tags: ['javascript', 'node.js', '验证码识别','ocr']
---


## 概述
在验证码识别上，`node.js`其实也只是打酱油的角色，因为已经有成熟的工具做这个事情，而`node`只需要做调度就行了。


![](/images/orc-2.gif)

<!-- more -->

## 所需工具
那么介绍一下这些工具吧

* `Tesseract` 开源的 `OCR` 识别工具，目前由 `Google` 维护，支持中文，默认的识别率很低哈，特别是中文，但是可以自己提供样本，训练提高识别率。
* `graphicsmagick` 非常实用的图像处理工具，下面会讲到用途。

## Tesseract的使用
> 以下操作均在 Mac 环境下，Windows 其实也差不多，请自行区分 :-)。

### 安装
`brew install tesseract --all-languages`

### 使用
`tesseract 1.jpg -psm 7 r`
> `-psm 7` 表示识别的内容是文本，`r`是保存识别内容的文件。

然后你会发现识别结果很坑.. (⊙o⊙)..
![](/images/orc-1.gif)

## 提高识别率
之所以是这样，是因为验证码上有无关的图像干扰，例如噪点什么的，理论上去掉了干扰的元素，识别率就会极大的提高。
用阈值处理图片是个很方便的办法，在`Photoshop中可以模拟这种操作`。
![](/images/orc-2.gif)

### 再试一次
这里配置为55%的阈值，再来一次。
![](/images/orc-3.gif)

成功了！( ⊙ o ⊙ )！虽然多了个空格，但是已经完整识别出来了。

## 用node.js实现
最后在`node.js`中整合上面的操作，其中图像处理用 `graphicsmagick` 代替。
直接上源码吧，里面用到了 `tesseract` 和 `graphicsmagick` 在`node.js`中对应的包装。

```js
var fs        = require('fs');
var tesseract = require('node-tesseract');
var gm        = require('gm');

processImg('1.jpg', 'test_1.jpg')
    .then(recognizer)
    .then(text => {
        console.log(`识别结果:${text}`);
    })
    .catch((err)=> {
        console.error(`识别失败:${err}`);
    });

/**
 * 处理图片为阈值图片
 * @param imgPath
 * @param newPath
 * @param [thresholdVal=55] 默认阈值
 * @returns {Promise}
 */
function processImg (imgPath, newPath, thresholdVal) {
    return new Promise((resolve, reject) => {
        gm(imgPath)
            .threshold(thresholdVal || 55)
            .write(newPath, (err)=> {
                if (err) return reject(err);

                resolve(newPath);
            });
    });
}

/**
 * 识别图片
 * @param imgPath
 * @param options tesseract options
 * @returns {Promise}
 */
function recognizer (imgPath, options) {
    options = Object.assign({psm: 7}, options);

    return new Promise((resolve, reject) => {
        tesseract
            .process(imgPath, options, (err, text) => {
                if (err) return reject(err);
                resolve(text.replace(/[\r\n\s]/gm, ''));
            });
    });
}
```

## 最后
写完之后才发现示例中的验证码的第一个字符其实是 G，而不是识别出来的C。
默认样本对相近字符识别还是挺低的，可以搜索 `tesseract 训练`，提高相近字符的识别率。

## 资源
* [node-tesseract](https://github.com/desmondmorris/node-tesseract) tesseract的node包装
* [gm](https://github.com/aheckmann/gm) graphicsmagick的node包装
* [node-ocr-demo](https://github.com/think2011/node-ocr-demo) 还做了一个 demo 放在 github 上了