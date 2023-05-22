# HTML5 的语法和技巧


<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [〇、前情须知](#〇-前情须知)
  - [0. 版本选择](#0-版本选择)
  - [1. 开发软件](#1-开发软件)
  - [2. 代码规范](#2-代码规范)
  - [3. 教程参考](#3-教程参考)
- [一、头文件等](#一-头文件等)
- [二、 常用标签](#二--常用标签)
  - [1. 标题 - `<h1>`](#1-标题---h1)
  - [2. 段落 - `<p>`](#2-段落---p)
  - [3. 文本 - `<em>` `<b>` `<i>` `<strong>` `<del>` `<span>`](#3-文本---em-b-i-strong-del-span)
  - [4. 换行 - `<br>`](#4-换行---br)
  - [5. 水平线标签 - `<hr />`](#5-水平线标签---hr-)
  - [6. 图像 - `<img />`](#6-图像---img-)
  - [6. 链接 - `<a>`](#6-链接---a)
  - [7. 列表 `<ul> - <li>`](#7-列表-ul---li)
    - [1. 有序列表 - `<ol> - <li>`](#1-有序列表---ol---li)
    - [2. 无序列表 - `<ul> - <li>`](#2-无序列表---ul---li)
    - [总结](#总结)
  - [8. 表格 - `<table> - <tr> - <td>`](#8-表格---table---tr---td)
  - [9. Form表单标签](#9-form表单标签)
    - [1. 容器 - `<form>`](#1-容器---form)
    - [2. 控件 - 输入标签 `<input>`](#2-控件---输入标签-input)
  - [10. 块元素 和 内联元素](#10-块元素-和-内联元素)
  - [11. 页面布局 - 从 `div` 到 h5新标签](#11-页面布局---从-div-到-h5新标签)

<!-- /code_chunk_output -->


## 〇、前情须知
### 0. 版本选择
默认 HTML 5， 其他版本都是上世纪的。 
### 1. 开发软件
1. VS code
    插件安装：
    + error lens: 提示错误
    + live server： 保持代码时刷新页面

### 2. 代码规范
1. 缩进2个字符，否则会和后面vue插件有冲突
2. 代码末尾可以不带分号，觉得分号麻烦可以在设置里改
    参考教程： https://www.bilibili.com/video/BV1kb411f73U/?spm_id_from=333.999.0.0&vd_source=723f3c8024753542c84eae8c2313639a


### 3. 教程参考
1. 字节大佬一周讲完的前端web，学完就业，小白信手拈来……
    + 主讲： UP主-首席bug专家
    + 视频网址： https://www.bilibili.com/video/BV1gY4y1U78C?p=5&spm_id_from=pageDriver&vd_source=723f3c8024753542c84eae8c2313639a
    + 内容简介： 23年的课程比较新，在评论区说是完整视频。视频内容包括H5+CSS+JS

2. 官方文档
    https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a

3. 菜鸟教程
    https://www.runoob.com/html/html-formatting.html
    

## 一、头文件等
1.  `<!doctype>` 声明
    + 作用： 识别标识，避免浏览器乱码
    + 使用方法： 
        必须位于 HTML5 文档中的第一行，示例demo001如下：
        ```html
        <!DOCTYPE html>
        <html> 
        <head>
        <meta charset="utf-8">
        <title>文档标题</title>
        </head>
        
        <body>
        文档内容......
        </body>
        
        </html>
        ```
2. `<meta charset="utf-8">`
    对于中文网页需要使用 <meta charset="utf-8"> 声明编码，否则会出现乱码。
    示例见上面示例demo001。

3. 快速生成html代码模板：
    在合适位置输入 `!`， 按回车；
    即生成模板代码如下：
    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body>
      
    </body>
    </html>
    ```

## 二、 常用标签
> 标签分为单表标签和双标签

### 1. 标题 - `<h1>`
1. 示例： 
    ```html
    <h3>这是一个标题</h3>
    ```
2. 注意：
    + 确保该标签只用于标题，不要为了加粗文字而使用（设置文字样式用CSS）
    + 正确使用标题标签有利于SEO

### 2. 段落 - `<p>`
1. 示例： 
    ```html
    <p>这是一个段落。</p>
    <p>这是另外一个段落。</p>
    ```
2. 注意： 
    + 不用`<p>`标签也可以显示基本的段落效果，**但非常不建议**；

### 3. 文本 - `<em>` `<b>` `<i>` `<strong>` `<del>` `<span>`
1. 标签：                                
    1. `<em>`       着重文字
    2. `<b>`        粗体
    3. `<i>`        斜体
    4. `<strong>`   加重语气
    5. `<del>`      删除字
    6. `<span>`     元素无特殊含义 
2. 示例：
    ```html
    <em>em着重文本</em>
    <b>b加粗文本</b>
    <i>i斜体文本</i>
    <strong>strong加重语气</strong>
    <del>del删除线文本</del>
    <span>span无特殊文本</span>
    ```


### 4. 换行 - `<br>`
1. 示例：
    ```HTML
    <p>床前明月光<br>疑是地上霜</p>
    ```

2. 注意： 
    + 在不产生一个新段落的情况下进行换行；
    + 其他写法`<br />`加个斜杠表示标签结束了。 根据个人习惯选择，作用相同，但建议加 /。

### 5. 水平线标签 - `<hr />`
1. 示例： 
    ```HTML
    <hr />
  
    <hr color="green" width="200px" size="10px" align="right" />
    ```
2. 注意：
    + 其他写法`<hr />`加个斜杠表示标签结束了。 根据个人习惯选择，作用相同，但建议加 /
    + 示例中设置了相关属性；


### 6. 图像 - `<img />`
1. 示例： 
    ```html
    <img decoding="async" src="/images/logo.png" width="258" height="39" />
    ```
2. 注意：
    + 属性：
        1. src 路径/文件名
            - 绝对路径
            - 相对路径
            - 网络路径
        2. alt 规定图像代替文本（当图片无法显示，则显示该文本）
        3. width 图像宽度
        4. height 图像高度
        5. title 鼠标悬停在图片上时，显示该title提示
    + 注意长宽比，防止图片拉伸。可以只设置 宽 或者 高 
            
### 6. 链接 - `<a>`
1. 示例： 
    ```html
    <a href="https://www.runoob.com">这是一个链接</a>
    ```

### 7. 列表 `<ul> - <li>`
#### 1. 有序列表 - `<ol> - <li>`
1. 示例：
    ```html
    <ol type="i"> 
      <li>apple</li>
      <li>banana</li>
    </ol>
    ```
2. 属性( `<ol>` 元素)：
    + `type` 这个属性表明了序号的类型
        - a: 小写字母
        - A: 大写字母
        - i: 小写罗马数字
        - I: 大写罗马数字
        - 1: 数字本属性值将覆盖 `<ol>` 元素中的同名属性值（若存在）

#### 2. 无序列表 - `<ul> - <li>`
1. 示例：
    ```html
    <ul>
      <li>first item</li>
      <li>second item</li>
      <li>third item</li>
    </ul>
    ```
2. 属性( `<ol>` 元素)：
    + `type` 这个属性表明了序号的类型
        - disc: 默认，实心圆
        - cricle: 空心圆
        - square: 小方块
        - none: 无标记
#### 总结
1. 列表可以嵌套
2. 快速生成列表代码的方法
    在合适的位置输入 `ul>li*5` (即，生成5个无须列表)。按 Tab键，则会生成列表代码模板。

### 8. 表格 - `<table> - <tr> - <td>`
1. 示例：
    ```html
    <table>
      <tr>
        <td>row 1, cell 1</td>
        <td>row 1, cell 2</td>
      </tr>
      <tr>
        <td>row 2, cell 1</td>
        <td>row 2, cell 2</td>
      </tr>
    </table>
    ```
2. 属性：
    + `border` （设置在`<table>`标签）设置边框，单位px 
    + `width` （设置在`<table>`标签）设置宽度，单位px
    + `height` （设置在`<table>`标签）设置高度，单位px

3. 注意：
    + 快速生成表格代码的方法
        在合适的位置输入 `table>tr*2>td*3{文本信息}` (即，生成2行*3列的单元格，单元格内容为“文本信息”)。按 Tab键，则会生成表格代码模板。
        > Tab键 在 {} 内按

    + 单元格合并属性：
        + `colspan` （设置在`<td>`标签）横向合并
        + `rowspan` （设置在`<td>`标签）竖向合并
        示例：
        ```html
        <p>合并单元格 before</p>
        <table border="1">
          <tr>
            <td>文本信息1</td>
            <td>文本信息2</td>
            <td>文本信息3</td>
          </tr>
          <tr>
            <td>文本信息4</td>
            <td>文本信息5</td>
            <td>文本信息6</td>
          </tr>
        </table>

        <p>合并单元格 after</p>
        <table border="1">
          <tr>
            <td colspan="2">文本信息1</td>
            <td rowspan="2">文本信息3</td>
          </tr>
          <tr>
            <td>文本信息4</td>
            <td>文本信息5</td>
          </tr>
        </table>
        ```
### 9. Form表单标签
表单包括 容器 和 控件  

示例（见demo002.html）: 
```html
<form action="url" method="get" name="myform"></form>
```

#### 1. 容器 - `<form>`
1. 属性：
    + `action` 服务器地址Url
    + `method` 表单名称， 可选：`get`|`post`
        + `get` 默认； 提交的数据会加在Url后，以`?`作为分隔符；
            - 适用1: 一般提交少量数据
            >（因为可以在Url中看到），所以**不**可用于提交密码
        + `post` 提交的数据Url看不到
            - 适用1: 提交大量数据
            - 适用2: 密码等隐秘信息

    + `name` 名称
        
#### 2. 控件 - 输入标签 `<input>`
1. 属性：
    + `type` 输入类型， 可选：`text`|`passward`|`radio`|`checkbox`|`submit`
        + `text` 文本域； 默认宽度为20字符
        + `password` 密码字段； 非明文显示，*或. 显示
        + `radio` 单选按钮； 默认宽度为20字符
        + `checkbox` 复选按钮； 默认宽度为20字
        + `submit` 提交； 默认宽度为20字符

    + `value` 文本内容或上传内容； 不同的`type`会有所不同；
    
### 10. 块元素 和 内联元素
1. 区别：
    | 块元素 | 内联元素 |
    | - | - |
    | 块元素独占一行，自上而下排列） | 不会独占一行， 只占自身大小 |
    | 可以设置 `width`、`height` 属性 |  `width`、`height` 属性无效 |
    | 可以包含行内元素 和 其他块级元素 | 一般不包含其他块级元素 |
    | `div` `form` `h1` `hr` `p` `input` `table` `ul` | `a` `b` `em` `i` `span` `strong` | 
    
    > 行内块级元素（不换行，可识别宽高）：
        `<buuton>`、 `<img>`、 `<input>`

### 11. 页面布局 - 从 `div` 到 h5新标签
1. 示例：
    ```html
    <p> 旧版布局 通过div标签实现 </p>
    <div id="header">网页标题</div>
    <div id="nav">导航栏</div>
    <div id="article">
      <div id="section1">文章1</div>
      <div id="section2">文章2</div>
    </div>
    <div id="silder">侧边栏</div>
    <div id="content">内容</div>
    <div id="footer">页脚</div>

    
    <p> 新布局 h5新标签实现 </p>
    <header>网页标题</header>
    <nav></nav>
    <article>
      <section></section>
    </article>
    <silder></silder>
    <aside></aside>
    <footer></footer>
    ```

2. h5新标签
    1. 优势： 更加简洁和规范，便于爬虫等搜索引擎识别
    2. 劣势：只能新浏览器访问，需要解决兼容性问题
    2. 常用标签（参考https://www.runoob.com/html/html5-new-element.html）：
        + `<article>`	定义页面某一个独立的内容区域，如一个完整的文章。
        + `<aside>`	定义页面的侧边栏内容。
        + `<footer>`	定义 section 或 document 的页脚。
        + `<header>`	定义了文档的头部区域
        + `<nav>`	定义导航链接的部分。
        + `<section>`	定义文档中的节（section、区段、章节）。









