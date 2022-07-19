# Docker + CentOS搭建自己的图床


<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Docker + CentOS搭建自己的图床](#docker-centos搭建自己的图床)
  - [搭建自己的图床](#搭建自己的图床)
  - [第三方图床推荐](#第三方图床推荐)

<!-- /code_chunk_output -->


## 搭建自己的图床
0. 环境简介:
    + 云服务器(阿里云/华为云学生特惠服务器)
    + CentOS操作系统
    + 云服务器可ping通过外网
    方案简介：
    + Docker
    + Lychee


1. 安装 Docker:
    ```
    yum install docker
    ```

2. 启动 Docker:
    ```
    # 启动Docker
    systemctl start docker
    # 设置开机自启
    systemctl enable docker
    ```
    查看Docker开启状态：
    ```
    systemctl status docker
    ```

3. 拉镜像: 
    ```
    docker image pull kdelfour/lychee-docker
    ```
    需要等待一刻钟左右，完成后可通过下面命令查看是否完成：
    ```
    docker image ls
    ```

4. 启动镜像:
    ```
    docker run -it -d -p 8899:80 kdelfour/lychee-docker
    ```
    参数说明：  
    + –name: 指定生成的容器的名称
    + -i: 以交互模式运行容器，保证容器中STDIN是开启的。通常与 -t 同时使用；
    + -t: 为容器重新分配一个伪tty终端，通常与 -i 同时使用；
    + -d: 后台运行容器，并返回容器ID；
    + -p: 可以指定要映射的IP和端口，但是在一个指定端口上只可以绑定一个容器。支持的格式有 hostPort:containerPort、 ip:hostPort:containerPort、 ip::containerPort。
    + kdelfour/lychee-docker是镜像名称，镜像ID也可以的
    
    查看正在运行的容器：
    ```
    docker ps
    ```

5. 本地浏览器访问:
    ```
    http://121.199.XX.XXX:8899  
    ```
    + 121.199.XX.XXX 改为你的IP地址
    + 8899 改为在上一步操作设置的端口号    
    
    **注意**：若浏览器无法访问，登陆你的服务控制台，比如我的阿里云，百度官网，知道本服务的【安全组】>【增加规则】,参考配置如下（华为云/阿里云大部分一样，端口范围等设置视自身情况更改）：
    |选项|配置内容|
    |-|-|
    |网卡类型|内网|
    |规则方向|入方向|
    |协议类型|允许|
    |授权策略|自定义TCP|
    |端口范围|8899/8899（华为云设置为：8899）|
    |优先级|1|
    |授权类型|IPv4地址段访问|
    |授权对象|0.0.0.0/0|

6. 初始化Lychee  
    &ensp; &ensp; 上一步在浏览器访问后，可以看到Database Host、Username、 Password、Data Name 和 Table predix，其中必填用户名(Username)和密码(Password),设置用户名和密码后点击【connect】
        
7. 创建图床专辑(Ablum),上传图片
    点击右上角的 ' **+** '即可进行创建上传等操作。

8. 使用示例：  
    > CSDN 使用示例2有效，VScode需要更新设置[https://code.visualstudio.com/docs/languages/markdown#_markdown-preview-security]
    + 示例1:  
        ```
        ![示例1](http://121.36.154.64:8899/uploads/medium/d03062420b620b21b2f8e93b2b028841.JPG)
        ```
        ![示例1](http://121.36.154.64:8899/uploads/medium/d03062420b620b21b2f8e93b2b028841.JPG)
    
    + 示例2:
        ```
        <img src="http://121.36.154.64:8899/uploads/medium/d03062420b620b21b2f8e93b2b028841.JPG"/>
        ```
        <img src="http://121.36.154.64:8899/uploads/medium/d03062420b620b21b2f8e93b2b028841.JPG"/>




## 第三方图床推荐

0. 较全的图床合集介绍：
    + https://zhuanlan.zhihu.com/p/81713842
1. 开源图床工具 PicGo
    + 各个操作系统都支持
    + 下载地址：https://github.com/Molunerfinn/PicGo/releases
    + 支持腾讯云、GitHub等大厂图床
    + 如何利用 Github 搭建自己的免费图床？：https://www.jianshu.com/p/69c122f16467





