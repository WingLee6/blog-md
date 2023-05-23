# 软件安装：关于Anaconda使用指南 -Python+Anaconda

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [软件安装：关于Anaconda使用指南 -Python+Anaconda](#软件安装关于anaconda使用指南-pythonanaconda)
  - [Anaconda的环境管理](#anaconda的环境管理)
  - [Anaconda的包管理](#anaconda的包管理)
  - [设置清华镜像](#设置清华镜像)
  - [Mac 中 PyCharm 配置 Anaconda环境](#mac-中-pycharm-配置-anaconda环境)

<!-- /code_chunk_output -->

## Anaconda的环境管理
1. 创建  
    Conda的环境管理功能允许我们同时安装若干不同版本的Python，并能自由切换。  
    ```
    # 创建一个名为python34的环境，指定Python版本是3.4（不用管是3.4.x，conda会为我们自动寻找3.4.x中的最新版本）
    conda create --name python34 python=3.4
    ```  

2. 激活环境
    ```
    # 安装好后，使用activate激活某个环境
    activate python34    # for Windows
    source activate python34     # for Linux & Mac
    # 激活后，会发现terminal输入的地方多了python34的字样，实际上，此时系统做的事情就是把默认2.7环境从PATH中去除，再把3.4对应的命令加入PATH
    ```
3. 查看python版本
    ```
    # 此时，再次输入
    python --version
    # 可以得到`Python 3.4.5 :: Anaconda 4.1.1 (64-bit)`，即系统已经切换到了3.4的环境
    ```
4. 删除某个环境
    ```
    # 删除一个名为‘python34’的环境
    conda remove --name python34 --all
    ```
5. 查看已安装的环境
    ```
    conda info -e
    # 当前被激活的环境会显示有一个星号或者括号
    ```
    用户安装的不同python环境都会被放在目录~/anaconda3/envs下.
6. 退出某个环境(python34)
    ```
    source deactivate python34
    ```


## Anaconda的包管理
1. 查看当前环境下已安装的包
    ```
    conda list
    ```
2. 查看某个指定环境(python34)的已安装包
    ```
    connda list -n python34
    ```
3. 安装package
    ```
    conda install -n python34 numpy
    # 如果不用-n指定环境名称，则被安装在当前活跃环境
    # 也可以通过-c指定通过某个channel安装
    ```
    可通过清华镜像
4. 更新package
    ```
    conda update -n python34 numpy
    ```
    conda将conda、python等都视为package，因此，完全可以使用conda来管理conda和python的版本，例如
    ```
    # 更新conda，保持conda最新
    conda update conda

    # 更新anaconda
    conda update anaconda

    # 更新python
    conda update python
    # 假设当前环境是python 3.4, conda会将python升级为3.4.x系列的当前最新版本
    ```
5. 删除package
    ```
    conda remove -n python34 numpy
    ```

## 设置清华镜像
    ```
    # 添加Anaconda的TUNA镜像
    conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/
    conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main/
    # TUNA的help中镜像地址加有引号，需要去掉

    # 设置搜索时显示通道地址
    conda config --set show_channel_urls yes
    ```

## Mac 中 PyCharm 配置 Anaconda环境
1. 点击左上角PyCharm，进入偏好设置(Preferences)中，Mac 中的快捷键是command + ,
2. 选择Project Interprete
3. 点击右上角的齿轮，后点击Add…
4. 选择是 System Interpreter
5. 点击右上角省略号选择文件，选择anaconda3文件夹，并打开，找到 python.app文件夹，并打开。python.app文件夹中的 Mac OS 文件夹，并打开，选中 python
5. 等待完成

**附**: 
1. （已经确认通过Anaconda安装过该模块）像Django库，若在程序运行中报错没有此模块:
    + 点击左上角PyCharm，进入偏好设置(Preferences)中;
    + 选择Project: XXXX -> Project Interprete
    + 点击右栏下面的“+”，搜索该模块；
    + 找到后点击下面的Install Package，等待即可；
