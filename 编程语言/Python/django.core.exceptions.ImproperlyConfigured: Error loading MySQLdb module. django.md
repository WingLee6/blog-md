# 报错'django.core.exceptions.ImproperlyConfigured: Error loading MySQLdb module. django'

## 博客概述：连续修正三个错误即可
## 环境：Django2.2 + Python3.7

### 出错原因：
### 1. mysqldb只支持python2.X，pymysql只支持python3.X
### 2. django2.2和pymysql版本不匹配。mysqldb不支持python3.


0. 前提：要有pymysql库


1. Django项目运行出现报错
    ```
    ······
      File "/home/ubuntu/anaconda2/envs/python3/lib/python3.6/site-packages/django/db/utils.py", line 110, in load_backend
    return import_module('%s.base' % backend_name)
    File "/home/ubuntu/anaconda2/envs/python3/lib/python3.6/importlib/__init__.py", line 126, in import_module
        return _bootstrap._gcd_import(name[level:], package, level)
    File "/home/ubuntu/anaconda2/envs/python3/lib/python3.6/site-packages/django/db/backends/mysql/base.py", line 20, in <module>
        ) from err
    django.core.exceptions.ImproperlyConfigured: Error loading MySQLdb module.
    Did you install mysqlclient?
    ```
    点击报错最后的地址链接。找到如下代码块：
    ```
    try:
        import MySQLdb as Database
    except ImportError as err:
        raise ImproperlyConfigured(
            'Error loading MySQLdb module.\n'
            'Did you install mysqlclient?'
    ) from err
    ```
    改为：
    ```
    try:
        # import MySQLdb as Database
        import pymysql as Database
        import pymysql

        pymysql.install_as_MySQLdb()
    except ImportError as err:
        raise ImproperlyConfigured(
            'Error loading MySQLdb module.\n'
            'Did you install mysqlclient?'
        ) from err
    ```
    运行第一次

2. 出现另一个错误
    ```
    django.core.exceptions.ImproperlyConfigured: mysqlclient 1.3.13 or newer is required; you have 0.9.3.
    ```    
    继续点击报错信息最后的地址链接，打开base.py文件，找到下面代码块：
    ```
    version = Database.version_info
    if version < (1, 3, 13):
        raise ImproperlyConfigured('mysqlclient 1.3.13 or newer is required; you have %s.' % Database.__version__)
    ```
    将该if判断被注释掉，效果如下：
    ```
    version = Database.version_info
    # if version < (1, 3, 13):
    #     raise ImproperlyConfigured('mysqlclient 1.3.13 or newer is required; you have %s.' % Database.__version__)
    ```
    运行第二次

3. 修改最后的错误
    ```django.core.exceptions.ImproperlyConfigured: mysqlclient 1.3.13 or newer is required; you have 0.9.2
    ```
    同上，点入最后的地址链接，找到代码块：
    ```
    if query is not None:
        query = query.decode(errors='replace')
        return query
    ```
    修改方法；将单词 ‘decode’ 改为 ‘encode’ ；
    第三次运行成功
