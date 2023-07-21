# 备忘录-jQuery语法和技巧

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [〇. 预备内容](#〇-预备内容)
  - [0.1 简介](#01-简介)
  - [0.2 版本说明](#02-版本说明)
  - [版本选择](#版本选择)
  - [查看版本](#查看版本)
  - [0.3 安装](#03-安装)
  - [0.4 其他内容](#04-其他内容)
- [一. jQuery语法](#一-jquery语法)
  - [1.1 jQuery入口函数](#11-jquery入口函数)
    - [对比 jQuery入口函数 和 JavaScript 入口函数](#对比-jquery入口函数-和-javascript-入口函数)
  - [1.2 选择器 - `$()`](#12-选择器---)
  - [1.3 jQuery事件](#13-jquery事件)
    - [常用的 jQuery 事件方法](#常用的-jquery-事件方法)
      - [加载事件 - `.ready()`](#加载事件---ready)
      - [点击事件 - `.click()`](#点击事件---click)
      - [双击事件 - `.dblclick()`](#双击事件---dblclick)
      - [鼠标进入事件 - `.mouseenter()`](#鼠标进入事件---mouseenter)
      - [鼠标离开 - `.mouseleave()`](#鼠标离开---mouseleave)
      - [鼠标点击- `.mousedown()`](#鼠标点击--mousedown)
      - [鼠标松开 - `.mouseup()`](#鼠标松开---mouseup)
      - [鼠标悬停 - `.hover()`](#鼠标悬停---hover)
      - [元素聚焦 - `.focus()`](#元素聚焦---focus)
      - [元素失焦 - `.blur()`](#元素失焦---blur)
- [二. DOM操作 - 操作元素和属性](#二-dom操作---操作元素和属性)
  - [2.1 元素内容 - 获取和设置](#21-元素内容---获取和设置)
    - [获取和设置 所选元素的文本内容 - `.text()`](#获取和设置-所选元素的文本内容---text)
    - [获取和设置 所选元素的内容（包括 HTML 标签）- `.html()`](#获取和设置-所选元素的内容包括-html-标签--html)
    - [获取和设置 表单字段的值- `.val()`](#获取和设置-表单字段的值--val)
  - [2.2 获取和设置 属性 - `.attr()`](#22-获取和设置-属性---attr)
  - [2.3 添加元素](#23-添加元素)
    - [append() - 在被选元素的结尾插入内容](#append---在被选元素的结尾插入内容)
    - [prepend() - 在被选元素的开头插入内容](#prepend---在被选元素的开头插入内容)
    - [after() - 在被选元素之后插入内容](#after---在被选元素之后插入内容)
    - [before() - 在被选元素之前插入内容](#before---在被选元素之前插入内容)
  - [2.4 删除元素](#24-删除元素)
    - [remove() - 删除被选元素（及其子元素）](#remove---删除被选元素及其子元素)
    - [empty() - 从被选元素中删除子元素](#empty---从被选元素中删除子元素)

<!-- /code_chunk_output -->


## 〇. 预备内容
### 0.1 简介
+ Query 是一个 JavaScript 函数库。
+ jQuery 是一个轻量级的"写的少，做的多"的 JavaScript 库。
+ jQuery 库包含以下功能：
    - HTML 元素选取
    - HTML 元素操作
    - CSS 操作
    - HTML 事件函数
    - JavaScript 特效和动画
    - HTML DOM 遍历和修改
    - AJAX
    - Utilities

### 0.2 版本说明
### 版本选择
+ Production version - 用于实际的网站中，已被精简和压缩。
+ Development version - 用于测试和开发（未压缩，是可读的代码）

> 下载地址: https://jquery.com/download/

### 查看版本
在浏览器的 Console 窗口中使用 `$.fn.jquery`` 命令查看当前 jQuery 使用的版本：

### 0.3 安装
1. 本地引用
    根据上文链接下载,然后引用
    ```html
    <head>
        <script src="jquery-1.10.2.min.js"></script>
    </head>
    ```
2. CDN在线网络引用
    Staticfile CDN、百度、又拍云、新浪、谷歌和微软的服务器都存有 jQuery 
    + Staticfile CDN:
        ```html
        <script src="https://cdn.staticfile.org/jquery/1.10.2/jquery.min.js"></script>
        ```
    + 百度 CDN:
        ```html
        <script src="https://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js"></script>
        ```
    
    > 其他网点链接: https://www.runoob.com/jquery/jquery-install.html

### 0.4 其他内容


## 一. jQuery语法
jQuery 语法是通过选取 HTML 元素，并对选取的元素执行某些操作。
基础语法： 
```javascript
$(selector).action()
```
+ 美元符号定义 jQuery
+ **选择器**(selector)"查询"和"查找" HTML 元素
+ jQuery 的 `action()` 执行对元素的操作

### 1.1 jQuery入口函数
所有 jQuery 函数位于一个 document ready 函数中：
+ 写法一: 
    ```javascript
    $(document).ready(function(){
        // 开始写 jQuery 代码...
    });
    ```
+ 写法二: 简洁写法
    ```javascript
    $(function(){
        // 开始写 jQuery 代码...
    });
    ```

目的为了防止文档在完全加载(就绪)之前运行 jQuery 代码, 即在 **DOM加载完成后才可以对该DOM进行操作**

如果在文档没有完全加载之前就运行函数，操作可能失败. 
下面是两个具体会导致运行错误的例子：  
+ 试图隐藏一个不存在的元素
+ 获得未完全加载的图像的大小

#### 对比 jQuery入口函数 和 JavaScript 入口函数
| 项目 | jQuery入口函数 | JavaScript 入口函数|
| - | - | - |
| 执行时机 | jQuery 的入口函数是在 html 所有标签(DOM)都加载之后，就会去执行 | JavaScript 的 window.onload 事件是等到所有内容，包括外部图片之类的文件加载完后，才会执行 | 
| 执行次数 | 只执行1次, 若有第2次会将第一次执行覆盖 | 可执行多次, 不会覆盖之前执行 | 

写法 :
+ jQuery 入口函数:
    ```JavaScript
    $(document).ready(function(){
        // 执行代码
    });
    ```
    或者
    ```JavaScript
    $(function(){
        // 执行代码
    });
    ```
+ JavaScript 入口函数:
    ```JavaScript
    window.onload = function () {
        // 执行代码
    }
    ```

### 1.2 选择器 - `$()` 
+ jQuery 选择器基于元素的 id、类、类型、属性、属性值等"查找"（或选择）HTML 元素. **它基于已经存在的 CSS 选择器**

| 类别 | 模板 | 含义 | 
| - | - | - |
| 元素选择器 | `$("p")` | 在页面中选取所有 `<p>` 元素 | 
| id选择器 | `$("#test-id")` | 通过 HTML 元素的 id 属性选取指定的元素 | 
| 类选择器 | `$(".test-class")` | 指定的 class 查找元素 | 

更多示例: 
+ https://www.runoob.com/jquery/jquery-selectors.html
+ https://www.runoob.com/jquery/jquery-ref-selectors.html


示例: 
1. 元素选择器
    用户点击按钮后，所有 `<p>` 元素都隐藏
    ```html
    <p>这是一个段落。</p>
    <p>这是另一个段落。</p>
    <button>点我</button>
    <script>
    $(document).ready(function(){
        $("button").click(function(){
            $("p").hide();
        });
    });
    </script>
    ```

2. `#id` 选择器
    当用户点击按钮后，有 id="test" 属性的元素将被隐藏：
    ```html
    <p>这是一个段落。</p>
    <p id="test">这是另一个段落。</p>
    <button>点我</button>
    <script>
    $(document).ready(function(){
        $("button").click(function(){
            $("#test").hide();
        });
    })
    </script>
    ```

3. `.class` 选择器
    用户点击按钮后所有带有 class="test" 属性的元素都隐藏：
    ```html
    <p>这是一个段落。</p>
    <p class="test">这是另一个段落。</p>
    <button>点我</button>
    <script>
    $(document).ready(function(){
        $("button").click(function(){
            $(".test").hide();
        });
    });
    </script>
    ```


### 1.3 jQuery事件
在 jQuery 中，**大多数 DOM 事件都有一个等效的 jQuery 方法**
例如, 页面中指定一个点击事件：
```JavaScript
$("p").click();
```
下一步是定义了点击后触发事件。可以通过一个事件函数实现：
```JavaScript
$("p").click(function(){
    // 动作触发后执行的代码!!
});
```

#### 常用的 jQuery 事件方法  
+ 更多事件: https://www.runoob.com/jquery/jquery-events.html

##### 加载事件 - `.ready()`  
详见 前文[1.1 jQuery入口函数]

##### 点击事件 - `.click()`   
1. 作用
    `click()` 方法是当按钮点击事件被触发时会调用一个函数。该函数在用户点击 HTML 元素时执行。

2. 实例
    当点击事件在某个 <p> 元素上触发时，隐藏当前的 <p> 元素：
    ```JavaScript
    $("p").click(function(){
    $(this).hide();
    });
    ```


##### 双击事件 - `.dblclick()`  
1. 作用
    当双击元素时，会发生 `dblclick` 事件。
    dblclick() 方法触发 dblclick 事件，或规定当发生 dblclick 事件时运行的函数：

2. 实例
    ```JavaScript
    $("p").dblclick(function(){
    $(this).hide();
    });
    ```

##### 鼠标进入事件 - `.mouseenter()`  
1. 作用
    当鼠标指针穿过元素时，会发生 `mouseenter` 事件。
    `mouseenter()` 方法触发 `mouseenter` 事件，或规定当发生 `mouseenter` 事件时运行的函数：

2. 实例
    ```JavaScript
    $("#p1").mouseenter(function(){
        alert('您的鼠标移到了 id="p1" 的元素上!');
    });
    ```

##### 鼠标离开 - `.mouseleave()`  
1. 作用
    当鼠标指针离开元素时，会发生 `mouseleave` 事件。
    `mouseleave()` 方法触发 `mouseleave` 事件，或规定当发生 `mouseleave` 事件时运行的函数：

2. 实例
    ```JavaScript
    $("#p1").mouseleave(function(){
        alert("再见，您的鼠标离开了该段落。");
    });
    ```

##### 鼠标点击- `.mousedown()`  
1. 作用
    当鼠标指针移动到元素上方，并按下鼠标按键时，会发生 mousedown 事件。
    mousedown() 方法触发 mousedown 事件，或规定当发生 mousedown 事件时运行的函数：

2. 实例
    ```JavaScript
    $("#p1").mousedown(function(){
        alert("鼠标在该段落上按下！");
    });
    ```

##### 鼠标松开 - `.mouseup()`  
1. 作用
    当在元素上松开鼠标按钮时，会发生 mouseup 事件。
    mouseup() 方法触发 mouseup 事件，或规定当发生 mouseup 事件时运行的函数：

2. 实例
    ```JavaScript
    $("#p1").mouseup(function(){
        alert("鼠标在段落上松开。");
    });
    ```

##### 鼠标悬停 - `.hover()`  
1. 作用
    hover()方法用于模拟光标悬停事件。
    当鼠标移动到元素上时，会触发指定的第一个函数(mouseenter);当鼠标移出这个元素时，会触发指定的第二个函数(mouseleave)。

2. 实例
    ```JavaScript
    $("#p1").hover(
        function(){
            alert("你进入了 p1!");
        },
        function(){
            alert("拜拜! 现在你离开了 p1!");
        }
    );
    ```

##### 元素聚焦 - `.focus()`  
1. 作用
    当元素获得焦点时，发生 focus 事件
    当通过鼠标点击选中元素或通过 tab 键定位到元素时，该元素就会获得焦点
    focus() 方法触发 focus 事件，或规定当发生 focus 事件时运行的函数：

2. 实例
    ```JavaScript
    $("input").focus(function(){
        $(this).css("background-color","#cccccc");
    });
    ```

##### 元素失焦 - `.blur()`  
1. 作用
    当元素失去焦点时，发生 blur 事件。
    blur() 方法触发 blur 事件，或规定当发生 blur 事件时运行的函数：

2. 实例
    ```JavaScript
    $("input").blur(function(){
        $(this).css("background-color","#ffffff");
    });
    ```

## 二. DOM操作 - 操作元素和属性

### 2.1 元素内容 - 获取和设置
#### 获取和设置 所选元素的文本内容 - `.text()`

#### 获取和设置 所选元素的内容（包括 HTML 标签）- `.html()`

#### 获取和设置 表单字段的值- `.val()`

`.text()`、`.html()`以及 `.val()` 示例:
```JavaScript
<script>
    $(document).ready(function(){
        $("#element-btn-id-1").click(function(){
        // 获取 无内容
        alert("元素html为: " + $("#test-input-id").html());
        // 设置 无效果
        $("#test-input-id").html("<b>Hello world!</b>");
        });
    
        $("#val-btn-id-1").click(function(){
        // 获取 luke
        alert("值为: " + $("#test-input-id").val());
        // 设置 输入框内容更改为Hello
        $("#test-input-id").val("Hello");
        });
        
        $("#text-btn-id-1").click(function(){
        // 获取 无内容
        alert("文本为: " + $("#test-input-id").text());
        // 设置 无效果
        $("#test-input-id").text("addtext");
        });
    
        
        $("#element-btn-id-2").click(function(){
        // 获取 无内容
        alert("元素html为: " + $("#test-p-id").html());
        // 设置 代码内容改为 change html
        $("#test-p-id").html("<b>change html</b>");
        });
    
        $("#val-btn-id-2").click(function(){
        // 获取 无内容
        alert("值为: " + $("#test-p-id").val());
        // 设置 无效果
        $("#test-p-id").val("value");
        });
        
        $("#text-btn-id-2").click(function(){
        // 获取 无内容
        alert("文本为: " + $("#test-p-id").text());
        // 设置 文本内容改为 new text
        $("#test-p-id").text("new text");
        });
    
    });
</script>

<p>姓名<input type="text" id="test-input-id" value="luke"><b>文本</b>内容</p>
<button id="element-btn-id-1">显示元素1</button>
<button id="val-btn-id-1">显示值1</button>
<button id="text-btn-id-1">显示文本1</button>

<p id="test-p-id" value="测试">实例<b>文本</b></p>
<button id="element-btn-id-2">显示元素2</button>
<button id="val-btn-id-2">显示值2</button>
<button id="text-btn-id-2">显示文本2</button>
```


### 2.2 获取和设置 属性 - `.attr()`
jQuery attr() 方法用于获取属性值。

实例
```javascript
$("button").click(function(){
    // 获取
    alert($("#runoob").attr("href"));
    // 设置单个属性
    $("#runoob").attr("href","http://www.runoob.com/jquery");
    // 设置多个属性
    $("#runoob").attr({
        "href" : "http://www.runoob.com/jquery",
        "title" : "jQuery 教程"
    });
});
```

### 2.3 添加元素 
> https://www.runoob.com/jquery/jquery-dom-add.html
#### append() - 在被选元素的结尾插入内容
#### prepend() - 在被选元素的开头插入内容
#### after() - 在被选元素之后插入内容
#### before() - 在被选元素之前插入内容

### 2.4 删除元素
#### remove() - 删除被选元素（及其子元素）
#### empty() - 从被选元素中删除子元素