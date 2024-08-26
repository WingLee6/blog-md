# 基于Cpp的算法题基础


<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [一、基础语法](#一-基础语法)
  - [1. `vector`向量](#1-vector向量)
  - [2. `::` 作用域解析运算符（Scope Resolution Operator）](#2--作用域解析运算符scope-resolution-operator)
    - [2.1 命名空间中的使用](#21-命名空间中的使用)
    - [2.2 类的成员函数或变量的定义](#22-类的成员函数或变量的定义)
    - [2.3 全局变量与局部变量的区分](#23-全局变量与局部变量的区分)
    - [2.4 访问父类的成员](#24-访问父类的成员)
- [二、常用判断](#二-常用判断)
  - [1. 判断奇偶](#1-判断奇偶)
- [三、常用库](#三-常用库)
  - [3.0 引入库常见问题](#30-引入库常见问题)
    - [A. 本地已经有的库](#a-本地已经有的库)
    - [B. 需要下载安装的库](#b-需要下载安装的库)

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

### 2. `::` 作用域解析运算符（Scope Resolution Operator）
它用于指明一个名称（比如函数或变量）所属的作用域，以避免名称冲突或访问全局范围的成员。下面是一些常见的使用场景：

#### 2.1 命名空间中的使用

C++标准库中的所有内容（如`std::vector`, `std::cout`等）都位于`std`命名空间中。通过`::`可以访问命名空间中的成员。例如：

```cpp
std::cout << "Hello, World!" << std::endl;
```

- **`std::cout`**: `cout`是`std`命名空间中的一个对象，表示标准输出流。
- **`std::endl`**: `endl`是`std`命名空间中的一个操纵器，用于换行并刷新输出缓冲区。

#### 2.2 类的成员函数或变量的定义

在类外部定义成员函数时，`::`用于指明该函数属于哪个类。例如：

```cpp
class Rectangle {
public:
    double area() const;
};

// 在类的外部定义成员函数时使用::
double Rectangle::area() const {
    return length * width;
}
```

- **`Rectangle::area`**: 指定`area`函数属于`Rectangle`类。

#### 2.3 全局变量与局部变量的区分

如果局部变量和全局变量同名，使用`::`可以访问全局变量。例如：

```cpp
int value = 10;

void func() {
    int value = 20;
    std::cout << "Local value: " << value << std::endl;
    std::cout << "Global value: " << ::value << std::endl;
}
```

- **`::value`**: `value`是全局变量，通过`::`来访问全局范围内的`value`，而非局部变量。

#### 2.4 访问父类的成员

在继承中，`::`可以用来访问父类的成员（在多重继承中尤为重要）。例如：

```cpp
class Base {
public:
    void show() { std::cout << "Base show" << std::endl; }
};

class Derived : public Base {
public:
    void show() { std::cout << "Derived show" << std::endl; }
    void parentShow() { Base::show(); }  // 访问基类的show
};
```

- **`Base::show()`**: `Derived`类中的`parentShow()`函数通过`Base::show()`来调用父类`Base`中的`show`函数，而不是`Derived`中的`show`函数。



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
### 3.0 引入库常见问题
#### A. 本地已经有的库
直接引入头文件
如
```cpp
#include <iostream>
#include <vector>
#include <algorithm> // 加载算法库

// 定义一个表示矩形的类
class Rectangle {
private:
    double length; // 矩形的长度
    double width;  // 矩形的宽度

public:
    // 构造函数，初始化矩形的长度和宽度
    Rectangle(double len, double wid) : length(len), width(wid) {}

    // 成员函数，计算矩形的面积
    double area() const {
        return length * width;
    }

    // 成员函数，计算矩形的周长
    double perimeter() const {
        return 2 * (length + width);
    }

    // 成员函数，显示矩形的长度和宽度
    void display() const {
        std::cout << "Length: " << length << ", Width: " << width << std::endl;
    }
};

// 定义一个函数，计算并返回向量中所有元素的总和
int sumVector(const std::vector<int>& numbers) {
    int sum = 0;
    for (int num : numbers) {
        sum += num; // 累加每个元素的值
    }
    return sum;
}

int main() {
    // 创建并操作矩形对象
    Rectangle rect(5.0, 3.0);
    rect.display();
    std::cout << "Area: " << rect.area() << std::endl;
    std::cout << "Perimeter: " << rect.perimeter() << std::endl;

    // 创建一个整数向量并初始化
    std::vector<int> numbers = {5, 3, 1, 4, 2};

    std::cout << "Before sorting: ";
    for (int num : numbers) {
        std::cout << num << " "; // 输出排序前的向量元素
    }
    std::cout << std::endl;

    // 使用std::sort函数对向量进行排序
    std::sort(numbers.begin(), numbers.end());

    std::cout << "After sorting: ";
    for (int num : numbers) {
        std::cout << num << " "; // 输出排序后的向量元素
    }
    std::cout << std::endl;

    // 调用sumVector函数计算向量元素的总和
    int totalSum = sumVector(numbers);
    std::cout << "Sum of vector elements: " << totalSum << std::endl;

    return 0; // 程序成功结束
}
```
上文引入了`iostream`、`vector`、`algorithm`三个库，其中`iostream`和`vector`是C++标准库，`algorithm`是C++算法库。
直接引用, 然后调用即可

#### B. 需要下载安装的库
> 以mac电脑, 为例
如`<Eigen/Dense>` 库 高效的线性代数库
1. 下载安装
    直接`brew`安装
    ```bash
    brew install eigen
    ```
    查看安装路径
    ```bash
    brew --prefix eigen
    ```
2. 创建一个cpp文件验证是否安装成功
    创建c++程序`eigen_test.cpp`
    ```cpp
    #include <iostream>
    #include <Eigen/Dense> // 包含Eigen库

    int main() {
        // 定义两个2x2矩阵
        Eigen::Matrix2d matA;
        Eigen::Matrix2d matB;

        // 初始化矩阵
        matA << 1, 2,
                3, 4;
        matB << 5, 6,
                7, 8;

        // 计算矩阵之和
        Eigen::Matrix2d matC = matA + matB;

        // 输出结果
        std::cout << "Matrix A:\n" << matA << std::endl;
        std::cout << "Matrix B:\n" << matB << std::endl;
        std::cout << "Sum of A and B:\n" << matC << std::endl;

        return 0;
    }
    ```
    然后命令行运行
    ```bash
    g++ -I/opt/homebrew/opt/eigen/include/eigen3 -o eigen_test eigen_test.cpp
    ```
    运行流程如下: 
    ```
    $ ls
    eigen_test.cpp
    $ 
    $ brew --prefix eigen                                                      
    /opt/homebrew/opt/eigen
    $ g++ -I/opt/homebrew/opt/eigen/include/eigen3 -o eigen_test eigen_test.cpp

    $ ls                                                                      
    eigen_test	eigen_test.cpp
    $ ./eigen_test
    Matrix A:
    1 2
    3 4
    Matrix B:
    5 6
    7 8
    Sum of A and B:
    6  8
    10 12
    ```
    + 根据`brew --prefix eigen`检测Eigen安装路径, 确定`-I/opt/homebrew/opt/eigen/include/eigen3`具体地址
    + 编译程序时，`-I`选项指定头文件路径，`-o`选项指定输出文件名
    + 运行程序，查看输出结果
3. 若再 **VSCode** 中使用, 则需要配置环境变量
    + 更新**c_cpp_properties.json**
        ```json
        {
            "configurations": [
                {
                    "name": "Mac",
                    "includePath": [
                        "${workspaceFolder}/**",
                        "/opt/homebrew/opt/eigen/include/eigen3", // 添加这一行
                    ],
                    "defines": [],
                    "macFrameworkPath": [
                        "/Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs/MacOSX.sdk/System/Library/Frameworks"
                    ],
                    "compilerPath": "/usr/bin/clang",
                    "cStandard": "c17",
                    "cppStandard": "c++17",
                    "intelliSenseMode": "macos-clang-arm64"
                }
            ],
            "version": 4
        }
        ```
    + 更新**tasks.json**
        ```json
        {
            "version": "2.0.0",
            "tasks": [
                {
                    "type": "cppbuild",
                    "label": "C/C++: g++ 生成活动文件",
                    "command": "/usr/bin/g++",
                    "args": [
                        "-fdiagnostics-color=always",
                        "-g",
                        "${file}",
                        "-o",
                        "${fileDirname}/${fileBasenameNoExtension}",
                        "-I/opt/homebrew/opt/eigen/include/eigen3", // 添加这一行
                    ],
                    "options": {
                        "cwd": "${fileDirname}"
                    },
                    "problemMatcher": [
                        "$gcc"
                    ],
                    "group": "build",
                    "detail": "编译器: /usr/bin/g++"
                }
            ]
        }
        ```


    

