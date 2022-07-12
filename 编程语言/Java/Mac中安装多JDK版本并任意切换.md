Mac中安装JDK多版本并任意切换

1. 首先区官网下载JDK8和JDK11安装包，安装后打开/etc/profile
    查看安装的版本：
    ```
    $ cd /Library/Java/JavaVirtualMachines
    $ ls -al
    total 0
    drwxr-xr-x  5 root  wheel  160  3 27 09:59 .
    drwxr-xr-x  4 root  wheel  128 11  1 08:51 ..
    drwxr-xr-x  3 root  wheel   96 11  1 08:51 jdk-13.0.1.jdk
    drwxr-xr-x  3 root  wheel   96  3 19 10:20 jdk-14.jdk
    drwxr-xr-x  3 root  wheel   96  3 27 09:59 jdk1.8.0_241.jdk
    ```
    这里我安装了三个JDK版本分别为java-1.8、java-13、java-14。  
    更改配置文件：
    ```
    sudo vi /etc/profile
    ```
    添加内容：  
    ```
    export JAVA_8_HOME="$(/usr/libexec/java_home -v 1.8)"
    export JAVA_13_HOME="$(/usr/libexec/java_home -v 13)"
    export JAVA_14_HOME="$(/usr/libexec/java_home -v 14)"
    alias jdk8='export JAVA_HOME=$JAVA_8_HOME'
    alias jdk13='export JAVA_HOME=$JAVA_13_HOME'
    alias jdk14='export JAVA_HOME=$JAVA_14_HOME'
    export JAVA_HOME=$JAVA_8_HOME   
    ```
    激活环境配置：  
    ```
    source /etc/profile
    ```

2. 切换版本示例
    ```
    $ java -version
    java version "1.8.0_241"
    Java(TM) SE Runtime Environment (build 1.8.0_241-b07)
    Java HotSpot(TM) 64-Bit Server VM (build 25.241-b07, mixed mode)
    $ 
    $ jdk13
    $ java -version
    java version "13.0.1" 2019-10-15
    Java(TM) SE Runtime Environment (build 13.0.1+9)
    Java HotSpot(TM) 64-Bit Server VM (build 13.0.1+9, mixed mode, sharing)
    $ 
    $ jdk14
    $ java -version
    java version "14" 2020-03-17
    Java(TM) SE Runtime Environment (build 14+36-1461)
    Java HotSpot(TM) 64-Bit Server VM (build 14+36-1461, mixed mode, sharing)
    $ 
    ```