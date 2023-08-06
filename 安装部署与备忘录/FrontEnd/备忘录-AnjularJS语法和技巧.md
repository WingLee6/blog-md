# 备忘录-AnjularJS语法和技巧


<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [〇. 预备内容](#〇-预备内容)
  - [0.1 简介](#01-简介)
  - [0.2 版本](#02-版本)
  - [0.3 安装使用](#03-安装使用)
    - [在线引入](#在线引入)
  - [0.4 插件](#04-插件)
  - [0.5 术语了解](#05-术语了解)
- [一. 表达式](#一-表达式)
  - [方法一： `{{}}`](#方法一-)
  - [方法二： `ng-bind=""`](#方法二-ng-bind)
  - [方法三: `ng-model=""`](#方法三-ng-model)
  - [`{{}}` & `ng-bind=""` & `ng-model=""` 的总结](#--ng-bind--ng-model-的总结)
  - [特殊属性的特别写法](#特殊属性的特别写法)
- [二.指令](#二指令)
  - [ng-app 指令定义一个 AngularJS 应用程序](#ng-app-指令定义一个-angularjs-应用程序)

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

### 0.5 术语了解
1. view层和model层
    view层表示页面层， model层表示“后台代码”。
    用于数据绑定等内容


## 一. 表达式
### 方法一： `{{}}`
```html
<div ng-app="myApp" ng-controller="myCtrl">
    <h1>方式一: {{ }}</h1>
    算式直接出结果:<p>{{10 + 19}}</p>
    字符（字符串）:<p>{{strName}}</p>
    字符（字符串）绑定多个变量:<p>{{strName}}{{nAge}}</p>
    字符（字符串）拼接:<p>{{strName + nAge}}</p>
    数字:<p>{{nAge}}</p>
    布尔值:<p>{{isChecked}}</p>
    数组:<p>{{cityList}}</p>
    数组元素:<p>{{cityList[0]}}</p>
    对象:<p>{{foodObj}}</p>
    对象内容1: <p>{{foodObj.aVal}}</p>
    对象内容2: <p>{{foodObj['bVal']}}</p>
</div>

<script>
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.strName = "John Doe";
    $scope.nAge = 11
    $scope.isChecked = true
    $scope.cityList = ['Paris', 'Shanghai']
    $scope.foodObj = {
        aVal: 'aaa',
        bVal: 'bbb'
    }
});
</script>
```
+ 单向

### 方法二： `ng-bind=""`
```html
<div ng-app="myApp" ng-controller="myCtrl">
    <h1>方式二: ng-bind=''</h1>
    算式直接出结果:<p ng-bind="6 + 3"></p>
    字符（字符串）:<p ng-bind="strName; nAge"> </p>
    字符（字符串）- 只能绑定单个变量，显示最后一个:<p ng-bind="strName; nAge"> </p>
    字符（字符串）拼接:<p ng-bind="strName + nAge"> </p>
    数字:<p ng-bind="nAge"></p>
    布尔值:<p ng-bind="isChecked"></p>
    数组:<p ng-bind="cityList"></p>
    数组元素:<p ng-bind="cityList[0]"></p>
    对象:<p ng-bind="foodObj"></p>
    对象内容1: <p ng-bind="foodObj.aVal"></p>
    对象内容2: <p ng-bind="foodObj['bVal']"></p>
</div>

<script>
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.strName = "John Doe";
    $scope.nAge = 11
    $scope.isChecked = true
    $scope.cityList = ['Paris', 'Shanghai']
    $scope.foodObj = {
        aVal: 'aaa',
        bVal: 'bbb'
    }
});
</script>
```

### 方法三: `ng-model=""`
```html
<div ng-app="myApp" ng-controller="myCtrl">
    <h1>方式三: ng-model=''</h1>
    <h2>普通元素-失效</h2>
    字符（字符串）:<p ng-model="strName"></p>

    <h2>表单元素-正常</h2>
    <h3>1. input元素</h3>
    <input type="text" ng-model="strName"><br>
    <p>你的输入是{{strName}}</p>
    
    <h3>2. select元素(下拉列表)</h3>
    <select ng-model="selectedSite" ng-options="x.site for x in sitesList">
    </select>
    
    <p>你选择的是: {{selectedSite.site}}</p>
    <p>网址为: {{selectedSite.url}}</p>
    <p>注: 可有ng-options(推荐)和ng-repeat两个方法实现, 对比见https://www.runoob.com/angularjs/angularjs-select.html</p>
    
    <h3>3. textarea元素定义多行输入字段(文本域)</h3>
    <textarea name="message" rows="10" cols="30" ng-model=strName>
    </textarea><br>
    <p>你的输入是{{strName}}</p>
</div>

<script>
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.strName = "John Doe"
    $scope.nAge = 11
    $scope.isChecked = true

    $scope.cityList = ['Paris', 'Shanghai']
    $scope.foodObj = {
        aVal: 'aaa',
        bVal: 'bbb'
    }        
    $scope.sitesList = [
        {site : "Google", url : "http://www.google.com"},
        {site : "Runoob", url : "http://www.runoob.com"},
        {site : "Taobao", url : "http://www.taobao.com"}
    ]
})
</script>
```

### `{{}}` & `ng-bind=""` & `ng-model=""` 的总结
| 类别 | `{{}}` | `ng-bind=""` | `ng-model=""` | 
| - | - | - | - |
| **适用**元素 | 皆可 | 普通元素 | 表单(`<input>`, `<select>`, `<textarea>`元素支持该指令)元素 | 
| **不适用**元素 |  | 表单元素 | 普通元素 | 
| 数据传输 | 单向(model->view) | 单向(model->view) | 双向绑定(model<->view) | 
| 是否可以多变量(见注意) | 可以 | 不可以 | 不可以 | 


### 特殊属性的特别写法


注意事项： 
+ 当 `ng-bind` 和 `{{}}` 同时使用时，`ng-bind` 绑定的值覆盖该元素的内容
+ `ng-bind`只能单个绑定变量，而`{{ }}`可以多个绑定变量；
    ```html
    <h1>{{ text }}{{ text }}</h1>
    ```
+ 关于引号
    | 类别 | `{{}}` | `ng-bind=""` | `ng-model=""` | 
    | - | - | - | - |
    | 建议 | 不加引号 | 加 | 加 | 
    | 加引号的影响 | view层会显示引号文本 |  |  | 
    | 不加引号的影响 |  | 无法拼接字符串 |  | 

      实例：
      ```html
      <h1>引号问题</h1>
      <div ng-app="" ng-init="str1='hello'; str2='world'">
      大括号无引号/拼接: <p>{{str1 + str2}}</p>
      大括号有引号/拼接: <p>"{{str1 + str2}}"</p>

      ng-bind无引号: <p ng-bind=str1></p>
      ng-bind有引号: <p ng-bind="str1"></p>
      <!-- ng-bind无引号/拼接: - 报错<p ng-bind=str1+ str2></p> -->
      ng-bind有引号/拼接: <p ng-bind="str1 + str2"></p>

      ng-model无引号: <input type="text" ng-model=str1><br>
      ng-model有引号: <input type="text" ng-model="str1"><br>
      <!-- ng-model无引号/拼接: - 报错<input type="text" ng-model=str1 + str2><br> -->
      <!-- ng-model有引号/拼接: - 报错<input type="text" ng-model="str1 + str2"><br> -->
    
      </div>
      ```
    

## 二.指令
### ng-app 指令定义一个 AngularJS 应用程序
+ ng-app是一个特殊的指令，一个HTML文档只出现一次，如出现多次也只有第一个起作用；
    - 一个页面里创建多个 ng-app 手动加载即可:
        ```javascript
        var app1 = angular.module("app1", []); //自动加载
        var app2 = angular.module("app2", []); //手动加载
        
        angular.bootstrap(document.getElementById("A2"), ['app2']); // 手动加载2  
        ```
    + 页面加载完成后,再加载模块
        ```javascript
        // 页面加载完成后,再加载模块
        angular.element(document).ready(function() {
          // 
        })
        ```

+ ng-app可以出现在html文档的任何一个元素上。
+ ng-app作用：告诉子元素指令是属于angularJs。
+ ng-app的值可以为空（练习），项目中一定要赋值，后面所说的模块。
+ 

ng-model 指令把元素值（比如输入域的值）绑定到应用程序。

ng-bind 指令把应用程序数据绑定到 HTML 视图。

