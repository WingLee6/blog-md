# 备忘录-Git LFS的安装与使用

## Git LFS简介
1. 作用
    + 存储大文件
    + 将部分图片文件, zip文件存储在LFS服务器, 克隆指针. 做到优化克隆仓库的大小的效果.

    
## LFS的安装
0. 安装地址
    + 下载地址
        https://git-lfs.com/
    + 官方文档
        1. https://docs.github.com/en/repositories/working-with-files/managing-large-files/installing-git-large-file-storage
        2. https://docs.github.com/en/repositories/working-with-files/managing-large-files

1. 安装
    + win
        点击下载好的`git-lfs-windows-v.xxxx.exe`即可安装
    + mac
        1. 打开终端, 跳到相关路径
            例如
            ```bash
            > cd ~/Downloads/git-lfs-1.X.X
            ```
        2. 指令安装
            ```bash
            > ./install.sh
            Git LFS initialized.
            ```

        
2. 测试是否安装成功
    打开终端, 输入
    ```bash
    > git lfs install
    Git LFS initialized.
    ```
    看到`Git LFS initialized.`说明已经安装成功


## 使用
1. 终端跳转到项目目录
    比如
    ```bash
    cd blog-md
    ```

2. 添加要与Git LFS关联的文件
    比如要添加后缀为`.exe`的文件
    ```bash
    > git lfs track "*.exe"
    ```
    比较省事的写法, 直接添加所有文件
    ```bash
    > git lfs track "*"
    ```
