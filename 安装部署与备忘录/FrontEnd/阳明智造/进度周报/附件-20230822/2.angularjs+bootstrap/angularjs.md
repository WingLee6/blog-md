# angularJS框架的功能和使用

### 学习资源

资源和学习教程：

- AngularJS官方网站：https://angularjs.org/
- AngularJS教程和文档：https://docs.angularjs.org/tutorial
- AngularJS API参考：https://docs.angularjs.org/api
- AngularJS入门教程：https://www.w3schools.com/angular/
- AngularJS视频教程：在YouTube上搜索“AngularJS tutorial”会找到很多教程资源。
- 中文学习网站：[AngularJS教程](https://www.angularjs.net.cn/tutorial/)

社区资源：

- Stack Overflow：在这里可以找到许多关于AngularJS的问题和解答：https://stackoverflow.com/questions/tagged/angularjs
- GitHub：AngularJS的开源仓库和示例代码：https://github.com/angular/angular.js

指令详解：[(7条消息) AngularJs内置指令大全_angularjs ng-bind-template 指令详解_木又日月的博客-CSDN博客](https://blog.csdn.net/qq_35759390/article/details/65446049)

博客资源：[angularjs - 标签 - 听风是风 - 博客园 (cnblogs.com)](https://www.cnblogs.com/echolun/tag/angularjs/)

### 基础知识

1. 双向数据绑定（Two-way Data Binding）：AngularJS引以为傲的特性之一是双向数据绑定，它允许模型（数据）和视图（UI）之间的自动同步。当数据模型发生变化时，视图会自动更新，反之亦然。
2. MVVM架构（Model-View-ViewModel）：AngularJS采用MVVM架构，将应用程序划分为模型（Model）、视图（View）和视图模型（ViewModel）三个部分。模型用于存储数据，视图负责展示数据，而视图模型用于处理视图与模型之间的交互逻辑。
3. 指令（Directives）：AngularJS引入了指令的概念，开发者可以使用预定义的指令或自定义指令来扩展HTML的功能。指令可以用于创建自定义HTML标签、属性或类，使开发者能够更容易地管理DOM元素和事件。
4. 控制器（Controllers）：控制器是AngularJS中的一个重要组件，用于处理业务逻辑和数据。控制器通过作用域（Scope）将模型和视图连接在一起，并处理视图与模型之间的交互。
5. 依赖注入（Dependency Injection）：AngularJS使用依赖注入来管理组件之间的依赖关系。通过依赖注入，开发者可以方便地将需要的服务或对象注入到控制器、指令等组件中，以实现松耦合的架构。
6. 路由（Routing）：AngularJS提供了路由功能，用于管理单页应用程序中的页面导航。通过路由配置，可以实现在不同URL下加载不同的视图和控制器。
7. 服务（Services）：AngularJS的服务是一种可复用的组件，用于处理应用程序中的共享逻辑，如数据获取、HTTP请求、认证等。服务可以通过依赖注入在应用程序的各个部分中共享和重用。
8. 表单验证（Form Validation）：AngularJS提供了强大的表单验证功能，可以在客户端对表单数据进行验证，减少对服务器的不必要请求。
9. 动画（Animations）：AngularJS支持动画效果，可以通过CSS或JavaScript来为应用程序添加交互性和动态效果。

### 指令

框架的核心层有一个强大的 DOM 转换引擎，可以让你 扩展 HTML 语法。HTML中的ng-controller是用来指定哪个控制器来服务哪个视图，ng-model将一个输入框绑定到模型部分。 我们称这些叫 HTML  扩展指令。

1. 基础指令：
   - `ng-app`：标识 AngularJS 应用程序的根元素,启动主模块。
   - `ng-controller`：将控制器与特定的视图关联起来。
   - `ng-model`：在 HTML 表单元素与数据模型之间建立双向数据绑定。
   - `ng-init`：在元素上初始化数据模型的值。
2. 显示与隐藏指令：
   - `ng-show`：根据条件显示元素。
   - `ng-hide`：根据条件隐藏元素。
   - `ng-if`：根据条件创建或移除元素。
   - `ng-switch`：根据表达式的值显示其中的某个元素。
3. 循环指令：
   - `ng-repeat`：在 HTML 中循环遍历数组或对象，动态生成重复的 DOM 元素。
4. 样式与类指令：
   - `ng-class`：根据条件动态设置元素的 class 属性，添加或移除 CSS 类。
   - `ng-style`：根据表达式的值动态设置元素的内联样式。
5. 表单验证指令：
   - `ng-required`：标记表单元素是否必填。
   - `ng-pattern`：指定表单元素的输入模式。
   - `ng-minlength`：指定表单元素的最小字符数。
   - `ng-maxlength`：指定表单元素的最大字符数。
   - `ng-email`：验证电子邮件格式。
6. 事件指令：
   - `ng-click`：添加点击事件处理程序，当元素被点击时执行指定的表达式或函数。
   - `ng-change`：添加数据变化事件处理程序，当数据模型变化时执行指定的表达式或函数。
   - `ng-submit`：添加表单提交事件处理程序，当表单提交时执行指定的表达式或函数。
7. 其他常用指令：
   - `ng-src`：动态设置元素的 `src` 属性。
   - `ng-href`：动态设置链接元素的 `href` 属性。
   - `ng-disabled`：根据条件禁用或启用元素。
   - `ng-readonly`：根据条件设置表单元素为只读。
8. 自定义指令：
   - AngularJS 还允许你创建自定义指令，以便在应用程序中重复使用特定功能的组件。

### 学习时间

2-3周



