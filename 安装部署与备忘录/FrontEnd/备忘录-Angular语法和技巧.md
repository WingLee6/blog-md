# 备忘录-AngularJS 语法和技巧


<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [〇. 预备内容](#〇-预备内容)
  - [0.1 简介](#01-简介)
  - [0.2 版本](#02-版本)
  - [0.3 引入AngularJS](#03-引入angularjs)
    - [方法一. 在线CDN](#方法一-在线cdn)
  - [0.4 插件](#04-插件)
- [一. 项目创建和架构说明](#一-项目创建和架构说明)
  - [1.1 概述](#11-概述)
  - [1.2 项目的创建](#12-项目的创建)
  - [1.3 项目的启动](#13-项目的启动)
  - [1.4 创建新组件](#14-创建新组件)
  - [1.5 组件的完善(任意添加)](#15-组件的完善任意添加)
  - [1.6 组件的注册](#16-组件的注册)
  - [1.7 组件的使用](#17-组件的使用)
  - [新组件的自动生成 - `ng g c 新组件名`](#新组件的自动生成---ng-g-c-新组件名)
- [二. 文件内容说明](#二-文件内容说明)
  - [`XXX.component.ts`](#xxxcomponentts)
- [三. 数组 事件 和 属性](#三-数组-事件-和-属性)
  - [3.1 数据绑定](#31-数据绑定)
    - [方法1: 通过插值表达式显示组件的属性](#方法1-通过插值表达式显示组件的属性)
    - [方法2: 通过 NgFor 显示数组型属性](#方法2-通过-ngfor-显示数组型属性)
    - [方法3: 通过 NgIf 实现按条件显示](#方法3-通过-ngif-实现按条件显示)
  - [3.2 事件绑定: 在组件方法名被点击时触发](#32-事件绑定-在组件方法名被点击时触发)
  - [3.3 属性绑定: 把元素的属性设置为组件中属性的值。](#33-属性绑定-把元素的属性设置为组件中属性的值)
  - [3.4 双向绑: 使用Angular里的NgModel指令可以更便捷的进行双向绑定。](#34-双向绑-使用angular里的ngmodel指令可以更便捷的进行双向绑定)

<!-- /code_chunk_output -->


## 〇. 预备内容
### 0.1 简介
1. AngularJS 是一个 JavaScript 框架。它可通过 `<script>` 标签添加到 HTML 页面;
2. AngularJS 通过 指令 扩展了 HTML
3. AngularJS 使得开发现代的单一页面应用程序（SPAs：Single Page Applications）变得更加容易。
    + AngularJS 把应用程序数据绑定到 HTML 元素;
    + AngularJS 可以克隆和重复 HTML 元素;
    + AngularJS 可以隐藏和显示 HTML 元素;
    + AngularJS 可以在 HTML 元素"背后"添加代码;
    + AngularJS 支持输入验证;

### 0.2 版本
> 各个 angular.js 版本下载： https://github.com/angular/angular.js/releases

| 版本号 | 发布事件 | 新特性 | 备注 | 
| - | - | - | - |
| AngularJS 1 | 2012年 | | 
| AngularJS 2 | 2016年 | | 主流 | 

### 0.3 引入AngularJS
#### 方法一. 在线CDN
可通过 `script` 标签添加到网页中：
```javascript
<script src="https://cdn.staticfile.org/angular.js/1.4.6/angular.min.js"> </script>
```

### 0.4 插件
> 在VScode安装插件
1. Angular Language Service
    + 链接: https://marketplace.visualstudio.com/items?itemName=Angular.ng-template
2. Angular 10 Snippets - TypeScript, Html, Angular Material, ngRx, RxJS & Flex Layout
    + 链接: https://marketplace.visualstudio.com/items?itemName=Mikael.Angular-BeastCode

作用: 
安装上述两个插件后,若在新创建的空白ts文件中输入`ng-component`,看到相关联想词条,点击回车,将自动生成模板代码:
```TypeScript
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-name',
    templateUrl: './name.component.html',
    styleUrls: ['./name.component.scss']
})
export class NameComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }
}
```
生成后
+ 点击tab键改名字,;
+ 根据实际情况改文件URL
+ 根据实际情况改类名
改后如下:
```TypeScript
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-NEWCOMPONENTNAME',
    templateUrl: './NEWCOMPONENTNAME.component.html',
    styleUrls: ['./NEWCOMPONENTNAME.component.css']
})
export class NEWCOMPONENTNAMEComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }
}
```


## 一. 项目创建和架构说明
> 需要创建项目, 见下一章 

### 1.1 概述
+ 项目为MVC结果;
+ 一个组件分为三个文件: .html文件 + .css文件 + .ts文件(js的升级)

### 1.2 项目的创建
在合适的位置创建项目`ProjectName`
命令行cd至合适的目录下, 执行:
```bash
$ ng new ProjectName
```
或使用缩写`ng n ProjectName`
后面问题一路默认回车;

所创建项目目录结构如下:
+ [目录]ProjectName
    + [目录].angular
    + [目录].vscode
    + [目录]node_modules: 存放npm模块
    + [目录]src
        + [目录]app: 默认组件, MVC结构
            + app.component.css: 
            + app.component.html
            + app.component.spec.ts
            + app.component.ts
            + app.module.ts: 项目配置文件, 例如服务的引入,组件的引入
        + [目录]assets: 存放静态资源,如图片
        + favicon.ico
        + index.html: 默认初始页
        + main.ts: 入口逻辑文件
        + styles.css: 全局CSS样式
    + editorconfig
    + gitignore
    + angular.json
    + package-lock.json
    + package.json
    + README.md
    + tsconfig.app.json
    + tsconfig.json
    + tsconfig.spec.json

注: 
+ 主要关心src目录下的文件操作, 其他文件不过多关心

### 1.3 项目的启动
命令行cd至项目目录下, 执行:
```bash
$ cd ProjectName
$ ng serve --open
```

### 1.4 创建新组件
在app目录下创建新目录newcomponent, 并创建其配套MVC架构
+ \app\newcomponent\newcomponent.component.css 
+ \app\newcomponent\newcomponent.component.html 
+ \app\newcomponent\newcomponent.component.ts

创建后项目的目录架构为: 
+ [目录]ProjectName
    + [目录].angular
    + [目录].vscode
    + [目录]node_modules
    + [目录]src
        + [目录]app
            + [目录]newcomponent: [新]新组件
                + newcomponent.component.css: [新]
                + newcomponent.component.html: [新]
                + newcomponent.component.ts: [新]新组件的逻辑文件
            + app.component.css: 
            + app.component.html
            + app.component.spec.ts
            + app.component.ts
            + app.module.ts
        + [目录]assets
        + favicon.ico
        + index.html
        + main.ts
        + styles.css
    + 省略

### 1.5 组件的完善(任意添加)
+ \app\newcomponent\newcomponent.component.css 
    ```css
    h1 {
        color: red;
    }
    ```
+ \app\newcomponent\newcomponent.component.html 
    ```html
    <h1>标题1</h1>
    ```
+ \app\newcomponent\newcomponent.component.ts
    > 根据[0.4 插件]章节方法完成
    ```ts
    import { Component, OnInit } from '@angular/core';

    @Component({
        selector: 'app-newcomponent',
        templateUrl: './newcomponent.component.html',
        styleUrls: ['./newcomponent.component.scss']
    })
    export class NewcomponentComponent implements OnInit {
        constructor() { }

        ngOnInit(): void { }
    }
    ```

此例中(下面注册会用到), 
+ 组件名: `newcomponent`;
+ 类名: `NewcomponentComponent`(见\app\newcomponent\newcomponent.component.ts)
    

### 1.6 组件的注册
在`src\app\app.module.ts`中进行注册
`app.module.ts`原始内容为:
```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

在上述文件中增加类名(如`NewcomponentComponent`), 如

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewcomponentComponent } from './newcomponent/newcomponent.component';

@NgModule({
  declarations: [
    AppComponent, NewcomponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
则会在开头line5,自动生成引入代码`import { NewcomponentComponent } from './newcomponent/newcomponent.component';`

### 1.7 组件的使用
在文件`\src\app\app.component.html`中, 增加 或 直接删除原来的默认代码, 改为下面代码:
```html
<app-newcomponent></app-newcomponent>
<app-newcomponent></app-newcomponent>
<app-newcomponent></app-newcomponent>
<app-newcomponent></app-newcomponent>
```
> 多行,以示组件可以多次复用

(若本项目仍启动中)在http://localhost:4200/可以看到页面更新为组件内容

### 新组件的自动生成 - `ng g c 新组件名`
命令行cd至项目目录下, 执行:
```bash
$ cd ProjectName
$ ng generate component 新组件名  
```
`ng generate component 新组件名`可缩写为`ng g c 新组件名`
注: 
+ 该方法会自动完成[章节1.4 创建新组件]和[章节1.5 组件的完善]和[章节1.6 组件的注册]
    - CREATE src/app/新组件名/新组件名.component.html (30 bytes)
    - CREATE src/app/新组件名/新组件名.component.spec.ts (616 bytes)
    - CREATE src/app/新组件名/新组件名.component.ts (237 bytes)
    - CREATE src/app/新组件名/新组件名.component.css (0 bytes)
    - UPDATE src/app/app.module.ts (528 bytes)


## 二. 文件内容说明
### `XXX.component.ts`
模板:
```ts
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-newcomponent',
    templateUrl: './newcomponent.component.html',
    styleUrls: ['./newcomponent.component.scss']
})
export class NewcomponentComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }
}

```
说明: 
1. `@Component` 装饰器能接受一个配置对象，并把紧随其后的类标记成了组件类。
    + Angular 会基于这些信息创建和展示组件及其视图。
2. `selector` - 一个 css 选择器，它告诉 Angular 在 父级 HTML 中寻找一个 <mylist> 标签，然后创建该组件，并插入此标签中。
3. `templateUrl` - 组件 HTML 模板的地址。
    + 示例: `templateUrl: './third-component.component.html',`
    + 也可以改为非URL,模板形式,如
        + 单行用引号: `template: '<h1>我的应用</h1>'`
        + 多行用模板字符串(反引号):
            ```TS
            template: `
                <h1>第一行</h1>
                <h2>第二行</h2>
                `
            ```
4. `directives` - 一个数组，包含 此 模板需要依赖的组件或指令。
5. `providers` - 一个数组，包含组件所依赖的服务所需要的依赖注入提供者。


## 三. 数组 事件 和 属性
### 3.1 数据绑定
#### 方法1: 通过插值表达式显示组件的属性
如`newcomponent.component.ts`文件中,
```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-third-component',
  // templateUrl: './third-component.component.html',
  styleUrls: ['./third-component.component.css'],
  template: `
  <h1>第{{num1}}行</h1>
  <h2>第{{num2}}行</h2>
  `
})
export class ThirdComponentComponent {
    num1 = 1 ;
    num2 = "二";
}
```
#### 方法2: 通过 NgFor 显示数组型属性
如`newcomponent.component.ts`文件中,
```ts
import { Component } from '@angular/core';

@Component({
    selector: 'app-third-component',
    // templateUrl: './third-component.component.html',
    styleUrls: ['./third-component.component.css'],
    template: `
    <ul>
        <li *ngFor="let site of sites">
        {{ site }}
        </li>
    </ul>
  `
})
export class ThirdComponentComponent {
    sites = ['菜鸟教程', 'Google', 'Taobao', 'Facebook'];
}
```
#### 方法3: 通过 NgIf 实现按条件显示
如`newcomponent.component.ts`文件中,
```ts
import { Component } from '@angular/core';

@Component({
    selector: 'app-third-component',
    // templateUrl: './third-component.component.html',
    styleUrls: ['./third-component.component.css'],
    template: `
        <p *ngIf="sites.length > 3">大于3</p>
        <p *ngIf="sites.length <= 3">小于等于3</p>

        
    `
})
export class ThirdComponentComponent {
    sites = ['菜鸟教程', 'Google', 'Taobao', 'Facebook'];
}
```



### 3.2 事件绑定: 在组件方法名被点击时触发
1. 点击事件
    ```ts
    import { Component } from '@angular/core';
    
    @Component({
    selector: 'click-me',
        template: `
            <button (click)="onClickMe()">点我!</button>
            {{clickMessage}}
            `
    })
    export class ClickMeComponent {
        clickMessage = '';
        
        onClickMe() {
            this.clickMessage = '菜鸟教程!';
        }
    }
    ```

2. `$event` 对象取得用户输入
    如`app/keyup.component.ts`文件：
    ```ts
    @Component({
        selector: 'key-up1',
        template: `
            <input (keyup)="onKey($event)">
            <p>{{values}}</p>
        `
    })

    export class KeyUpComponent_v1 {
        values = '';
        
        /*
        // 非强类型
        onKey(event:any) {
            this.values += event.target.value + ' | ';
        }
        */
        // 强类型
        onKey(event: KeyboardEvent) {
            this.values += (<HTMLInputElement>event.target).value + ' | ';
        }
    }
    ```
    以上代码中我们监听了一个事件并捕获用户输入，Angular 把事件对象存入 `$event` 变量中。

    组件的 `onKey()` 方法是用来从事件对象中提取出用户输入的，再将输入的值累加到 values 的属性。

3. 从一个模板引用变量中获得用户输入
    见https://www.runoob.com/angularjs2/angularjs2-user-input.html

4. 按键事件过滤 ( 通过 key.enter)
    见https://www.runoob.com/angularjs2/angularjs2-user-input.html

5. blur( 失去焦点 ) 事件
    见https://www.runoob.com/angularjs2/angularjs2-user-input.html

### 3.3 属性绑定: 把元素的属性设置为组件中属性的值。
```html
<img [src]="userImageUrl">
```

### 3.4 双向绑: 使用Angular里的NgModel指令可以更便捷的进行双向绑定。
```html
<input [value]="currentUser.firstName"
       (input)="currentUser.firstName=$event.target.value" >
```