# 阳明智造JavaScript代码规范


<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [一. 命名](#一-命名)
  - [1.1 一般变量 - 整型 / 浮点数 / 字符串](#11-一般变量---整型--浮点数--字符串)
  - [1.2 对象类型变量 - Buffer / 对象 / 数组](#12-对象类型变量---buffer--对象--数组)
  - [1.3 方法名 / 函数名 / 类名](#13-方法名--函数名--类名)
  - [1.4 全局变量](#14-全局变量)
    - [1.4.1 全局标识变量(e.g.`g_state`)](#141-全局标识变量egg_state)
    - [1.4.2 常量/全局常量(e.g. `DEMO_NAME`)](#142-常量全局常量eg-demo_name)
  - [1.5 特殊变量](#15-特殊变量)
    - [1.5.1 `x` / `y` / `z` 变量](#151-x--y--z-变量)
- [二. 语法规范](#二-语法规范)
  - [2.1 `if`语句](#21-if语句)
    - [a. 标准格式](#a-标准格式)
    - [b. 拒绝格式](#b-拒绝格式)
  - [2.2 `for`语句](#22-for语句)
    - [a. 标准格式](#a-标准格式-1)
    - [b. 拒绝格式](#b-拒绝格式-1)
  - [2.3 类](#23-类)
    - [a. 标准格式](#a-标准格式-2)
    - [b. 拒绝格式](#b-拒绝格式-2)
  - [2.4 继承 / 设置原型](#24-继承--设置原型)
    - [a. 标准格式](#a-标准格式-3)
    - [b. 拒绝格式](#b-拒绝格式-3)
- [三. 其他问题](#三-其他问题)
  - [3.1 注释分块 - `// #region`](#31-注释分块----region)
- [四. 拒绝代码](#四-拒绝代码)
  - [4.1 拒绝格式 - `if`嵌套三层以上](#41-拒绝格式---if嵌套三层以上)
  - [4.2 拒绝格式 - 定义元素，但不使用](#42-拒绝格式---定义元素但不使用)
  - [4.3 拒绝格式 - 函数与函数之间过于贴合](#43-拒绝格式---函数与函数之间过于贴合)
  - [4.4 拒绝格式 - 在JS文件中进行网页的渲染](#44-拒绝格式---在js文件中进行网页的渲染)

<!-- /code_chunk_output -->

## 一. 命名
> 以下示例的变量都定为 DemoName / demo-name / demoName 等
### 1.1 一般变量 - 整型 / 浮点数 / 字符串
1. 规则:
    + 小驼峰
    + 变量类型简称+命名(整型的变量DemoName = `nDemoName`)
2. 示例:
    + 整型(Integer / int / long / short)  
        ```javascript
        var nDemoName;
        ```
    + 浮点数(float)  
        ```javascript
        var fDemoName;
        ```
    + 双浮点(double)  
        ```javascript
        var dDemoName;
        ```
    + 字符串(string)  
        ```javascript
        var strDemoName;
        ```  

### 1.2 对象类型变量 - Buffer / 对象 / 数组
1. 规则:
    + 小驼峰
    + 命名+变量类型简称(名为DemoName的数组 = `demoNameList`)
2. 示例:
    + Buffer
        ```javascript
        var cbBuffer = new Buffer();
        ```
    + 对象
        - 对象的属性要用**大驼峰**(e.g. `DemoName`), 除特殊的`x`,`y`,`z`
        ```javascript
        var pointObj = {
            x:0,
            y:0,
            z:0,
            Key:"",
            IsVisible:false
        };

        var pointMap = {
            0:[],
            1:[],
            2:[],
        };
        ```
    + 数组  
        ```javascript
        var demoNameList = [];
        ```
  
### 1.3 方法名 / 函数名 / 类名
1. 规则:
    + 大驼峰(名为DemoName的方法 = `DemoName`)
2. 示例:
    ```javascript
    var WorkflowRender = function(){
        //定义区
        var xxx;//先声明，后面使用的时候就不用在声明。
        this.xxx=xxx;
        
        //代码释放区（返回区）
        xxx=null;
        return xxx    
    }
    ```
3. 其他命名
    1. **对外提供的属性**命名规则: 
        + 大驼峰(名为DemoName的方法 = `DemoName`)
    2. **私有变量**命名规则:
        + `m_` + 一般变量名(小驼峰)
    3. **非私有的x,y,z**命名规则:
        + 不使用前缀，且用小写
    4. **局部变量**命名规则:
        + 一般变量命名规则相同
        + 小驼峰
    5. **返回值**命名: 
        + 一般命名为`ret`
    6. **this别名**命名:
        + 统一使用`host`
    
    示例: 
    ```javascript
    var SayHello = function(nCount,x,y,z){
        // 1. 对外提供的属性用大驼峰(提供给外部使用的参数)
        this.HCheckHandler = new Physoft.EventHandler();
        
        // 2. 私有变量用"m_"+变量名规则
        this.m_nCount = nCount;
        
        // 3. 非私有的x,y,z不使用前缀，且用小写
        this.x = x;
        this.y = y;
        this.z = z;

        // 4. 局部变量
        var fHeight = 11;
        
        // 5. 返回值
        var ret = null;
        
        // 6. this别名
        var host = this;
        
        return ret;
    }
    ```

### 1.4 全局变量
#### 1.4.1 全局标识变量(e.g.`g_state`)
1. 规则:
    + `g_` + 小驼峰
    + `g_` + 变量类型简称 + 命名(名为DemoName的整型 = `g_nDemoName`)
    + [变量类型简称 + 命名] 方法同上文 一般变量/对象类型变量
2. 示例:
    + Buffer
        ```javascript
        var strDemoName = "success";
        ```
#### 1.4.2 常量/全局常量(e.g. `DEMO_NAME`)
1. 规则:
    + 全大写, 下划线分割单词
2. 示例:
    + Buffer
        ```javascript
        var SUCCESS_COLOR = "red";
        ```

### 1.5 特殊变量
#### 1.5.1 `x` / `y` / `z` 变量
1. 规则:
    + 小写
2. 示例:
    ```javascript
    var x = 1;
    ```

## 二. 语法规范
### 2.1 `if`语句
#### a. 标准格式
```javascript
if (time<10) {
    document.write("<b>早上好</b>");
}
else if (time>=10 && time<20) {
    document.write("<b>今天好</b>");
}
else {
    document.write("<b>晚上好!</b>");
}
```
注意:   
1. 一个逻辑后加换行提高代码可读性

#### b. 拒绝格式
1. 拒绝格式 - `if`嵌套三层以上
    ```javascript
    if(a==0){
        if(b==0){
            if(c==0){
                if(d==0){
                
                }
            }
        }
    }
    // 解决方案：
    // 当使用多个if嵌套的时候会使代码的可读性变差，可以采用 `!==` + `return`

    if(a!==0 && b!==0 && c!==0 && d!==0){
        return
    }
    ```

### 2.2 `for`语句
#### a. 标准格式
```javascript
for (var i=0; i < cars.length; i++) { 
    document.write(cars[i] + "<br>");
}
```
注意:   
1. 一个逻辑后加换行提高代码可读性

#### b. 拒绝格式
暂无

### 2.3 类
#### a. 标准格式
一般情况下采用`function xxx(){}`, 在原型上添加方法
```javascript
function Students() {}

LineRobot.prototype.name = "";
LineRobot.prototype.grade = [];

LineRobot.prototype.SayHello = function (yourName) {
    console.log("Hello, " + yourName + ". I am " + this.name);
    return 0;
};
```
#### b. 拒绝格式
基于 prototype，而不是基于类的。公司暂时不使用`class`类来进行命名

### 2.4 继承 / 设置原型
#### a. 标准格式
采用`Object.create(obj)`方法设置原型
```JavaScript
const personPrototype = {
    greet() {
        console.log("hello!");
    },
};

const student = Object.create(personPrototype);
student.greet(); // hello!
```
#### b. 拒绝格式
公司暂时不使用 构造函数 来设置原型


## 三. 其他问题
### 3.1 注释分块 - `// #region`
采用region来将代码块进行分类，某一个代码块属于什么，做了什么
示例: 
```javascript
// #region [可选]注释内容
var ret = null;
var demoName = "demo";
var nameList = [];
// #endregion
```


## 四. 拒绝代码
###  4.1 拒绝格式 - `if`嵌套三层以上
```javascript
if(a==0){
    if(b==0){
        if(c==0){
            if(d==0){
            
            }
        }
    }
}
```

解决方案：
当使用多个if嵌套的时候会使代码的可读性变差，可以采用 `!==` + `return`

```javascript
if(a!==0 && b!==0 && c!==0 && d!==0){
    return
}
```

### 4.2 拒绝格式 - 定义元素，但不使用
```javascript
var element;
var tempData;
var data;
var a;
var b;

a=1;
data=0;
```

解决方案：
1. 让初始值为`null`
    当元素是`null`值的时候，未使用的值会被释放。
2. 将不需要使用的元素删掉

```javascript
var element = null;
var tempData = null;
var data = null;
var a = null;
var b = null;

a = 1;
data = 0;
```

### 4.3 拒绝格式 - 函数与函数之间过于贴合
```javascript
function a() {
    
}
function b() {
    
}
function b() {   
}
```
解决方案：  
    将函数与函数之间换行或者采用注释，告诉函数的作用

### 4.4 拒绝格式 - 在JS文件中进行网页的渲染
不建议在JS文件中进行网页的渲染和元素内容改动. 

解决方案: 
    JS将数据返回HTML, 然后在界面更改元素和渲染. 