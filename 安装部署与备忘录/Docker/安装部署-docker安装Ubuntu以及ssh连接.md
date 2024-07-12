# docker安装Ubuntu及使用（ssh连接等）-Docker

## 一、 安装Docker
    https://hub.docker.com/

## 二、开始安装
1. 打开终端（cmd）：
    ```
    docker pull ubuntu
    ```
    或`docker pull ubuntu:latest`  
    等待一刻钟左右下载；

2. 查看拉取是否成功
    ```
    (base)Mac$ docker images
    REPOSITORY    TAG      IMAGE ID       CREATED      SIZE
    ubuntu      latest  4e5021d210f6  43 hours ago    64.2MB
    ```

3. 运行容器
    ```
    docker run -itd --name ubuntu-test ubuntu
    ```
    参数: 
    + **–name**: 指定生成的容器的名称 
    + **-i**: 以交互模式运行容器，保证容器中STDIN是开启的。通常与 -t 同时使用；   
    + **-t**: 为容器重新分配一个伪tty终端，通常与 -i 同时使用；   
    + **-d**: 后台运行容器，并返回容器ID；   
    + **-p**:可以指定要映射的IP和端口，但是在一个指定端口上只可以绑定一个容器。支持的格式有 hostPort:containerPort、   ip:hostPort:containerPort、 ip::containerPort。   
        *e.g.* `docker run --name ubuntu -t -i -d -p 3316:22 ubuntu`   
    + **ubuntu** 则是镜像名称，镜像ID也可以的。

4. 查看是否运行成功  
    查看正在运行的镜像
    ```
    docker ps
    ```

## 三、使用Ubuntu容器
1. 终端进入容器
    ```
    docker run -it ubuntu /bin/bash
    ```
    参数：
    + -i: 交互式操作。
    + -t: 终端。
    + ubuntu: ubuntu 镜像。
    + /bin/bash: 放在镜像名后的是命令，这里我们希望有个交互式 Shell，因此用的是 /bin/bash。
    要退出容器，直接输入 exit:
    ```
    exit
    ```

2. 执行更新
    ```
    apt-get update
    ```
    等待更新；

3. 安装ssh  
    + 安装ssh-client
        ```
        apt-get install openssh-client
        ```
    + 安装ssh-server命令
        ```
        apt-get install openssh-server
        ```
    + 安装完成后，启动服务
        ```
        /etc/init.d/ssh start
        * Starting OpenBSD Secure Shell server sshd                      [ OK ] 
        ps -e|grep ssh
        4079 ?        00:00:00 sshd
        ```
    + 编辑sshd_config文件  
        需要先安装vim编辑器
        ```
        apt-get install vim
        apt-get install vi
        ```
        编辑sshd_config文件
        ```
        root@ubuntu:/# vi /etc/ssh/sshd_config
        ```
        将 `#PermitRootLogin prohibit-password` 改为 `PermitRootLogin yes`，wq!保存退出
    + 重启ssh服务
        ```
        root@ubuntu:/# service ssh restart
        ```
4. 设置ssh密码  
    ```
    root@ubuntu:/# passwd root
    ```
    
5. 查看容器的IP
    先安装net-tools工具包
    ```
    root@ubuntu:/# apt-get install net-tools
    ```
    查看IP
    ```
    root@ubuntu:/# ifconfig
    ```
6. 退出容器，并保存修改  
    退出容器，直接输入 exit:
    ```
    root@ubuntu:/# exit
    ```
    保存`docker commit [容器ID/容器名]`, 例：
    ```
    docker commit ubuntu-test 
    ```

附：
1. 启动已停止运行的容器
    ```
    docker ps -a
    ```
    使用 docker start 启动一个已停止的容器：
    ```
    docker start b750bbbcfd88
    ```
    b750bbbcfd88 为容器ID

2. 后台运行  
    在大部分的场景下，我们希望 docker 的服务是在后台运行的，我们可以过 -d 指定容器的运行模式。
    ```
    docker run -itd --name ubuntu-test ubuntu /bin/bash
    ```
    注：加了 -d 参数默认不会进入容器，想要进入容器需要使用指令 docker exec（下面会介绍到）。

3. 停止一个容器  
    停止容器的命令如下：    
    ```
    docker stop <容器 ID>
    ```
    停止的容器可以通过 docker restart 重启：
    ```
    docker restart <容器 ID>
    ```

4. 进入容器  
    在使用 -d 参数时，容器启动后会进入后台。此时想要进入容器，可以通过以下指令进入：
    + docker attach
    + docker exec：推荐大家使用 docker exec 命令，因为此退出容器终端，不会导致容器的停止。

    1. **attach 命令**  
        下面演示了使用 docker attach 命令。
        ```
        $ docker attach 1e560fca3906 
        ```
        注意： 如果从这个容器退出，会导致容器的停止。

    2. **exec 命令**
        下面演示了使用 docker exec 命令。
        ```
        docker exec -it 243c32535da7 /bin/bash
        ```
        注意： 如果从这个容器退出，不会导致容器的停止，这就是为什么推荐大家使用 docker exec 的原因。

5. 导出和导入容器
    + 导出容器  
        如果要导出本地某个容器，可以使用 docker export 命令。
        ```
        $ docker export 1e560fca3906 > ubuntu.tar
        ```
        导出容器 1e560fca3906 快照到本地文件 ubuntu.tar。
    + 导入容器快照  
        可以使用 docker import 从容器快照文件中再导入为镜像，以下实例将快照文件 ubuntu.tar 导入到镜像 test/ubuntu:v1:
        ```
        $ cat docker/ubuntu.tar | docker import - test/ubuntu:v1
        ```
        此外，也可以通过指定 URL 或者某个目录来导入，例如：
        ```
        $ docker import http://example.com/exampleimage.tgz example/imagerepo
        ```

6. 删除容器
    删除容器使用 docker rm 命令：
    ```
    $ docker rm -f 1e560fca3906
    ```
    先停止运行的容器：docker container stop [container-id]  
    然后删除容器：docker container rm [container-id]  
    最后删除镜像：docker image rmi [image-id]  
    获取对应的 id 可以通过命令：docker container ls 和 docker image ls。  