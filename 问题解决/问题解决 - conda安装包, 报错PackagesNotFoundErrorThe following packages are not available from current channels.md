# 问题解决 - conda安装包, 报错`PackagesNotFoundError: The following packages are not available from current channels`

1. 问题描述
    出现下面问题
    ![alt text](./img/PackagesNotFoundErrorThe%20following%20packages%20are%20not%20available%20from%20current%20channels.png)
    报错
    ```
    PackagesNotFoundError: The following packages are not available from current channels:
    - ultralytics
    .....
    ```

2. 解决办法
    将conda-forge添加到搜索路径上
    在命令行运行下方指令，然后重新安装。
    ```shell
    conda config --append channels conda-forge
    ```
    然后可以安装需要的包
    ```shell
    conda install 需要安装的包名
    ```

## 其他解决办法
访问[anaconda官网](https://anaconda.org/), 再搜索栏搜索可以下载的版本

## 备注
对于conda用户，除了默认的`defaults`频道之外，这里有几个常用的、推荐的第三方频道：
1. `conda-forge`：`conda-forge`是社区驱动的一个频道，提供了大量的开源软件包，并且通常比官方默认频道更新更频繁。许多在默认频道中找不到或版本较旧的包，在`conda-forge`频道中可能可以找到最新版本。
    添加方法：
    ```
    conda config --add channels conda-forge
    ```
2. `anaconda`： Anaconda官方提供的额外频道，有时候会有一些预发布或者特殊版本的包。
    添加方法： 
    ```
    conda config --add channels anaconda
    ```
3. `bioconda`： 对于生物信息学相关的包，`bioconda`频道是一个很好的资源，它专门收录了许多生物科学和计算生物学领域的软件包.
    添加方法： 
    ```
    conda config --add channels bioconda
    ```
4. `msys2`： 用于Windows平台的一些C/C++编译工具和其他依赖项。
    添加方法： 
    ```
    conda config --add channels msys2
    ```