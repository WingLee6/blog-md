# 基于Cpp的算法题基础


<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [一、基础语法](#一-基础语法)
  - [1. `vector`向量](#1-vector向量)
- [二、常用判断](#二-常用判断)
  - [1. 判断奇偶](#1-判断奇偶)
- [三、常用库](#三-常用库)

<!-- /code_chunk_output -->


## 一、基础语法
### 1. `vector`向量
向量（Vector）是一个封装了动态大小数组的顺序容器（Sequence Container）。跟任意其它类型容器一样，它能够存放各种类型的对象。
可以简单的认为，向量是一个能够存放任意类型的动态数组。

1. 追加和删除元素  
    ```c++{cmd=true}

    #include <string.h>
    #include <vector>
    #include <iostream>
    using namespace std;
    
    int main()
    {
        vector<int>obj;//创建一个向量存储容器 int
        for(int i=0;i<10;i++) // push_back(elem)在数组最后添加数据 
        {
            obj.push_back(i);
            cout<<obj[i]<<",";    
        }
    
        for(int i=0;i<5;i++)//去掉数组最后一个数据 
        {
            obj.pop_back();
        }
    
        cout<<"\n"<<endl;
    
        for(int i=0;i<obj.size();i++)//size()容器中实际数据个数 
        {
            cout<<obj[i]<<",";
        }
    
        return 0;
    }
    ```


## 二、常用判断
### 1. 判断奇偶
1. `n % 2 == 0`余数判断
    + 若`n % 2 == 0`成立，则 n 为偶数；
    + 否则，n 为奇数；
    + 同理，可类推`n % 2 == 1`
2. `n & 1` 与运算
    + 若n是偶数，n&1返回0；
    + 否则返回1；

  
## 三、常用库
