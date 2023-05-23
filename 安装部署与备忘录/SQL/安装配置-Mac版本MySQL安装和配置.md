## 软件安装：Mac版本MySQL安装-MySQL+Mac

1. 下载：  
    https://dev.mysql.com/downloads/mysql/  
    下载macOS 10.14 (x86, 64-bit), DMG Archive
2. 安装  
    下载完成后，双击安装即可[一路默认]；
3. 终端操作  
    + 进入/usr/local/mysql/bin,查看此目录下是否有mysql  
        ```shell
        cd /usr/local/mysql/bin
        ll
        ```
    + 执行vim ~/.bash_profile  
        在该文件中添加mysql/bin的目录  
        ```shell
        PATH=$PATH:/usr/local/mysql/bin  
        ```  
        添加完成后，按esc，然后输入wq保存。  
    + 最后在命令行输入
        ```shell
        source ~/.bash_profile
        ```

4. 登陆  
    通过mysql -uroot -p登录mysql, 输入之前保存的密码
    ```shell
    mysql -uroot -p
    ```
 
