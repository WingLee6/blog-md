# Java安装与相关操作 -Java

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Java安装与相关操作 -Java](#java安装与相关操作-java)
- [Step1: JDK安装](#step1-jdk安装)
  - [1. JDK的选择](#1-jdk的选择)
  - [2. MAC版本下载与安装](#2-mac版本下载与安装)
  - [3. Win版本下载与安装](#3-win版本下载与安装)

<!-- /code_chunk_output -->


# Step1: JDK安装
## 1. JDK的选择
目前的主流版本分别为[^1]：
[^1]: 参考链接：https://zh.m.wikipedia.org/wiki/Java%E7%89%88%E6%9C%AC%E6%AD%B7%E5%8F%B2


| 版本名 | 发布时间 | 备注 | 
| - | - | - |
| J2SE 1.4.2 | 2003 | 不支持 |
| Java SE 5.0 (又称jdk 1.5) | 2004 | 不支持 |
| Java SE 6.0 (又称jdk 1.6) | 2006 | 不支持 |
| Java SE 7.0 (又称jdk 1.7) | 2011 | 不支持 |
| Java SE 8.0 (又称jdk 1.8) | 2014 | 支持至2030年，市占八成 |
| Java SE 9.0 | 2017 | 不支持 |
| Java SE 10.0 | 2018 | 不支持 |
| Java SE 11.0 | 2018 | 支持至2026年 |
| Java SE 12.0 | 2019 | 不支持 |
| Java SE 13.0 | 2019 | 不支持 |
| Java SE 14.0 | 2020 | 不支持 |
| Java SE 15.0 | 2020 | 不支持 |
| Java SE 16.0 | 2021 | 不支持 |
| Java SE 17.0 | 2021 | 支持至2027年 |
| Java SE 18.0 | 2022 | 不支持 |
| Java SE 19.0 | 2018 | 支持至2023年 |


**备注**：  
1. JDK8与JDK1.8的区别  
    JDK8或者JDK1.8是由于自从JDK1.5/JDK5命名方式改变后遗留的新旧命令方式问题。所以JDK8或者JDK1.8也是同一个东西。
2. JDK与J2SE的区别  
    JAVA就是指JDK开发工具，所以我们可以理解为JAVA等价于JDK。  
    JAVA有3个版本：
    + J2SE(Standard Edition)是标准版本；
    + J2ME(Micro Edition / 微型版)是手机方向的；
    + J2EE(Enterprise Edition / 企业版)是网站开发方向的；
3. Java版本更新规律
    自Oracle收购Sun后，开始发布Java 7.0之后基本每6个月更新一代。每年的3月和9月更新。


## 2. MAC版本下载与安装
1. 在官网下载JDK安装包
    + 访问官网：https://www.oracle.com/java/technologies/downloads/#jdk19-mac
    + 安装后打开`/etc/profile`，查看安装的版本：
        ```
        $ cd /Library/Java/JavaVirtualMachines
        $ ls -al
        total 0
        drwxr-xr-x  5 root  wheel  160  3 27 09:59 .
        drwxr-xr-x  4 root  wheel  128 11  1 08:51 ..
        drwxr-xr-x  3 root  wheel   96 11  1 08:51 jdk-13.0.1.jdk
        drwxr-xr-x  3 root  wheel   96  3 19 10:20 jdk-14.jdk
        drwxr-xr-x  3 root  wheel   96  3 27 09:59 jdk1.8.0_241.jdk
        ```
        这里我安装了三个JDK版本分别为java1.8、java13、java14。  
    + 更改配置文件：
        ```
        $ sudo vi /etc/profile
        ```
        添加内容：
        >vi操作： 按`i`输入，输入完成后按`esc`->按`:`->按`wq!`保存并退出  
        ```vi
        export JAVA_8_HOME="$(/usr/libexec/java_home -v 1.8)"
        export JAVA_13_HOME="$(/usr/libexec/java_home -v 13)"
        export JAVA_14_HOME="$(/usr/libexec/java_home -v 14)"
        alias jdk8='export JAVA_HOME=$JAVA_8_HOME'
        alias jdk13='export JAVA_HOME=$JAVA_13_HOME'
        alias jdk14='export JAVA_HOME=$JAVA_14_HOME'
        export JAVA_HOME=$JAVA_8_HOME   
        ```
    + 激活环境配置：  
        ```
        $ source /etc/profile
        ```

2. 切换版本操作示例
    ```
    $ java -version
    java version "1.8.0_241"
    Java(TM) SE Runtime Environment (build 1.8.0_241-b07)
    Java HotSpot(TM) 64-Bit Server VM (build 25.241-b07, mixed mode)
    $ 
    $ jdk13
    $ java -version
    java version "13.0.1" 2019-10-15
    Java(TM) SE Runtime Environment (build 13.0.1+9)
    Java HotSpot(TM) 64-Bit Server VM (build 13.0.1+9, mixed mode, sharing)
    $ 
    $ jdk14
    $ java -version
    java version "14" 2020-03-17
    Java(TM) SE Runtime Environment (build 14+36-1461)
    Java HotSpot(TM) 64-Bit Server VM (build 14+36-1461, mixed mode, sharing)
    $ jdk8
    $ java -version
    java version "1.8.0_351"
    Java(TM) SE Runtime Environment (build 1.8.0_351-b10)
    Java HotSpot(TM) 64-Bit Server VM (build 25.351-b10, mixed mode)
    ```

## 3. Win版本下载与安装
1. 官网下载JDK文件
    https://www.oracle.com/java/technologies/downloads/#jdk19-windows
2. 下载得到文件`jdk-xx_windows-x64_bin.msi`, 打开该文件，逐步安装；
3. 配置环境，跳转参考菜鸟教程相关文件：  
    https://www.runoob.com/w3cnote/windows10-java-setup.html
4. 检验是否安装成功
    打开cmd，输入命令行
    `java -version`、`java`、`javac`
    检查是否有相关内容回复：
    ```
    C:\Users\86139>java -version
    java version "19.0.1" 2022-10-18
    Java(TM) SE Runtime Environment (build 19.0.1+10-21)
    Java HotSpot(TM) 64-Bit Server VM (build 19.0.1+10-21, mixed mode, sharing)
    ```
    > **问题**：若jdk的环境变量已经设置完成，但cmd中命令行输入后仍无法找到`java`命令？  
    **解决方案**： 尝试关闭cmd，重新打开cmd，再输入`java`命令行尝试。