# 问题解决-Mac隔空投送时访达卡死
> 参考： https://www.bilibili.com/read/cv19022396/

## 问题描述
Mac隔空投送，在选择发送人时无法点击选择，该访达页面卡死。


## 问题解决
打开终端输入：
```sh
sudo osascript -e 'tell app "Finder" to quit'
```

随后按要求输入开机密码即可杀掉所有的访达窗口并无需重启   

重新打开dock栏的访达即可
