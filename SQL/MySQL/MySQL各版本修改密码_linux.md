# MySQL各版本修改密码_linux
> MySQL主流三个版本分别为：5.6、 5.7和8.0
> 设置方面略有不如，下文详解；
> 安装各个版本的MySQL见博客：https://blog.csdn.net/Gordo_Li/article/details/103445493
> 安装MySQL for Mac：https://blog.csdn.net/Gordo_Li/article/details/102863744
> CentOS7 无网安装配置MySQL+Perl+资源rpm：https://blog.csdn.net/Gordo_Li/article/details/89397526


Mysql5.6无初始密码，可直接在终端输入`mysql`,回车进入mysql；
Mysql5.7和8.0都有初始密码（下文介绍），登陆Mysql命令为`mysql -uroot -p`;

1. 直接跳过密码  
    可用MySQL版本：5.7、8.0
    操作过程：
    + 修改/etc/my.cnf
        ```shell
        vim /etc/my.cnf
        ```
    + 在[mysqld]后面任意一行添加
        ```shell
        skip-grant-tables
        ```
    + 然后重启mysql
        ```
        systemctl restart mysqld
        ```
    + 重启后可无密码登陆
        ```shell
        mysql
        ```

2. cat查看初始密码
初始密码是随机产生的，每台机器产生的都不一样的
    ```shell
    cat /var/log/mysqld.log | grep 'temporary password'
    ```
    最后的为你MySQL的初始密码，比如：
    ```shell
    [root@iZbp1c8mi ~]# cat /var/log/mysqld.log | grep 'temporary password'
    2019-12-08T05:52:31.100377Z 1 [Note] A temporary password is generated for root@localhost: ?V_pYLbXe4u:
    2019-12-08T13:18:00.581987Z 5 [Note] [MY-010454] [Server] A temporary password is generated for root@localhost: n&9YIh60kmlK
    2019-12-08T14:11:53.962674Z 1 [Note] A temporary password is generated for root@localhost: ,NB9xg-R3xNW
    ```
    上例初始密码为:,NB9xg-R3xNW
3. 修改密码
    > 想设置“123456”等简单密码，转至文末附录查看Mysql密码设置规则。默认为：密码必须符合长度，且必须含有数字，小写或大写字母，特殊字符。
    + 修改密码
        **方法一**：
        可用MySQL版本：5.6、5.7、8.0
        格式：mysqladmin -u用户名 -p旧密码 password 新密码 
        举例：
        ```shell
        [root@iZbp1c8mi ~]# mysqladmin -uroot -p',NB9xg-R3xNW' password Mysql123@
        mysqladmin: [Warning] Using a password on the command line interface can be insecure.
        Warning: Since password will be sent to server in plain text, use ssl connection to ensure password safety.
        ```
        若为Mysql5.6，该为：
        ```shell
        # mysqladmin password Mysql123@
        ```
        即可将初始密码（或旧密码）,NB9xg-R3xNW 改为 Mysql123@  
        **方法二**：
        可用MySQL版本：5.7、 8.0
        先用到初始密码登陆Mysql，然后用SET PASSWORD命令修改密码：
        ```mysql
        mysql> alter user'root'@'localhost' identified by '新密码';
        ```
        **方法三**：
        可用MySQL版本：5.6、5.7
        先用到初始密码登陆Mysql，然后用SET PASSWORD命令修改密码：
        ```mysql
        mysql> set password for root@localhost = password('Mysql123@');
        ```
        **方法四**：
        可用MySQL版本：5.6、5.7
        + MySQL 5.7:
        先用到初始密码登陆mysql，然后用update直接编辑user表：
            ```mysql
            mysql> use mysql;
            mysql> update mysql.user set authentication_string=password('Mysql123$') where user='root' and host='localhost';    # and host='localhost'部分可以不加
            mysql> flush privileges;    # 刷新权限
            ```
        + MySQL 5.6:
        先用到初始密码登陆mysql，然后用update直接编辑user表：
            ```mysql
            mysql> use mysql; 
            mysql> update user set password=password('Mysql123@') where user='root' and host='localhost'; 
            mysql> flush privileges;    # 刷新权限
            ```

**附录**：
1. 查看MySQL密码设置规则：
    > validate_password_policy取值有0、1、2。
    > 默认是1，即MEDIUM，所以设置的密码必须符合长度，且必须含有数字，小写或大写字母，特殊字符
    > 取值0：只限制密码长度，**大于**validate_password.length参数即可。 
    
    MySQL5.6版本没有严格密码要求；
    MySQL8.0和5.7修改密码规则有不同：
    + 新版MySQL 8.0
        ```mysql
        mysql> SHOW VARIABLES LIKE 'validate_password%';
        +--------------------------------------+--------+
        | Variable_name                        | Value  |
        +--------------------------------------+--------+
        | validate_password.check_user_name    | ON     |
        | validate_password.dictionary_file    |        |
        | validate_password.length             | 8      |
        | validate_password.mixed_case_count   | 1      |
        | validate_password.number_count       | 1      |
        | validate_password.policy             | MEDIUM |
        | validate_password.special_char_count | 1      |
        +--------------------------------------+--------+
        7 rows in set (0.11 sec)
        ```
        如果只是日常使用，想设置“123456”等简单密码，可**修改密码规则**：
        ```mysql
        mysql> set global validate_password.policy=0;
        mysql> set global validate_password.length=1;
        ```
        即可设置密码为：
        ```mysql
        mysql> alter user'root'@'localhost' identified by '123456';
        Query OK, 0 rows affected (0.01 sec)
        ```
    + MySQL 5.7
        ```mysql
        mysql> SHOW VARIABLES LIKE 'validate_password%';
        +--------------------------------------+--------+
        | Variable_name                        | Value  |
        +--------------------------------------+--------+
        | validate_password_check_user_name    | ON     |
        | validate_password_dictionary_file    |        |
        | validate_password_length             | 4      |
        | validate_password_mixed_case_count   | 1      |
        | validate_password_number_count       | 1      |
        | validate_password_policy             | LOW    |
        | validate_password_special_char_count | 1      |
        +--------------------------------------+--------+
        7 rows in set (0.11 sec)
        ```
        如果只是日常使用，想设置“123456”等简单密码，可**修改密码规则**：
        ```mysql
        mysql> set global validate_password_policy=0;
        mysql> set global validate_password_length=1;
        ```
        即可设置密码为：
        ```mysql
        mysql> alter user'root'@'localhost' identified by '123456';
        Query OK, 0 rows affected (0.01 sec)
        ```


