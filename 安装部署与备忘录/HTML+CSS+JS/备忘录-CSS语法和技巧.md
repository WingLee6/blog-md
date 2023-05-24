# CSS语法和技巧


<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [〇、语法基础](#〇-语法基础)
  - [1. CSS语法规则的构成](#1-css语法规则的构成)
    - [第一部分：选择器](#第一部分选择器)
    - [第二部分：声明](#第二部分声明)
  - [2. 注释](#2-注释)
  - [3. CSS 的引入方式](#3-css-的引入方式)
    - [方式一： 内联样式(行内样式)](#方式一-内联样式行内样式)
    - [方法二： 内部样式](#方法二-内部样式)
    - [方式三： 外部样式（推荐）](#方式三-外部样式推荐)
- [一、 选择器](#一--选择器)
  - [1. 全局选择器 `*`](#1-全局选择器-)
  - [2. 元素选择器 `<>`](#2-元素选择器-)
  - [3. 类class选择器 `.`](#3-类class选择器-)
  - [4. id 选择器 `#`](#4-id-选择器-)
  - [5. 合并选择器](#5-合并选择器)
  - [样式的优先级： 行内样式 > id选择器 > 类选择器 > 元素选择器](#样式的优先级-行内样式--id选择器--类选择器--元素选择器)
- [二、 字体属性](#二--字体属性)
  - [1. color](#1-color)
  - [2. font-size 字体大小](#2-font-size-字体大小)
  - [3. font-weight 文本粗细](#3-font-weight-文本粗细)
  - [4. font-style 字体样式](#4-font-style-字体样式)
  - [5. font-family 字体库](#5-font-family-字体库)

<!-- /code_chunk_output -->


## 〇、语法基础
### 1. CSS语法规则的构成
示例：见demo004
```css
h1 {
  color: red;
  font-size: 20px;
}
```

我们将其分为两个部分：
#### 第一部分：选择器
    ```css
    h1 {
      ……
    }
    ```
#### 第二部分：声明
    ```css
    color: red;
    font-size: 20px;
    ```
    其中，
    `color`和`font-size`为属性（property）
    `red`和`20px`为值
    
    声明每句都是以`;`结束， 并用 `{ }` 括起来


### 2. 注释
CSS注释以 `/*` 开始, 以 `*/` 结束


### 3. CSS 的引入方式
#### 方式一： 内联样式(行内样式)
1. 定义：在标签中添加文本的样式；
2. 示例（见demo004）：
    ```html
    <p style="color: bisque; font-size: 40px;">内联样式</p>
    ```
3. 注意：
    + 不建议使用，没有足够的规范，不便维护

#### 方法二： 内部样式
1. 定义： 在文件的`<head>`标签里添加`<style>`标签，并在里面添加统一样式
2. 示例h3标签添加统一样式（见demo004）：
    ```html
    <!DOCTYPE html>
    <head>
        <meta charset="UTF-8">
        <title>demo004</title>

        <style>
            h3 {
                color:aqua;
                font-size: 60px;
            }
        </style>
    </head>
    <body>
        <p style="color: bisque; font-size: 40px;">内联样式</p>
        
        <h3>内部样式，样式内容见style标签内</h3>
        <h3>内部样式，样式内容见style标签内</h3>
        <h3>内部样式，样式内容见style标签内</h3>
        
    </body>
    </html>
    ```

3. 注意：
    + 单个页面可以接受，但是在多个页面就不利于后期维护


#### 方式三： 外部样式（推荐）
1. 示例见demo004.html  demo005.html 和 demo006.css
    若demo004.html  demo005.html等多个页面想要引入demo006.css的样式设定，则要做如下几步：
    + Step 1：内容完善（以`<h2>`标签为例）
        在demo004.html  demo005.html完成基本的标签代码，如：
        ```html
        <h2>外部样式，样式内容见demo006.css文件</h2>
        ```
        在demo006.css文件对`<h2>`标签添加的样式，如：
        ```css
        h2 {
          color:blue;
          font-size: 10px;
        }
        ```
    + Step 2： 引入css文件
        在demo004.html  demo005.html的`<head>`标签内添加`<link>`标签，如：
        ```html
        <link rel="stylesheet" href="demo006.css">
        ```
        保存，刷新，即可看到样式

    注意：
    + 推荐该方法！


## 一、 选择器
### 1. 全局选择器 `*`
1. 示例：
    ```CSS
    * {
        color: greenyellow;
    }
    ```
    **选择器为星号（*）**
2. 特点： 任何元素都匹配，优先级低，一般只用于初始化

### 2. 元素选择器 `<>`
1. 示例：
    ```CSS
    h1 { 
        font-size: 20px;
    }
    ```
    **选择器为html标签类型**
2. 特点： 页面上同一类型的标签

### 3. 类class选择器 `.` 
1. 示例：
    若有元素如下：
    ```html
    <h5 class="oneclass">类选择器测试</h5>
    ```
    则可以根据`class`的值对其选择，示例如下：
    ```CSS
    .oneclass { 
        font-size: 20px;
    }
    ```
    **选择器为 `.`+`class` 的值**

2. 特点： 
    + class的值可以多次使用！ 同一class值给多个标签使用
        - 注意和【id选择器】区分 
    + class命名：只能字母和数字，且数字不可在开头
    + 可以对某一标签类型下的`class`设置样式
        例如，对`<p>`下`class`值为 threeclass，设置样式
        则有html代码如下：
        ```html
        <p class="threeclass">指定 HTML 元素的 class生效， 这条生效</p>
        <p class="XXXXclass">指定 HTML 元素的 class生效， 不生效</p>
        <p>指定 HTML 元素的 class生效， 不生效</p>
        <span class="threeclass">指定 HTML 元素的 class生效， 不生效</span>
        ```
        则有CSS代码如下：
        ```css
        p.threeclass {
            color: darkviolet;
        }
        ```
    + 同一标签可以有多个class属性，用空格隔开
        一般用于颜色、大小分别设置样式
        示例如下：
        html代码如下：
        ```html
        <p class="colorclass sizeclass">多个class颜色和大小设定</p>
        ```
        > 错误写法：`<p class="colorclass" class="sizeclass">多class的错误写法</p>`  

        CSS代码如下：
        ```css
        .colorclass {
            color: red;
        }

        .sizeclass {
            font-size: 60px;
        }
        ```        

### 4. id 选择器 `#`
1. 示例：
    若有元素如下：
    ```html
    <p id="oneid">测试id选择器</p>
    ```
    则可以根据`class`的值对其选择，示例如下：
    ```CSS
    #oneid {
        color: hotpink;
    }
    ```
    **选择器为 `#`+`id` 的值**
2. 特点： 
    + 只能使用一次！
        - 注意和【class选择器】区分 
    + id命名：只能字母和数字，且数字不可在开头


### 5. 合并选择器
1. 示例：
    ```css
    h2, .oneclass {
        font-size: 70px;
    }
    ```
    **选择器遵循上面规则， 中间逗号隔开**
2. 特点： 
    + 提取公共样式，减少重复


### 样式的优先级： 行内样式 > id选择器 > 类选择器 > 元素选择器


## 二、 字体属性

### 1. color 字体颜色
### 2. font-size 字体大小
1. 示例：
    ```css
    h2 {
        font-size: 70px;
    }
2. 注意：
    + Chrome接受的最小字体为12px
### 3. font-weight 文本粗细
1. 示例：
    ```css
    p {
        font-weight: 70px;
    }
    ```

    可选项：
    + `bold`        普通粗
    + `bolder`      更粗(和`bold` 差别不大)
    + `lighter`     更细文本
    + `100` ~ `900` （常用） 自定义粗细 
        - =400 为默认
        - =700 等同`bold` 


### 4. font-style 字体样式
1. 示例：
    ```css
    p {
        font-style: italic;
    }
    ```

    可选项：
    + `normal`      默认
    + `italic`      斜体

### 5. font-family 字体库
1. 示例：
    ```css
    p {
        font-family: "Microsoft YaHei";
    }
    ```
    可选项：
    + `"Microsoft YaHe"`    微软雅黑
    + `"Simsun"`            XX字体


## 三、 背景样式
> 参考： https://www.runoob.com/css3/css3-backgrounds.html
### 1. background-color 设置背景颜色
1. 示例：
    ```css
    .backgroundsetting {
        height: 300px;
        width: 300px;
        background-color: red;
    }
    ```


### 2. background-image 添加背景图片
1. 示例：
    ```css
    div {
        height: 300px;
        width: 300px;
        background-image: url(img_flwr.gif), url(paper.gif); 
    }
    ```
    + 路径为本地路径 或 网络路径

2. 注意：
    + 不同的背景图像和图像用逗号隔开，所有的图片中显示在最顶端的为第一张。


### 3. background-position 设置背景图片显示位置
1. 示例：
    ```css
    p {
        
    }
    ```
2. 注意：
    + 


### 4. background-repeat 设置背景图片如何填充
1. 示例：
    ```css
    div {
        height: 300px;
        width: 300px;
        background-image: url(img_flwr.gif); 
        background-repeat: no-repeat
    }
    ```
    可选项：
    + `repeat`      （默认）若图片背景没有占满整个区域，则重复平铺图片，直至占满该区域
    + `repeat-x`    只水平方向平铺
    + `repeat-y`    只竖直方向平铺
    + `no-repeat`   不平铺



### 5. background-size 设置背景图片大小属性
1. 示例：
    ```css
    div{
        background:url(img_flwr.gif);
        background-size:100% 100%;
        background-repeat:no-repeat;
    }
    ```
    可选项：
    + 像素值 如`80px 60px`
    + 百分比 如`100% 100%`
2. 注意：
    + 







