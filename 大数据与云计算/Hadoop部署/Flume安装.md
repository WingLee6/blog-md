# Flume 安装与部署
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
    从官网下载（http://flume.apache.org/download.html/）
    ```
    cd /data/soft/
    wget http://www.apache.org/dyn/closer.lua/flume/1.9.0/apache-flume-1.9.0-bin.tar.gz
    ll
    tar -zxvf apache-flume-1.9.0-bin.tar.gz
    mv apache-flume-1.9.0-bin /data/flume-1.9.0
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
    export FLUME_HOME=/data/flume-1.9.0
    export PIG_HOME=/data/pig-0.17.0
    export PATH=$PATH:$JAVA_HOME/bin:$HADOOP_HOME/bin:$HIVE_HOME/bin:$HBASE_HOME/bin:$FLUME_HOME/bin:$PIG_HOME/bin

    source /etc/profile
    ```

3. 测试是否安装成功
    ```
    [root@hw1 data]# flume-ng version
    Flume 1.9.0
    Source code repository: https://git-wip-us.apache.org/repos/asf/flume.git
    Revision: d4fcab4f501d41597bc616921329a4339f73585e
    Compiled by fszabo on Mon Dec 17 20:45:25 CET 2018
    From source with checksum 35db629a3bda49d23e9b3690c80737f9
    ```

