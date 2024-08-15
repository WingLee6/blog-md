# 备忘录 - Git大文件处理

## 问题描述
Git上传限制为 100MB

## 解决办法
1. 使用 Git Large File Storage (LFS)：
    见另一备忘录

2. 将大文件分割为小块：
    如果不能使用 **Git LFS**，你可以将大文件分割成多个小文件，然后在项目中将这些小文件重新组装。

    + 使用 `split` 命令来分割文件：

    ```bash
    split -b 50M largefile.zip part_
    ```
    这将 largefile.zip 分割成多个 50MB 的块，文件名以 part_ 开头。

    + 推送这些小块：
        正常添加和推送这些文件。

    + 如果要使用, 则在目标机器上重新组装文件：
        使用 `cat` 命令重新组装
        ```bash
        cat part_* > largefile.zip
        ```

3. 增加 Git 的推送文件大小限制：
    如果文件大小在 GitHub 或 Git 的限制之内（即小于100MB），但遇到了推送限制问题，可以尝试增加 Git 的缓冲区大小：

    ```bash
    git config http.postBuffer 524288000
    ```
    这将缓冲区大小增加到500MB，可以帮助解决由于缓冲区过小导致的大文件推送失败问题