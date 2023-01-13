# 问题解决：pip安装，出现报错"ERROR: Could not find a version that satisfies the requirement XXX (from versions: none)"-Python

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [问题解决：pip安装，出现报错"ERROR: Could not find a version that satisfies the requirement XXX (from versions: none)"-Python](#问题解决pip安装出现报错error-could-not-find-a-version-that-satisfies-the-requirement-xxx-from-versions-none-python)
  - [问题描述](#问题描述)
  - [问题原因](#问题原因)
  - [解决方法](#解决方法)

<!-- /code_chunk_output -->

## 问题描述  
pip安装，出现报错`ERROR: Could not find a version that satisfies the requirement XXX (from versions: none)`
    
## 问题原因
国内环境不稳定

## 解决方法
1. 使用镜像安装  
    ```shell
    $ pip3 install 包名 -i http://pypi.douban.com/simple/ --trusted-host pypi.douban.com
    ```
    
    镜像链接也可换为：
    + 阿里云 http://mirrors.aliyun.com/pypi/simple/ 
        + 豆瓣(douban) http://pypi.douban.com/simple/ 
        + 清华大学 https://pypi.tuna.tsinghua.edu.cn/simple/ 
        + 中国科学技术大学 http://pypi.mirrors.ustc.edu.cn/simple/
2. VPN


