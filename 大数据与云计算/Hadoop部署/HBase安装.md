# HBase安装及配置
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

1. 解压与移动
    ```
    cd /data/soft
    ll hbase-1.2.6-bin.tar.gz
    tar -zxvf hbase-1.2.6-bin.tar.gz
    mv hbase-1.2.6 /data
    ```

2. 配置环境变量(vi /etc/profile)
    ```
    export JAVA_HOME=/usr/local/jdk1.8
    export HADOOP_HOME=/data/hadoop-2.7.3
    export HIVE_HOME=/data/hive-2.3.6
    export HBASE_HOME=/data/hbase-1.2.6
    export PATH=$PATH:$JAVA_HOME/bin:$HADOOP_HOME/bin:$HIVE_HOME/bin:$HBASE_HOME/bin
    ```
    使起生效：
    ```
    source /etc/profile
    ```

3. 查看版本是否安装
    ```
    [root@hw1 data]# hbase version
    HBase 1.2.6
    Source code repository file:///home/busbey/projects/hbase/hbase-assembly/target/hbase-1.2.6 revision=Unknown
    Compiled by busbey on Mon May 29 02:25:32 CDT 2017
    From source with checksum 7e8ce83a648e252758e9dae1fbe779c9
    ```

4. 编辑hbase-env.sh  
    
    ```
    cd /data/hbase-1.2.6/conf/
    ll hbase-env.sh
    vi hbase-env.sh
    ```
    修改文件配置（2.0版本用自带zookeeper只用更改这一个即可）
    ```
    export JAVA_HOME=/usr/local/jdk1.8
    ```

5. 配置hbase-site.xml文件
    ```
    cd /data/hbase-1.2.6/conf/
    vi hbase-site.xml
    ```
    文件如下：
    ```
    <property> 
        <name>hbase.rootdir</name> <!-- HBase的数据保存在HDFS对应目录下 -->
        <value>hdfs://hw1:9000/hbase</value>
    </property> 
    <property> 
        <name>hbase.cluster.distributed</name> <!-- 是否分布式部署 -->
        <value>true</value> 
    </property> 
    <property> 
        <name>hbase.zookeeper.quorum</name> <!-- 配置ZK的地址，3个节点都启用ZooKeeper -->
        <value>hw1,hw2,hw3</value> 
    </property> 

        <property> 
        <name>dfs.replication</name> <!-- 冗余度 -->
        <value>2</value> 
    </property>

    <property> 
        <name>hbase.master.maxclockskew</name> <!-- 主节点和从节点允许的最大时间误差 -->
        <value>180000</value> 
    </property>
    　　　
    <property><!--zookooper配置、日志等的存储位置 -->
        <name>hbase.zookeeper.property.dataDir</name> 
        <value>/data/hbase/zookeeper</value>
    </property>
    ```

6. 配置regionservers文件
    ```
    cd /data/hbase-1.2.6/conf/
    vi regionservers
    ```
    删去localhost，改为：
    ```
    hw1
    hw2
    hw3
    ```
7. 传给从节点：
    ```
    cd /data
    scp -r hbase-1.2.6/ hw2:/data
    scp -r hbase-1.2.6/ hw3:/data
    ```
    再该另两台服务器的环境变量：
    ```
    vi /etc/profile

    export JAVA_HOME=/usr/local/jdk1.8
    export HADOOP_HOME=/data/hadoop-2.7.3
    export HIVE_HOME=/data/hive-2.3.6
    export HBASE_HOME=/data/hbase-1.2.6
    export PATH=$PATH:$JAVA_HOME/bin:$HADOOP_HOME/bin:$HIVE_HOME/bin:$HBASE_HOME/bin

    source /etc/profile
    ```

8. 启动HBase
    ```
    cd /data/hbase-1.2.6/bin/
    start-hbase.sh
    ```
    输出：
    ```
    [root@hw1 ~]# cd /data/hbase-1.2.6/bin/
    [root@hw1 bin]# start-hbase.sh
    hw3: starting zookeeper, logging to /data/hbase-1.2.6/bin/../logs/hbase-root-zookeeper-hw3.out
    hw2: starting zookeeper, logging to /data/hbase-1.2.6/bin/../logs/hbase-root-zookeeper-hw2.out
    hw1: zookeeper running as process 29407. Stop it first.
    master running as process 29464. Stop it first.
    hw2: starting regionserver, logging to /data/hbase-1.2.6/bin/../logs/hbase-root-regionserver-hw2.out
    hw3: starting regionserver, logging to /data/hbase-1.2.6/bin/../logs/hbase-root-regionserver-hw3.out
    hw1: starting regionserver, logging to /data/hbase-1.2.6/bin/../logs/hbase-root-regionserver-hw1.out
    hw2: Java HotSpot(TM) 64-Bit Server VM warning: ignoring option PermSize=128m; support was removed in 8.0
    hw2: Java HotSpot(TM) 64-Bit Server VM warning: ignoring option MaxPermSize=128m; support was removed in 8.0
    hw3: Java HotSpot(TM) 64-Bit Server VM warning: ignoring option PermSize=128m; support was removed in 8.0
    hw3: Java HotSpot(TM) 64-Bit Server VM warning: ignoring option MaxPermSize=128m; support was removed in 8.0
    hw1: Java HotSpot(TM) 64-Bit Server VM warning: ignoring option PermSize=128m; support was removed in 8.0
    hw1: Java HotSpot(TM) 64-Bit Server VM warning: ignoring option MaxPermSize=128m; support was removed in 8.0
    ```

9. 查看进程(含有HRegionServer和HMaster)
    ```
    [root@hw1 bin]# jps
    29603 HRegionServer
    1059 WrapperSimpleApp
    14805 NameNode
    29928 Jps
    29464 HMaster
    14990 SecondaryNameNode
    29407 HQuorumPeer
    12383 ResourceManager
    ```
    有 HMaster、HRegionServer 两个进程成功

10. 进入hbase
    ```
    hbase shell
    ```



