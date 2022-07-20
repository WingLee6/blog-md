# 软件安装：Mac的jupyter的安装与必备插件-Python+jupyter+mac



## 〇、jupyter软件安装
0. 前提：已经安装Python 3+  
    检查一下：
    ```shell
    $ python3         
    Python 3.10.5 (v3.10.5:f377153967, Jun  6 2022, 12:36:10) [Clang 13.0.0 (clang-1300.0.29.30)] on darwin
    Type "help", "copyright", "credits" or "license" for more information.
    >>> 
    ```
1. jupyter软件安装
    + 使用Python3的`pip3`命令行安装
        ```shell
        $ pip3 install jupyter
        ······省略
        （安装成功）
        ```
    + 也可以检查一下
        ```shell
        $ pip3 list           
        Package              Version
        -------------------- -----------
        ······省略
        jupyter              1.0.0
        ······省略
        ```
2. 启动Jupyter Notebook
    命令行启动
    ```shell
    $ jupyter notebook 
    ```
    则会自动跳转至浏览器启动  
    或通过`jupyter notebook`之后，终端输出的带token的url复制到浏览器

## 一、jupyter IDE的选择
除了安装时默认浏览器操作外，诸如VS code软件也支持`.ipynb`文件编辑
功能性也不错。

## 二、 相关插件的功能、安装和使用
jupyter自身没有自动联想、自动导入模块等实用功能，需要自行安装其他包解决问题。
### （必备）Nbextensions安装插件管理器
1. 安装插件管理器
    ```shell
    $ pip3 install jupyter_contrib_nbextensions -i https://mirrors.tuna.tsinghua.edu.cn/pypi/web/simple/
    $ pip3 install jupyter_nbextensions_configurator -i https://mirrors.tuna.tsinghua.edu.cn/pypi/web/simple/
    ```
2. 命令行启动管理器  
    **注意**：需要先关闭Jupyter
    
    ```shell
    $ jupyter nbextensions_configurator install --user
    Please supply at least one subcommand: disable, enable
    

    $ jupyter nbextensions_configurator enable --user
    Enabling: jupyter_nbextensions_configurator
    - Writing config: /Users/lukelee/.jupyter
        - Validating...
        jupyter_nbextensions_configurator 0.4.1 OK
    Enabling notebook nbextension nbextensions_configurator/config_menu/main...
    Enabling tree nbextension nbextensions_configurator/tree_tab/main...
    ```
3. 检查安装是否成功
    安装前界面：
    ![](https://raw.githubusercontent.com/lukelee98/PicBed/main/Pic2022/jupyter_contrib_nbextensions%E5%AE%89%E8%A3%85%E5%89%8D.png)  
    导航栏只有【文件】、【运行】、【集群】三个选择卡

    安装后界面：
    ![](https://raw.githubusercontent.com/lukelee98/PicBed/main/Pic2022/jupyter_contrib_nbextensions%E5%AE%89%E8%A3%85%E5%90%8E.png)  
    导航栏新增【Nbextensions】选择卡  
4. 点击【Nbextensions】选择卡  
    勾选顶部的 disable configuration for nbextensions without explicit compatibility (they may break your notebook environment, but can be useful to show for nbextension development) 选项  
    否则下方插件是不可选状态
    ![](https://raw.githubusercontent.com/lukelee98/PicBed/main/Pic2022/Nbextension%E9%80%89%E6%8B%A9%E5%8D%A1%E7%95%8C%E9%9D%A2.png)
    
    > 问题解决：打开【Nbextensions】选择卡后发现下面无内容，见下文。
        

### Hinterland 自动补全功能
1. 安装：  
    【Nbextensions】选项卡下面找到 Hinterland 选项并勾选
    > VScode中不用设置也可以自动补全
2. 使用：
    + 正常使用  


### autopep8 拼写与格式规范化检查
1. 安装：
    + 【Nbextensions】选项卡下面找到autopep8选项并勾选
        ![](https://raw.githubusercontent.com/lukelee98/PicBed/main/Pic2022/Nbextension%E9%80%89%E6%8B%A9%E5%8D%A1%E7%95%8C%E9%9D%A2.png)
        （第一行最后一个）  
        若没有，则`pip3 install -U autopep8`
    + 返回代码页面  
        ![](https://raw.githubusercontent.com/lukelee98/PicBed/main/Pic2022/autopep8.png)
        可以看到功能栏最后一个“锤子”图标;

2. 使用方法  
    + 浏览器Jupyter中使用
        如：  
        ![](https://raw.githubusercontent.com/lukelee98/PicBed/main/Pic2022/autopep8.png)  
        点击“锤子”图标，光标在哪个Cell，则当前cell的代码将被格式规范化，变为
        ![](https://raw.githubusercontent.com/lukelee98/PicBed/main/Pic2022/%E4%BD%BF%E7%94%A8autopep%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%90%8E.png)
    + VS code中使用  
        光标在哪个Cell，右键->点击 “设置单元格格式” / “设置笔记本格式”，则 当前cell的代码 / 整个文件代码 将被格式规范化


### Table of Contents(2) 自动生成目录
1. 安装  
    【Nbextensions】选项卡下面找到 Table of Contents(2) 选项并勾选
2. 使用  
    可以看到功能栏新增加的“目录”图标，点击则代码左侧出现标题栏。  
    ![](https://raw.githubusercontent.com/lukelee98/PicBed/main/Pic2022/Table%20of%20Contents.png)

### Execute Time 显示cell运行时间
1. 安装  
    【Nbextensions】选项卡下面找到 Execute Time 选项并勾选  
    > VScode中不用设置也显示cell运行时间
2. 使用
    ![](https://raw.githubusercontent.com/lukelee98/PicBed/main/Pic2022/ExecuteTime.png)

### Nofity 运行结束提醒
1. 安装
    + 【Nbextensions】选项卡下面找到 Nofity 选项并勾选  
        注意，要开启浏览器的通知功能。
    + 检查一下，若执行代码后没有通知  
        见 ”2. 使用“ 
        
    + 若没有通知，需要进行`pip3`安装
        ```shell
        $ pip3 install jupyternotify
        ```
        然后再按上面的方法测试一下
        
2. 使用
    + 单个cell使用
        ```python
        # 用魔术命令代码在 Jupyter Notebook 中加载通知
        %load_ext jupyternotify
        ```
        
        在需要通知的cell上加上`%%motify`，如
        ```python
        %%notify
        import time
        time.sleep(2)
        print('Finish Trying Notifiy')
        ```
        得到通知，如：
        ![](https://raw.githubusercontent.com/lukelee98/PicBed/main/Pic2022/jupyternotify.png)
    + 整个文件使用  
        在功能栏找到，"Notify"进行设置；  
        "Notify: 5"，数字表示运行时间>5秒的cell才会发通知，其他数字同理；
        ![](https://raw.githubusercontent.com/lukelee98/PicBed/main/Pic2022/notify%E5%8A%9F%E8%83%BD%E6%A0%8F%E8%AE%BE%E7%BD%AE.png)
        
        **或**，通过代码设置
        ```python
        %load_ext jupyternotify # 载入插件
        %autonotify -a 30
        ```
        `%autonotify -a 30`，数字表示运行时间>30秒的cell才会发通知


### Codefolding 代码自动折叠
1. 安装
    【Nbextensions】选项卡下面找到 NofCodefoldingity 选项并勾选

2. 使用
    + 使用前：
        ![](https://raw.githubusercontent.com/lukelee98/PicBed/main/Pic2022/Codefolding%20before.png)
    + 使用后：
        ![](https://raw.githubusercontent.com/lukelee98/PicBed/main/Pic2022/CodefoldingAfter.png)
        代码后出现“三角形”可以用来折叠代码


### tpdm 运行进度条库
参见 /Python环境安装与第三方库-Python.md


### jupyter-resource-usage 内存使用查看
1. 安装
    ```shell
    $ pip3 install jupyter-resource-usage
    ```
2. 安装  
    代码页刷新后即可看到，功能栏右边有个"Memory:  "标志  
    ![](https://raw.githubusercontent.com/lukelee98/PicBed/main/Pic2022/jupyter-resource-usage.png)

### pyforest 自动导入模块至第一个cell
> 大部分为科学计算常用第三方库
1. 安装
    ```shell
    $ pip3 install pyforest
    ```
    启动库包
    ```shell
    $ python3 -m pyforest install_extensions
    Starting to install pyforest extensions for Jupyter Notebook and Jupyter Lab
    ······省略
    Finished installing the pyforest Jupyter extensions
    Please reload your Jupyter notebook and/or Jupyter lab browser windows
    ```

2. 使用：
    + 在浏览器Jupyter中使用  
        使用前：
        ![](https://raw.githubusercontent.com/lukelee98/PicBed/main/Pic2022/pyforest%20Before.png)
        运行当前cell后：
        ![](https://raw.githubusercontent.com/lukelee98/PicBed/main/Pic2022/pyforest%20after.png)
        可以看到已经自动加载所需库包.  
        **注意**：需要电脑的环境中已经`pip3`安装pandas和matplotlib等库包  
        查看当前已经导入的库包：  
        ```python
        active_imports()
        ```
    + 在PyCharm中使用pyforest:  
        需要事先导入：
        ```python
        from pyforest import *
        ```


3. 查看pyforest可以自动导入的库包
    ```python 
    lazy_imports()
​    ```
    输出（大部分为科学计算常用第三方库）：
    ```
    executed in 15ms, finished 11:56:34 2022-07-20
    Out[3]:
    ['from sklearn.cluster import KMeans',
    'from sklearn.preprocessing import OneHotEncoder',
    ······省略
    'from sklearn.preprocessing import PolynomialFeatures',
    'from dask import dataframe as dd',
    'import gensim',
    'import pandas as pd',
    'import datetime as dt',
    'from sklearn.manifold import TSNE']
    ```

4. 添加pyforest中不包含的库  
    + 找到`_imports.py`文件  
        - 法1:   
            路径：`/Library/Frameworks/Python.framework/Versions/3.10/lib/python3.10/site-packages/pyforest/_imports.py`
        - 法2:   
            `from pyforest import *`光标在`pyforest`上，按住【command+B】进入`pyforest`的源代码(`__init__.py`文件) -> 找到代码行`from ._imports import *`，同样【command+B】进入其源代码，即 `_imports.py`文件 
    + 编辑`_imports.py`文件，添加需要自动导入的库  
        如，在`_imports.py`文件添加 `math`：
        ```python
        # add math 20220720 by lee
        math = LazyImport("import math")
        ```
        则在代码编辑时候就会自动导入`math库`，可运行下面代码测试：
        ```python
        math.floor(3.333)
        ```
        当前代码文件的第一个Cell会自动添加：
        ```python
        import math
        # ^^^ pyforest auto-imports - don't write above this line
        ```


## 三、快捷键、魔术命令行
1. 快捷键
    + 运行： 【Ctrl+Enter】 或 【control+Enter】


## 四、问题处理
### 问题解决：打开【Nbextensions】选择卡后发现下面无内容
1. 问题描述：  
    打开【Nbextensions】选择卡后发现下面无内容，如下图：  
    ![](https://raw.githubusercontent.com/lukelee98/PicBed/main/Pic2022/Nbextension%E9%80%89%E6%8B%A9%E5%8D%A1%E4%B8%8B%E9%9D%A2%E6%97%A0%E5%86%85%E5%AE%B9.png)

2. 原因分析：  
    安装的问题，重新安装
    
3. 解决方法：
    + 卸载
        ```shell 
        pip3 uninstall jupyter_contrib_nbextensions
        pip3 uninstall jupyter_nbextensions_configurator
        ```
        可以看到当前notebook版本为6.4.12
    
    + **重新**安装插件管理器
        1. 注意尝试`pip3`时不用镜像
        2. 尝试`jupyter contrib nbextension install --user`
            https://www.jianshu.com/p/3e38964737bc


## 五、3. 修改jupyter配置文件
1. 找到配置文件
    + linux系统配置文件路径为~/.jupyter/jupyter_notebook_config.py
    + windows系统配置文件路径为C:\Users\User\jupyter\jupyter_notebook_config.py  
    如果没有这个文件，可以使用下面命令生成：
    ```shell
    $ jupyter notebook --generate-config
    ```
    未完成

