## Oracle创建HR用户
1. 相关脚本路径：
    ```
    [oracle@dblib human_resources]$ pwd
    /u02/app/oracle/product/12.2.0/db_1/demo/schema/human_resources
    [oracle@dblib human_resources]$ ls
    hr_analz.sql  hr_comnt.sql  hr_drop_new.sql  hr_idx.sql       hr_main.sql
    hr_code.sql   hr_cre.sql    hr_drop.sql      hr_main_new.sql  hr_popul.sql
    [oracle@dblib human_resources]$ 
    ```

2. 创建HR用户
    ```
    [oracle@dblib human_resources]$ sqlplus /nolog

    SQL*Plus: Release 12.2.0.1.0 Production on Wed Mar 18 21:56:13 2020

    Copyright (c) 1982, 2016, Oracle.  All rights reserved.

    SQL> 
    SQL> conn / as sysdba 
    ????
    SQL> show user;
    USER ? "SYS"
    SQL>  
    SQL> @hr_main.sql

    specify password for HR as parameter 1:
    ?? 1 ??:  hr

    specify default tablespeace for HR as parameter 2:
    ?? 2 ??:  users 

    specify temporary tablespace for HR as parameter 3:
    ?? 3 ??:  temp

    specify log path as parameter 4:
    ?? 4 ??:  /home/oracle/

    PL/SQL ????????
    ·······
    ```

3. 检测是否安装成功
    在sys用户下：
    ```
    SQL> select username from dba_users where username='HR';

    USERNAME
    ---------------------------------------
    HR
    ```

4. 登陆HR用户并查看表
    ```
    SQL> conn hr
    Enter password: 
    ????
    SQL> show user;
    USER ? "HR"
    SQL> 
    SQL> select table_name from user_tables;

    TABLE_NAME
    --------------------------------------------------------------------------------
    REGIONS
    COUNTRIES
    LOCATIONS
    DEPARTMENTS
    JOBS
    EMPLOYEES
    JOB_HISTORY

    ??? 7 ??
    ```
    + **连接hr用户出现问题**：
        ```sql
        SQL> conn hr
        Enter password: 
        ERROR:
        ORA-01034: ORACLE not available
        ORA-27101: shared memory realm does not exist
        Linux-x86_64 Error: 2: No such file or directory
        Additional information: 3701
        Additional information: -972650725
        Process ID: 0
        Session ID: 0 Serial number: 0
        ```
        **错误原因：未启动数据库**  
        解决办法：  
        ```sql
        SQL> conn / as sysdba 
        Connected to an idle instance.
        SQL> 
        SQL> startup
        ORACLE instance started.

        Total System Global Area  771751936 bytes
        Fixed Size                  8625464 bytes
        Variable Size             562037448 bytes
        Database Buffers          197132288 bytes
        Redo Buffers                3956736 bytes
        ????????
        ????????
        SQL> 
        SQL> conn hr
        ????: 
        ????
        SQL> 
        SQL> show user;
        USER ? "HR"
        ```

5. sqlplus命令：
    set
    column
    connect
    describle

6. Oracle sqlplus相关命令：
    1. 查看最近执行的语句：`list`或`l`
        ```
        SQL> list
        1* select * from t
        SQL> l
        1* select * from t
        ```
    2. 再次执行最近执行的语句：`run`或`/`
        ```
        SQL> run
        ```
    3. 在最近执行语句后追加内容：`a`
        注意：在`a`后要有两个空格
        ```
        SQL> l
            1* select * from locations
        SQL> a  where city='Roma'    
        1* select * from locations where city='Roma'
        SQL> /
        （运行新语句结果）
        ```
    4. 修改命令：`c`  
        将罗马改为北京：
        ```
        SQL> l
            1* select * from locations where city='Roma'
        SQL> c /Roma/Beijing
            1* select * from locations where city='Beijing'
        ```
    5. 清空list： `cl buffer`
        ```
        SQL> l       
            1* select * from locations where city='Beijing'
        SQL> cl buffer
            buffer ???
        SQL> l
            SP2-0223: SQL ?????????
        ```
    6. 删除del:  `del`  
        删除第一行：
        ```
        SQL> l
            1  select *
            2  from locations
            3* where city='Beijing'
        SQL> del 1
        SQL> l 
            1  from locations
            2* where city='Beijing'
        ```
    6. 不执行语句，但写到缓存（list）里： `.`
        ```
        SQL> select * from locations where city='Beijing' 
            2  .
        SQL> l
            1* select * from locations where city='Beijing'
        ```
    7. 保存语句到指定文件下：`save`
        默认保存最后一句
        ```
        SQL> l
            1* SELECT EMPLOYEE_ID,LAST_NAME,SALARY FROM EMPLOYEES WHERE EMPLOYEE_ID=101
        SQL> save /home/oracle/sql/query1.sql
            ??? file /home/oracle/sql/query1.sql
        ```
    8. 调用保存的sql文件: `get`
        ```
        # .sql文件后缀可加可不加
        SQL> get /home/oracle/sql/query1.sql
            1* SELECT EMPLOYEE_ID,LAST_NAME,SALARY FROM EMPLOYEES
        SQL> l
            1* SELECT EMPLOYEE_ID,LAST_NAME,SALARY FROM EMPLOYEES
        SQL> get /home/oracle/sql/query1    
            1* SELECT EMPLOYEE_ID,LAST_NAME,SALARY FROM EMPLOYEES

        # txt文件后缀要加
        SQL> get /home/oracle/sql/result1.txt
            1* SELECT EMPLOYEE_ID,LAST_NAME,SALARY FROM EMPLOYEES WHERE EMPLOYEE_ID=101
        SQL> 
        SQL> l
            1* SELECT EMPLOYEE_ID,LAST_NAME,SALARY FROM EMPLOYEES WHERE EMPLOYEE_ID=101
        SQL> /home/oracle/sql/result1    
            SP2-0734: ??????? "/home/orac..." - ????????
        ```
    9. 直接执行sql文件的语句
        ```
        SQL> start /home/oracle/sql/result1.txt
        EMPLOYEE_ID LAST_NAME                     SALARY
        ----------- ------------------------- ----------
                101 Kochhar                        17000
        ```