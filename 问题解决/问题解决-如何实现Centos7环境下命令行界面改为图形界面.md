## Centos7将命令行改为图形界面 -Linux

### 1. 安装X Window System命令
```
yum groupinstall "X Window System" -y
```
### 2. 安装图形界面软件 GNOME　
```
yum groupinstall "GNOME Desktop" -y
```

### 3. 更新系统的默认运行级别
```
ln -sf /lib/systemd/system/runlevel5.target /etc/systemd/system/default.target
```

### 4.重启服务器
```
reboot
```  
  
---

### **附1**：CentOS7的命令行模式与图形界面相互切换方式：
1. 获取当前系统启动模式 :
    ```
    systemctl get-default
    ```
2. 由**命令行模式**更改为**图形界面**模式 :
    ```
    systemctl set-default graphical.target 
    ```
3. 由**图形界面**模式更改为**命令行模式** :
    ```
    systemctl set-default multi-user.target  
    ```
### **附2**：Mac远程登陆服务我器图形界面
1. Mac下安装XQuartz :  
    官网: [http://www.xquartz.org](http://www.xquartz.org)

2. 连接服务器：
    例 : 加上[-X]
    ```
    ssh -X root@XXX.XXX.XX.XX
    ```
3. 测试是否成功：   
    下载一个小应用：  
    ```
    yum install xclock
    ```
    测试是否可以调回小时钟到Mac桌面：
    ```
    xclock
    ```
