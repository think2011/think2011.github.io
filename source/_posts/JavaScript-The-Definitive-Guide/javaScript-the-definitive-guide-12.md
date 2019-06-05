title: 阅读大块头《javascript 权威指南》笔记 11-服务器端 javascript
date: 2014-11-1 12:24:44
categories: ['笔记']
tags: ['javascript', 'javascript 权威指南', '笔记']

---

- Rhino 是一种用 java 编写的 javascript 解释器，实现了通过 javascript 访问整个 java API。

- Node 是官方的名字，Node.js 非官方的名字，用于和其他 Node 区分。

- Node 是基于 C++的高速 javascript 解释器，绑定了用于进程、文件和网络套接字等底层 Unix API，还绑定了 HTTP 客户端和服务端 API。

- 除了专门命名的同步方法外，Node 的绑定都是异步的，且默认不阻塞。

- Node 在 process 命名空间中定义了重要的全局属性。
- `process.version` 版本号
- `process.argv` 命令行的数组参数
- `process.env` 环境变量对象，例如 `process.env.PATH`
- `process.pid` 进程 id
- `process.cwd()` 返回当前工作目录
- `process.getuid()` 返回当前用户 id
- `process.chdir()` 改变目录
- `process.exit()` 退出
