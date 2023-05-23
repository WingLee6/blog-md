# 怎样长时间保持SSH会话连接不断开？-Linux

### **操作场景**  
&ensp; &ensp; 使用SSH方式登录CentOS 6.5操作系统的弹性云服务器时，过一段时间就会自动断开连接。本节操作介绍如何保持SSH会话持续连接不断开

>说明：  
>&ensp; &ensp; 该文档适用于CentOS/EulerOS系统;  
>&ensp; &ensp; 本节操作涉及重启sshd服务，会造成sshd断开。

### 操作方法
1. 编辑/etc/ssh/ssh_config文件设置心跳，保持连接。  
    ```
    # vi /etc/ssh/ssh_config
    ``` 

    编辑/etc/ssh/ssh_config，添加配置项：  
    ```
    ClientAliveInterval 60     
    ClientAliveCountMax 10
    ```
    ClientAliveInterval 60 表示每分钟发送一次请求， 从而保持连接。  
    ClientAliveCountMax 10 表示服务器发出请求后客户端没有响应的次数达到10次，就自动断开连接。
    
    则无响应的SSH客户端将在大约600x10=6000秒后断开连接。  
    >说明：  
    ClientAliveInterval设置超时间隔（以秒为单位），在此间隔之后，如果尚未从客户端接收到任何数据，则sshd将通过加密的通道发送消息以请求客户端的响应。默认值为0，表示这些消息将不会发送到客户端。此选项仅适用于协议版本2。   ClientAliveCountMax设置客户端活动消息的数量，该消息可以在sshd接收不到来自客户端的任何消息的情况下发送。如果在发送客户端活动消息时达到此阈值，则sshd将断开客户端连接，从而终止会话。  
    客户端活动消息的使用与TCPKeepAlive有很大不同。客户端活动消息是通过加密通道发送的，因此不会被欺骗。由TCPKeepAlive启用的TCP keepalive选项是可欺骗的。

2. 执行以下命令，重启sshd服务，使配置生效。  
    CentOS6操作系统  
    ```
    # service sshd restart
    ```  
    CentOS7/EulerOS操作系统
    ```
    # systemctl restart sshd
    ```