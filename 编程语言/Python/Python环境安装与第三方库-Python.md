# Python环境安装与设置-Python


<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Python环境安装与设置-Python](#python环境安装与设置-python)
  - [一、Python环境安装](#一-python环境安装)
  - [二、pip3安装与使用](#二-pip3安装与使用)
  - [三、第三方库介绍](#三-第三方库介绍)
    - [tqdm Python进度条库](#tqdm-python进度条库)

<!-- /code_chunk_output -->

## 一、Python环境安装
见菜鸟教程

## 二、pip3安装与使用
1. pip3的安装
    打开终端，输入
    ```shell
    $ 
    ```

2. 安装第三方库
    + 安装
        ```shell
        $ pip3 install 包名
        ```
        
    + 使用镜像安装  
        ```shell
        $ pip3 install 包名 -i http://pypi.douban.com/simple/ 
        ```
        **或**
        ```shell
        $ pip3 install 包名 -i http://pypi.douban.com/simple/ --trusted-host pypi.douban.com
        ```
        
        镜像链接也可换为：  
        - 阿里云 http://mirrors.aliyun.com/pypi/simple/   
        - 豆瓣(douban) http://pypi.douban.com/simple/   
        - 清华大学 https://pypi.tuna.tsinghua.edu.cn/simple/   
        - 中科大 http://pypi.mirrors.ustc.edu.cn/simple/  
    + VPN


## 三、第三方库介绍

### tqdm Python进度条库
1. 安装
    ```shell
    $ pip3 install tqdm
    ```
2. 使用  
    参见 https://blog.csdn.net/qq_41731861/article/details/121678411





