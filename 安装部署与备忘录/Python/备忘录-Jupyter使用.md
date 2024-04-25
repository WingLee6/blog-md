# 备忘录-Jupyter Notebook使用

## 一. 安装和相关插件
见文件`安装部署与备忘录\Python\安装配置-Mac的Jupyter和插件的安装和配置.md`

## 二. 魔法命令
Jupyter Notebook 提供了许多“魔法命令”（Magic Commands），也被称为“IPython魔法命令”，它们以百分号（`%`）或双百分号（`%%`）开头，用于控制 Notebook 的行为或执行特定任务。
以下是一些常用的 Jupyter Notebook 魔法命令：

### 2.1 行魔法命令（Line Magics）

* `%run script.py`：运行一个 Python 脚本。
* `%load script.py`：加载一个 Python 脚本的内容到当前的 Notebook 单元。
* `%matplotlib inline`：将 Matplotlib 的图形嵌入到 Notebook 中。
* `%whos`：列出当前交互式命名空间中的所有变量。
* `%debug`：进入交互式调试器，可以用于调试代码。
* `%time`：测量一行代码的执行时间。
* `%timeit`：多次执行一行代码并测量平均执行时间。

### 2.2 单元魔法命令（Cell Magics）

* `%%time`：测量整个单元的执行时间。
* `%%timeit`：多次执行整个单元并测量平均执行时间。
* `%%bash`：在单元中执行 Bash 命令。
* `%%writefile filename.py`：将单元的内容写入文件。
* `%%HTML`：将单元的内容作为 HTML 输出。
* `%%javascript`：在单元中执行 JavaScript 代码。
* `%%latex`：将单元的内容作为 LaTeX 代码渲染。

### 2.3 其他常用命令

* `%ls`：列出当前目录的文件和文件夹。
* `%pwd`：显示当前工作目录。
* `%cd path`：改变当前工作目录。
* `%env`：显示环境变量，也可以用来设置环境变量。
* `%hist` 或 `%history`：显示执行过的命令历史。
* `%config IPCompleter.greedy=True`：自动补全时更贪婪地匹配。
* `%xmode Plain`：改变异常输出的格式。
* `%load_ext module`：加载一个 IPython 扩展模块。
* `%precision n`：设置浮点数的输出精度。
* `%prun statement`：执行语句并打印其性能分析报告。
* `%reload_ext module`：重新加载一个已经加载的 IPython 扩展模块。
* `%run -i script.py`：在交互式命名空间中运行脚本。


### 2.4 永驻/清除变量内存
* `%store variable`：将变量存储在 Notebook 的持久命名空间中
* `%reset -f` 清除所有变量，并删除当前目录下的**所有文件**
* `%reset` 清除所有变量，但不删除文件
* `%xdel` 删除特定的变量 (建议)


    ```python
    # 假设你已经定义了一些变量
    a = 1
    b = 2
    c = 3
    # 清除所有变量, 并删除当前目录下的所有文件
    %reset -f
    # 如果只想删除特定的变量
    %xdel a
    %xdel b
    %xdel c
    ```

