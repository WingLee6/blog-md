# 备忘录-Node语法和技巧


<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [〇. 预备内容](#〇-预备内容)
  - [0.1 简介](#01-简介)
  - [0.2 版本](#02-版本)
  - [0.3 安装](#03-安装)
- [一. NPM](#一-npm)
  - [1.1 NPM简介](#11-npm简介)
  - [1.2 安装NPM](#12-安装npm)
  - [1.3 安装NPM模块](#13-安装npm模块)
    - [1.3.1  查看已安装模块列表](#131--查看已安装模块列表)
    - [1.3.2 安装NPM模块](#132-安装npm模块)
      - [1. 全局安装 和 本地安装](#1-全局安装-和-本地安装)
      - [2. 使用淘宝 NPM 镜像](#2-使用淘宝-npm-镜像)
      - [3. 使用 package.json](#3-使用-packagejson)
    - [1.3.3 其他指令](#133-其他指令)
    - [1.3.5 报错处理](#135-报错处理)

<!-- /code_chunk_output -->


## 〇. 预备内容
### 0.1 简介
1. 简单的说 Node.js 就是运行在服务端的 JavaScript

### 0.2 版本

### 0.3 安装
1. 查看当前的 Node 版本的命令：
    ```node
    $ node -v
    v4.4.3
    ```

2. 安装
    + 参考教程: https://www.runoob.com/nodejs/nodejs-install-setup.html

3. 命令行执行测试
    ```node
    $ node
    > console.log('Hello World!');
    Hello World!
    ```
    
    退出方法: 
    + Ctrl+D 一次，就可以退出。
    + Ctrl+C 两次可以退出。
    + 命令行输入`.exit`, 回车. 直接可以退出。

4. 创建第一个应用
    https://www.runoob.com/nodejs/nodejs-http-server.html

## 一. NPM 
### 1.1 NPM简介
NPM是随同NodeJS一起安装的包管理工具，能解决NodeJS代码部署上的很多问题，常见的使用场景有以下几种：
1. 允许用户从NPM服务器下载别人编写的第三方包到本地使用。
2. 允许用户从NPM服务器下载并安装别人编写的命令行程序到本地使用。
3. 允许用户将自己编写的包或命令行程序上传到NPM服务器供别人使用。

### 1.2 安装NPM
由于新版的nodejs已经集成了npm，所以之前npm也一并安装好了。同样可以通过输入 "npm -v" 来测试是否成功安装。命令如下，出现版本提示表示安装成功:
```node
$ npm -v
2.3.0
```
> 旧版本安装: https://www.runoob.com/nodejs/nodejs-npm.html

### 1.3 安装NPM模块
#### 1.3.1  查看已安装模块列表
```shell
$ npm list -g

├─┬ cnpm@4.3.2
│ ├── auto-correct@1.0.0
│ ├── bagpipe@0.3.5
│ ├── colors@1.1.2
│ ├─┬ commander@2.9.0
│ │ └── graceful-readlink@1.0.1
│ ├─┬ cross-spawn@0.2.9
│ │ └── lru-cache@2.7.3
```

如果要查看某个模块(如grunt模块)的版本号，可以使用命令如下：
```shell
$ npm list grunt

projectName@projectVersion /path/to/project/folder
└── grunt@0.4.1
```

#### 1.3.2 安装NPM模块
##### 1. 全局安装 和 本地安装
以安装express模块为例
```bash
npm install express         # 本地安装
npm install express -g      # 全局安装
```
+ 本地安装
    1. 将安装包放在 ./node_modules 下（运行 npm 命令时所在的目录），如果没有 node_modules 目录，会在当前执行 npm 命令的目录下生成 node_modules 目录
    2. 在代码中只需要通过 require() 即可引入本地安装的包, 无需指定第三方包路径
+ 全局安装
    1. 将安装包放在 /usr/local 下或者你 node 的安装目录
    2. 可以直接在命令行里使用

注: 
+ 如果你希望具备两者功能，则需要在两个地方安装它或使用 `npm link`
+ `npm install`(install后没有参数)
    1. 作用: 在本地node_modules文件夹中安装依赖项
    2. 适用: 命令行在`package.json`所在目录下运行
    3. 使用1: 在全局模式下它安装当前包上下文（如,当前工作目录）作为全局包加上`-g`
    4. 使用2: 默认情况下，将安装列为依赖项的所有模块 在`package.json`中


##### 2. 使用淘宝 NPM 镜像
由于国内直接使用 npm 的官方镜像是非常慢的，这里推荐使用淘宝 NPM 镜像。

淘宝 NPM 镜像是一个完整 npmjs.org 镜像，你可以用此代替官方版本(只读)，同步频率目前为 10分钟 一次以保证尽量与官方服务同步。

你可以使用淘宝定制的 cnpm (gzip 压缩支持) 命令行工具代替默认的 npm:
```bash
$ npm install -g cnpm --registry=https://registry.npmmirror.com
```
这样就可以使用 cnpm 命令来安装模块了：
```bash
$ cnpm install [name]
```
1. 查看当前默认镜像: 
    ```bash
    $ npm config get registry
    ```
    默认为: https://registry.npmjs.org/
2. 设置为淘宝镜像:
    ```bash
    $ npm config set registry https://registry.npm.taobao.org/
    $ npm config get registry
    https://registry.npm.taobao.org/
    ```   


##### 3. 使用 package.json
package.json 位于模块的目录下，用于定义包的属性。接下来让我们来看下 express 包的 package.json 文件，位于 node_modules/express/package.json 内容：
```json
{
  "name": "express",
  "description": "Fast, unopinionated, minimalist web framework",
  "version": "4.13.3",
  "author": {
    "name": "TJ Holowaychuk",
    "email": "tj@vision-media.ca"
  },
  ......
}
```
Package.json 属性说明
+ `name` - 包名。
+ `version` - 包的版本号。
+ `description` - 包的描述。
+ `homepage` - 包的官网 url 。
+ `author` - 包的作者姓名。
+ `contributors` - 包的其他贡献者姓名。
+ `dependencies` - 依赖包列表。如果依赖包没有安装，npm 会自动将依赖包安装在 node_module 目录下。
+ `repository` - 包代码存放的地方的类型，可以是 git 或 svn，git 可在 Github 上。
+ `main` - main 字段指定了程序的主入口文件，require('moduleName') 就会加载这个文件。这个字段的默认值是模块根目录下面的 index.js。
+ `keywords` - 关键字


#### 1.3.3 其他指令
1. 卸载模块
    我们可以使用以下命令来卸载 Node.js 模块。
    ```bash
    $ npm uninstall express
    ```
    卸载后，你可以到 /node_modules/ 目录下查看包是否还存在，或者使用以下命令查看：
    ```bash
    $ npm ls
    ```

2. 更新模块
    我们可以使用以下命令更新模块：
    ```bash
    $ npm update express
    ```

3. 搜索模块
    使用以下来搜索模块：
    ```bash
    $ npm search express
    ```
4. 创建模块
    见教程: https://www.runoob.com/nodejs/nodejs-npm.html
    


#### 1.3.5 报错处理 
1. 安装NPM模块时报错: `npm err! Error: connect ECONNREFUSED 127.0.0.1:8087`
    解决办法为：
    ```bash
    $ npm config set proxy null
    ```

