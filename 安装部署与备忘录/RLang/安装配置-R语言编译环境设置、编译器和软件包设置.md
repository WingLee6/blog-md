# 软件安装：R语言编译环境设置、编译器和软件包设置等 -RLang
> **关键词**： 编译环境、编译器、软件包设置

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [软件安装：R语言编译环境设置、编译器和软件包设置等 -RLang](#软件安装r语言编译环境设置-编译器和软件包设置等--rlang)
  - [一、环境安装与编译器](#一-环境安装与编译器)
    - [1. R环境](#1-r环境)
    - [2. 编译器](#2-编译器)
    - [3. 测试](#3-测试)
  - [二、 R语言环境](#二--r语言环境)
  - [三、 R语言软件包的安装与载入](#三--r语言软件包的安装与载入)
    - [1. 软件包的安装](#1-软件包的安装)
  - [四. 问题解决](#四-问题解决)
    - [1. 在Rstdio里无法画图的问题](#1-在rstdio里无法画图的问题)

<!-- /code_chunk_output -->




## 一、环境安装与编译器
### 1. R环境
1. Windows：  
    https://cloud.r-project.org/bin/windows/base/
2. MacOS：  
    https://cloud.r-project.org/bin/macosx/
3. Linux：  
    https://cloud.r-project.org/bin/linux/

### 2. 编译器  
RStudio： https://www.rstudio.com/

### 3. 测试  
![r语言环境测试](./pic/r语言环境测试.png)


## 二、 R语言环境
1. 查看当前R环境版本
    ```r
    > version
                _                           
    platform       x86_64-apple-darwin17.0     
    arch           x86_64                      
    os             darwin17.0                  
    system         x86_64, darwin17.0          
    status                                     
    major          4                           
    minor          1.2                         
    year           2021                        
    month          11                          
    day            01                          
    svn rev        81115                       
    language       R                           
    version.string R version 4.1.2 (2021-11-01)
    nickname       Bird Hippie   
    ```

2. 安装包，如果已经有此包可跳过此步骤
    ```r
    install.packages("installr")
    ```

3. 加载包，升级
    ```r
    library(installr)
    updateR()
    ```



## 三、 R语言软件包的安装与载入
### 1. 软件包的安装
1. 查看当前已安装软件包
    ```r
    > # 查看当前已安装的包
    > library()
    ```

2. 安装软件包
    ```r
    # Step1-下载包(清华镜像)
    install.packages("tidyverse", repos = "https://mirrors.ustc.edu.cn/CRAN/")
    install.packages("usethis", repos = "https://mirrors.ustc.edu.cn/CRAN/")
    install.packages("devtools", repos = "https://mirrors.ustc.edu.cn/CRAN/")
    install.packages("showtext", repos = "https://mirrors.ustc.edu.cn/CRAN/")
    # if you have not installed the `devtools` package
    # install.packages("devtools") 
    library("devtools")
    install_github("kosukeimai/qss-package", build_vignettes = TRUE)
    ```

3. 删除软件包
    ```r
    # 彻底删除已安装的包：
    remove.packages(c("pkg1","pkg2"), lib=file.path("path", "to", "library"))
    ```




## 四. 问题解决
### 1. 在Rstdio里无法画图的问题
有两种方法：
1. 使用代码 `dev.new()` 新建一个绘图窗口
    > 我觉得这个方法好，因为在我的plots窗口画出来的图比例是变形的
2. 换一个系统缓存目录，详细教程可以自行在网上寻找。
    在R里无法安装包的可以像上面的方法二一样，换个缓存目录，或者在缓存目录里找到已经下载好了的包，手动复制到R的library文件夹中。
    在Rstdio里无法安装包的还要下载一个Rtools，在官网就有。如果还不行，就在Rstdio里找到Tools->Packages->Global Options->Primary CRAN repository，设置下载入口。
    在Tools->General->Default working directory (when not in a project)还要设置一下默认储存目录，这样你就不用每次都用getwd()命令了。
    如果你安装了多个R版本，不要忘记在Default working directory (when not in a project)的上面设置你想使用的R环境哦。


