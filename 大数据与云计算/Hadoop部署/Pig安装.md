# Pig 安装与部署
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
    从官网下载（http://mirror.bit.edu.cn/apache/pig/）
    ```
    cd /data/soft/
    wget http://mirror.bit.edu.cn/apache/pig/pig-0.17.0/pig-0.17.0.tar.gz
    ll
    tar -zxvf pig-0.17.0.tar.gz
    mv pig-0.17.0 /data
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
    export PATH=$PATH:$JAVA_HOME/bin:$HADOOP_HOME/bin:$HIVE_HOME/bin:$HBASE_HOME/bin:$PIG_HOME/bin

    source /etc/profile
    ```

3. 启动  
    确保HDFS和YARN已经启动。
    + 本地模式（Local）
        ```
        cd /data/pig-0.17.0/
        pig -x local
        ```
    + MapReduce模式
        ```
        cd /data/pig-0.17.0/
        pig
        ```
