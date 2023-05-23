## 安装Oracle 12c -Oracle12c

### 一、 Linux下Oracle 12c数据库的安装 
1. 操作系统软硬件检查   
    **系统必须满足以下最低硬件要求**：

    |序号|需求|最低值|
    |-|-|-|
    |1|物理内存（RAM）    |   512兆字节|
    |2|交换空间    |    1 GB或两倍于RAM, 在具有2 GB或更大RAM的系统上，交换空间可以是RAM大小的一到两倍。|
    |3|磁盘空间在 /tmp|400兆字节|
    |4|软件文件的磁盘空间|2 GB 该值包括从Companion CD 安装Oracle数据库10 g产品所需的1 GB磁盘空间（可选，但建议）。|
    |5|数据库文件的磁盘空间|1.2 GB|

    ---

    1. 内存要求  
        要确定物理RAM的大小 
        查询命令：
        ```
        [root@dblib ~]# grep MemTotal /proc/meminfo 
        MemTotal:        1881700 kB
        ```
        最小值为1 GB 内存，建议值为2 GB of RAM 或者更多   
    2. 要确定已配置交换空间的大小
        请输入以下命令：
        ```
        [root@dblib /]# grep SwapTotal /proc/meminfo
        SwapTotal:       4194300 kB
        ```
        设置swap参考博文: https://blog.csdn.net/Gordo_Li/article/details/104942768
    3. /tmp空间至少1GB   
        查询命令：`# df -h /tmp`，Oracle安装目录中的/oradata目录用来存放数据文件，/tmp目录是根文件系统的一部分，而图中查询结果显示根目录还剩余48G，满足条件。 
        ```
        [root@dblib ~]# df -h /tmp
        文件系统        容量  已用  可用 已用% 挂载点
        /dev/vda1        40G  6.7G   31G   18% /
        ```
        如果/tmp目录中的可用磁盘空间少于1 GB，请完成以下步骤之一：  
        + 从/tmp目录中删除不需要的文件，以满足磁盘空间要求。
        + 设置用户环境时，请设置TMP和TMPDIR环境变量oracle。
        + 扩展包含/tmp目录的文件系统。如有必要，请与系统管理员联系以获取有关扩展文件系统的信息。



    4. 系统内核版本 
        + 查询系统位数命令：
            ```
            [root@dblib ~]# uname -m
            x86_64
            ```   
            如果看不到预期的输出(x86_64)，则无法在该系统上安装软件。
        + 查询系统版本命令：
            ```
            [root@dblib ~]# cat /proc/version
            Linux version 3.10.0-1062.1.1.el7.x86_64 (mockbuild@kbuilder.bsys.centos.org) (gcc version 4.8.5 20150623 (Red Hat 4.8.5-39) (GCC) ) #1 SMP Fri Sep 13 22:55:44 UTC 2019
            ```
            或`cat /etc/redhat-release`或`lsb_release -id`  
        + 查询系统内核版本：
            ```
            [root@dblib ~]# uname -r
            3.10.0-1062.1.1.el7.x86_64
            ```
    5. 磁盘空间要求   
        Linux x86-64上每种安装类型的**软件文件**和**数据文件**的磁盘空间要求：
        |安装类型   |	软件文件要求（GB）|
        |-|-|
        |企业版 | 4.7|
        |标准版	| 4.6|

        |安装类型   |	数据文件要求（GB）|
        |-|-|
        |企业版	| 1.7|
        |标准版 | 1.5|
        用来安装的Oracle 12c对应版本的目录硬盘保留量至少满足上面的要求，一般情况下，这个都不是问题，如果有疑问，可以用df -h命令查询一下目录所在的硬盘空间使用情况。 
        ```
        [root@dblib ~]# df -h
        文件系统        容量  已用  可用 已用% 挂载点
        devtmpfs        909M     0  909M    0% /dev
        tmpfs           919M     0  919M    0% /dev/shm
        tmpfs           919M  8.6M  911M    1% /run
        tmpfs           919M     0  919M    0% /sys/fs/cgroup
        /dev/vda1        40G  6.5G   31G   18% /
        tmpfs           184M     0  184M    0% /run/user/0
        ```

2. 安装Oracle所需软件包
    ```
    yum  install  binutils  -y
    yum  install  compat-libcap1  -y
    yum  install  compat-libstdc++-33  -y
    yum  install  compat-libstdc++-33.i686  -y
    yum  install  glibc  -y
    yum  install  glibc.i686  -y
    yum  install  glibc-devel  -y
    yum  install  glibc-devel.i686  -y
    yum  install  ksh  -y
    yum  install  libaio  -y
    yum  install  libaio.i686  -y
    yum  install  libaio-devel  -y
    yum  install  libaio-devel.i686  -y
    yum  install  libX11  -y
    yum  install  libX11.i686  -y
    yum  install  libXau  -y
    yum  install  libXau.i686  -y
    yum  install  libXi  -y
    yum  install  libXi.i686  -y
    yum  install  libXtst  -y
    yum  install  libXtst.i686  -y
    yum  install  libgcc  -y
    yum  install  libgcc.i686  -y
    yum  install  libstdc++  -y
    yum  install  libstdc++.i686  -y
    yum  install  libstdc++-devel  -y
    yum  install  libstdc++-devel.i686  -y
    yum  install  libxcb  -y
    yum  install  libxcb.i686  -y
    yum  install  make  -y
    yum  install  nfs-utils  -y
    yum  install  net-tools  -y
    yum  install  smartmontools  -y
    yum  install  sysstat  -y
    yum  install  unixODBC  -y
    yum  install  unixODBC-devel  -y
    yum  install  gcc-c++ -y
    ```

3. 创建所需的操作系统组和用户  
    如果要安装Oracle数据库，则需要以下本地操作系统组和用户：  
    + Oracle库存管理组（通常为oinstall）
    + OSDBA组（通常为dba）
    + Oracle软件所有者（通常为oracle）
    + OSOPER组（可选。通常为oper）

    **操作步骤**：  
    要确定这些组和用户是否存在，并在必要时创建它们，请按照下列步骤操作：

    1. 要确定该`oinstall`组是否存在，请输入以下命令：
        ```
        ＃ more /etc/oraInst.loc
        ```
        如果此命令的输出显示`oinstall`组名，则该组存在。

        如果`oraInst.loc`文件存在，则此命令的输出类似于以下内容：
        ```
        inventory_loc=/u01/app/oraInventory
        inst_group=oinstall
        ```
        该inst_group参数显示Oracle清单组的名称`oinstall`。

    2. 要确定该dba组是否存在，请输入以下命令：
        ```
        ＃grep dba /etc/group
        ```
        如果此命令的输出显示dba组名，则该组存在。

    3. 如有必要，输入以下命令来创建oinstall和dba组：
        ```
        ＃/usr/sbin/groupadd oinstall 
        ＃/usr/sbin/groupadd dba
        ```
    4. 要确定oracle用户是否存在并属于正确的组，请输入以下命令：
        ```
        ＃id oracle
        ```
        如果oracle用户存在，则此命令显示有关用户所属组的信息。输出应类似于以下内容，指示这oinstall是主要组，dba是次要组：
        ```
        uid=440(oracle) gid=200(oinstall) groups=201(dba),202(oper)
        ```
    5. 如有必要，请完成以下操作之一：  
        + 如果oracle用户存在，但其主要组不存在oinstall或不是该dba组的成员，则输入以下命令：
            ```
            ＃/usr/sbin/usermod -g oinstall -G dba oracle
            ```
        + 如果oracle用户不存在，请输入以下命令来创建它：
            ```
            ＃/usr/sbin/useradd -g oinstall -G dba oracle
            ```
        此命令创建oracle用户并指定oinstall为主要组和dba次要组。

    6. 输入以下命令来设置oracle用户密码：
        ```
        ＃passwd oracle
        ```

4. 配置内核参数和资源限制  
    + 验证下表中显示的内核参数设置为大于或等于所示最小值的值。  
        编辑`/etc/sysctl.conf`文件，并添加或编辑类似于以下内容的行:
        ```
        fs.file-max  =  6815744
        kernel.sem  =  250  32000  100  128
        kernel.shmmni  =  4096
        kernel.shmall  =  1073741824
        kernel.shmmax  =  4398046511104
        kernel.panic_on_oops  =  1
        net.core.rmem_default  =  262144
        net.core.rmem_max  =  4194304
        net.core.wmem_default  =  262144
        net.core.wmem_max  =  1048576
        net.ipv4.conf.all.rp_filter  =  2
        net.ipv4.conf.default.rp_filter  =  2
        fs.aio-max-nr  =  1048576
        net.ipv4.ip_local_port_range  =  9000  65500
        ```
        输入以下命令来更改内核参数的当前值：
        ```
        /sbin/sysctl -p
        ```
        输入命令`/sbin/sysctl -a`以确认值设置正确
    
    + 检查Oracle软件安装用户的资源限制  
        编辑`/etc/security/limits.conf`文件，并添加或编辑类似于以下内容的行:
        ```
        oracle      soft      nofile        1024
        oracle      hard      nofile        65536
        oracle      soft      nproc        16384
        oracle      hard      nproc        16384
        oracle      soft      stack        10240
        oracle      hard      stack        32768
        oracle      hard      memlock        134217728
        oracle      soft      memlock        134217728
        ```

    + 编辑登录配置文件  
        编辑`/etc/pam.d/login`文件，并添加或编辑类似于以下内容的行:
        ```
        session required pam_limits.so
        ```
    + Oracle用户环境变量配置   
        编辑`/etc/profile`文件，并添加或编辑类似于以下内容的行:
        ```
        if  [  $USER  =  "oracle"  ];  then    
            if  [  $SHELL  =  "/bin/ksh"  ];  then    
                ulimit  -p  16384    
                ulimit  -n  65536    
            else    
                ulimit  -u  16384  -n  65536    
            fi    
        fi   
        ```
        编辑`/home/oracle/.bash_profile`文件，并添加或编辑类似于以下内容的行:
        ```
        export ORACLE_BASE=/u02/app/oracle  
        export ORACLE_HOME=$ORACLE_BASE/product/12.2.0/db_1  
        export ORACLE_SID=orcl  
        export PATH=$ORACLE_HOME/bin:$PATH    
        ```
        生效配置文件:
        ```
        source .bash_profile 
        ```
    + 配置修改/etc/hosts文件
        编辑`/etc/hosts`文件，并添加或编辑类似于以下内容的行:
        ```
        10.200.11.22 hostname(根据自己的IP和主机名)
        ```

5. 设置权限
    ```
    chown -R oracle:oinstall /u01
    chown -R oracle:oinstall /u02
    ```

6. 安装Oracle
    + 解压压缩包,并移动到/u01：  
        **此处是在root用户下操作**
        ```shell
        [root@huaweicloud ~]# unzip linuxx64_12201_database.zip
        [root@huaweicloud ~]# ls
        database  linuxx64_12201_database.zip
        [root@huaweicloud ~]# mv  database/ /u01/
        ```
    + 进入图形化操作：  
        **在oracle用户下操作**
        ```shell
        [oracle@huaweicloud database]$ cd /u01/database
        [oracle@huaweicloud database]$ ls
        install  response  rpm  runInstaller  sshsetup  stage  welcome.html
        [oracle@huaweicloud database]$ 
        [oracle@huaweicloud database]$ ./runInstaller 
        正在启动 Oracle Universal Installer...
        检查临时空间: 必须大于 500 MB。   实际为 20643 MB    通过
        检查交换空间: 必须大于 150 MB。   实际为 4095 MB    通过
        ......
        ```
        
        **图形化操作查看附件文件夹**:/oracle界面选项操作/1.1~1.11
    
    + 创建数据库
        使用dbca工具：
        ```shell
        [oracle@huaweicloud ~]$ dbca
        ```
        **图形化操作查看附件文件夹**:/oracle界面选项操作/2.1~2.14
        



6. 出现？？？？？？
    ```sql
    alter session set NLS_LANGUAGE ='ENGLISH'; 
    alter session set NLS_DATE_LANGUAGE ='ENGLISH'; 
    alter session set NLS_TIMESTAMP_FORMAT ='DD-MON-RR HH.MI.SSXFF AM'; 
    alter session set NLS_TIMESTAMP_TZ_FORMAT ='DD-MON-RR HH.MI.SSXFF AM'; 
    ````

7. bash: sqlplus: 未找到命令...
    ```shell
    su oracle
    cd ~

    vi .bash_profile
    export ORACLE_HOME=/u02/app/oracle/product/12.2.0/db_1
    export PATH=$ORACLE_HOME/bin:$PATH


    source .bash_profile
    sqlplus / as sysdba
    ```