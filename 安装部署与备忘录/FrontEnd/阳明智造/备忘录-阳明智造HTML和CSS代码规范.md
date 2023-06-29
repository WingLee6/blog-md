# 阳明智造HTML和CSS代码规范


<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [一. 命名](#一-命名)
  - [1.1 `id`名 和 `class`名](#11-id名-和-class名)
- [二. 其他内容](#二-其他内容)
  - [5.1 注释](#51-注释)
  - [5.2 代码分块 - `// #region`](#52-代码分块----region)
- [三. 拒绝代码](#三-拒绝代码)
  - [3.1 拒绝将大量样式写入某一个标签中](#31-拒绝将大量样式写入某一个标签中)

<!-- /code_chunk_output -->

## 一. 命名
> 以下示例的变量都定为 DemoName / demo-name / demoName 等
### 1.1 `id`名 和 `class`名
1. 规则:
    + 类名全部小写, 减号`-`分隔单词
2. 示例:  
    ```CSS
    .demo-name {
        padding:10px
    }
    ```
    
    ```html
    <div class="demo-name"></div>
    ```
3. 注意:
    +  
        ```css
        .phy-flex-center{
            display: flex;
            justify-content: center;
            align-items: center;
        }
        ```
    
    + 写子元素样式的时候带上父元素的类名/id等  
        避免一个样式被修改而修改了原始的样子, 即使用后代选择器
        ```html
        <style>        
            .a .b {
                color: red;
            }
        </style>

        <div class="a">
            <div class="b">文字</div>
        </div>
        
        <div class="b">文字</div>
        ```
        上述代码执行后, 第一行"文字"为红的, 第二行"文字"默认黑色;  
        下面错误示范, 会导致两行"文字"全为红色, 如下: 
        ```html
        <style>        
            .b {
                color: red;
            }
        </style>

        <div class="a">
            <div class="b">文字</div>
        </div>
        
        <div class="b">文字</div>
        ```

## 二. 其他内容
### 5.1 注释 


### 5.2 代码分块 - `// #region`
采用region来将代码块进行分类，某一个代码块属于什么，做了什么
示例: 
```javascript
<!-- #region [可选]注释内容 -->
<style>
    .a .b {
        color: red;
    }
</style>
<div class="a">
    <div class="b">文字</div>
</div>
<!-- #endregion -->
```

## 三. 拒绝代码
### 3.1 拒绝将大量样式写入某一个标签中
如: 
```html
<div style="font-size: 18px; color: #00bc8c; text-align: center"></div>
```
 
