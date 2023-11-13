# 问题解决-运行终端指令brew出现/usr/local/Homebrew/Library/Homebrew/version.rb:369:in `initialize': Version value must be a string; got a NilClass () (TypeError)

## 问题描述
同标题


## 解决方法
1. 根据[论坛](https://stackoverflow.com/questions/64821648/homebrew-fails-on-macos-big-sur)
    更新一下`brew`, 运行命令行
    ```
    brew update-reset
    ```