# 题库：MySQL5.6 OCP认证题库大纲 -MySQL5.6

1. ····· which Mysql options were set to custom values(了解mysql中配置的自定义参数配置)
    ```
    方法一：
        mysql> show global variables;
    方法二：
        mysql> use information_schema;
        mysql> select * from information_schema.global_variables;
    ```
    C. Check the output of SHOW GLOBAL VARIABLES and compare it with default valuse. ()   
    D. Query the_S INFORMATION CHEMA.GLOBAL_VARIABLES table and compare the result with default values.

2. 日志报错，root用户非法访问，未使用密码
    **mysql访问数据库必须要密码，但在第一次安装密码为空，所以使用'mysql -uroot -p'**   
    (但是该题库为mysql5.6,但是在myslq以上有随机的初始密码「详见博客」)

3. A Mysql Server has been running an existing application successfully for six months. The my.cnf is adjusted to contain the following additional configuration: [mysqld] Default-authentication-plugin=sha256_password The Mysql Server is restated without error.(mysql 已经在应用服务器上面稳定, 改配置文件my.cnf,······)，会**对已经存在的用户**有什么影响？  
    【设置密码】*新版mysql已经将‘identified by 'xuexi20191106'’和‘with grant option’分开*
    ```
    grant all privileges on *.* to 'test'@'%' identified by 'xuexi20191106' with grant option;
    ```
    C.  They are not affected by this configuration change.(新的加密方式对已经存在的没有任何影响)

4. 有多种字符集关联数据查询。下面哪三种情形会影响字符集的选择？ 
    C. comparing the encoded data with similar columns on other tables（和其他表**连接查询**,可能会涉及到字符集编码转换）   
    D Memory usage when working with the data（**在内存使用**,可能涉及到字符集之间的转码）  
    E. Character set mapping index hash size（**数据在索引上映射哈希值**,涉及到字符集之间的转换）

5. mysql_secure_installation安全配置向导  
    >公司做等保安全的时候，可以借助这样一个工具，为了数据库更安全，防止被攻击
    ```
    [root@youxi1 ~]# mysql_secure_installation
    ```
    A. ····· set the root user accout password (设置root密码)
    C. ····· ask remove test database and access (删除test数据库)  
    D. ····· reload privilege tables now(权限，删除匿名用户)  

6. (**组合索引：经常用到多个字段的多条件索引**）查询语句因为where条件中的字段是在一个变化的数据集而在一个应用中执行若干次，哪个能提高查询性能？  
    E. Add a composite index on (run, object, stage)) to allow the query to fully utilize an index.->用联合索引->在（run,object,stage)三列上面建立混合索引，并允许查询语句使用这个索引

7. Consuder typical **High Availability(HA)** solutions that do not use shares storage.(考虑典型的高可用解决方案中，不使用共享存储，哪三个方案不使用共享存储)
    A. Mysql Repilication(主从同步/主从复制)  
    B. Distrbutecd Roplicated Block Device(DRBD) and mysql（分布式块设备复制和 mysql）
    E. NDB and mysql (mysql NDS 集群)  

8. characteristic of MEMORY storage engine?
    A. Each table is represented in dist as an.frm file  
    D. It cannot con

9. two points can be concluded from (1045:表名没有被认证；HOST=‘localhost’不是ip推导出socket不是tcp)

10.  which is true when you identify a connection event that has used external authentication?
    F. The "PROXY_PRIV" user shows a username if external authenticaltion is used.("PROXY_PRIV"用户显示一个被外部授权使用的用户名，外部授权需要使用代理)

11. ······using CTIDS in replication.You need  
    ```
    # 是CTIDS
    stop slave; //先停掉


12. User aissues the command:  
    LOCK TABLES pet READ;  
    which command can User B execute againt the pets table?(当主表「eg.pet表」被锁住「lock」，还能有什么操作)  
    B. select ·····

13. when backing up a replication slave.which three should also be able

14. shutdown a running Mysql Server cleanly(关闭数据库的方法「window和linux通用」)  
    ```
    i. Service mysql stop
    ii. Mysql stop
    ii. Mysqladmin -u -p shutdown
    iv. Net stop mysql
    ```
    C. Shell> /etc/init.d/mysql stop  
    D. Shell> mysqladmin -uroot -p shotdown
    F. Shell> net stop mysql
    


15. ····· taking a binary backup of a Mysql Server using InnoDB storage engine?(对InnoDB存储引擎进行二进制备份)
    ```
    Mysqldump 备份是逻辑备份，可以直接打开执行
    Mysqlhostcopy 只适用于myISAM引擎
    Mysqldumpslow 用于慢查询工具
    ```
    A. Mysql Enterprise Backup(mysql企业备份)  
    D. File system snapshots(文件系统快照)

16. 在分区表上增加一个分区（增加一个新分区，而不是重新组织分区）

17. ······ reduce disk I/O overheads?(减少磁盘的日常开销)

18. ······ a record of all queries that are not using indexes(查询不使用索引)  
    C. By enabling the Slow Query Log and using the log-queries-not-using-indexes option(通过使用慢查询日志，并且结合log-queries不使用索引选项)

19. 密码验证

20. 通过

21. ····· the 

22. which describe how the **strict SQL mode** provides added security?(SQL额外的严格安全规定)
    ```
    启用：my.cnf加入
    ```

23. A server crash, ···· how (当服务器崩溃，修复InnoDB表)

24. ······ reduce Mysql server exposure to remote connections?(减少mysql被远程连接的数量)
    ```
    a. -skip-networking   # 关闭远程连接
    b. GRANT all privileges on *.* to 'django'@'10.12%' identified by 'django' with grant option; 
    c. 
    ```

25. 


26. ···· deleted the wrong row in a table (不小心删除了某个数据/表，怎么恢复——>先把数据库的备份恢复到服务器，找到日志，筛选时间点进行恢复——>补回来)
    ```
    先恢复全库
    ````
    B. The server keeps track of which GTIDs hava already been executed and skips those.(服务器保存了已执行全局事务ID的记录，并全部跳过)

27. apps的reports表被意外reuncated。你有单个mysqldump备份文件可以优先

28. ······ reset the password(破解root密码),更安全？
    ```
    a. 修改my.cnf，加上
        skip-grant-table
    ```

29. ······ lead towards a high availability solution?(“高可用”的解决方法使用情节)
    ```
    高可用——>怕机器坏掉
    ````
    A. When uptime is critical(计算机运行时间达到临界)  
    D. When data loss is unacceptable(数据丢失可接受)

30. ····· using Microsoft Windows Cluster as a platform for Mysql(window集群作为mysql平台有什么功能)  
    **windows平台下的ted：共享存储的功能**

31. You have enabled the Slow Query Log for a short time,(你有一个短暂的慢查询权限，怎么实现查询最大限度节省开销)  
    ```
    a. 数据类型的索引比字符类型的性能更好
    b. 使用函数以后不能使用索引
    ```


32. 题干：创建了一个视图，实现修改数据
    **复杂的视图是无法修改(/删除数据）数据的，视图的数据是来自基表的。**  
    B.在基表中修改

33. （恢复日志文件）three binary log file (bin.001,bin.002 and bin.003),restore
    ```
    mysqlbinlog 日志文件名 | mysql
    ```
    B. mysqlbinlog bin.001 bin.002 bin.003 | mysql

34. ······ （慢查询日志）

35. 
    **只有主从复制可以解决延迟的问题**


36. （日志的功能）
    ```
    一般查询日志：log, general log(记录所有的日志), log output;
    慢查询日志：查询执行的时长超过指定的查询
    错误日志：通常为错误日志的相关信息
    二进制日志：
    中继日志：
    ```

37. Dis

38. 







    































 










