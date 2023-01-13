## ORACLE 12C下创建表空间和新用户 -Oracle12c
> 参考：https://blog.csdn.net/aaronmer/article/details/78748952


两种模式下的不同创建方法
1. 首先是查看当前容器，CDB$ROOT表示是CDB容器
    ```sql
    SQL> show con_name

    CON_NAME
    ------------------------------
    orcl
    ```

2. 下面我们就在CDB容器中直接创建表空间
    + 创建数据表空间
        ```sql
        create tablespace CDBTEST datafile '/u02/app/oracle/oradata/orcl/CDB_data[文件名自定，后缀_data表示数据表空间].dbf' 
        size 50M 
        --初始大小
        autoextend on 
        --自动扩展next
        next 50m maxsize unlimited;
        ```
    + 创建临时表空间  
        ```sql
        create temporary tablespace user_temp  
        tempfile '/u02/app/oracle/oradata/orcl/user_temp[文件名自定，后缀_temp表示临时表空间].dbf' 
        size 50m 
        --初始大小 
        autoextend on 
        --自动扩展next 
        next 50m maxsize 20480m  
        --自动扩展每次增加50M，最大可到20480Mextent
        extent management local
        ``` 

3. 创建用户并指定表空间
    ```sql
    create user newUsername[新用户名] identified by 123456[密码]  
    [后面两行可无]
    default tablespace 数据表空间名  
    temporary tablespace 临时表空间;  
    ```

4. 给用户授予**权限**
    ```sql
    grant unlimited tablespace to username;

    grant create session to C##test;  
    grant create table to   C##test;  
    grant create tablespace to   C##test;  
    grant create view to   C##test;
    ```

5. 授予**角色**权限语句
    + 创建角色
        ```sql
        Create role orclrole[角色名];
        ```
    + 授权给角色
        ```sql
        grant create session to  orclrole;
        grant select on v_$sysstat to orclrole;
        grant select on v_$system_event to orclrole;
        grant select on v_$rowcache to orclrole;
        grant select on v_$librarycache to orclrole;
        grant select on V_$INSTANCE to orclrole;
        grant select on V_$STATNAME to orclrole;
        grant select on V_$SESSION to orclrole;
        grant select on v_$process to orclrole;
        grant select on V_$SESSTAT to orclrole;
        grant select on dba_data_files to orclrole;
        grant select on dba_free_space  to orclrole;
        ```
    + 授予角色给用户
        ```sql
        Grant orclrole[角色名] to orcldba[用户名];
        ```