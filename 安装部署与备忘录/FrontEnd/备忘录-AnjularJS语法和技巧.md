# 备忘录-AnjularJS语法和技巧


<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [〇. 预备内容](#〇-预备内容)
  - [0.1 简介](#01-简介)
  - [0.2 版本](#02-版本)
  - [0.3 安装使用](#03-安装使用)
    - [在线引入](#在线引入)
  - [0.4 插件](#04-插件)

<!-- /code_chunk_output -->


## 〇. 预备内容
### 0.1 简介 
+ AngularJS 通过新的属性和表达式扩展了 HTML
+ AngularJS 可以构建一个单一页面应用程序(SPAs：Single Page Applications)
+ AngularJS 是一个 JavaScript 框架。它可通过 `<script>` 标签添加到 HTML 页面
+ AngularJS 通过 **指令** 扩展了 HTML，且通过 **表达式** 绑定数据到 HTML

### 0.2 版本
| 版本号 | 发布事件 | 新特性 | 备注 | 
| - | - | - | - |

> 各个 angular.js 版本下载: https://github.com/angular/angular.js/releases 

### 0.3 安装使用
#### 在线引入
```html
<script src="https://cdn.staticfile.org/angular.js/1.4.6/angular.min.js"></script>
```

### 0.4 插件
暂无


## 一. 表达式
### 1.1 格式 - `{{ 表达式 }}` 或  `ng-`
示例: 
```html
<div ng-app="">
  <p>sum = {{ 5 + 5 }}</p>
</div>
```
1. 表达式的内容
    

