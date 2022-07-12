# Zookeeper 安装与部署
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
    网站：
    ```
    cd /data/soft/
    wget https://mirrors.tuna.tsinghua.edu.cn/apache/zookeeper/stable/apache-zookeeper-3.5.6.tar.gz
    tar -zxvf apache-zookeeper-3.5.6.tar.gz
    mv apache-zookeeper-3.5.6 /data/zookeeper-3.5.6
    cd /data
    ll
    ```
2. 修改配置文件
    ```
    cd /data/zookeeper-3.5.6/conf/
    cp zoo_sample.cfg zoo.cfg
    vi zoo.cfg
    ```
    配置内容如下：
    ```
    # The number of milliseconds of each tick(CS通信心跳时间)
    tickTime=2000
    # The number of ticks that the initial
    # synchronization phase can take（LF初始通信时限）
    initLimit=10
    # The number of ticks that can pass between
    # sending a request and getting an acknowledgement（LF同步通信时限）
    syncLimit=5
    # the directory where the snapshot is stored.
    # do not use /tmp for storage, /tmp here is just
    # example sakes.（数据文件目录）
    dataDir=/data/zookeeper-3.5.6/tmp
    # the port at which the clients will connect（客户端连接端口）
    clientPort=2181
    # the maximum number of client connections.
    # increase this if you need to handle more clients
    #maxClientCnxns=60
    #
    # Be sure to read the maintenance section of the
    # administrator guide before turning on autopurge.
    #
    # http://zookeeper.apache.org/doc/current/zookeeperAdmin.html#sc_maintenance
    #
    # The number of snapshots to retain in dataDir
    #autopurge.snapRetainCount=3
    # Purge task interval in hours
    # Set to "0" to disable auto purge feature
    #autopurge.purgeInterval=1
    
    # 服务器编号、服务器地址、LF通信端口、选举端口
    server.1=hw1:2888:3888
    server.2=hw2:2888:3888
    server.3=hw3:2888:3888
    ```
    在/data/zookeeper-3.5.6/下创建/tmp目录，并在/tmp下创建一个myid文件：
    ```
    mkdir /data/zookeeper-3.5.6/tmp
    cd /data/zookeeper-3.5.6/tmp
    vi myid     # 保存并退出
    ```

3. 传给另两个服务器
    ```
    scp -r /data/zookeeper-3.5.6/ hw2:/data/zookeeper-3.5.6
    scp -r /data/zookeeper-3.5.6/ hw3:/data/zookeeper-3.5.6
    ```
    在三台机器dataDir目录（ /data/zookeeper/tmp/ 目录）下，分别生成一个myid文件，其**内容分别为1，2，3**.
    ```
    cd /data/zookeeper-3.5.6/tmp
    vi myid
    ```
    
4. 配置环境变量（三台）
    ```
    vi /etc/profile

    export JAVA_HOME=/usr/local/jdk1.8
    export HADOOP_HOME=/data/hadoop-2.7.3
    export HIVE_HOME=/data/hive-2.3.6
    export HBASE_HOME=/data/hbase-1.2.6
    export PIG_HOME=/data/pig-0.17.0
    export SQOOP_HOME=/data/sqoop-1.4.7
    export ZOOKEEPER_HOME=/data/zookeeper-3.5.6
    export PATH=$PATH:$JAVA_HOME/bin:$HADOOP_HOME/bin:$HIVE_HOME/bin:$HBASE_HOME/bin:$PIG_HOME/bin:$SQOOP_HOME/bin:$ZOOKEEPER_HOME/bin

    source /etc/profile
    ```

5. 启动
    > 若没有完全启动，尝试重启（reboot）
    + 分别在每台服务器上运行 zkServer.sh start命令
        ```
        [root@hw1 ~]# zkServer.sh start
        ZooKeeper JMX enabled by default
        Using config: /data/zookeeper-3.5.6/bin/../conf/zoo.cfg
        Starting zookeeper ... STARTED
        ```
    + 分别在三台机器执行查看状态命令(一台Mode: leader，其余为Mode: follower):
        ```
        [root@hw1 ~]# zkServer.sh status
        ZooKeeper JMX enabled by default
        Using config: /data/zookeeper-3.5.6/bin/../conf/zoo.cfg
        Client port found: 2181. Client address: localhost.
        Mode: follower

        [root@hw2 ~]# zkServer.sh status
        ZooKeeper JMX enabled by default
        Using config: /data/zookeeper-3.5.6/bin/../conf/zoo.cfg
        Client port found: 2181. Client address: localhost.
        Mode: follower

        [root@hw3 ~]# zkServer.sh status
        ZooKeeper JMX enabled by default
        Using config: /data/zookeeper-3.5.6/bin/../conf/zoo.cfg
        Client port found: 2181. Client address: localhost.
        Mode: leader
        ```
    + 查看jps（都要有QuorumPeerMain）：
        ```
        [root@hw1 ~]# jps
        7571 QuorumPeerMain
        7737 Jps
        1038 WrapperSimpleApp
        ```







