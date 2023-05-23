# Objective-C零基础学习指南 -OC

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Objective-C零基础学习指南](#objective-c零基础学习指南)
  - [一、 第一个OC程序:Hello, World!](#一-第一个oc程序hello-world)
  - [二、 对比OC与C](#二-对比oc与c)
  - [三、 解析程序"Hello World！"](#三-解析程序hello-world)
  - [四、OC的基础知识](#四-oc的基础知识)
    - [4.1 OC的数据类型](#41-oc的数据类型)
  - [4.2 类和对象](#42-类和对象)

<!-- /code_chunk_output -->

## 一、 第一个OC程序:Hello, World!
```objective-c
#import <Foundation/Foundation.h>

int main(int argc, const char * argv[]) {
    @autoreleasepool {
        // insert code here...
        NSLog(@"Hello, World!");
    }
    return 0;
}
```
控制台输出：
```shell
2020-09-20 22:42:28.092912+0800 study_OC_bili[66046:24180086] Hello, World!
Program ended with exit code: 0
```

##  二、 对比OC与C
1. 在C的基础上增加了一部分**面向对象**的语法；
2. 将C的复杂的、繁琐的语法封装得更加简单；
3. OC完全兼容C，即C为OC的子集；
4. OC源程序的后缀名为.m, m 代表message，表示OC中最重要的一个机制就是消息机制；  
    C程序的后锥名是.c
5. `main`函数依旧是OC程序的入口与出口；仍然有`return`返回值;
6. C语言的字符串存储方式： a) 使用字符数组存储； b) 使用字符指针；
    OC中设计了更好的数据类型来存储字符串：NSString 类型的指针变量，专门存储OC字符串的地址；
    + OC的字符串变量前必须要加上`@`符号：
        + `"jack"` 是一个C语言字符串；
        + `@"jack"` 是一个OC字符串；
    + `NSString *str = @"jack";`
    + 在OC中，如果输出拼接字符串需要的值，需要使用占位符`%@`, 
    e.g.
    ```C
    #import <Foundation/Foundation.h>

    int main(int argc, const char * argv[]) {
        NSString *str = @"jack";
        NSLog(@"I am %@",str);
        
        return 0;
    }
    ```
    输出：`2020-09-22 09:43:10.486738+0800 study_OC_bili[9253:27479792] I am jack`
7. OC程序和C程序各个阶段的**后缀名**对比：
    | 语言 | 源文件 | 目标文件 | 可执行文件 |
    | - | - | - | - |
    | C语言 | .c | .o | .out |
    | OC | .m | .c | .out |



## 三、 解析程序"Hello World！"
```objective-c
#import <Foundation/Foundation.h>

int main(int argc, const char * argv[]) {
    @autoreleasepool {
        // insert code here...
        NSLog(@"Hello, World!");
    }
    return 0;
}
```
1. `#import`指令：
    + 以`#`开头，是一个**预处理**指令；
    + 作业：是`#inlcude`指令的增强版，将文件的内容在预编译的时候拷贝到写指令的地方；
    （同一个文件无论`#import`多少次，都只包含1次；如果是`#include`指令如果要实现这个效果就必须配合条件编译指令来实现）
2. 框架：
    + 什么是框架：一个功能集合，苹果将一些常用功能事先写好，并封装在一个类或者一个方法之中。
    + `Founddation`框架：基础框架
        包括：输入、输出、数据类型等；
3. `@autoreleasepool`是一个自动释放池；
4. `NSLOG`函数：是`printf`函数的增强版：
    + 语法：
        | 功能 | 格式 | 输出内容 | 备注 |
        | - | - | - | - |
        | 普通输出信息 | `NSLog(@"Hello, World!");`| `2020-09-20 22:42:28.092912+0800`<br> `study_OC_bili[66046:24180086] Hello, World!` | + 输出内容；<br> + 自动换行；<br> + 输出程序调试信息（程序名称、进程编号、线程编号等）；<br> + OC中新增的数据类型，只能用`NSLog`输出； |
    + 注意事项：
        1. NSLog函数的第一个参数抢必须加 `@` 符号；
        2. 如果加上 `\n` ，`NSLog`的自动换行就失效；
5. `NS`前缀：
    NextStep —-> Cocoa --> Foundation框架
6. `@`符号：
    + 将C字符串转化为OC的字符串；
    + OC当中大部分关键字都是以 `@` 符号开头；

## 四、OC的基础知识
### 4.1 OC的数据类型
1. OC中支持C语言的所有数据类型：
    + 基本数据类型：`int`、 `double`、 `float`、 `char`
    + 构造类型：数组 结构体 枚举
    + 指针类型： `int *p1;`
    + 空类型： `void`
    + typedef自定义类型。
2. 布尔类型：
    + BOOL类型：`YES` 或者 `NO`
        ```Objective-C
        BOOL b1 = NO;
        ```
    + Boolean类型：`True` 或者 `flase`
3. class类型；
4. id类型（万能指针）
5. nil = NULL
6. SEL 方法选择器；
7. block 代码段；

## 4.2 类和对象
1. 类和对象的关系
    + 类是模版，类的对象是根据模版创造出来的。
        类模版中有什么，对象就有什么，不会多也不会少；
2. 如何设计一个类：
    + 类的作用：用来描述一群具有相同特征和行为的事物的；
    + 设计类的三要素：
        + 类的名字；
        + 类的相同特征：姓名、年龄、外观、声音等；
        + 这类事物拥有的共同行为；
3. 定义类的语法：
    ```C
    // 类的定义：
    @interface Person : NSObject
    {
        NSString *_name;  // 属性名以下划线（ _ ）开头
        int _age;
        float _height;
    }

    @end

    // 类的实现
    @implementation Person

    @end
    ```
4. 创建类的对象语法：
    
4. 注意事项：
    + 类是无法直接使用的。如果要用这个类的话，就要找到这个类的一个具体存在，再使用类；














