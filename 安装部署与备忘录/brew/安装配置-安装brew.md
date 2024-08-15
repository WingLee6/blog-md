# 安装配置 - 安装brew

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [前言](#前言)
- [方法1: 官网安装](#方法1-官网安装)
- [方法2: 国内安装教程](#方法2-国内安装教程)
- [常用命令](#常用命令)
- [安装报错解决](#安装报错解决)
  - [1. 方法1安装命令行报错 curl: (7) Failed to connect to raw.githubusercontent.com port 443: Connection refused](#1-方法1安装命令行报错-curl-7-failed-to-connect-to-rawgithubusercontentcom-port-443-connection-refused)
    - [解决办法:](#解决办法)

<!-- /code_chunk_output -->


## 前言

Homebrew 是一款 Mac 平台下的软件包管理工具，拥有安装、卸载、更新、查找、搜索等很多实用的功能。

## 方法1: 官网安装
1. 访问 Homebrew 官网 https://brew.sh/zh-cn/
    可以看到下载命令:
    ```
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    ```
    终端运行后即可.

2. 检测是否安装成功:
    ```
    brew --version
    ```
    返回版本号则安装成功

## 方法2: 国内安装教程
> [B站教程](https://www.bilibili.com/video/BV1fg411q758/?spm_id_from=333.337.search-card.all.click&vd_source=397ed35275c1797c4df213886d40bd11)
1. 访问gitee
    https://gitee.com/cunkai/HomebrewCN
    找到安装命令行:
    ```bash
    /bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"
    ```
    > 防止丢失仓库已经下载, 见**安装部署与备忘录/brew/HomebrewCN-master.zip**

2. 检测是否安装成功:
    ```
    brew --version
    ```
    返回版本号则安装成功


## 常用命令

Homebrew 安装完成后，可以使用以下常用命令：

- `brew search`：搜索软件包
- `brew install`：安装软件包
- `brew uninstall`：卸载软件包
- `brew update`：更新 Homebrew 软件源
- `brew upgrade`：升级 Homebrew 软件



## 安装报错解决
### 1. 方法1安装命令行报错 curl: (7) Failed to connect to raw.githubusercontent.com port 443: Connection refused
#### 解决办法:
使用方法2
