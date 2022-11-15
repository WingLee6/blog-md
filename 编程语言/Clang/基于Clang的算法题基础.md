# 基于Clang的算法题基础
<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->
- [基于Clang的算法题基础](#基于clang的算法题基础)
- [基于Clang的算法题基础](#基于clang的算法题基础)
  - [一、基础结构](#一-基础结构)
  - [二、 代码规范](#二-代码规范)
    - [1. 关键字](#1-关键字)
    - [2. 特殊结构](#2-特殊结构)
    - [3. 先调用再实现](#3-先调用再实现)
  - [三、 数据类型](#三-数据类型)
    - [1. 一维数组](#1-一维数组)
    - [2. 二维数组](#2-二维数组)
    - [3. 指针和数组的转换（一维）](#3-指针和数组的转换一维)
    - [4. 哈希表](#4-哈希表)
  - [四、 库函数](#四-库函数)
    - [<string.h>](#stringh)
      - [1. memcmp(int arr[]/  )](#1-memcmpint-arr)
    - [<stdio.h>](#stdioh)
    - [<limits.h>](#limitsh)
      - [1. `INT_MIN` and `INT_MAX` 表示int类型的上下限](#1-int_min-and-int_max-表示int类型的上下限)
  - [五、 工具函数](#五-工具函数)
    - [1. qsort(int arr[]/int*  arr, list_len, sizeof(int), cmp)](#1-qsortint-arrint-arr-list_len-sizeofint-cmp)
    - [](#)
<!-- /code_chunk_output -->
## 一、基础结构
```c
#include <stdio.h>

int main() {
    
    return 0;
}
```

## 二、 代码规范
### 1. 关键字
1. 真假 
    + 真-> true 或 1
    + 假-> false 或 2
2. 与或
    + 与-> &&
    + 或-> ||

### 2. 特殊结构
1. 三元表达式
    ```c
    int num = true ? 1 : 0;
    ```

### 3. 先调用再实现


## 三、 数据类型
### 1. 一维数组
1. 静态
2. 指针形式
### 2. 二维数组
1. 静态
2. 指针形式

### 3. 指针和数组的转换（一维）
1. 数组 -> 指针
2. 指针 -> 数组

### 4. 哈希表
```c


```

## 四、 库函数
### <string.h>
#### 1. memcmp(int arr[]/  )
### <stdio.h>


### <limits.h>
#### 1. `INT_MIN` and `INT_MAX` 表示int类型的上下限


## 五、 工具函数
### 1. qsort(int arr[]/int*  arr, list_len, sizeof(int), cmp)
