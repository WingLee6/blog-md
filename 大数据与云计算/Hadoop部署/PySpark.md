## PySpark

## PySpark简介
&ensp; &ensp; 

### 一、安装Python   
&ensp; &ensp; 系统已经默认安装了python, 也可可以自行安装Anaconda;      

**注**:  
&ensp; &ensp; 如果启动PySpark不成功，在命令行中输入python也不成功，但输入python3成功的话，说明spark中默认的是python3，而不是python。  
&ensp; &ensp; 但pyspark中使用python命令执行代码，因而需要把python3重命名为python。输入which命令(如`$ which python3`)找到python3的执行文件目录，为/usr/bin/python3。我们可以输入 `$ sudo mv /usr/bin/python3 /usr/bin/python` 来进行重命名。 

### 二、启动PySpark的客户端  
    执行命令：
    ```
    $ pyspark --master spark://ali:7077
    ```
    注释：本文中命令中`ali`为服务器的hostname

1. PySpark启动的三种模式
    | 模式 | 简介 | 
    | - | - |
    | local | 单机运行下的开发测试 |
    | standalone | 构建一个由Master+Slaves构建的Spark集群|
    | yarn | 以客户端或集群模式连接到yarn集群 |
    | mesos | 连接到指定的Mesos集群 |

2. PySparkq启动模式
    | 序号| 参数 | 说明 | 
    | - | - | - |
    | 1 | local[k] | 使用 k 个Worker线程本地化运行Spark |
    | 2 | local[*] | 使用 k 个Worker线程本地化运行Spark(这里k自动设置为机器的CPU核数)**（默认）** |
    | 3 | spark://HOST:PORT | 连接指定的Spark集群（Spark standalone cluster)master. 必须使用master所配置的接口，默认端口7077，如spark://10.200.11.22:7077 |
    
    + 启动方式 1 示例：
        ```
        root@ali:~# pyspark --master local[2]
        Python 2.7.17 (default, Nov  7 2019, 10:07:09) 
        ..........
        Welcome to
            ____              __
            / __/__  ___ _____/ /__
            _\ \/ _ \/ _ `/ __/  '_/
        /__ / .__/\_,_/_/ /_/\_\   version 2.0.0
            /_/

        Using Python version 2.7.17 (default, Nov  7 2019 10:07:09)
        SparkSession available as 'spark'.
        >>> sc.master
        u'local[2]'
        >>> 
        ```  
    + 启动方式 2 示例：
        ```
        root@ali:~# pyspark
        Python 2.7.17 (default, Nov  7 2019, 10:07:09)  
        ...........
        >>> sc.master
        u'local[*]'
        >>> 
        ```
    + 启动方式 3 示例：
        先启动spark
        ```
        cd /data/spark-2.0.0/sbin/
        ./start-all.sh 
        
        root@ali:/data/spark-2.0.0/sbin# jps
        1473 NodeManager
        2930 Master
        3011 Worker
        884 NameNode
        998 DataNode
        1207 SecondaryNameNode
        4874 Jps
        1357 ResourceManager
        ```
        看到 Master 和 Worker 已经启动；  
        启动pyspark
        ```
        pyspark --master spark://ali:7077

        >>> sc.master
        u'spark://ali:7077'
        >>> 
        ```

3. Jupyter Notebook 远程连接  
    Jupyter Notebook 是一个基于Web 的交互编程环境，支持多种编程语言。使用他来替代命令行交互编程可以获得更好的编程体验。  
    >注：  
    1.如果在阿里云服务器可跳过下面的1、2两个步骤；  
    2.pip3安装见文末附录；

    1.	配置 Python 依赖包的源，Python使用pip 来下载依赖的包。但是原有的下载源下载资源太慢，这里我们改用清华大学的安装源。
        ```
	    mkdir ~/.pip/
	    vi ~/.pip/pip.conf
        ```
    2.	在 pip.conf 文件里面输入以下内容，修改源为清华大学源。
        ```
        [global]
        index-url = https://pypi.tuna.tsinghua.edu.cn/simple
        [install]
        trusted-host = pypi.tuna.tsinghua.edu.cn
        ```
    3. pip3安装 notebook ipython、findspark  
        ```
        pip3 install notebook
        pip3 install findspark
        pip3 install ipython
        ```
        > 注意事项1:   
        如果你的Python为Python3.5。因为安装 ipython 版本和 Python3.5 不兼容，所以卸载自带 ipython，安装7.9.0版本。命令如下`pip3 uninstall ipython`和`pip3 install ipython==7.9.0`  
        注意事项2:  
        pyspark的使用过程中，spark版本小于2.1的是不支持python3.6版本的，所以将python3.6的版本更换成小于3.6的版本。或将spark换成大于2.1版本的。

4. 设置Jupyter Notebook远程访问
    + 生成配置文件
        ```
        $ jupyter notebook --generate-config
        Writing default config to: /root/.jupyter/jupyter_notebook_config.py
        ```
    + 生成一个密文密码
        ```
        $ jupyter console
        Jupyter console 5.2.0
        
        In [1]: from IPython.lib import passwd
        
        In [2]: passwd()
        Enter password:
        Verify password:
        Out[2]: 'sha1:e16f8ee37c2d:32b310c2505bd268a408a703ada17b7c0181c5f7'
        
        In [3]: exit
        Shutting down kernel
        ```
    + 修改默认配置文件
        ```
        $ vi /root/.jupyter/jupyter_notebook_config.py
        ```
        添加内容
        ```
        c.NotebookApp.password = 'sha1:8ec7fcc02980:602da7dfb19471d90c40c9a44cabdb4d4a9ed877'
        c.NotebookApp.ip='*'#×允许任何ip访问
        c.NotebookApp.open_browser = False
        c.NotebookApp.port =8888 #可自行指定一个端口, 访问时使用该端口
        c.NotebookApp.allow_root =True
        ```
    + 如果是阿里云等云服务器需要去服务器的安全组开放相关端口  
        参考配置如下：
        |选项|配置内容|
        |-|-|
        |网卡类型|内网|
        |规则方向|入方向|
        |协议类型|允许|
        |授权策略|自定义TCP|
        |端口范围|8888/8888|
        |优先级|1|
        |授权类型|IPv4地址段访问|
        |授权对象|0.0.0.0/0|
        
    + 启动Jupyter Notebook
        ```
        root@ali:~# jupyter notebook --allow-root
        [W 00:15:42.349 NotebookApp] WARNING: The notebook server is listening on all IP addresses and not using encryption. This is not recommended.
        [I 00:15:42.353 NotebookApp] Serving notebooks from local directory: /root
        [I 00:15:42.354 NotebookApp] The Jupyter Notebook is running at:
        [I 00:15:42.354 NotebookApp] http://ali:8888/
        [I 00:15:42.354 NotebookApp] Use Control-C to stop this server and shut down all kernels (twice to skip confirmation).
        ......
        ```
        打开本地浏览器输入网站：http://服务IP:8888/

    + 启动PySpark，查看是否能够启动 Jupyter Notebook
        ```
        root@ali:~# pyspark
        [W 00:23:26.972 NotebookApp] WARNING: The notebook server is listening on all IP addresses and not using encryption. This is not recommended.
        [I 00:23:26.976 NotebookApp] Serving notebooks from local directory: /root
        [I 00:23:26.976 NotebookApp] The Jupyter Notebook is running at:
        [I 00:23:26.976 NotebookApp] http://ali:8888/
        [I 00:23:26.977 NotebookApp] Use Control-C to stop this server and shut down all kernels (twice to skip confirmation).
        ......
        ```
        打开本地浏览器输入网站：http://服务IP:8888/
    


附录：

安装pip3:
```
wget https://bootstrap.pypa.io/get-pip.py

sudo apt-get update

sudo apt-get install python3-distutils

sudo python3 get-pip.py

apt-get install -y pip-python3 
```

安装pip2:
```
wget https://bootstrap.pypa.io/get-pip.py

sudo apt-get update

sudo python get-pip.py
```



