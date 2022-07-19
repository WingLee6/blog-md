# 问题解决：云服务器重置后无法登陆，报错‘WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!'-Linux

**解决办法：**
```
vi /Users/gordo_li/.ssh/known_hosts
```
删除该服务器IP所在一行