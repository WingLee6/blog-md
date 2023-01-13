## macOS启动盘的的制作指南 -mac+启动盘+重装系统
### 一、 macOS近年发布版本
| 版本号 | 版本名称| 发布时间 | 下载链接（官方） |
| - | - | - | - |
| macOS 10.12 | Sierra | 2016年 | | 
| macOS 10.13 | High Sierra | 2017年 | https://apps.apple.com/cn/app/macos-sierra/id1127487414?mt=12 |
| macOS 10.14 | Mojave | 2018年 | |
| macOS 10.15 | Catalina | 2019年 | |
| macOS 11.0 | Big Sur | 2020年 | https://apps.apple.com/cn/app/macos-catalina/id1466841314?mt=12 |
| macOS 12 | Monterey | 2021年 | |
| macOS 13 | Ventura | 2022年 | |


> **第三方下载途径**：黑果小兵的部落阁、 https://support.apple.com/zh-cn/HT211683

### 二、 启动盘制作
1. 材料准备：
    + U盘： 16GB；
    + 相应系统的mac电脑；
    + 下载想要的macOS版本；
2. 格式化U盘：
    + 打开“磁盘工具”软件，将U盘抹去
        + 名称设置为：xxxxxx（或者其他名称）
        + 格式设置为：Mac OS 扩展（日志式）
        + 方案设置为：GUID分布图
3. 设置启动盘
    + 将下载的系统软件放在“应用程序”文件夹
    + 打开终端，运行：
        ```
        $ sudo /Applications/Install\ macOS\ Mojave.app/Contents/Resources/createinstallmedia --volume /Volumes/xxxxxx
        
        Password:
        Ready to start.
        To continue we need to erase the volume at /Volumes/xxxxxx.
        If you wish to continue type (Y) then press return: y
        Erasing disk: 0%... 10%... 20%... 30%... 100%
        Copying to disk: 0%... 10%... 20%... 30%... 40%... 50%... 60%... 70%... 80%... 90%... 100%
        Making disk bootable...
        Copying boot files...
        Install media now available at "/Volumes/Install macOS Mojave"
        ```
        备注：
        + `/Applications` 表示“应用程序”文件夹
        + `Install\ macOS\ Mojave.app` 系统软件的中文名可能为【安装 macOS Mojave.app】，则英文名为【Install macOS Mojave.app】； 此处用Tap键可自动补充；
        + `Contents/Resources/createinstallmedia` 为【安装 macOS Mojave.app】软件的一个子目录；
        + `--volume /Volumes/xxxxxx`  最后“xxxxxx”为U盘名称， 按格式化时的定义更改； 注意空格；

### 三、 重装系统
1. 开机，按住opt键；
2. 选择U盘启动；
3. 按界面显示操作；
        