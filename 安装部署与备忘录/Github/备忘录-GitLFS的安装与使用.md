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
        1. 打开终端, brew安装  
            ```bash
            brew install git-lfs
            git lfs install
            ```

        
2. 测试是否安装成功  
    打开终端, 输入
    ```bash
    > git lfs install
    Git LFS initialized.
    ```
    看到`Git LFS initialized.`说明已经安装成功


## 使用
1. 终端跳转到项目目录内  
    比如
    ```bash
    cd blog-md\
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
    这一步骤将自动生成 `.gitattributes` 文件

3. 相反,如果想解除LFS服务，则输入 
    ```bash
    git lfs untrack "*.py"
    ```
    `"*.py"`为py后缀的所有文件

4. 查看LFS存储的所有文件后缀名
    ```bash
    git lfs ls-files
    ```

5. 从git lfs云服务下拉这些大文件
    ```bash
    git lfs pull
    ```

6. 关闭lfs服务
    ```bash
    git lfs uninstall
    ```



## 使用限制
1. 容量: 1GB
    > 如果超出每个文件 5 GB 的限制，Git LFS 将静默拒绝文件
2. 带宽
   每个使用 Git Large File Storage 的帐户都会获得 1 GiB 的免费存储空间和一个月的免费带宽 1 GiB 

相关链接
1. https://docs.github.com/zh/repositories/working-with-files/managing-large-files/about-storage-and-bandwidth-usage
2. https://docs.github.com/zh/enterprise-server@3.7/repositories/working-with-files/managing-large-files/about-git-large-file-storage
