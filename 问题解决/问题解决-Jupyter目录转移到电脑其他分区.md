# 问题解决-Jupyter目录转移到电脑其他分区

## 问题描述
命令行输入
```ssh
jupyter notebook
```
在网页端打开的jupyter程序, 显示的目录是C盘(默认)

想要打卡D盘目录的解决办法

## 问题解决
1. 退出已经打开的Jupyter
2. 在终端中输入下面的命令行, 实现打开即D盘目录
    ```ssh
    jupyter notebook --notebook-dir=D:
    ```
    




