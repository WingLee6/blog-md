# **安装MySQL for centos7**

1. 安装前，我们可以检测系统是否自带安装 MySQL:  
    ```
    rpm -qa | grep mysql
    ```
2. 如果你系统有安装，那可以选择进行卸载:  
    ```
    rpm -e mysql
    ```
3. 安装 MySQL：  
    下载地址：https://dev.mysql.com/downloads/repo/yum/  
    ```
    wget （链接）
    如：wget https://dev.mysql.com/get/mysql80-community-release-el7-3.noarch.rpm
    ```
    ```
    rpm -ivh mysql-community-release-el7-5.noarch.rpm
    ```
    ```
    yum update
    ```
    ```
    yum install mysql-server
    ```
    权限设置： 
    ```
    chown mysql:mysql -R /var/lib/mysql
    ```
    初始化 MySQL：
    ```
    mysqld --initialize
    ```
    启动 MySQL：
    ```
    systemctl start mysqld
    ```
    > 遇到问题：'Job for mysqld.service failed because the control process exited with error code. See "systemctl status mysqld.service" and "journalctl -xe" for details.'  输入下面命令后行：  
    &ensp; &ensp; rm -rf /var/lib/mysql  
    &ensp; &ensp; service mysqld restart  
    详细链接：https://blog.csdn.net/aiyowei1106/article/details/88703746


    查看 MySQL 运行状态：
    ```
    systemctl status mysqld
    ```
    
    >注意：如果我们是第一次启动 mysql 服务，mysql 服务器首先会进行初始化的配置。  
    此外,你也可以使用 MariaDB 代替，MariaDB 数据库管理系统是 MySQL 的一个分支，主要由开源社区在维护，采用 GPL 授权许可。开发这个分支的原因之一是：甲骨文公司收购了 MySQL 后，有将 MySQL 闭源的潜在风险，因此社区采用分支的方式来避开这个风险。  
    MariaDB的目的是完全兼容MySQL，包括API和命令行，使之能轻松成为MySQL的代替品。  
    &ensp; &ensp; yum install mariadb-server mariadb   
    mariadb数据库的相关命令是：  
    &ensp; &ensp; systemctl start mariadb  #启动MariaDB  
    &ensp; &ensp; systemctl stop mariadb  #停止MariaDB  
    &ensp; &ensp; systemctl restart mariadb  #重启MariaDB  
    &ensp; &ensp; systemctl enable mariadb  #设置开机启动  

4. 验证MySQL安装与登陆  
    使用 mysqladmin 命令来检查服务器的版本:  
    ```
    mysqladmin --version
    ```
    登陆：
    ```
    mysql 
    或
    mysql -uroot -p
    ```

    若出现登陆密码错误，三个解决方案： 
    + 默认的root用户密码为空，你可以使用以下命令来创建root用户的密码:  
        ```
        mysqladmin -u root password "new_password";
        ```
    + 初始密码密码是随机产生的，每台机器产生的都不一样的:
        ```
        cat /var/log/mysqld.log | grep 'temporary password'
        ```
    + 跳过密码验证的过程：
        ```
        vim /etc/my.cnf
        ```
        在[mysqld]后面任意一行添加
        ```
        skip-grant-tables
        ```
        然后重启mysql
        ```
        systemctl restart mysqld
        ```
    