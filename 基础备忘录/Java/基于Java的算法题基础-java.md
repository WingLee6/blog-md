# 基于Java的算法题基础 -JAVA


<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [基于Java的算法题基础 -JAVA](#基于java的算法题基础-java)
  - [1. 基本数据结构](#1-基本数据结构)
    - [1.1 数组](#11-数组)
    - [1.2 二维数组](#12-二维数组)
    - [1.3 字符--char 与 Character数据类型](#13-字符-char-与-character数据类型)
  - [2. 基础语法](#2-基础语法)
    - [2.1 for-each循环](#21-for-each循环)

<!-- /code_chunk_output -->


##  1. 基本数据结构
### 1.1 数组
1. 语法结构
    `数据类型[] 数组名 = new 数据类型[数组长度]`
    或
    `数据类型[] 数组名 = {value0, value1, value2, value3, value4, value5}`
2. 示例
    ```java
    // 定义数组长度
    int size = 10; 
    // 定义数组
    double[] arr = new double[size];
    // 赋值
    arr[0] = 1; 
    arr[1] = 2;
    arr[2] = 3;
    arr[3] = 4;
    // 打印
    for (int i = 0; i < size; i++) {
        System.out.println(arr[i]);     // output: 1.0     2.0     3.0     4.0     0.0(double默认为0.0)
    }
    ```
    或
    ```java
    double[] arr = {1, 2, 3};
    // 打印
    for (int i = 0; i < arr.length; i++) {
        System.out.println(arr[i]);
    }
    ```
### 1.2 二维数组
1. 语法示例
    + 法一：直接分配空间
        ```java
        // 生成三行四列的空间
        String[][] str = new String[3][4];
        ```
    + 法二：先分配高维，再逐一分配每一维空间
        ```java
        // 生成两行，
        // 第一行两列、第二行三列
        String[][] str = new String[2][];
        str[0] = new String[2];
        str[1] = new String[3];
        ```

### 1.3 字符--char 与 Character数据类型


## 2. 基础语法
### 2.1 for-each循环
1. 语法示例：
    ```java
    double[] arr = {1, 2, 3};
    // 打印
    for (double v : arr) {
        System.out.println(v);      // output: 1.0      2.0      3.0
    }  
    ```  