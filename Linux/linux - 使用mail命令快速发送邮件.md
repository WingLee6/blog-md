# 如何用Linux发邮件？

> linux - 使用mail命令快速发送邮件
> 1. 使用mail给邮箱发邮件；
> 2. **发邮件**的邮箱需要打开POP3/SMTP/IMAP设置（若未打开见文末方法）；
> 3. **收邮件**的邮箱无另外要求。

## 操作指南
1. CentOS-yum安装
    ```shell
    yum -y install mailx
    ```
2. 配置外部邮箱
    > 默认是使用本地邮件服务进行发送邮件，但是现在收件邮箱会对发送地址验证，因此被拦截。
    > 通过配置/etc/mail.rc可以使用外部的邮箱来发送邮件，减少拦截。  

    配置/etc/mail.rc
    ```shell
    vi /etc/mail.rc
    ```
    在文件末添加**发邮件**的邮箱配置：
    ```shell
    set from=mail_user@163.com
    set smtp=smtp.163.com
    set smtp-auth-user=mail_user@163.com
    set smtp-auth-password=XXXX
    set smtp-auth=login
    ```
    将'mail_user@163.com'改为你的邮箱，'XXXX'改为你的邮箱密码（**客户端授权密码**）
3. 发送邮件  
    ```shell
    echo "正文内容" | mail -s "主题" XXXXXXXXX@163.com
    ```
    
附录：
1. 设置 POP3/SMTP/IMAP（以163邮箱为例）
    + 网页登陆163邮箱；
    + 点击“设置”，找到“POP3/SMTP/IMAP”，选中开启，保存；
    + 点击“设置”，找到“客户端授权密码”，选择开启，设置密码（要和登陆密码不同），第三方软件登陆该邮箱都需要使用该密码；
2. mail命令参数
    ```shell
    -s <邮件主题>：指定邮件的主题；
    -c <地址>：添加邮件抄送人，多个人时用逗号隔开；
    -b <地址>：添加邮件暗送人；
    -a <附件>: 添加附件。
    ```
3. 手动发送邮件：
    ```shell
    mail XXXXXXX@163.com
    ```
    + 回车enter，在“Subject:”提示下输入邮件主题； 
    + 回车enter，空白输入邮件正文;
    + 正文输入完成后，回车，在新的一行输入英文句号(.),即可发送。

    