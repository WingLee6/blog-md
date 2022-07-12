# 报错'bash command not found'

1. centOS 7
    > CentOS 7 不支持 32位 EPEL 存储库，所以用，RHEL/CentOS 6 32位的。
    ```
    wget http://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm
    ```
    ```
    rpm -ivh epel-release-latest-7.noarch.rpm
    ```
    ```
    yum install -y git
    ```

2. centOS 6
    ```
    get http://dl.fedoraproject.org/pub/epel/6/i386/epel-release-6-8.noarch.rpm
    ```
    ```
    rpm -ivh epel-release-6-8.noarch.rpm
    ```
     ```
    yum install -y git
    ```