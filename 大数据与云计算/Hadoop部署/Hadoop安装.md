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
    将该文件**分别**传给另外两台服务器，并解压缩：
    ```
    scp /data/soft.tar.gz root@IP地址:/data
    ```


1. 更改主机名（hostname)
    为了便于操作，将三台华为云服务器主机名更改为hw1\hw2\hw3  
    对三台服务器分别操作：
    ```
    hostnamectl set-hostname newname
    ```
    然后重启（init 0）即可

2. 建立集群登陆  
    + ‘ssh+主机名’登陆
        1. 更改hosts文件
            ```
            vi /etc/hosts
            ```
        2. 在最后添加（服务器的内网IP和对应主机名），保存退出（wq!)
            ```
            192.168.9.238 hw1
            192.168.11.191 hw2
            192.168.13.209 hw3
            ```
        3. 然后即可通过 ssh hw2 来登陆第二台服务器。但是还是需要密码
        4. 对另外两台
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
            ssh-copy-id hw2
            ssh-copy-id hw3
            ```
    + 在另两台服务器，重复上面【‘ssh+主机名’登陆】和【免密登陆】操作
        1. ······省略
        2. 验证是否成功：
            在三台服务器上分别跑下面代码：
            ```
            date;ssh hw1 date;ssh hw2 date;ssh hw3
            ```
        3. 将软件包传给另外两台服务器,并解压缩：
            ```
            scp /data/soft.tar.gz hw2:/data
            scp /data/soft.tar.gz hw3:/data
            ```
3. 安装JDK  
    &ensp; 「三台服务器一起操作」
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
    &ensp; 「先只对主节点（hw1）操作」
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
                    <value>hdfs://hw1:9000</value>  # 主节点hw1
                </property>
                <property>
                    <name>hadoop.tmp.dir</name>
                    <value>/data/hadoop-2.7.3/current/tmp</value> # 目录地址：/data/hadoop-2.7.3/ 后面子目录会字典生成
                </property>
                <property>
                    <name>fs.trash.interval</name>
                    <value>4320</value>
                </property>
            </configuration>
            ```
        2. vi hdfs-site.xml 
            ```
            <configuration>
                <property>
                    <name>dfs.namenode.name.dir</name>
                    <value>/data/hadoop-2.7.3/current/dfs/name</value>
                </property>
                <property>
                    <name>dfs.datanode.data.dir</name>
                    <value>/data/hadoop-2.7.3/current/data</value>
                </property>
                <property>
                    <name>dfs.replication</name>
                    <value>3</value>        # 3个节点
                </property>
                <property>
                    <name>dfs.webhdfs.enabled</name>
                    <value>true</value>
                </property>
                <property>
                    <name>dfs.permissions.superusergroup</name>
                    <value>staff</value>
                </property>
                <property>
                    <name>dfs.permissions.enabled</name>
                <   value>false</value>
                </property>
            <configuration>
            ```
        3. vi yarn-site.xml

            ```
            <configuration>

            <!-- Site specific YARN configuration properties -->

                <property>
                    <name>yarn.resourcemanager.hostname</name>
                    <value>hw1</value>
                </property>
                <property>
                    <name>yarn.nodemanager.aux-services</name>
                    <value>mapreduce_shuffle</value>
                </property>
                <property>
                    <name>yarn.nodemanager.aux-services.mapreduce.shuffle.class</name>
                    <value>org.apache.hadoop.mapred.ShuffleHandler</value>
                </property>
                <property>
                    <name>yarn.resourcemanager.address</name>
                    <value>hw1:18040</value>
                </property>
                <property>
                    <name>yarn.resourcemanager.scheduler.address</name>
                    <value>hw1:18030</value>
                </property>
                <property>
                    <name>yarn.resourcemanager.resource-tracker.address</name>
                    <value>hw1:18025</value>
                </property> 
                <property>
                    <name>yarn.resourcemanager.admin.address</name>
                    <value>hw1:18141</value>
                </property>
                <property>
                    <name>yarn.resourcemanager.webapp.address</name>
                    <value>hw1:18088</value>
                </property>
                <property>
                    <name>yarn.log-aggregation-enable</name>
                    <value>true</value>
                </property>
                <property>
                    <name>yarn.log-aggregation.retain-seconds</name>
                    <value>86400</value>
                </property>
                <property>
                    <name>yarn.log-aggregation.retain-check-interval-seconds</name>
                    <value>86400</value>
                </property>
                <property>
                    <name>yarn.nodemanager.remote-app-log-dir</name>
                    <value>/tmp/logs</value>
                </property>
                <property>
                    <name>yarn.nodemanager.remote-app-log-dir-suffix</name>
                    <value>logs</value>
                </property>
            </configuration>
            ```

        4. vi mapred-site.xml  
            先重命名操作：
            ```
            cp mapred-site.xml.template  mapred-site.xml
            vi mapred-site.xml
            ```
            配置：
            ```
            <configuration>
                <property>
                    <name>mapreduce.framework.name</name>
                    <value>yarn</value>
                </property>
                <property>
                    <name>mapreduce.jobtracker.http.address</name>
                    <value>hw1:50030</value>
                </property>
                <property>
                    <name>mapreduce.jobhisotry.address</name>
                    <value>hw1:10020</value>
                </property>
                <property>
                    <name>mapreduce.jobhistory.webapp.address</name>
                    <value>hw1:19888</value>
                </property>
                <property>
                    <name>mapreduce.jobhistory.done-dir</name>
                    <value>/jobhistory/done</value>
                </property>
                <property>
                    <name>mapreduce.intermediate-done-dir</name>
                    <value>/jobhisotry/done_intermediate</value>
                </property>
                <property>
                    <name>mapreduce.job.ubertask.enable</name>
                    <value>true</value>
                </property>
            </configuration>
            ```
        5. vi slaves  
            删除localhost，改为两个从节点的名字（hw2/hw3）：
            ```
            hw2
            hw3
            ```
        6. vi hadoop-env.sh
            ```
            echo $JAVA_HOME
            ```
            把环境变量加上去：
            ```
            export JAVA_HOME=/usr/local/jdk1.8
            ```
        7. vi yarn-env.sh
            ```
            echo $JAVA_HOME
            ```
            找到下面一行：
            ```
            # export JAVA_HOME=/home/y/libexec/jdk1.6.0/
            ```
            改为：
            ```
            export JAVA_HOME=/usr/local/jdk1.8
            ```
        7. 将另两个服务器，完成到解压移动（hadoop目录）：
            ```
            cd /data/soft
            tar -zxvf hadoop-2.7.3.tar.gz 
            mv hadoop-2.7.3 /data/
            ```
        8. 传输配置好的文件到另两台服务器：
            ```
            cd /data/hadoop-2.7.3/etc/hadoop
            scp * hw2:/data/hadoop-2.7.3/etc/hadoop
            scp * hw3:/data/hadoop-2.7.3/etc/hadoop
            ```
        9. vi /etc/profile
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
            在另外两台服务器上**也执行 10 操作**
        10. 格式化Hadoop
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
    主节点输出(要含有SecondaryNameNode、NameNode和ResourceManager）：
    ```
    [root@hw1 hadoop]# jps
    1059 WrapperSimpleApp
    14805 NameNode
    15174 Jps
    14990 SecondaryNameNode
    12383 ResourceManager
    ```
    从节点输出(要含有NodeManager、DataNode）：
    ```
    [root@hw2 hadoop]# jps
    1250 WrapperSimpleApp
    12546 NodeManager
    12650 Jps
    12445 DataNode
    ```
---
    
附录：
可通过HDFS Shell进行HDFS操作
```
hdfs dfs
hdfs dfs -ls /
```
    
