# CSS语法和技巧


<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [〇、语法基础](#〇-语法基础)
  - [0. 参考汇总](#0-参考汇总)
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
  - [2. 元素element选择器 `<>`](#2-元素element选择器-)
  - [3. 类class选择器 `.`](#3-类class选择器-)
  - [4. id 选择器 `#`](#4-id-选择器-)
  - [5. 合并选择器](#5-合并选择器)
  - [6. 关系选择器](#6-关系选择器)
    - [6.1 后代选择器](#61-后代选择器)
    - [6.2 子代选择器](#62-子代选择器)
    - [6.3 相邻兄弟选择器](#63-相邻兄弟选择器)
    - [6.4 通用兄弟选择器](#64-通用兄弟选择器)
  - [附1： 样式的优先级： 行内样式 > id选择器 > 类选择器 > 元素选择器](#附1-样式的优先级-行内样式--id选择器--类选择器--元素选择器)
  - [附2： 选择器汇总](#附2-选择器汇总)
- [二、 字体属性](#二--字体属性)
  - [1. color 字体颜色](#1-color-字体颜色)
  - [2. font-size 字体大小](#2-font-size-字体大小)
  - [3. font-weight 文本粗细](#3-font-weight-文本粗细)
  - [4. font-style 字体样式](#4-font-style-字体样式)
  - [5. font-family 字体库](#5-font-family-字体库)
- [三、 背景样式](#三--背景样式)
  - [1. background-color 设置背景颜色](#1-background-color-设置背景颜色)
  - [2. background-image 添加背景图片](#2-background-image-添加背景图片)
  - [3. background-position 设置背景图片显示起始位置](#3-background-position-设置背景图片显示起始位置)
  - [4. background-repeat 设置背景图片如何填充](#4-background-repeat-设置背景图片如何填充)
  - [5. background-size 设置背景图片大小属性](#5-background-size-设置背景图片大小属性)
- [四、 文本属性](#四--文本属性)
  - [1. text-align 文本对齐方式](#1-text-align-文本对齐方式)
  - [2. text-decoration 文本下划线、删除线等](#2-text-decoration-文本下划线-删除线等)
  - [3. text-transform 控制文本大小写](#3-text-transform-控制文本大小写)
  - [4. text-indent 文本首行缩进](#4-text-indent-文本首行缩进)
- [五、 表格属性](#五--表格属性)
  - [1. border  表格边框设置](#1-border--表格边框设置)
  - [2. border-collapse 折叠边框使其折叠为单边框](#2-border-collapse-折叠边框使其折叠为单边框)
  - [3. width 和 height     表格的宽度和高度](#3-width-和-height-----表格的宽度和高度)
  - [4. text-align 和 vertical-align  表格内文本对齐](#4-text-align-和-vertical-align--表格内文本对齐)
    - [text-align   水平对齐](#text-align---水平对齐)
    - [vertical-align   竖直对齐](#vertical-align---竖直对齐)
  - [5. padding   填充空间](#5-padding---填充空间)
  - [6. color 和 background   表格内 字体颜色 和 背景颜色](#6-color-和-background---表格内-字体颜色-和-背景颜色)
- [六、 CSS盒子模型（Box Model）](#六--css盒子模型box-model)
  - [外边距 margin - 边框外的内容](#外边距-margin---边框外的内容)
  - [边框 border - 围绕padding和content](#边框-border---围绕padding和content)
  - [内边距 padding - 内容周围的部分，内容到边框之间的空隙](#内边距-padding---内容周围的部分内容到边框之间的空隙)
  - [实际内容 content - 内容本身。文字或图像](#实际内容-content---内容本身文字或图像)
- [七 弹性盒子模型](#七-弹性盒子模型)
  - [[父级属性] `display: flex;` 开启弹性盒子](#父级属性-display-flex-开启弹性盒子)
  - [[父级属性] `flex-direction` 改变 弹性子元素 在 父容器 的排版](#父级属性-flex-direction-改变-弹性子元素-在-父容器-的排版)

<!-- /code_chunk_output -->


## 〇、语法基础
### 0. 参考汇总
1. 菜鸟教程：
    + https://www.runoob.com/css/css-tutorial.html
    + https://www.runoob.com/cssref/css-reference.html#flexbox
    
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

### 2. 元素element选择器 `<>`
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



### 6. 关系选择器
见下面总结表格
#### 6.1 后代选择器
#### 6.2 子代选择器
#### 6.3 相邻兄弟选择器
#### 6.4 通用兄弟选择器


### 附1： 样式的优先级： 行内样式 > id选择器 > 类选择器 > 元素选择器

### 附2： 选择器汇总
> 参考： https://www.runoob.com/cssref/css-selectors.html

| 名称 | 选择器格式 | 示例 | 示例说明 |
| - | - | - | - |
| 全局选择器 | * | * | 选择所有元素	|
| 元素element选择器 | element | p | 选择所有`<p>`元素 |
| 类class选择器 | .class	| .intro | 选择所有class="intro"的元素 |
| id选择器 | #id | #firstname | 选择所有id="firstname"的元素 |
| 合并选择器 | element1,element2 | div,p | 选择所有`<div>`元素和`<p>`元素 |
| 后代选择器 | element1 element2 | div p | 选择`<div>`元素**内的所有**`<p>`元素 |
| 子代选择器 | element1>element2 | div>p | 选择所有**父级**是 `<div>` 元素的 `<p>` 元素 |
| 相邻兄弟选择器 | element1+element2 | div+p | 选择所有**紧跟**在 `<div>` 元素之后的第一个 `<p>` 元素 |
| 通用兄弟选择器 | element1~element2 | p~ul | 选择`<p>`元素**之后的每一个**`<ul>`元素 |









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


### 3. background-position 设置背景图片显示起始位置
1. 示例：
    ```css
    div {
        height: 300px;
        width: 300px;
        background-image: url(img_flwr.gif), url(paper.gif); 
        background-position: left top;
    }
    ```
    可选项：
    + `0% 0%`   （默认值） 
    + `x% y%`   第一个为垂直，第二个为水平 
        - 若只设置一个，其余默认 `50%`
    + `xpos ypos`   单位是像素 如`10% 10%`
    + `left center` 位置两两组合
        - 位置包括 `left` | `right` | `top` | `center` | `bottom` 


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
    + 像素值length 如`80px 60px`  
        - 第一个宽度，第二个高度  （如果只设置一个，第二个Auto）
    + 百分比percentage 如`100% 100%`
        - 第一个宽度，第二个高度  （如果只设置一个，第二个Auto）
    + `cover` 保持图片横纵比， 将图片缩放至充满容器（多出部分裁剪）
    + `contain`  保持图片横纵比， 将图片缩放至尽可能充满容器（容器会没有被占满）
    


## 四、 文本属性

###  1. text-align 文本对齐方式
1. 示例（见demo007.html）
    有Html标签：
    ```html
    <p class="textalignclass">文本属性测试 text-align</p>
    ```
    为其设置css样式如下：
    ```css
    .textalignclass {
        text-align: right;
    }
    ```
    可选项：
    + `lift`(默认) | `center` | `right`


### 2. text-decoration 文本下划线、删除线等
1. 示例（见demo007.html）
    有Html标签：
    ```html
    <p class="textdecorationclass">文本属性测试 text-decoration</p>
    ```
    为其设置css样式如下：
    ```css
    .textdecorationclass {
        text-decoration: underline;
    }
    ```
    可选项：
    + `underline`   下划线
    + `center`      上划线
    + `right`       删除线

### 3. text-transform 控制文本大小写
1. 示例（见demo007.html）
    有Html标签：
    ```html
    <p class="texttransformclass">文本属性测试 text-transform hello world</p>
    ```
    为其设置css样式如下：
    ```css
    .texttransformclass {
        text-transform: capitalize;
    }
    ```
    可选项：
    + `captializa`      每个单词首字母大写
    + `uppercase`       全部大写
    + `lowercase`       全部小写



### 4. text-indent 文本首行缩进
1. 示例（见demo007.html）
    有Html标签：
    ```html
    <p class="textindentclass">文本属性测试 text-indent</p>
    ```
    为其设置css样式如下：
    ```css
    .textindentclass {
        text-indent: 50px;
    }
    ```
    可选项：
    + 像素值 如`5px`
        - 允许负值   



## 五、 表格属性

###  1. border  表格边框设置
1. 示例（见demo007.html）
    有Html标签：
    ```html
    <table>
        <tr>
            <tb>文本</tb>
        </tr>
        <tr>
            <tb>文本</tb>
        </tr>
    </table>
    ```
    为其设置css样式如下：
    ```css
    table {
        border: 1px solid red;
    }
    ```
    + 上述代码后会出现表格的外框是红色. 若要每个内框也为红色，则将代码改为：
        ```css
        table, td {
            border: 1px solid red;
        } 
        ```

    可选项（顺序为 `宽度 边线类型 颜色`）：
    1. 宽度-可选项
        - 像素宽度
    2. 边线类型-可选项
        - solid 直线
    3. 颜色-可选项
        - 略
    


###  2. border-collapse 折叠边框使其折叠为单边框 
1. 示例（见demo007.html）
    
    有Html标签：
    ```html
    <table class="collapsetable">
        <tr>
            <td class="collapsetd">折叠</td>
            <td class="collapsetd">折叠</td>
        </tr>
        <tr>
            <td class="collapsetd">折叠</td>
            <td class="collapsetd">折叠</td>
        </tr>
    </table>
    ```
    
    **折叠前**css样式（有两个红色边框）：
    ```css
    .collapsetable, .collapsetd {
        border: 1px solid green;
    }
    ```
    
    **折叠后**css样式（合并为一个单边框）：
    ```css
    .collapsetable, .collapsetd {
        border: 1px solid green;
    }
    
    .collapsetable {
        border-collapse: collapse;
    }
    ```
    即，单独对`<table>`标签增加一个`border-collapse`样式

### 3. width 和 height     表格的宽度和高度
1. 示例（见demo007.html）
    
    有Html标签：
    ```html
    <table class="collapsetable">
        <tr>
            <td class="collapsetd">文本</td>
            <td class="collapsetd">文本</td>
        </tr>
        <tr>
            <td class="collapsetd">文本</td>
            <td class="collapsetd">文本</td>
        </tr>
    </table>
    ```
    css样式：
    ```css
    table {
        width: 500px;
        height: 300px;
    }
    ```
    
### 4. text-align 和 vertical-align  表格内文本对齐
#### text-align   水平对齐
1. 示例（见demo007.html）
    
    有Html标签：
    ```html
    略
    ```
    css样式：
    ```css
    td {
        text-align: center;
    }
    ```

#### vertical-align   竖直对齐
1. 示例（见demo007.html）
    有Html标签：
    ```html
    略
    ```
    css样式：
    ```css
    td {
        height: 50px;
        vertical-align: bottom;
    }
    ```
    > `height: 50px;` 只是防止表格没有高度，看不出对齐效果 


### 5. padding   填充空间
1. 示例（见demo007.html）
    有Html标签：
    ```html
    略
    ```
    css样式：
    ```css
    td {
        padding: 20px;
    }
    ```
    表格中每个文本的上下左右都被填充了20px空白空间 

### 6. color 和 background   表格内 字体颜色 和 背景颜色
1. 示例（见demo007.html）
    有Html标签：
    ```html
    略
    ```
    css样式：
    ```css
    td {
        color: aqua;
        background-color: blanchedalmond;
    }
    ```


## 六、 CSS盒子模型（Box Model）
![CSS盒子模型（Box Model）](https://github.com/lukelee98/pic-bed/blob/main/Pic2023/CSS%E7%9B%92%E5%AD%90%E6%A8%A1%E5%9E%8BBoxModel.png?raw=true)

所有的HTML元素都可以看作一个盒子。盒子模型包括：
+ 外边距 margin - 边框外的内容
+ 边框 border - 围绕padding和content
+ 内边距 padding - 内容周围的部分，内容到边框之间的空隙
+ 实际内容 content - 内容本身。文字或图像

### 外边距 margin - 边框外的内容
1. 示例见（demo008.html）
    ```html
    <div class="marginbox">
        测试box model - marginbox
    </div>
    ```
    CSS样式：
    ```css
    .marginbox {
        width: 150px;
        height: 150px;
        background-color: blue;
        margin: 0px;
    }
    ```
    `margin`可选项: 
    + 长度： （如`margin: 50px;`）像素, pt, em,等
    + `x%`： 使用百分比值定义一个填充

    `margin`参数的格式：
    1. 简写属性：
        + 单值：如`margin:25px;`
            - 所有的填充都是25px
        + 双值： 如`v:25px 50px;`
            - 上下填充为25px
            - 左右填充为50px
        + 三值： 如`margin:25px 50px 75px;`
            - 上填充为25px
            - 左右填充为50px
            - 下填充为75px  
        + 四值（逆时针）： 如`margin:25px 50px 75px 100px;`
            + 上填充为25px
            + 右填充为50px
            + 下填充为75px
            + 左填充为100px
    2. 逐一指定：
        ```css
        margin-top:25px;
        margin-bottom:25px;
        margin-right:50px;
        margin-left:50px;
        ```


### 边框 border - 围绕padding和content
1. 示例见（demo008.html）
    ```html
    <div class="borderbox">
        测试box model - borderbox
    </div>
    ```
    CSS样式：
    ```css
    .borderbox {
        width: 100px;
        height: 100px;
        background-color: pink;
        border: 10px solid black;
    }
    ```
    `border`可选项简明属性：
    + 如`border:5px solid red;` 分别为 边框宽度、类型 和颜色
    > 边框单独设置,见https://www.runoob.com/css/css-border.html

### 内边距 padding - 内容周围的部分，内容到边框之间的空隙
1. 示例见（demo008.html）
    ```html
    <div class="paddingbox">
        测试box model - 加上padding
    </div>
    ```
    CSS样式：
    ```css
    .paddingbox {
        width: 100px;
        height: 100px;
        background-color: green;    
        padding: 50px;
    }
    ```
    `padding`可选项: 
    + 长度： （如`padding: 50px;`）像素, pt, em,等
    + `x%`： 使用百分比值定义一个填充
    `padding`参数的格式：
    1. 简写属性：
        + 单值：如`padding:25px;`
            - 所有的填充都是25px
        + 双值： 如`padding:25px 50px;`
            - 上下填充为25px
            - 左右填充为50px
        + 三值： 如`padding:25px 50px 75px;`
            - 上填充为25px
            - 左右填充为50px
            - 下填充为75px  
        + 四值（逆时针）： 如`padding:25px 50px 75px 100px;`
            + 上填充为25px
            + 右填充为50px
            + 下填充为75px
            + 左填充为100px
    2. 逐一指定：
        ```css
        padding-top:25px;
        padding-bottom:25px;
        padding-right:50px;
        padding-left:50px;
        ```

### 实际内容 content - 内容本身。文字或图像
1. 示例见（demo008.html）
    ```html
    <div class="contentbox">
        测试box model - 只有content
    </div>
    ```
    CSS样式：
    ```css
    .contentbox {
        width: 100px;
        height: 100px;
        background-color: red;
    }
    ```


## 七 弹性盒子模型
- 通过设置`display = flex`将其定义为弹性容器
- 弹性容器内包含 一个或多个弹性子容器

示例
若存在父元素(如 `class="father"`) 和 其下多个子元素(如`class="sonX"`)
代码如下(见demo008.html)
```html
<style>
    .father {
        width:  500px;
        height: 500px;
        background-color: antiquewhite;
    }
    
    .son1, .son2, .son3 {
        width: 100px;
        height: 100px;
    }
    
    .son1 {
        background-color: aqua;
    }
    .son2 {
        background-color: pink;
    }
    .son3 {
        background-color: red;
    }

</style>

<div class="father">
    <div class="son1">
        儿子1
    </div>
    <div class="son2">
        儿子2
    </div>
    <div class="son3">
        儿子3
    </div>
</div>
```

### [父级属性] `display: flex;` 开启弹性盒子 
1. 示例
    ```html
    <style>
        .father {
            width:  500px;
            height: 500px;
            background-color: antiquewhite;
            display: flex;
        }
        
        .son1, .son2, .son3 {
            width: 100px;
            height: 100px;
        }
        
        .son1 {
            background-color: aqua;
        }
        .son2 {
            background-color: pink;
        }
        .son3 {
            background-color: red;
        }

    </style>

    <div class="father">
        <!-- 元素同例 -->
    </div>
    ```
    
    给父级元素增加样式`display: flex;`,效果为
    + 开启 弹性盒子
    + 其下三个子元素改为横向排列(若要更改见属性`flex-direction`)

###  [父级属性] `flex-direction` 改变 弹性子元素 在 父容器 的排版
0. **前置属性**: 需要父元素已设置`display: flex;`属性
1. 示例
    ```html
    <style>
        .father {
            width:  500px;
            height: 500px;
            background-color: antiquewhite;
            display: flex;
            
        }
        
        .son1, .son2, .son3 {
            width: 100px;
            height: 100px;
        }
        
        .son1 {
            background-color: aqua;
        }
        .son2 {
            background-color: pink;
        }
        .son3 {
            background-color: red;
        }

    </style>

    <div class="father">
        <!-- 元素同例 -->
    </div>
    ```
    
    给父级元素增加样式`flex-direction: column;`,效果为
    + 其下三个子元素改为横向排列
    
    keu






















