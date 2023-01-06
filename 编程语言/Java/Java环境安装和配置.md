# Java安装与相关操作 -Java

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Java安装与相关操作 -Java](#java安装与相关操作-java)
- [Step1: JDK安装](#step1-jdk安装)
  - [1. JDK的选择](#1-jdk的选择)
  - [2. MAC版本](#2-mac版本)
  - [](#)

<!-- /code_chunk_output -->


# Step1: JDK安装
## 1. JDK的选择
目前的主流版本分别为：
+ JDK-19：2022最新推荐下载
+ JDK-18

## 2. MAC版本
1. 在官网下载JDK8和JDK11安装包【 https://www.oracle.com/java/technologies/downloads/#jdk19-mac 】 ，安装后打开/etc/profile
    查看安装的版本：
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
    这里我安装了三个JDK版本分别为java-1.8、java-13、java-14。  
    更改配置文件：
    ```
    sudo vi /etc/profile
    ```
    添加内容：  
    ```
    export JAVA_8_HOME="$(/usr/libexec/java_home -v 1.8)"
    export JAVA_13_HOME="$(/usr/libexec/java_home -v 13)"
    export JAVA_14_HOME="$(/usr/libexec/java_home -v 14)"
    alias jdk8='export JAVA_HOME=$JAVA_8_HOME'
    alias jdk13='export JAVA_HOME=$JAVA_13_HOME'
    alias jdk14='export JAVA_HOME=$JAVA_14_HOME'
    export JAVA_HOME=$JAVA_8_HOME   
    ```
    激活环境配置：  
    ```
    source /etc/profile
    ```

2. 切换版本示例
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
    $ 
    ```

## 3. Win版本安装与下载
1. 官网下载JDK文件【https://www.oracle.com/java/technologies/downloads/#jdk19-windows】;
2. 下载得到文件`jdk-19_windows-x64_bin.msi`, 打开该文件，逐步安装；
3. 配置环境，参考菜鸟教程相关文件：  
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