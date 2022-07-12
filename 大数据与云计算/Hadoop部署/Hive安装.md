# Hive 安装
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

1. 前提安装MySQL

2. 解压安装包,并移动
    ```
    cd /data/soft/
    tar -zxvf apache-hive-2.3.6-bin.tar.gz
    mv apache-hive-2.3.6-bin /data/hive-2.3.6
    ```

3. 配置环境变量
    ```
    vi /etc/profile
    ```
    改为：
    ```
    export JAVA_HOME=/usr/local/jdk1.8
    export HADOOP_HOME=/data/hadoop-2.7.3
    export HIVE_HOME=/data/hive-2.3.6
    export PATH=$PATH:$JAVA_HOME/bin:$HADOOP_HOME/bin:$HIVE_HOME/bin
    ```
    使环境生效：
    ```
    source /etc/profile
    echo $HIVE_HOME
    ```

4. 配置Hive
    ```
    cd /data/hive-2.3.6/conf/
    ll
    cp hive-env.sh.template hive-env.sh
    echo $HADOOP_HOME
    vi hive-env.sh
    ```
    加入HADOOP_HOME变量:
    ```
    HADOOP_HOME=/data/hadoop-2.7.3
    ```
    拷贝hive-site配置文件:
    ```
    cp hive-default.xml.template hive-site.xml
    vi hive-site.xml
    ```
    ```
        <property>
            <name>javax.jdo.option.ConnectionURL</name>mysql
            <value>jdbc:mysql://hw1:3306/hive?createDatabaseIfNotExist=true</value>
        </property>
        <property>
            <name>javax.jdo.option.ConnectionDriver</name>mysql驱动程序
            <value>com.mysql.jdbc.Driver</value>
        </property>
        <property>
            <name>javax.jdo.option.ConnectionUserName</name>
            <value>root</value>
        </property>
        <property>
            <name>javax.jdo.option.ConnectionPassword</name>密码
            <value>Li19900819@</value>
        </property>

    ```

5. 拷贝jar包
    > 可在MySQL官网(http://central.maven.org/maven2/mysql/mysql-connector-java/)找到,下载并解压  
    >  wget http://central.maven.org/maven2/mysql/mysql-connector-java/8.0.18/mysql-connector-java-8.0.18.jar  
    > **一定要和mysql版本匹配** 
    ```
    cd /data/soft
    cp mysql-connector-java-8.0.18.jar /data/hive-2.3.6/lib
    cd /data/hive-2.3.6/lib
    ll mysql-connector-java-5.1.36-bin.jar
    ```
6. 进行元数据的初始化  
    **[如果用root用户，这一步跳过]**
    ```
    mysql -uroot -p
    use mysql;
    grant all privileges on *.* to 'root'@'%' identified by 'Li19900819@';
    flush privileges;
    ```
7. 初始化元数据
    ```
    cd /data/hive-2.3.6/bin
    ./schematool -dbType mysql -initSchema
    ```
    正常输出：
    ```
    [root@hw1 lib]# cd /data/hive-2.3.6/bin
    [root@hw1 bin]# ./schematool -dbType mysql -initSchema
    SLF4J: Class path contains multiple SLF4J bindings.
    SLF4J: Found binding in [jar:file:/data/hive-2.3.6/lib/log4j-slf4j-impl-2.6.2.jar!/org/slf4j/impl/StaticLoggerBinder.class]
    SLF4J: Found binding in [jar:file:/data/hadoop-2.7.3/share/hadoop/common/lib/slf4j-log4j12-1.7.10.jar!/org/slf4j/impl/StaticLoggerBinder.class]
    SLF4J: See http://www.slf4j.org/codes.html#multiple_bindings for an explanation.
    SLF4J: Actual binding is of type [org.apache.logging.slf4j.Log4jLoggerFactory]
    Metastore connection URL:	 jdbc:mysql://hw1:3306/hive?createDatabaseIfNotExist=true
    Metastore Connection Driver :	 org.apache.derby.jdbc.EmbeddedDriver
    Metastore connection User:	 root
    Starting metastore schema initialization to 2.3.0
    Initialization script hive-schema-2.3.0.mysql.sql
    Initialization script completed
    schemaTool completed
    ```
8. 登陆Hive
    ```
    hive
    ```

附录：
```
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<?xml-stylesheet type="text/xsl" href="configuration.xsl"?><!--
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
--><configuration>
  <!-- WARNING!!! This file is auto generated for documentation purposes ONLY! -->
  <!-- WARNING!!! Any changes you make to this file will be ignored by Hive.   -->
  <!-- WARNING!!! You must make your changes in hive-site.xml instead.         -->
  <!-- Hive Execution Parameters -->
        <property>
            <name>javax.jdo.option.ConnectionURL</name>mysql
            <value>jdbc:mysql://hw1:3306/hive?createDatabaseIfNotExist=true</value>
        </property>
        <property>
            <name>javax.jdo.option.ConnectionDriver</name>mysql驱动程序
            <value>com.mysql.jdbc.Driver</value>
        </property>
        <property>
            <name>javax.jdo.option.ConnectionUserName</name>
            <value>root</value>
        </property>
        <property>
            <name>javax.jdo.option.ConnectionPassword</name>密码
            <value>Li19900819@</value>
        </property>
</configuration>
```
