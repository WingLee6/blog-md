# MySQL 安装部署

1. 下载：
    ```
    wget https://dev.mysql.com/get/mysql80-community-release-el7-3.noarch.rpm
    ```
2. Rpm安装：
    ```
    rpm -ivh mysql80-community-release-el7-3.noarch.rpm
    ```
3. 修改mysql-community.repo：
    ```
    cd /etc/yum.repos.d/
    vi mysql-community.repo
    ```
    默认[mysql80-community]下的enabled=1，该版本为8.0版本。  
    **举例**：如果需要安装5.7版本，操作如下：  
    + 将[mysql80-community]下的 enabled 改为enabled=0  
    + 将[mysql57-community]下的 enabled 改为enabled=1  
    + 保存退出wq!
4. yum安装：
    ```
    yum install mysql-community-server.x86_64
    ```
5. 启动
    ```
    systemctl start mysqld
    ```
6. 查看状态：
    ```
    systemctl status mysqld
    ```
    显示为 active 即可