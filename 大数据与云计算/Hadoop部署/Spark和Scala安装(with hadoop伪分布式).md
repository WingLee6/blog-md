# Hadoop 部署与安装
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

0. 准备工作  
    在本地传输软件包到服务器：
    ```
    scp /Users/soft.tar.gz root@IP地址:/data
    ```
    输入服务器密码。传输完成后，可登陆服务器查看，并解压缩：
    ```
    cd /data
    ll
    tar -zxvf soft.tar.gz 
    ```
    得到我们软件包的清单：
    ```
    [root@hw1 data]# ll /data/soft
    总用量 1547172
    -rw-r--r-- 1 root root  90859180 8月  23 03:53 apache-hive-1.2.2-bin.tar.gz
    -rw-r--r-- 1 root root  19466965 8月  23 03:53 apache-hive-2.1.1-src.tar.gz
    -rw-r--r-- 1 root root 232225538 8月  23 02:53 apache-hive-2.3.6-bin.tar.gz
    -rw-r--r-- 1 root root 214092195 8月  23 03:54 hadoop-2.7.3.tar.gz
    -rw-r--r-- 1 root root 104659474 8月  23 03:54 hbase-1.2.6-bin.tar.gz
    -rw-r--r-- 1 root root 181365687 8月  23 03:55 jdk-8u77-linux-x64.tar.gz
    -rw-r--r-- 1 root root 528015360 8月  28 22:42 mysql-5.7.25-1.el7.x86_64.rpm-bundle.tar
    -rw-r--r-- 1 root root     26024 8月  28 22:53 mysql80-community-release-el7-3.noarch.rpm
    -rw-r--r-- 1 root root    972009 8月  28 22:40 mysql-connector-java-5.1.36-bin.jar
    -rw-r--r-- 1 root root    210202 5月  24 2016 mysqlsampledatabase.sql
    -rw-r--r-- 1 root root     54335 8月  29 03:14 mysqlsampledatabase.zip
    -rw-r--r-- 1 root root   2739670 8月  29 23:16 ojdbc6.jar
    -rw-r--r-- 1 root root 186354175 8月  23 03:55 spark-2.0.0-bin-hadoop2.7.tgz
    -rw-r--r-- 1 root root   5269020 8月  23 03:55 sqoop-1.4.4.bin__hadoop-2.0.4-alpha.tar.gz
    -rw-r--r-- 1 root root  17953604 8月  28 21:47 sqoop-1.4.7.bin__hadoop-2.6.0.tar.gz
    ```


1. 更改主机名（hostname)
    为了便于操作，将华为云服务器主机名更改为hw1
    对服务器操作：
    ```
    hostnamectl set-hostname hw1
    ```
    然后重启（`reboot`）即可

2. 建立集群登陆  
    + ‘ssh+主机名’登陆
        1. 更改hosts文件
            ```
            vi /etc/hosts
            ```
        2. 在最后添加（服务器的内网IP和对应主机名），保存退出（wq!)
            ```
            192.168.9.238 hw1
            ```
        
    + 免密登陆（在自己的linux服务器产生一对密码，把一个密码发给其他人）
        1. 生成
            ```
            ssh-keygen -t rsa
            ```
            让然后一路点击回车（enter），会生成一个[RSA 2048]图。
        2. 在/root下查看隐藏目录(.ssh）
            ```
            cd 
            ll -a
            ```
            看到.ssh目录，进入该目录：
            ```
            cd /root/.ssh
            ll
            ```
            将hw1的密钥分发给三台服务器（**自己也要发**）：
            ```
            ssh-copy-id hw1
            ```
    + 在另两台服务器，重复上面【‘ssh+主机名’登陆】和【免密登陆】操作
        1. ······省略
        2. 验证是否成功：
            在服务器上分别跑下面代码：
            ```
            ssh hw1
            ```

3. 安装JDK  
    + 解压缩：
        ```
        cd /data/soft
        ll
        tar -zxvf jdk-8u77-linux-x64.tar.gz
        ```
    + 移动：
        ```
        mv jdk1.8.0_77/ /usr/local/jdk1.8
        cd /usr/local/
        ll
        ```
    + 配置环境变量
        ```
        vi /etc/profile
        ```
        添加内容：
        ```
        export JAVA_HOME=/usr/local/jdk1.8
        export PATH=$PATH:$JAVA_HOME/bin
        ```
        是环境生效：
        ```
        source /etc/profile
        ```
    + 验证是否成功(输出版本号)
        ```
        java -version
        ```

4. 安装Hadoop
    + 解压缩
        ```
        cd /data/soft
        tar -zxvf hadoop-2.7.3.tar.gz 
        mv hadoop-2.7.3 /data/
        cd /data/
        ```
    + 配置hadoop配置文件
        ```
        cd /data/hadoop-2.7.3/etc/hadoop/
        ll
        ```
        1. vi core-site.xml 
            ```
            <configuration>
                <property>
                    <name>fs.default.name</name>
                    <value>hdfs://hw1:9000</value> 
                </property>
                <property>
                    <name>hadoop.tmp.dir</name>
                    <value>/data/hadoop-2.7.3/tmp</value> 
                </property>
            </configuration>
            ```
        2. vi hdfs-site.xml 
            ```
            <configuration>
                
                <property>
                    <name>dfs.replication</name>
                    <value>1</value>        # 3个节点
                </property>
                
            <configuration>
            ```

        4. vi hadoop-env.sh
            ```
            echo $JAVA_HOME
            ```
            把环境变量加上去：
            ```
            export JAVA_HOME=/usr/local/jdk1.8
            ```

        5. vi /etc/profile
            ```
            vi /etc/profile
            ```
            ```
            export JAVA_HOME=/usr/local/jdk1.8
            export HADOOP_HOME=/data/hadoop-2.7.3
            export PATH=$PATH:$JAVA_HOME/bin:$HADOOP_HOME/bin
            ```
            ```
            source /etc/profile
            ```
            ```
            echo $HADOOP_HOME
            ```
           
        6. 格式化Hadoop
            ```
            $HADOOP_HOME/bin/hdfs namenode -format
            ```
            输出最后几行，则成功(下面展示的第一行有‘successfully’）：
            ```
                                    ······
            19/11/21 19:16:41 INFO common.Storage: Storage directory /data/hadoop-2.7.3/current/dfs/name has been successfully formatted.
            19/11/21 19:16:41 INFO namenode.FSImageFormatProtobuf: Saving image file /data/hadoop-2.7.3/current/dfs/name/current/fsimage.ckpt_0000000000000000000 using no compression
            19/11/21 19:16:41 INFO namenode.FSImageFormatProtobuf: Image file /data/hadoop-2.7.3/current/dfs/name/current/fsimage.ckpt_0000000000000000000 of size 346 bytes saved in 0 seconds.
            19/11/21 19:16:41 INFO namenode.NNStorageRetentionManager: Going to retain 1 images with txid >= 0
            19/11/21 19:16:41 INFO util.ExitUtil: Exiting with status 0
            19/11/21 19:16:41 INFO namenode.NameNode: SHUTDOWN_MSG: 
            /************************************************************
            SHUTDOWN_MSG: Shutting down NameNode at hw1/192.168.9.238
            ************************************************************/
            ```
        11. 启动Hadoop集群
            ```
            /data/hadoop-2.7.3/sbin/start-all.sh
            ```
            输出结果为：
            ```
            [root@hw1 ~]# /data/hadoop-2.7.3/sbin/start-all.sh
            This script is Deprecated. Instead use start-dfs.sh and start-yarn.sh
            Starting namenodes on [hw1]
            hw1: namenode running as process 14805. Stop it first.
            hw2: starting datanode, logging to /data/hadoop-2.7.3/logs/hadoop-root-datanode-hw2.out
            hw3: starting datanode, logging to /data/hadoop-2.7.3/logs/hadoop-root-datanode-hw3.out
            Starting secondary namenodes [0.0.0.0]
            0.0.0.0: secondarynamenode running as process 14990. Stop it first.
            starting yarn daemons
            resourcemanager running as process 12383. Stop it first.
            hw2: starting nodemanager, logging to /data/hadoop-2.7.3/logs/yarn-root-nodemanager-hw2.out
            hw3: starting nodemanager, logging to /data/hadoop-2.7.3/logs/yarn-root-nodemanager-hw3.out
            ```
5. 验证Hadoop集群
    ```
    jps
    ```
    主节点输出：
    ```
    root@hw1:/data/soft# jps
    1473 NodeManager
    1779 Jps
    884 NameNode
    998 DataNode
    1207 SecondaryNameNode
    1357 ResourceManager
    ```


6. 解压**scala**和**spark**文件到/data
    >pyspark的使用过程中，spark版本小于2.1的是不支持python3.6版本的，所以将python3.6的版本更换成小于3.6的版本。或将spark换成大于2.1版本的。  
    此例spark版本为 spark-2.4.5 和 python-3.6
    + 解压并移动spark
        ```
        cd /data/soft
        ll
        tar -zxvf spark-2.4.5-bin-hadoop2.7.tgz
        mv spark-2.0.0-bin-hadoop2.7 /data/spark-2.4.5
        cd /data/
        ```
    + 解压并移动scala
        ```
        cd /data/soft
        ll
        tar -zxvf scala-2.12.10.tgz
        mv scala-2.12.10 /data/scala-2.12.10
        cd /data/
        ```
    + 配置scala/spark的环境变量
        ```
        vi /etc/profile
        ```
        ```
        export JAVA_HOME=/usr/local/jdk1.8
        export HADOOP_HOME=/data/hadoop-2.7.3
        export SPARK_HOME=/data/spark-2.4.5
        export SCALA_HOME=/data/scala-2.12.10
        export PATH=$PATH:$JAVA_HOME/bin:$SPARK_HOME/bin:$SCALA_HOME/bin:$HADOOP_HOME/bin:$SPARK_HOME/sbin
        ```
        ```
        source /etc/profile
        ```
        ```
        echo $HADOOP_HOME
        ```
    + 检验scala是否安装成功
        ```
        root@hw1:~# scala
        Welcome to Scala 2.12.10 (Java HotSpot(TM) 64-Bit Server VM, Java 1.8.0_77).
        Type in expressions for evaluation. Or try :help.

        scala> :quit
        ```
    + 修改spark的配置文件
        ```
        cd /data/spark-2.4.5/conf/

        mv spark-env.sh.template spark-env.sh
        mv log4j.properties.template log4j.properties
        mv slaves.template slaves
        ```
        配置文件：
        ```
        vi spark-env.sh
        ```
        加入内容：
        ```
        export JAVA_HOME=/usr/local/jdk1.8
        export SCALA_HOME=/data/scala-2.12.10
        export SPARK_MASTER_IP=ali
        export SPARK_WORKER_MEMORY=2g
        export SPARK_WORKER_CORES=1
        export SPARK_WORKER_INSTANCES=1
        ```
        部分参数解释：  
        | 参数 | 注释 |
        | - | - |
        |JAVA_HOME | 添加Java位置 |
        | SCALA_HOME | 添加Scala位置 |
        | SPARK_MASTER_IP | 设置主节点地址 |
        | SPARK_WORKER_MEMORY | 设置节点内存大小，此处为2G |
        | SPARK_WORKER_CORES | 设置节点参与计算的核心数 |
        | SPARK_WORKER_INSTANCES | 设置每台机器上运行的worker数量 |

    + 启动spark集群
        ```
        root@ali# cd /data/spark-2.4.5/sbin/
        root@ali:/data/spark-2.0.0/sbin# ./start-all.sh 
        starting org.apache.spark.deploy.master.Master, logging to /data/spark-2.0.0/logs/spark-root-org.apache.spark.deploy.master.Master-1-ali.out
        localhost: starting org.apache.spark.deploy.worker.Worker, logging to /data/spark-2.0.0/logs/spark-root-org.apache.spark.deploy.worker.Worker-1-ali.out
        ```
    + 通过spark—shell命令编写任务，并交给集群
        ```
        spark-shell --master spark://ali:7077
        ```
        参数简介：   
        ali：为主节点的主机名  
          
        计算机结果演示：    
        ```
        root@ali:/data/spark-2.0.0/sbin# spark-shell --master spark://ali:7077
        Setting default log level to "WARN".
        To adjust logging level use sc.setLogLevel(newLevel).
        20/03/25 17:28:33 WARN NativeCodeLoader: Unable to load native-hadoop library for your platform... using builtin-java classes where applicable
        20/03/25 17:28:34 WARN SparkConf: 
        SPARK_WORKER_INSTANCES was detected (set to '1').
        This is deprecated in Spark 1.0+.

        Please instead use:
        - ./spark-submit with --num-executors to specify the number of executors
        - Or set SPARK_EXECUTOR_INSTANCES
        - spark.executor.instances to configure the number of instances in the spark config.
                
        20/03/25 17:28:37 WARN ThreadLocalRandom: Failed to generate a seed from SecureRandom within 3 seconds. Not enough entrophy?
        20/03/25 17:28:39 WARN SparkContext: Use an existing SparkContext, some configuration may not take effect.
        Spark context Web UI available at http://172.16.221.44:4040
        Spark context available as 'sc' (master = spark://ali:7077, app id = app-20200325172838-0001).
        Spark session available as 'spark'.
        Welcome to
            ____              __
            / __/__  ___ _____/ /__
            _\ \/ _ \/ _ `/ __/  '_/
        /___/ .__/\_,_/_/ /_/\_\   version 2.0.0
            /_/
                
        Using Scala version 2.11.8 (Java HotSpot(TM) 64-Bit Server VM, Java 1.8.0_77)
        Type in expressions to have them evaluated.
        Type :help for more information.

        scala> 
        scala> sc.parallelize(List(1,2,3,4,5),3).map(item => item*2+" " ).collect
        [Stage 0:>                                                          (0 [Stage 0:>                                                          (0 [Stage 0:===================>                                       (1                                                                        res0: Array[String] = Array("2 ", "4 ", "6 ", "8 ", "10 ")

        scala> 
        ```

7. pyspark
    启动pyspark
    ```
    root@ali:~# pyspark
    Python 3.6.9 (default, Nov  7 2019, 10:44:02) 
    [GCC 8.3.0] on linux
    Type "help", "copyright", "credits" or "license" for more information.
    20/03/26 23:45:31 WARN NativeCodeLoader: Unable to load native-hadoop library for your platform... using builtin-java classes where applicable
    Setting default log level to "WARN".
    To adjust logging level use sc.setLogLevel(newLevel). For SparkR, use setLogLevel(newLevel).
    Welcome to
        ____              __
        / __/__  ___ _____/ /__
        _\ \/ _ \/ _ `/ __/  '_/
    /__ / .__/\_,_/_/ /_/\_\   version 2.4.5
        /_/

    Using Python version 3.6.9 (default, Nov  7 2019 10:44:02)
    SparkSession available as 'spark'.
    >>> sc.master
    'local[*]'
    >>> 
    ```
    
    + 附加修改：第一次执行./pyspark 的时候你会发现默认的是python2.X版本的，需要的是python3.6.4版本。可进行如下修改：
        + 配置环境变量
            ```
            vi ~/.bash_profile
            ```
            在末尾添加内容：`export PYSPARK_PYTHON=python3.6`
        + 使用which查看 python3 路径
            ```
            root@ali:~# which python3
            /usr/bin/python3
            ```
        + 修改spark-env.sh文件
            文件位置：
            ```
            cd /data/spark-2.0.0/conf/
            ll
            vi spark-env.sh
            ```
            在末尾添加:  
            ```
            PYSPARK_PYTHON=/usr/bin/python3
            ```
        + 启动pyspark
            ```
            root@ali:~# pyspark
            Python 3.6.9 (default, Nov  7 2019, 10:44:02) 
            ........
            ```
            从返回的第一行可以看出为 `Python 3.6.9` 版本。
    




---
    
附录：
可通过HDFS Shell进行HDFS操作
```
hdfs dfs
hdfs dfs -ls /
```
    
