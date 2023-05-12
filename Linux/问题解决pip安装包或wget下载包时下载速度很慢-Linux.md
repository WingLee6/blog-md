# 问题解决：pip安装包或wget下载包时下载速度很慢-Linux.md 

### **问题描述**  
使用wget命令下载软件包时，下载速度远远小于带宽大小.

### **问题原因**
pip官方网站是用https来访问的，每次使用pip安装python第三方模块的时候，pip首先要在官网下载相应模块的源码包，然后再对其进行安装，所以需要openssl相关包。

### **处理方法**
执行以下命令，安装openssl相关包。
```
yum install openssl openssl-devel
```
