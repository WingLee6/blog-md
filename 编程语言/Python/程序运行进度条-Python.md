# 程序运行进度条 —Python

```python

# -*- coding: utf-8 -*-
# @Time    : 2019/12/21 
# @Author  : li
# @FileName: demo001.py
# @Desc    : 程序运行进度条

import sys
import math

def progress_bar(portion, total):
    """
    total 总数据大小，portion 已经传送的数据大小
    :param portion: 已经接收的数据量
    :param total: 总数据量
    :return: 接收数据完成，返回True
    """
    part = total / 50  # 1%数据的大小
    count = math.ceil(portion / part)
    sys.stdout.write('\r')
    sys.stdout.write(('正在运行XXXX' + '[%-50s]%.2f%%' % (('>' * count), portion / total * 100)))
    sys.stdout.flush()

    if portion >= total:
        sys.stdout.write('\n')
        return True

# 调用方式
portion = 0          # portion: 已经接收的数据量
total = 254820000    # total: 总数据量
while True:
    portion += 1024
    sum = progress_bar(portion, total)
    if sum:
        break
print("ok")
```