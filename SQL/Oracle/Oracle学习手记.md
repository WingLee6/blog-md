# Oracle学习手记

## 第一节：Oracle数据库是什么？
Oracle Database，又名Oracle RDBMS，简称Oracle。是甲骨文公司推出的一款关系数据库管理系统。  

Oracle数据库系统是目前世界上流行的关系数据库管理系统，拥有可移植性好、使用方便、功能强等优点，在各类大、中、小、微机环境中都适用。  

Oracle是一种高效率、可靠性好的、适应高吞吐量的数据库解决方案。  

## 第二节：数据库和实例的关系
Oracle数据库服务器由一个数据库和至少一个数据库实例组成。 数据库是一组存储数据的文件，而数据库实例则是管理数据库文件的内存结构。此外，数据库是由后台进程组成。

数据库和实例是紧密相连的，所以我们一般说的Oracle数据库，通常指的就是实例和数据库。

下图说明了Oracle数据库服务器体系结构：

## 第三节：使用sqlplus
1. 登陆SQL Plus  
    当SQL Plus 启动后，它会提示您输入用户名和密码。继续使用在安装Oracle数据库服务器期间输入的密码以sys用户身份登录：
    ```sql
    [oracle@dblib ~]$ sqlplus

    SQL*Plus: Release 12.2.0.1.0 Production on Sat Apr 11 18:39:27 2020

    Copyright (c) 1982, 2016, Oracle.  All rights reserved.

    Enter user-name: sys as sysdba
    Enter password: 
    ```
    查看当前用户：
    ```sql
    SQL> show user;
    USER is "SYS"
    ```

2. 创建用户  
    使用以下CREATE USER语句创建一个新用户：li，用于在可插入数据库中创建示例数据库：
    ```sql
    SQL> create user li identified by li612;

    User created.
    ```
    上面的语句创建了一个名为:li 的新用户，并在IDENTIFIED BY子句之后指定了一个密码，在这个示例中，创建的用户：`li` , 对应的密码为：`li612` 。  
    通过使用以下GRANT语句授予li用户权限：
    ```sql
    SQL> grant connect,resource,dba to li; 

    Grant succeeded.
    ```
    + 登录新账号  
        使用OT用户帐户连接到数据库(ORCL)。 当SQL Plus 提示输入用户名和密码时，输入：li和li612。  
        对于Oracle 11g/12c，使用如下命令：
        ```sql
        SQL> conn li
        Enter password: 
        ????
        SQL> 
        SQL> show user;
        USER ? "LI" 
        ```
        > 这种显示 ? 的问题可以输入：`alter session set NLS_LANGUAGE ='ENGLISH'; `解决。
    
    + 显示数据库名  
        在Oracle 12c中，当连接到数据库服务器时，默认数据库是名为CDB$ROOT的ROOT容器数据库。 要显示数据库名称，请使用SHOW命令：
        ```sql
        SQL> show con_name;

        CON_NAME
        ------------------------------
        orcl
        ```

        