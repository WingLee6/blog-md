# 问题解决-GIthub在Push时报错"fatal: unable to access 'https://github.com/lukelee98/blog-md.git/': schannel: failed to receive handshake, SSL/TLS connection failed"

## 问题描述
如题


## 问题解决
> 参考：https://blog.csdn.net/Wenhao_China/article/details/125149867

### 第一步： 找到当前仓库的`.git`目录
`.git`目录位于当前仓库的子目录，为隐藏目录需要将其显示
1. 隐藏目录显示方法
    + Mac系统：cmd + shift + .
    + Win11系统：
        - 从打开当前文件。 
        - 顶部选项栏选择“查看”>“显示”>“隐藏的项目”，单击勾选显示。
### 第二步： 找到文件`../【仓库名】/.git/config`文件，并打开
    在文件`config`文件中追加如下内容：
    ```JSON
    
    [http]
	    sslbackend = openssl
    ```
    保存，关闭该文件

### 第三步： 重试，看是否可以Push代码

