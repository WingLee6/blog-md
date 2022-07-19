# linux系统（Ubuntu&Centos7）之合上笔记本盖但不断网 -Linux
配置场景：ubuntu电脑作为服务器，开机后把盖合上，省的屏幕亮。刚开始一盖上电脑盖电脑就断开网络，导致其他客户端电脑无法访问服务器。修改配置方法如下：

编辑下列文件：/etc/systemd/logind.conf

#HandlePowerKey按下电源键后的行为，默认power off

#HandleSleepKey 按下挂起键后的行为，默认suspend

#HandleHibernateKey按下休眠键后的行为，默认hibernate

#HandleLidSwitch合上笔记本盖后的行为，默认suspend（改为lock；即合盖不休眠）在原文件中，还要去掉前面的#

运行：systemctl restart systemd-logind 就会生效。
