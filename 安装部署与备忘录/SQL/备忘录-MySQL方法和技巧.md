# MySQL指南

> 主要参考书籍：《O'reilly 高性能MySQL（第三版）》


<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [MySQL指南](#mysql指南)
  - [一、安装与配置](#一-安装与配置)
  - [二、](#二)
  - [参考文献及必要说明](#参考文献及必要说明)

<!-- /code_chunk_output -->



## 一、安装与配置
MySQL主流三个版本分别为：5.6、 5.7和8.0
安装参考其他文档



## 二、 















## 参考文献及必要说明
1. 《O'reilly 高性能MySQL（第三版）》
    + 涉及MySQL版本 5.1/5.5/5.6， 主要为5.5
    + 实例代码网址：
        http://www.highperfmysql.com （已下载至本地）


# 以下未整理
# sql中删除表中数据的两种方法 -SQL

1. `delete * from TALBENAME`
2. `truncate table TABLENAME`

上面的两种方式均是能够删除TABLENAME中的数据，但是第二种方式性能更好，第二种方式是不进行日志的记录。
