# 笔记的合集

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [一. 仓库说明](#一-仓库说明)
- [二. 图片相关说明](#二-图片相关说明)
  - [2.1 图片的参数设置](#21-图片的参数设置)
  - [2.2 图片的插入](#22-图片的插入)
    - [法1: 图云设置](#法1-图云设置)
    - [法2: 本地插入图片](#法2-本地插入图片)
- [三. 文件命方法](#三-文件命方法)
- [四. 上传说明](#四-上传说明)

<!-- /code_chunk_output -->

## 一. 仓库说明
日常笔记和使用指南。  
+ 仓库地址： https://github.com/lukelee98/blog-md.git
+ 仓库的大部分文档格式为Markdown文件，但有少量其他格式文件和附加软件安装包等；   



## 二. 图片相关说明
### 2.1 图片的参数设置
1. 宽度为300像素

### 2.2 图片的插入
#### 法1: 图云设置
仓库Markdown文档中插入的图片大部分都在基于GitHub图云仓库中；  
1. Github图云仓库地址: https://github.com/lukelee98/pic-bed.git   
2. 上传文件工具为PicGo；  
3. 更多详见[pic-bed仓库](https://github.com/lukelee98/pic-bed.git)中`README.md`文件.  

#### 法2: 本地插入图片
若插入本地图片地址要用`/`, 不要用win拷贝地址默认的`\`

## 三. 文件命方法
0. 禁忌
    + 不要出现 \ / : * ? " < > |

1. 目录名

2. 文件名
    根据不同的文件类型选择如下格式
    + 问题解决-op<语言|软件名|大类>-问题描述.md
        - 问题解决-Python+Django-报错'django.core.exceptions.ImproperlyConfigured Error loading MySQLdb module.django'.md

        > **注意**： 若报错原文中出现 \ / : * ? " < > | 等符号，要删除！
        
        - 问题解决-实现VM VirtualBox 网络地址转换（NAT）.md
    + 备忘录-描述.md
        - 备忘录-Java语法和技巧.md
        - 备忘录-Maven基本内容.md
    + 安装配置-描述.md
        - 安装配置-Java环境安装和配置.md
    + 题库-描述.md


## 四. 上传说明
1. 单个文件不要超过100MB
    