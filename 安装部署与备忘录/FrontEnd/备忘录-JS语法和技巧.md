# JavaScript语法和技巧



<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [〇. 前置内容](#〇-前置内容)
  - [0.1 版本](#01-版本)
  - [0.2 JS文件的引入](#02-js文件的引入)
    - [方法一: 嵌入Html文件](#方法一-嵌入html文件)
    - [方法二: 本地JS文件](#方法二-本地js文件)
    - [方法三: 导入网络文件](#方法三-导入网络文件)
  - [0.3 常用方法](#03-常用方法)
    - [`console.log()`  打印](#consolelog--打印)
    - [`alert()`  弹出框](#alert--弹出框)
    - [`document.write()`   输出到页面](#documentwrite---输出到页面)
    - [`debugger` 断点](#debugger-断点)
- [一. 数据类型](#一-数据类型)
  - [1.1 `String` 字符串（一串文本）](#11-string-字符串一串文本)
  - [1.2 `Number` 数字](#12-number-数字)
  - [1.3 `Boolean` 布尔值（`true`/`false`）](#13-boolean-布尔值truefalse)
  - [1.4 `Array` 数组](#14-array-数组)
  - [1.5 `Object` 对象](#15-object-对象)
  - [其他数据类型](#其他数据类型)
  - [注意](#注意)
- [二. 对象](#二-对象)
  - [2.1 对象的基本操作](#21-对象的基本操作)
  - [2.2 对象的通用属性](#22-对象的通用属性)
    - [2.2.1 `.constructor`	返回创建对象的原型函数](#221-constructor返回创建对象的原型函数)
    - [2.2.2 `.length` 设置或返回元素的个数](#222-length-设置或返回元素的个数)
    - [2.2.3 `.prototype` 允许你向对象添加属性或方法](#223-prototype-允许你向对象添加属性或方法)
  - [2.3 对象的常用方法:](#23-对象的常用方法)
  - [2.m 对象原型](#2m-对象原型)
  - [2.n 枚举一个对象的所有属性](#2n-枚举一个对象的所有属性)
    - [方法1: `for...in` 循环](#方法1-forin-循环)
    - [方法2: `Object.keys(obj)`](#方法2-objectkeysobj)
  - [方法3: `Object.getOwnPropertyNames(obj)`](#方法3-objectgetownpropertynamesobj)
- [三. 语句](#三-语句)
  - [3.1 if语句](#31-if语句)
  - [3.2 switch 语句](#32-switch-语句)
  - [3.3 三元运算符](#33-三元运算符)
  - [3.4  for 循环](#34--for-循环)
  - [3.5  while 循环](#35--while-循环)
- [四. 函数 / 方法 / 类](#四-函数--方法--类)
  - [4.1 函数](#41-函数)
- [五. 事件](#五-事件)
  - [5.1 事件的定义](#51-事件的定义)
  - [5.2 事件的格式](#52-事件的格式)
  - [5.3 事件的分类 - HTML DOM事件](#53-事件的分类---html-dom事件)
    - [5.3.1 鼠标事件- `onclick`](#531-鼠标事件--onclick)
- [六. HTML DOM](#六-html-dom)
  - [3.1 `document.write()` 可用于直接向 HTML 输出流写内容](#31-documentwrite-可用于直接向-html-输出流写内容)
  - [3.2 `document.getElementById(id).innerHTML=新的 HTML` 改变 HTML 内容](#32-documentgetelementbyididinnerhtml新的-html-改变-html-内容)
  - [3.3 `document.getElementById(id).attribute=新属性值` 改变 HTML 属性](#33-documentgetelementbyididattribute新属性值-改变-html-属性)
  - [3.4 `document.getElementById(id).style.property=新样式` 改变 HTML 样式](#34-documentgetelementbyididstyleproperty新样式-改变-html-样式)
- [七. JSON](#七-json)
  - [7.1 JSON 的定义](#71-json-的定义)
  - [7.2 JSON 模板](#72-json-模板)
  - [7.3 JSON字符串 转换(parse)为 JS对象](#73-json字符串-转换parse为-js对象)
  - [7.4 JS对象 转换(stringify)为 JSON字符串](#74-js对象-转换stringify为-json字符串)
- [八. 异步](#八-异步)
  - [8.1 异步的定义](#81-异步的定义)
  - [8.2 回调函数](#82-回调函数)
  - [8.3 异步AJAX](#83-异步ajax)
- [附加:](#附加)
  - [附1. JS声明提升](#附1-js声明提升)
    - [定义:](#定义)
  - [附2. `this`关键字](#附2-this关键字)

<!-- /code_chunk_output -->



## 〇. 前置内容
### 0.1 版本
> JS = ECMAScript  

| 版本 | 年份 | 备注 |
| - | - | - | 
| ECMAScript 1.0 | 1997 | | 
| ECMAScript 2.0 | 1998 | | 
| ECMAScript 3.0 | 1999 | |
| ECMAScript 4.0 | 2007 | |
| ECMAScript 5.0 | 2009 | 常用版本 |
| ECMAScript 6.0 | 2015 | 后续几年也有更新,但都为小更新 | 


### 0.2 JS文件的引入
#### 方法一: 嵌入Html文件
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>demo015</title>
</head>
<body>
    <script>
        var s = "hello";
        console.log(s);
        console.log(typeof s);
    </script>
</body>
</html>
```

#### 方法二: 本地JS文件
+ Step 1: 本地已有JS文件
    如文件testJs.js

+ Step 2: 在Html文件中导入
    ```html
    <script type="text/javascript" src="./testJs.js"></script>
    ```

#### 方法三: 导入网络文件
html中引入示例: 
```html
<script src="https://cdn.staticfile.org/jquery/1.10.2/jquery.min.js"></script>
```

> 网站参考:https://developer.aliyun.com/article/944826

### 0.3 常用方法
#### `console.log()`  打印
```javascript
var s = "hello";
console.log(s);
console.log(typeof s);
```

#### `alert()`  弹出框
```javascript
alert("弹窗");
```

#### `document.write()`   输出到页面
```javascript
document.write("输出到页面");
```
#### `debugger` 断点
```javascript
var x = 15 * 5;
debugger;
document.getElementbyId("demo").innerHTML = x;
```



## 一. 数据类型
### 1.1 `String` 字符串（一串文本）
1. 定义
    字符串的值必须用引号（单双均可，必须成对）括起来。
2. 示例
    ```JavaScript
    let strVariable = 'hello world';
    ```
3. 字符串方法
    ```JavaScript
    // 设有字符串
    let strText = 'Hello world';
    let strName = "Tom";
    ```
    > 参考来源: https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/First_steps/Useful_string_methods
    
    | 方法 | 模板 | 输入参数 | 输出内容 | 示例 | 输出内容 | 
    | - | - | - | - | - | - |
    | 返回字符串长度 | `.length` | | (int)字符串的长度 | `strText.lenght;` | 11 |
    | 是否存在字串 | `.indexOf(strSub)` | `strSub`: 子串 | (int)返回子串位置, 否则返回-1 | `strText.indexOf("llo")` | 2 | 

### 1.2 `Number` 数字
1. 定义
    数字：无需引号。
2. 示例
    ```JavaScript
    let myVariable = 111;
    ```

### 1.3 `Boolean` 布尔值（`true`/`false`）
1. 定义
    `true`/`false` 是 JS 里的特殊关键字，无需引号。
2. 示例
    ```JavaScript
    let myVariable = true;
    ```

### 1.4 `Array` 数组
1. 定义
    用于在单一引用中存储多个值的结构。
2. 示例
    + 数组的创建: 
        创建一个数组，有三种方法。 下面的代码定义了一个名为 myCars的数组对象：
        + 常规方式:
            ```javascript    
            var myCars = new Array();
            myCars[0] = "Saab";      
            myCars[1] = "Volvo";
            myCars[2] = "BMW";
            ```
        +  简洁方式:
            ```javascript 
            var myCars=new Array("Saab","Volvo","BMW");
            ```
        +  字面:
            ```javascript 
            var myCars=["Saab","Volvo","BMW"];    
            ```

    + 数组的基本操作: 
        ```JavaScript
        var myVariableList = [120, "Volvo", "BMW"];

        // 数组长度
        console.log(myVariableList.length);
        // 数组索引(如第一个元素)
        console.log(myCariableList[0]);
        ```
### 1.5 `Object` 对象
1. 定义
    + 对象：JavaScript 里一切皆对象，一切皆可储存在变量里。这一点要牢记于心。
    + 对象是一个包含相关数据和方法的集合（通常由一些变量和函数组成，我们称之为对象里面的属性和方法
    + 与**JS变量**赋值不同(变量赋值为单值), 虽然对象也是一个变量，但对象可以包含多个值（多个变量），每个值以 `name:value` 对呈现。

2. 更多内容见 下文对象章节

### 其他数据类型
| 数据类型 | 定义 | 示例 | 说明 |
| - | - | - | - |
| 空(null) |  | `var myVariable = null;` | | 
| 未定义（Undefined）| | `var myVariable;` 或 `var myVariable = undefined;` | |
| Symbol | ES6 引入了一种新的原始数据类型，表示独一无二的值 | `var sym = 1;` | |

### 注意
1. 对`undefined` | `null` | `false` | `0` | `NaN` | 空字符串`""` 取反为`true`, 其余为`false`  
    ```javascript
    // 取反
    console.log(!undefined);
    console.log(!null);
    console.log(!false);
    console.log(!0);
    console.log(!NaN);
    console.log(!"");
    ```


## 二. 对象
> 接续[1.5节  `Object` 对象]
### 2.1 对象的基本操作
1. 对象的创建和初始化
    + 方法1: 先定义, 再追加属性
        ```javascript    
        var demoObj = new Object();     // 等价 var demoObj = {};
        demoObj.name = "Luke";
        demoObj.age = 11;
        demoObj.SayHello = function(yourName) {
            console.log("Hello, " + yourName + ". I am " + this.name);
        };
        ```
    + 方法2: 一般方法
        ```javascript
        var demoObj2 = {
            name: 'Lily',
            age: 30,
            SayHello : function(yourName) {
                console.log("Hello, " + yourName + ". I am " + this.name);
            },
            SayBye() {
                console.log("goodbye");
            }
        };
        ```
2. 对象的基本操作 
    基于方法1创建的对象操作: 
    ```javascript   
    // 增(属性)
    demoObj.id = 11165;
    // 删
    
    // 改

    // 查
    console.log(demoObj);           // {name: 'Luke', age: 11, SayHello: ƒ}
    console.log(demoObj.name);      // Luke
    console.log(demoObj["name"]);  // Luke
    
    
    // 函数操作
    demoObj.SayHello("Tom");    // Hello, Tom. I am Luke
    ```
    

### 2.2 对象的通用属性 
#### 2.2.1 `.constructor`	返回创建对象的原型函数
1. 定义: 返回创建对象的原型函数。
2. 示例: 
    ```javascript
    var myCarList = new Array();
    console.log(myCarList.constructor);
    ```
    输出: 
    ```
    ƒ Array() { [native code] }
    ```

#### 2.2.2 `.length` 设置或返回元素的个数
1. 定义: 设置或返回元素的个数。
2. 适用: 
    数组对象
3. 示例: 
    ```javascript
    var myCarList = new Array();
    myCarList[0]="Saab";
    myCarList[1]="Volvo";
    myCarList[2]="BMW";
    console.log(myCarList.length);      // 3
    ```

#### 2.2.3 `.prototype` 允许你向对象添加属性或方法
1. 定义: 允许你向对象添加属性或方法。
2. 适用: 
    全部对象
3. 示例: 
    ```javascript
    // 给数组对象增加新的方法
    Array.prototype.myUcase = function() {
        for (i=0; i<this.length; i++) {
            this[i] = this[i].toUpperCase();
        }
    }

    var fruitsList = ["Banana", "Orange", "Apple", "Mango"];
    fruitsList.myUcase();
    console.log(fruitsList);    // ['BANANA', 'ORANGE', 'APPLE', 'MANGO']
    ```
4. 注意: 
    + 当构建一个属性，所有的同类对象(如上述示例中, 所有数组对象都有`myUcase`属性)将被设置属性，它是默认值。
        - Array.prototype 单独不能引用数组, Array() 对象可以。


### 2.3 对象的常用方法: 


### 2.m 对象原型
> 参考: https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Objects/Object_prototypes
1. 相关概念: 
    原型链 \ 属性遮蔽
    (见参考链接)

2. 设置原型
    + 方法1: `Object.create(obj)` 
        - 定义: 创建一个新的对象，并允许你指定一个将被用作新对象原型(`obj`)的对象
        - 示例: 
            ```JavaScript
            const personPrototype = {
                greet() {
                    console.log("hello!");
                },
            };

            const carl = Object.create(personPrototype);
            carl.greet(); // hello!
            ```
            这里我们创建了一个`personPrototype`对象，它有一个`greet()`方法。然后我们使用`Object.create()`来创建一个以`personPrototype`为原型的新对象。现在我们可以在新对象上调用 `greet()`，而原型提供了它的实现。
            
    + 方法2: 构造函数
        > 在 JS 中，所有的函数都有一个名为`prototype`的属性。当你调用一个函数作为构造函数时，这个属性被设置为新构造对象的原型（按照惯例，在名为 `__proto__`的属性中）。
        - 定义: 创建一个新的对象，并允许你指定一个将被用作新对象原型(`obj`)的对象
        - 示例: 
            ```JavaScript
            const personPrototype = {
                greet() {
                    console.log('你好，我的名字是 ${this.name}！');
                },
            };

            function Person(name) {
                this.name = name;
            }

            Person.prototype.greet = personPrototype.greet;
            ```
            创建了一个`personPrototype`对象，它具有`greet()`方法. 然后创建了一个`Person()`构造函数，它初始化了要创建人物对象的名字, 下面可以创建新的实例对其调用
            ```javascript
            const reuben = new Person("Reuben");
            reuben.greet(); // 你好，我的名字是 Reuben！
            ```


### 2.n 枚举一个对象的所有属性
#### 方法1: `for...in` 循环
> 参考: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in
1. 定义: 
    以任意顺序迭代一个对象的除Symbol以外的可枚举属性，包括继承的可枚举属性。

2. 示例: 
    ```javascript
    var obj = {a:1, b:2, c:3};

    for (var prop in obj) {
        console.log("obj." + prop + " = " + obj[prop]);
    }
    ```
    输出: 
    ```
    obj.a = 1
    obj.b = 2
    obj.c = 3
    ```
#### 方法2: `Object.keys(obj)` 
> 参考: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
1. 定义: 
    该方法返回对象 `obj` 自身包含（不包括原型中）的所有可枚举属性的名称的数组。
2. 示例: 
    ```javascript
    // 简单数组
    const arr = ["a", "b", "c"];
    console.log(Object.keys(arr)); // ['0', '1', '2']

    // 类数组对象
    const obj = { 0: "a", 1: "b", 2: "c" };
    console.log(Object.keys(obj)); // ['0', '1', '2']

    // 键的顺序随机的类数组对象
    const anObj = { 100: "a", 2: "b", 7: "c" };
    console.log(Object.keys(anObj)); // ['2', '7', '100']

    // getFoo 是一个不可枚举的属性
    const myObj = Object.create(
        {},
        {
            getFoo: {
                value() {
                    return this.foo;
                },
            },
        },
    );
    myObj.foo = 1;
    console.log(Object.keys(myObj)); // ['foo']
    ```

### 方法3: `Object.getOwnPropertyNames(obj)`
> 参考: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames
1. 定义: 
    静态方法返回一个数组，其包含给定对象中所有自有属性（包括不可枚举属性，但不包括使用 symbol 值作为名称的属性）
2. 示例: 
    ```JavaScript
    const object1 = {
    a: 1,
    b: 2,
    c: 3
    };

    console.log(Object.getOwnPropertyNames(object1)); // ["a", "b", "c"]
    ```

## 三. 语句
### 3.1 if语句
```javascript
// if
if (true) {
console.log("判断")
} else if (false) {
console.log("中间判断")
} else {
console.log("最后结果")
}
```

### 3.2 switch 语句
```javascript
var d=new Date().getDay(); 
switch (d) {
    case 0:
        x="今天是星期日"; 
        break; 
    case 1:
        x="今天是星期一"; 
        break; 
    case 2:
        x="今天是星期二"; 
        break; 
    default:
        x="期待周末";
}
```


### 3.3 三元运算符
```javascript
4%2 == 0 ? console.log("偶数") : console.log("奇数");
```

### 3.4  for 循环
```javascript
for (var i=0; i<5; i++) {
    console.log(i);
}
```

### 3.5  while 循环
```javascript
var i = 0;
while (i<5) {
    document.write("<br>" + i);
    i++;
}
```

## 四. 函数 / 方法 / 类
### 4.1 函数
a. 一般写法 
```javascript
function myFunction(a, b) {
    return a * b;
}
```
b. 表达式写法
```javascript
var x = function (a, b) {return a * b};
var z = x(4, 3);            // 在函数表达式存储在变量后，变量也可作为一个函数使用
```

c. 提升写法
函数可以在声明之前调用,如: 
```javascript
myFunction(5);

function myFunction(y) {
    return y * y;
}
```

d. 箭头函数写法
```javascript
// 一般写法
var x = function(x, y) {
     return x * y;
}
 
// 箭头函数写法
const x = (x, y) => x * y;
```
注意: 
1. 箭头函数在ES6之后支持
2. 模板: 
    ```javascript
    (参数1, 参数2, …, 参数N) => { 函数声明 }

    (参数1, 参数2, …, 参数N) => 表达式(单一)
    // 相当于：(参数1, 参数2, …, 参数N) =>{ return 表达式; }
    ```


## 五. 事件
### 5.1 事件的定义
在事件触发时 JavaScript 可以执行一些代码。
### 5.2 事件的格式
模板:
```javascript
<some-HTML-element some-event="JavaScript 代码">
```
如: 
```javascript
<button onclick="getElementById('demo').innerHTML=Date()">现在的时间是?</button>
```
### 5.3 事件的分类 - HTML DOM事件
>  参考: https://www.runoob.com/jsref/dom-obj-event.html

DOM： 指明使用的 DOM 属性级别。
#### 5.3.1 鼠标事件- `onclick`
示例:
```javascript
<script>
    function myFunction(){
        console.log("myFunction");
    }
</script>

<button onclick="myFunction()">点我</button>
```


## 六. HTML DOM
### 3.1 `document.write()` 可用于直接向 HTML 输出流写内容
示例:
```javascript
<script>
document.write(Date());
</script>
```

### 3.2 `document.getElementById(id).innerHTML=新的 HTML` 改变 HTML 内容
示例:
```javascript
<p id="p1">Hello World!</p>

<script>
document.getElementById("p1").innerHTML="新文本!";
</script>

```


### 3.3 `document.getElementById(id).attribute=新属性值` 改变 HTML 属性
示例:
```javascript
<img id="image" src="smiley.gif">

<script>
document.getElementById("image").src="landscape.jpg";
</script>
```

### 3.4 `document.getElementById(id).style.property=新样式` 改变 HTML 样式
示例:
```javascript
<p id="p1">Hello World!</p>
<p id="p2">Hello World!</p>
<script>
document.getElementById("p2").style.color="blue";
document.getElementById("p2").style.fontFamily="Arial";
document.getElementById("p2").style.fontSize="larger";
</script>
```

## 七. JSON
### 7.1 JSON 的定义
+ JSON 英文全称 JavaScript Object Notation
+ 用于存储和传输数据的格式, 用于服务端向网页传递数据.
特点: 
+ JSON 是一种轻量级的数据交换格式.
+ JSON是独立的语言.
+ JSON 易于理解.


### 7.2 JSON 模板
+ 数据为 键/值 对
+ 数据由逗号分隔
+ 大括号`{}`保存对象, 方括号`[]`保存数组

如: 11 
```json
{"sites":[
    {"name":"Runoob", "url":"www.runoob.com"}, 
    {"name":"Google", "url":"www.google.com"},
    {"name":"Taobao", "url":"www.taobao.com"}
]}
```

### 7.3 JSON字符串 转换(parse)为 JS对象
如: 
```json
// 用一个字符串表示JSON
var textJSON = '{ "sites" : [' +
'{ "name":"Runoob" , "url":"www.runoob.com" },' +
'{ "name":"Google" , "url":"www.google.com" },' +
'{ "name":"Taobao" , "url":"www.taobao.com" } ]}';

objJS = JSON.parse(textJSON);

console.log(objJS.sites[0]);
console.log(objJS.sites[1]["name"]);
```
### 7.4 JS对象 转换(stringify)为 JSON字符串 
如: 
```json
var str = {"name":"菜鸟教程", "site":"http://www.runoob.com"}
str_pretty1 = JSON.stringify(str)
document.write( "只有一个参数情况：" );
document.write( "<br>" );
document.write("<pre>" + str_pretty1 + "</pre>" );
 
document.write( "<br>" );
str_pretty2 = JSON.stringify(str, null, 4) //使用四个空格缩进
document.write( "使用参数情况：" );
document.write( "<br>" );
document.write("<pre>" + str_pretty2 + "</pre>" ); // pre 用于格式化输出
```


## 八. 异步
### 8.1 异步的定义
通俗地解释一下异步：异步就是从主线程发射一个子线程来完成任务。
常用方法为
1. 回调函数
2. 回调函数

### 8.2 回调函数
为了从主线程分割出子线程, 可用回调函数来实现.

### 8.3 异步AJAX
> 参考: https://www.runoob.com/ajax/ajax-tutorial.html




## 附加:
### 附1. JS声明提升
> 参考: https://www.runoob.com/js/js-hoisting.html
#### 定义:
+ JavaScript 中，函数及变量的声明都将被提升到函数的最顶部。
+ JavaScript 中，变量可以在使用后声明，也就是变量可以先使用再声明。
+ JavaScript 只有声明的变量(`var x;`)会提升，初始化(`var y=5;`)的不会。

### 附2. `this`关键字
> 参考: https://www.runoob.com/js/js-this.html
`this`关键字的意义:
(示例见demo016.html)
1. 在方法中，`this` 表示该方法所属的对象
    ```javascript 
    var person = {
        firstName: "John",
        lastName: "Doe",
        ReFirstName: function() {
            console.log("this在对象中");
            console.log(this);              // { firstName: "John",.......
            console.log(this.firstName);    // John
            console.log(this.lastName);     // Doe
    
            return "My first name is " + this.firstName;
        }
    }

    console.log(person.ReFirstName())       // My first name is John
    ```
2. 单独使用，`this` 表示window全局对象
    ```javascript
    var x = this;
    console.log(x);         // Window {window: Window, self: Window, document: document, name: '', location: Location, …}
    ```

3. 在函数中，`this` 表示window全局对象
    ```javascript
    function thisInFunc() {
        return this;        
    }
    console.log(thisInFunc());      // // Window {window: Window, self: Window, document: document, name: '', location: Location, …}
    ```
    
    + 严格模式下, this 是未定义的(undefined)。


4. 在事件中，this 表示接收事件的元素
    ```javascript
    <button onclick="this.style.display='none'">点我后我就消失了</button>
    ```

5. 类似 `call()` 和 `apply()` 方法可以将 `this` 引用到任何对象
    `apply()` 和 `call()` 就是函数对象的方法, 他们允许切换函数执行的上下文环境，即 `this` 会根据上下文,穿透作用域来绑定任意的对象。
    ```javascript
    var testCall1 = {
        reCallText: function() {
            return this.text1 + " " + this.text2;
        }
    }
    var testCall2 = {
        text1:"John",
        text2: "Doe",
    }
    console.log(testCall1.reCallText.call(testCall2));      // John Doe
    ```

