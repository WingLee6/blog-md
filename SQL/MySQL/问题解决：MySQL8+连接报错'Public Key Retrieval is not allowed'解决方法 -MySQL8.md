# 问题解决：MySQL8+连接报错'Public Key Retrieval is not allowed'解决方法 -MySQL8

1. 修改my.ini/my.cnf
    ```
    vi /etc/my.cnf
    ```
2. 增加一行  
    ```
    allowPublicKeyRetrieval=true
    ```