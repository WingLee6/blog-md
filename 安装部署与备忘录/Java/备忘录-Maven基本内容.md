# Maven基本内容

> 参考：
    1.《黑马程序员Maven教程》, https://www.bilibili.com/video/BV1Ah411S7ZE/?spm_id_from=333.337.search-card.all.click      
    2. 菜鸟教程, https://www.runoob.com/maven/maven-pom.html


<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [1. Maven简介](#-1-maven简介)
- [2. Maven对JDK的版本要求](#-2-maven对jdk的版本要求--)
- [3. Maven下载与安装](#-3-maven下载与安装)
  - [途径一： IDEA会自动安装Maven](#-途径一-idea会自动安装maven)
  - [途径二： 官网下载与安装](#-途径二-官网下载与安装)
- [4. pom.xml文件（Project Object Model）项目对象模型](#-4-pomxml文件project-object-model项目对象模型)
- [5. Maven的其他概念](#-5-maven的其他概念)
  - [5.1 仓库](#-51-仓库)
  - [5.2 坐标](#-52-坐标)
- [6. Maven的配置](#-6-maven的配置)
  - [6.1 IDEA会自动安装Maven 如何配置](#-61-idea会自动安装maven-如何配置)
  - [6.2 自己下载部署的Maven 如何配置](#-62-自己下载部署的maven-如何配置)
    - [配置一：jar包下载到哪里（本地仓库位置更改）](#-配置一jar包下载到哪里本地仓库位置更改)
    - [配置二：jar包从哪下载（换成国内的镜像仓库）](#-配置二jar包从哪下载换成国内的镜像仓库)
    - [配置三：全局setting 和 用户setting](#-配置三全局setting-和-用户setting)
- [7. 创建Maven工程（手动）](#-7-创建maven工程手动)
  - [7.1 Maven结构](#-71-maven结构)
- [8. 创建Maven工程（IDEA创建）](#-8-创建maven工程idea创建)

<!-- /code_chunk_output -->


## 1. Maven简介
Maven是一个构建工具，用于传统项目的版本管理（如，jar包等），将项目的开发过程抽象为一个项目对象模型（POM）；

## 2. Maven对JDK的版本要求  
+ Maven 3.0/3.1 要求 JDK 1.5 或以上ß
+ Maven 3.2 要求 JDK 1.6 或以上
+ Maven 3.3 要求 JDK 1.7 或以上

## 3. Maven下载与安装
### 途径一： IDEA会自动安装Maven
1. 在IDEA查看Maven版本
    + Preferences -> Build, Execution, Deployment -> Build Tools -> Maven

### 途径二： 官网下载与安装
+ Step1: 官网下载 
  官网下载: http://maven.apache.org/download.cgi
  > 不同平台下载对应的包：
    Windows：apache-maven-3.3.9-bin.zip
    Linux：apache-maven-3.3.9-bin.tar.gz
    Mac：apache-maven-3.3.9-bin.tar.gz
+ Step2: 解压，并放在相应位置
  | 系统 | 位置 |
  | - | - |
  | Windows	| E:\Maven\apache-maven-3.3.9 |
  | Linux |	/usr/local/apache-maven-3.3.9 |
  | Mac	| /usr/local/apache-maven-3.3.9 |
  > 表格中为参考位置
+ Step3: 设置环境变量
  > 参考教程: https://www.runoob.com/maven/maven-setup.html
  + Windows：
    右键 "计算机"，选择 "属性"，之后点击 "高级系统设置"，点击"环境变量"，来设置环境变量，有以下系统变量需要配置：新建系统变量 `MAVEN_HOME`，变量值：`E:\Maven\apache-maven-3.3.9`； 编辑系统变量 `Path`，添加变量值：`;%MAVEN_HOME%\bin`
    > 注意多个值之间需要有分号隔开，然后点击确定。
  + Linux：
    1. 下载解压：
        ```
        # wget http://mirrors.hust.edu.cn/apache/maven/maven-3/3.3.9/binaries/apache-maven-3.3.9-bin.tar.gz
        # tar -xvf  apache-maven-3.3.9-bin.tar.gz
        # sudo mv -f apache-maven-3.3.9 /usr/local/
        ```
    2. 编辑 `/etc/profile` 文件 `sudo vim /etc/profile`，在文件末尾添加如下代码：
        ```
        export MAVEN_HOME=/usr/local/apache-maven-3.3.9
        export PATH=${PATH}:${MAVEN_HOME}/bin
        ```
        保存文件，并运行如下命令使环境变量生效：
        ```
        # source /etc/profile
        ```
    3. 在控制台输入如下命令，如果能看到 Maven 相关版本信息，则说明 Maven 已经安装成功：
        ```
        # mvn -v
        ```

  + Mac：
    1. 下载解压：
        ```
        $ curl -O http://mirrors.hust.edu.cn/apache/maven/maven-3/3.3.9/binaries/apache-maven-3.3.9-bin.tar.gz
        $ tar -xvf  apache-maven-3.3.9-bin.tar.gz
        $ sudo mv -f apache-maven-3.3.9 /usr/local/
        ```
    2. 编辑 `/etc/profile` 文件 `sudo vim /etc/profile`，在文件末尾添加如下代码：
        ```
        export MAVEN_HOME=/usr/local/apache-maven-3.3.9
        export PATH=${PATH}:${MAVEN_HOME}/bin
        ```
        保存文件，并运行如下命令使环境变量生效：
        ```
        $ source /etc/profile
        ```
    3. 在控制台输入如下命令，如果能看到 Maven 相关版本信息，则说明 Maven 已经安装成功：
        ```
        $ mvn -v
        Apache Maven 3.3.9 (bb52d8502b132ec0a5a3f4c09453c07478323dc5; 2015-11-11T00:41:47+08:00)
        Maven home: /usr/local/apache-maven-3.3.9
        Java version: 1.8.0_31, vendor: Oracle Corporation
        Java home: /Library/Java/JavaVirtualMachines/jdk1.8.0_31.jdk/Contents/Home/jre
        Default locale: zh_CN, platform encoding: ISO8859-1
        OS name: "mac os x", version: "10.13.4", arch: "x86_64", family: "mac"
        ```

## 4. pom.xml文件（Project Object Model）项目对象模型
1. 文件包含了项目的基本信息，用于描述项目如何构建，声明项目依赖，等等；
  POM 中可以指定以下配置：
   + 项目依赖
   + 插件
   + 执行目标
   + 项目构建 profile
   + 项目版本
   + 项目开发者列表
   + 相关邮件列表信息
2. 执行任务或目标时，Maven 会在当前目录中查找 POM。它读取 POM，获取所需的配置信息，然后执行目标；
3. 标签释义
    下面是一个典型的pom.xml文件 
    ```xml
    <project xmlns = "http://maven.apache.org/POM/4.0.0"
        xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation = "http://maven.apache.org/POM/4.0.0
        http://maven.apache.org/xsd/maven-4.0.0.xsd">
    
        <!-- 模型版本 -->
        <modelVersion>4.0.0</modelVersion>
        <!-- 公司或者组织的唯一标志，并且配置时生成的路径也是由此生成， 如com.companyname.project-group，maven会将该项目打成的jar包放本地路径：/com/companyname/project-group -->
        <groupId>com.companyname.project-group</groupId>
    
        <!-- 项目的唯一ID，一个groupId下面可能多个项目，就是靠artifactId来区分的 -->
        <artifactId>project</artifactId>
    
        <!-- 版本号 -->
        <version>1.0</version>
    </project>
    ```
    | 标签 | 含义 |
    | - | - | 
    | `project`	| 工程的根标签 |
    | `modelVersion` | 模型版本需要设置为 4.0 |
    | `groupId`	| 表示当前Maven项目隶属的组织名称。例如，一个银行组织 `com.companyname.project-group` （通常为域名反写）拥有所有的和银行相关的项目 |
    | `artifactId` | 表示当前Maven项目的名称。例如，消费者银行（通常为模块名称）。groupId 和 artifactId 一起定义了 artifact 在仓库中的位置 |
    | `version` | 表示当前Maven项目的版本号。在 artifact 的仓库中，它用来区分不同的版本 |

## 5. Maven的其他概念
### 5.1 仓库
1. 仓库的作用
用于存储资源，包括各种jar包；

2. 仓库的分类
分为本地仓库和远程仓库
    + 本地仓库：自己电脑上存储的资源，可连接远程仓库获取资源；
    + 远程仓库：包括中央仓库和私服
      + 中央仓库： 由Maven团队运营，存储所有资源；
      + 私服：由公司运营，存储部分自己内部常用的资源和不对外共享的资源。从中央仓库获取资源，也提升本地仓库获取资源的效率；

3. 当我们执行 Maven 构建命令时，Maven 开始按照以下顺序查找依赖的库：
    + 步骤 1 － 在本地仓库中搜索，如果找不到，执行步骤 2，如果找到了则执行其他操作。
    + 步骤 2 － 在中央仓库中搜索，如果找不到，并且有一个或多个远程仓库已经设置，则执行步骤 4，如果找到了则下载到本地仓库中以备将来引用。
    + 步骤 3 － 如果远程仓库没有被设置，Maven 将简单的停滞处理并抛出错误（无法找到依赖的文件）。
    + 步骤 4 － 在一个或多个远程仓库中搜索依赖的文件，如果找到则下载到本地仓库以备将来引用，否则 Maven 将停止处理并抛出错误（无法找到依赖的文件）。


### 5.2 坐标
1. 坐标的作用
用于描述仓库中资源的唯一位置（标记jar包的版本号）
2. 查询网站
  https://mvnrepository.com/
3. 坐标的使用
    + 在【网站】查询所需的jar包；
    + 找到符合的版本号；
    + 在Maven复制，拷贝到pom.xml文件中；

## 6. Maven的配置
主要包含两个问题 **jar包放在哪里** 和 **从哪下载jar包**；

### 6.1 IDEA会自动安装Maven 如何配置
略

### 6.2 自己下载部署的Maven 如何配置
#### 配置一：jar包下载到哪里（本地仓库位置更改）
1. 默认位置
    + 当你在终端输入并运行命令`mvn`后，每个用户在自己的用户目录下都生成有一个路径名为 .m2/repository/ 的仓库目录（如 /Users/lee/.m2/repository/） 
        > 注意 .m2 是隐藏目录，显示隐藏文件夹快捷键cmd + shift + . 
    + 找到文件夹repository（即 /Users/lee/.m2/repository），repository的内容就是已经下载到本地的jar包，以后jar包也会默认下载到这里； 

2. 更改默认位置
    + 更改原因：windows默认.m2文件夹在C盘中，随着频繁使用，会导致下载的jar包过多而堆满系统盘。或其他原因
    + 更改步骤： 
        1. 找到一个合适的位置，创建文件夹。如 /Users/lee/maven/repository
        2. 知道Maven所在位置，见上文Maven安装步骤（如 /usr/local/apache-maven-3.8.7）；找到其子文件（/usr/local/apache-maven-3.8.7/conf/settings.xml），并打开；
        3. 编辑 settings.xml 文件： 
            找到下面段落（以`setting`标签开头）：
            ```xml
            <settings xmlns="http://maven.apache.org/SETTINGS/1.2.0"
                    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                    xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.2.0 https://maven.apache.org/xsd/settings-1.2.0.xsd">
            <!-- localRepository
            | The path to the local repository maven will use to store artifacts.
            |
            | Default: ${user.home}/.m2/repository
            <localRepository>/path/to/local/repo</localRepository>
            -->
            略
            ```
            > 根据上述代码段，可以看到默认位置为`Default: ${user.home}/.m2/repository`， 即 /Users/lee/.m2/repository

            添加localRepository路径，改为：
            ```xml
            <settings xmlns="http://maven.apache.org/SETTINGS/1.2.0"
                    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                    xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.2.0 https://maven.apache.org/xsd/settings-1.2.0.xsd">
            <!-- localRepository
            | The path to the local repository maven will use to store artifacts.
            |
            | Default: ${user.home}/.m2/repository
            <localRepository>/path/to/local/repo</localRepository>
            -->
            <localRepository>/Users/lee/maven/repository</localRepository>
            略
            ```
            则以后jar包的下载位置将在文件夹 /Users/lee/maven/repository 内
        

#### 配置二：jar包从哪下载（换成国内的镜像仓库）
1. 镜像：

2. 更改镜像：
    1. 找到 /usr/local/apache-maven-3.8.7/conf/settings.xml
    2. 修改 settings.xml 文件
        找到 `mirrors`标签：
        ```xml
        <mirrors>
            <!-- mirror
                | Specifies a repository mirror site to use instead of a given repository. The repository that
                | this mirror serves has an ID that matches the mirrorOf element of this mirror. IDs are used
                | for inheritance and direct lookup purposes, and must be unique across the set of mirrors.
                |
            <mirror>
                <id>mirrorId</id>
                <mirrorOf>repositoryId</mirrorOf>
                <name>Human Readable Name for this Mirror.</name>
                <url>http://my.repository.com/repo/path</url>
            </mirror>
                -->
            <mirror>
                <id>maven-default-http-blocker</id>
                <mirrorOf>external:http:*</mirrorOf>
                <name>Pseudo repository to mirror external repositories initially using HTTP.</name>
                <url>http://0.0.0.0/</url>
                <blocked>true</blocked>
            </mirror>
        </mirrors>
        ```
        增加镜像：
        ```xml
        <mirrors>
            <!-- mirror
                | Specifies a repository mirror site to use instead of a given repository. The repository that
                | this mirror serves has an ID that matches the mirrorOf element of this mirror. IDs are used
                | for inheritance and direct lookup purposes, and must be unique across the set of mirrors.
                |
            <mirror>
                <id>mirrorId</id>
                <mirrorOf>repositoryId</mirrorOf>
                <name>Human Readable Name for this Mirror.</name>
                <url>http://my.repository.com/repo/path</url>
            </mirror>
                -->
            <mirror>
                <id>maven-default-http-blocker</id>
                <mirrorOf>external:http:*</mirrorOf>
                <name>Pseudo repository to mirror external repositories initially using HTTP.</name>
                <url>http://0.0.0.0/</url>
                <blocked>true</blocked>
            </mirror>

            <mirror>
                <!-- 镜像的id。可自己设置但要求唯一，与其他mirror标签下的id不同 -->
                <id>aliyunmaven</id>
                <!-- 对哪个仓库进行镜像。 即替代哪个仓库 -->
                <!-- * 表示替代所有； 也可以用 central 表示替代默认的中央仓库 -->
                <mirrorOf>*</mirrorOf>
                <!-- 名字。自己随便设置，也可删去 -->
                <name>阿里云公共仓库</name>
                <!-- 镜像url -->
                <url>https://maven.aliyun.com/repository/public</url>
            </mirror>
        </mirrors>
        ```

#### 配置三：全局setting 和 用户setting

## 7. 创建Maven工程（手动）
### 7.1 Maven结构
新建文件夹
    + 




## 8. 创建Maven工程（IDEA创建）



