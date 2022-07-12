# 在Linux云服务器上使用SFTP上传、下载文件


1. 以root连接到服务器
    ```
    sftp root@IP地址
    ```
2. 上传文件
    ```
    put -r 文件地址
    ```
3. 下载文件
    ```
    get -r 文件地址
    eg: get -r /root/soft.tar.gz
    ```

**附：**
1. scp传文件：
    ```
    scp 当前服务器文件地址 root@IP地址:放在另一服务器哪个地址目录
    ```
2. scp传目录：
    ```
    scp -r 文件地址 root@IP地址:存放地址
    ```
    