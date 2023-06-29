# Bootstrap 语法和技巧


<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [一. Bootstrap 须知](#一-bootstrap-须知)
  - [1.1 Bootstrap 版本](#11-bootstrap-版本)
  - [1.2 Bootstrap 的下载与安装](#12-bootstrap-的下载与安装)
    - [1.2.1 CDN](#121-cdn)
    - [1.2.2 Bootstrap资料库下载](#122-bootstrap资料库下载)
- [二. Bootstrap5 容器](#二-bootstrap5-容器)
  - [`class="container"` 固定宽度](#classcontainer-固定宽度)
  - [`class="container-fluid"` 100%宽度](#classcontainer-fluid-100宽度)
  - [`class="pt-5"` 容器顶部内边距](#classpt-5-容器顶部内边距)
- [三. `class="col-*-*"`网格系统](#三-classcol-网格系统)
  - [3.1 定义](#31-定义)
  - [3.2 设置规则](#32-设置规则)
- [四.  `class="h*"|"display-*"` | `<small>` | `<mark>` 等文字排版](#四--classhdisplay---small--mark-等文字排版)
  - [4.1 `class="h*"|"display-*"` 标题文本](#41-classhdisplay--标题文本)
  - [4.2 `<small>` 小标题small(小且颜色浅)](#42-small-小small标题small小且颜色浅small)
  - [4.3 `<mark>` 高亮标题mark(黄色高亮)](#43-mark-高亮mark标题mark黄色高亮mark)
  - [4.4  `<abbr>` 底部虚线文本](#44--abbr-abbr底部虚线文本abbr)
  - [4.5  `<code>` 代码块](#45--code-code代码块code)
  - [4.6  `<kbd>` 快捷键](#46--kbd-kbd快捷键kbd)
  - [更多排版](#更多排版)
- [五. 文本颜色](#五-文本颜色)
  - [5.1 `class="text-*"` 文本颜色](#51-classtext--文本颜色)
  - [5.2 `class="text-black-*"` |  `class="text-white-*"` 文本透明度](#52-classtext-black----classtext-white--文本透明度)
  - [5.3 `class="bg-*"` 背景颜色](#53-classbg--背景颜色)
- [六. `class="alert-*"` 提示框](#六-classalert--提示框)
- [七. `class="btn btn-*"` 按钮](#七-classbtn-btn--按钮)

<!-- /code_chunk_output -->


> 窗口(屏幕) -> 容器 -> 元素
## 一. Bootstrap 须知
### 1.1 Bootstrap 版本
| 版本 | 特征 | 备注 |
| - | - | - |
| Bootstrap 3&4 | | | 
| Bootstrap 5 | 1. 不再依赖 `jQuery`，使用了原生的 JS, 当然我们如果要想用也可以引入 `jQuery` <br /> 2. 样式更多, 响应速度更快 | 最新版本, 现在使用5.3| 

兼容问题: 
1. Bootstrap5 支持所有主要的最新稳定版本浏览器，但不支持 Internet Explorer 11 及以下版本。
2. Bootstrap5 IE11 以下版本的浏览器，Bootstrap4 放弃了对 IE8 以及 iOS 6 的支持。如果需要对旧版本浏览器兼容，那么请使用 Bootstrap3。


### 1.2 Bootstrap 的下载与安装
#### 1.2.1 CDN 
1. 国内网点: https://www.staticfile.org/
    
2. 国际网点:  https://cdnjs.com/libraries/bootstrap

#### 1.2.2 Bootstrap资料库下载
官网: https://getbootstrap.com/docs/5.1/getting-started/download/


## 二. Bootstrap5 容器
### `class="container"` 固定宽度
1. 解释
    根据页面大小确定**容器的宽度**, 宽度规则如下:
    | 页面尺寸 | 容器尺寸max-width |
    | - | - |
    | 超级小屏幕 <576px	| 100% |
    | 小屏幕 ≥576px | 540px |
    | 中等屏幕 ≥768px | 720px |
    | 大屏幕 ≥992px | 960px |
    | 特大屏幕 ≥1200px |  1140px |
    | 超级大屏幕 ≥1400px | 1320px |

2. 示例
    见demo019.html
    ```html
    <div class="container" style="background-color: aqua;">
        <h1>container</h1>
        <p>当屏幕宽度设置为800px, 可以看到这个容器(max-width=720px)有旁白</p>
    </div>
    ```
    

### `class="container-fluid"` 100%宽度
1. 解释
    100%宽度, 无论页面宽度如何, 当前容器的宽度都是100%

2. 示例: 
    见demo019.html
    ```html
    <div class="container-fluid" style="background-color: red;">
        <h1>container-fluid</h1>
        <p>当屏幕宽度设置为800px, 可以看到这个容器(max-width=100%)无旁白</p>
    </div>
    ```

### `class="pt-5"` 容器顶部内边距
1. 解释
    填充容器顶部内边距

2. 示例: 
    见demo019.html
    ```html
    <div class="container-fluid" style="background-color: red;">
        <h1>container-fluid</h1>
        <p>当屏幕宽度设置为800px, 可以看到这个容器(max-width=100%)无旁白</p>
    </div>
    ```

## 三. `class="col-*-*"`网格系统
### 3.1 定义
+ 网格系统随着屏幕或视口（viewport）尺寸的增加，系统会自动分为最多 12 列
+ 我们也可以根据自己的需要，定义列数(最多 12 列)

### 3.2 设置规则
1. 分类
    | 窗口类型 | 前缀 |
    | - | - | 
    | **针对所有设备** | `class="col-*"` |
    | **平板** 窗口宽度>=576px | `class="col-sm-*"` | 
    | **桌面显示器** 窗口宽度>=768px | `class="col-md-*"` |
    | **大桌面显示器** 窗口宽度>=992px | `class="col-lg-*"` |
    | **特大桌面显示器** 窗口宽度>=1200px | `class="col-xl-*"` |
    | **超大桌面显示器** 窗口宽度>=1400px | `class="col-xxl-*"` |
    
    > `*`表示1~12的数字, 代表格数, 示例见下文

2. 示例(见demo019.html):
    若只有一种规格的窗口下运行: 
    ```html
    <div class="row">
        <div class="col-md-3" style="background-color: gray;">1</div>
        <div class="col-md-3" style="background-color: red;">2</div>
        <div class="col-md-6" style="background-color: wheat;">3</div>
    </div>
    ```
    
    若在不同窗口规格下运行, 可根据不同尺寸做不同自适应:
    (窗口为>=720px则对半分, 窗口为>=540px则3:9分)
    ```html
    <!-- 多种窗口 -->
    <div class="row">
        <div class="col-sm-3 col-md-6" style="background-color: blue;">1</div>
        <div class="col-sm-9 col-md-6" style="background-color: wheat;">2</div>
    </div>
    ```


## 四.  `class="h*"|"display-*"` | `<small>` | `<mark>` 等文字排版
### 4.1 `class="h*"|"display-*"` 标题文本
示例: 
```html
<h1>普通标题</h1>
<p class="h1">h1 Bootstrap 标题</p>
<h1 class="display-1">Display 1</h1>
```

### 4.2 `<small>` 小<small>标题small(小且颜色浅)</small>
```html
<h1>h1 标题 <small>小标题small(小且颜色浅)</small></h1>
<p class="h1 small">小标题small(小且颜色浅)</p>
```

### 4.3 `<mark>` 高亮<mark>标题mark(黄色高亮)</mark>
```html
<h1>h1 标题 <mark>高亮标题mark(黄色高亮)</mark></h1>
<p class="h1 mark">高亮标题mark(黄色高亮)</p>
```

### 4.4  `<abbr>` <abbr>底部虚线文本</abbr>
```html
<h1>h1 标题 <abbr title="测试虚线">底部虚线</abbr></h1>
```

### 4.5  `<code>` <code>代码块</code>
```html
<h1>h1 标题 <code>代码块</code></h1>
```

### 4.6  `<kbd>` <kbd>快捷键</kbd>
```html
<h1>h1 标题 <kbd>快捷键</kbd></h1>
```

### 更多排版
> 参考: https://www.runoob.com/bootstrap5/bootstrap5-typography.html


## 五. 文本颜色
### 5.1 `class="text-*"` 文本颜色
```html
<p class="text-muted">柔和的文本。</p>
<p class="text-primary">重要的文本。</p>
<p class="text-success">执行成功的文本。</p>
<p class="text-info">代表一些提示信息的文本。</p>
<p class="text-warning">警告文本。</p>
<p class="text-danger">危险操作文本。</p>
<p class="text-secondary">副标题。</p>
<p class="text-dark">深灰色文字。</p>
<p class="text-body">默认颜色，为黑色。</p>
<p class="text-light">浅灰色文本（白色背景上看不清楚）。</p>
<p class="text-white">白色文本（白色背景上看不清楚）。</p>
```

### 5.2 `class="text-black-*"` |  `class="text-white-*"` 文本透明度
```html
<p class="text-black-50">透明度为 50% 的黑色文本，背景为白色。</p>
<p class="text-white-50 bg-dark">透明度为 50% 的白色文本，背景为黑色。</p>
```


### 5.3 `class="bg-*"` 背景颜色
注意背景颜色不会设置文本的颜色，在一些实例中你需要与 .text-* 类一起使用。
```html
<p class="bg-primary text-white">重要的背景颜色。</p>
<p class="bg-success text-white">执行成功背景颜色。</p>
<p class="bg-info text-white">信息提示背景颜色。</p>
<p class="bg-warning text-white">警告背景颜色</p>
<p class="bg-danger text-white">危险背景颜色。</p>
<p class="bg-secondary text-white">副标题背景颜色。</p>
<p class="bg-dark text-white">黑色背景颜色。</p>
<p class="bg-light text-dark">浅灰背景颜色。</p>
```


## 六. `class="alert-*"` 提示框
```html
<div class="alert alert-success">
    <strong>成功!</strong> 你应该认真阅读 <a href="#" class="alert-link">这条信息</a>。
</div>
```
+ 根据不同作用可换为不同颜色, 如 `class="alert-success"`, `class="alert-info"`, `class="alert-warning"`, `class="alert-danger"`, `class="alert-primary"`, `class="alert-secondary"`, `class="alert-light"` 或 `class="alert-dark"` 类


可关闭的信息框:
```html
<div class="alert alert-success alert-dismissible">
    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    <strong>成功!</strong> 指定操作成功提示信息。
</div>
```

## 七. `class="btn btn-*"` 按钮





































