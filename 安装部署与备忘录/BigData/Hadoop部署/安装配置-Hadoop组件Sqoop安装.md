# Sqoop 安装与部署
---
> 更多Hadoop组件配套安装与部署  
&ensp; &ensp;Hadoop：https://blog.csdn.net/Gordo_Li/article/details/103309484 
&ensp; &ensp;Hbase: https://blog.csdn.net/Gordo_Li/article/details/103199302  
&ensp; &ensp;Hive:  https://blog.csdn.net/Gordo_Li/article/details/103199319  
&ensp; &ensp;Pig:  https://blog.csdn.net/Gordo_Li/article/details/103199334  
&ensp; &ensp;Sqoop:  https://blog.csdn.net/Gordo_Li/article/details/103199352  
&ensp; &ensp;Flume: https://blog.csdn.net/Gordo_Li/article/details/103199291  
&ensp; &ensp;Zoopkeeper:  https://blog.csdn.net/Gordo_Li/article/details/103199364   
部分组件软件包：  
&ensp; &ensp;soft.gz.tar: https://download.csdn.net/download/Gordo_Li/11993074
---

1. 下载软件,解压与移动
    ```
    cd /data/soft/
    tar -zxvf sqoop-1.4.7.bin__hadoop-2.6.0.tar.gz
    mv sqoop-1.4.7.bin__hadoop-2.6.0 /data/sqoop-1.4.7
    cd /data
    ll
    ```

2. 设置变量环境
    ```
    vi /etc/profile

    export JAVA_HOME=/usr/local/jdk1.8
    export HADOOP_HOME=/data/hadoop-2.7.3
    export HIVE_HOME=/data/hive-2.3.6
    export HBASE_HOME=/data/hbase-1.2.6
    export PIG_HOME=/data/pig-0.17.0
    export SQOOP_HOME=/data/sqoop-1.4.7
    export PATH=$PATH:$JAVA_HOME/bin:$HADOOP_HOME/bin:$HIVE_HOME/bin:$HBASE_HOME/bin:$PIG_HOME/bin:$SQOOP_HOME/bin

    source /etc/profile
    ```

3. 配置Sqoop
    1. 获取MySQL连接器
        Sqoop经常与MySQL结合，从Hadoop数据源向MySQL数据库导入数据，或从Hadoop各组件导入数据到MySQL。所以为其配置Java连接器（Mysql的Jave连接器也成为JDBC驱动程序）
        > 可在MySQL官网(http://central.maven.org/maven2/mysql/mysql-connector-java/)找到,下载并解压  
        >  wget http://central.maven.org/maven2/mysql/mysql-connector-java/8.0.18/mysql-connector-java-8.0.18.jar  
        > **一定要和mysql版本匹配**
    2. 配置MySQL连接器
        ```
        cp mysql-connector-java-8.0.18.jar /data/sqoop-1.4.7/lib/
        ```
    3. 配置Sqoop环境变量
        将模版改名，再编辑。
        ```
        cd /data/sqoop-1.4.7/conf/
        cp sqoop-env-template.sh sqoop-env.sh
        vi sqoop-env.sh
        ```
        配置Sqoop环境变量如下：
        ```
        # Set Hadoop-specific environment variables here.

        #Set path to where bin/hadoop is available
        export HADOOP_COMMON_HOME=/data/hadoop-2.7.3

        #Set path to where hadoop-*-core.jar is available
        export HADOOP_MAPRED_HOME=/data/hadoop-2.7.3

        #set the path to where bin/hbase is available
        #export HBASE_HOME=

        #Set the path to where bin/hive is available
        #export HIVE_HOME=

        #Set the path for where zookeper config dir is
        #export ZOOCFGDIR=
        ```

4. 启动Sqoop
    ```
    sqoop help
    ```
    正常输出：
    ```
    [root@hw1 bin]# sqoop help
    Warning: /data/sqoop-1.4.7/../hcatalog does not exist! HCatalog jobs will fail.
    Please set $HCAT_HOME to the root of your HCatalog installation.
    Warning: /data/sqoop-1.4.7/../accumulo does not exist! Accumulo imports will fail.
    Please set $ACCUMULO_HOME to the root of your Accumulo installation.
    19/11/22 13:30:05 INFO sqoop.Sqoop: Running Sqoop version: 1.4.7
    usage: sqoop COMMAND [ARGS]

    Available commands:
    codegen            Generate code to interact with database records
    create-hive-table  Import a table definition into Hive
    eval               Evaluate a SQL statement and display the results
    export             Export an HDFS directory to a database table
    help               List available commands
    import             Import a table from a database to HDFS
    import-all-tables  Import tables from a database to HDFS
    import-mainframe   Import datasets from a mainframe server to HDFS
    job                Work with saved jobs
    list-databases     List available databases on a server
    list-tables        List available tables in a database
    merge              Merge results of incremental imports
    metastore          Run a standalone Sqoop metastore
    version            Display version information

    See 'sqoop help COMMAND' for information on a specific command.
    ```
---

附录：Sqoop应用
1. 列出MySQL内的数据库基本信息
    + 列出数据库
        ```
        [root@hw1 ~]# sqoop list-databases --connect jdbc:mysql://hw1:3306 --username root -P
        Warning: /data/sqoop-1.4.7/../hcatalog does not exist! HCatalog jobs will fail.
        Please set $HCAT_HOME to the root of your HCatalog installation.
        Warning: /data/sqoop-1.4.7/../accumulo does not exist! Accumulo imports will fail.
        Please set $ACCUMULO_HOME to the root of your Accumulo installation.
        19/11/22 14:22:16 INFO sqoop.Sqoop: Running Sqoop version: 1.4.7
        Enter password: 
        19/11/22 14:22:23 INFO manager.MySQLManager: Preparing to use a MySQL streaming resultset.
        Loading class `com.mysql.jdbc.Driver'. This is deprecated. The new driver class is `com.mysql.cj.jdbc.Driver'. The driver is automatically registered via the SPI and manual loading of the driver class is generally unnecessary.
        mysql
        information_schema
        performance_schema
        sys
        hive
        ```
    
    + 列出指定数据库内的所有表(本例为hive数据库)
        ```
        sqoop list-tables --connect jdbc:mysql://hw1:3306/hive --username root -P
        ```

2. MySQL和HDFS数据库互导入
    + 准备工作：
        1. 创建Mysql数据库，名为li612，并创建表runoob_tbl,插入数据
            ```
            create DATABASE li612;

            use li612;

            CREATE TABLE `student` (
            `id` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
            `name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
            `score` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8

            INSERT INTO li612.student (id,name,score) 
            VALUES 
            ('1','tom','99')
            ,('2','apple','80');

            ```
    + 将MySQL数据库中的表导入HDFS
        导入：
        ```
        sqoop import --connect jdbc:mysql://hw1:3306/li612 --table student --username root -P -m 1
        ```
        查看：
        ```
        [root@hw1 ~]# hdfs dfs -cat  /user/root/student/part-m-00000
        1,tom,99
        2,apple,80
        ```
    + 将HDFS中的数据导入MySQL
        需要先在mysql将表创建好，可以没有数据（导入数据）
        ```
        [root@hw1 ~]# sqoop export --connect jdbc:mysql://hw1:3306/li612 --username root -P --table student --m 1 --export-dir /user/root/student/part-m-00000
        ```
        查看：
        ```
        mysql> select * from student;
        +------+-------+-------+
        | id   | name  | score |
        +------+-------+-------+
        | 1    | tom   | 99    |
        | 2    | apple | 80    |
        | 1    | tom   | 99    |
        | 2    | apple | 80    |
        +------+-------+-------+
        4 rows in set (0.00 sec)
        ```
3. MySQL和Hive数据互导
    + 将关系型数据库导入导Hive表
        ```
        sqoop import --connect jdbc:mysql://hw1:3306/li612 --username root -P --table student -m 1 --hive-import --create-hive-table --hive-table student --target-dir /user/root/hive
        ```
        > --table student：表示mysql中数据库li612下的student表，  
        --hive-table student: 表示Hive中新建的hive表   
        -m 1 : 表示由一个Map作业执行
        --create-hive-table ：表示在Hive中创建
        
        查看：
        ```
        [root@hw2 ~]# hdfs dfs -cat  /user/root/hive/part-m-00000
        1tom99
        2apple80
        1tom99
        2apple80
        ```
    + 将Hive中的表数据导入MySQL数据库表  
        在MySQL创建一个新表student2：
        ```
        CREATE TABLE li612.student2 (
            id varchar(100) NULL,
            name varchar(100) NULL,
            score varchar(100) NULL
        )
        ENGINE=InnoDB
        DEFAULT CHARSET=utf8
        COLLATE=utf8_general_ci;
        ```
        将Hive中的表再导入到MySQL：
        ```
        sqoop export --connect jdbc:mysql://hw1:3306/li612 --username root -P --table student2 --export-dir /user/root/hive/part-m-00000 --input-fields-terminated-by '\001
        ```
        查看结果：
        ```
        mysql> select * from student2;
        +------+-------+-------+
        | id   | name  | score |
        +------+-------+-------+
        | 1    | tom   | 99    |
        | 2    | apple | 80    |
        | 1    | tom   | 99    |
        | 2    | apple | 80    |
        +------+-------+-------+
        4 rows in set (0.00 sec)
        ```


  

