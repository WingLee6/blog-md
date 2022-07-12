# Kettle的下载与安装与Spoon的启动

1. Kettle下载
    https://community.hitachivantara.com/s/article/data-integration-kettle

    下载压缩包文件名为：pdi-ce-8.3.0.0-371.zip  
    
2. Spoon的启动  
    首先，解压压缩包；  
    然后根据电脑OS分别为Windows、Mac OS和Linux桌面版进行下面操作：

    + **针对Windows：**  
    &ensp;&ensp;对于Windows，请确保将您的计算机的适当文件复制到您的Windows系统路径(例如%WINDIR%/System32/):    
        ```
        libswt / win32 / infobright_jni_64bit.dll (Windows 64位)
        libswt / win32 / infobright_jni.dll (Windows 32位)
        ```  
        将文件重命名为:infobright_jni.dll 

    + **针对Mac OS：**  
    &ensp;&ensp; 打开终端，通过cd命令导航到该文件夹下，然后通过打开程序。  
    &ensp;&ensp; 实行命令：
        ```
        cd /Users/gordo_li/data-integration 

        ./spoon.sh
        ``` 
        或者`sh spoon.sh`也可以启动。
    ￼￼￼￼￼￼
    + **针对Linux桌面版：**  
        + Ubuntu 16.04及以后版本:  
        -需要安装libwebkitgtk包。这可以通过运行“apt-get install libwebkitgtk-1.0.0”来实现。  
        -在Ubuntu 16.04的一些安装中，Unity没有显示菜单栏。为了解决这个问题，spoon.sh有一个设置来禁用这个集成，“export UBUNTU_MENUPROXY=0”。如果您希望查看它在您的机器上是否正常工作，可以尝试删除该设置 。 
        + CentOS 6桌面:  
        -需要安装libwebkitgtk包。这可以通过运行“yum install libwebkitgtk”来实现
***
&ensp;&ensp;**具体操作可参照README.txt文件**或更博客
