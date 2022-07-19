# 单主机MySQL自动化安装部署脚本-Linux+Centos7

## 1. 名称
单主机MySQL自动化安装部署程序
## 2. 测试环境
+ 操作系统：centos7
## 3. 操作指南
1. 将autoInstallMysql文件夹上传到服务器
（建议/root目录下或自建目录/data）
2. 脚本操作
    + ../autoInstallMysql目录下有两个脚本分别为installmysql.sh和clearmysql.sh;
    + 第一步，cd至/autoInstallMysql目录下，执行clearmysql.sh脚本,清除MySQL安装包和残余文件，确保环境纯净。
        ```shell
        sh clearmysql.sh
        ```
    + 第二步，安装MySQL。执行installmysql.sh脚本：
        ```shell
        sh installmysql.sh
        ```
    + 脚本installmysql.sh执行成功后，将显示MySQL中的数据库列表。即可通过「mysql -uroot -p」登陆到数据库，已经设置密码为：Mysql123@
    + 若部署失败，可返回第一步，再次操作，或根据报错信息自行解决。