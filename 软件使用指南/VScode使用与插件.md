# VScode使用与插件.md


<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [VScode使用与插件.md](#vscode使用与插件md)
  - [一、VScode使用](#一-vscode使用)
    - [设置快捷键](#设置快捷键)
    - [设置](#设置)
    - [命令](#命令)
  - [二、插件介绍](#二-插件介绍)
    - [Markdown Preview Enhanced（MPE）(生成目录、生成PDF、流程图)](#markdown-preview-enhancedmpe生成目录-生成pdf-流程图)
    - [GitLens + Git Graph + Git History（Git相关）](#gitlens-git-graph-git-historygit相关)
      - [1. GitLens （git文件和操作信息）](#1-gitlens-git文件和操作信息)
      - [2. Git Graph （看到Git流程图）](#2-git-graph-看到git流程图)
      - [3. Git History （查看Git历史）](#3-git-history-查看git历史)
    - [Codelf(变量命名神器)](#codelf变量命名神器)
    - [Tabnine (智能补全代码)](#tabnine-智能补全代码)
    - [Leetcode (刷题插件)](#leetcode-刷题插件)

<!-- /code_chunk_output -->



## 一、VScode使用
### 设置快捷键
Code->首选项->键盘快捷方式
### 设置
Code->首选项->设置
### 命令
`cmd + shift + p`



## 二、插件介绍
### Markdown Preview Enhanced（MPE）(生成目录、生成PDF、流程图) 
> 名称: Markdown Preview Enhanced  
ID: shd101wyy.markdown-preview-enhanced  
说明: Markdown Preview Enhanced ported to vscode  
版本: 0.6.3  
发布者: Yiyi Wang  
VS Marketplace 链接: https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced

> 官方中文文档: https://shd101wyy.github.io/markdown-preview-enhanced/#/zh-cn/
1. MarkDown显示更多

2. 生成目录
    + 你可以通过 `cmd + shift + p`  
    + 选择或搜索 `Markdown Preview Enhanced: Create Toc` 命令来创建 TOC
    + 多个目录被创建
        + 需要先打开md预览，然后保存(`cmd + s`)当前md文档，才会看到更新目录。
    
    **注**：如果你想要在你的 TOC 中排除一个标题，请在你的标题 后面 添加 `{ignore=true}` 即可。
3. 导出PDF
    参考: https://shd101wyy.github.io/markdown-preview-enhanced/#/zh-cn/prince

4. 流程图 / 时序图 以及各种其他种类的图形
    + 支持flow charts, sequence diagrams, mermaid, PlantUML, WaveDrom, GraphViz，Vega & Vega-lite，Ditaa 图像渲染
    + 参考官方文档：
        https://shd101wyy.github.io/markdown-preview-enhanced/#/zh-cn/diagrams

6. Markdown代码运行
    > 官方文档：https://shd101wyy.github.io/markdown-preview-enhanced/#/zh-cn/code-chunk?id=latex
    
    > 脚本运行默认是禁用的并且需要在 Atom 和 VSCode 的插件设置中开启来进行使用【**请小心使用这一特性，因为它很有可能造成安全问题**】
    Step 1: 点击；Code->首选项->设置；
    Step 2: 搜索`enableScriptExecution`，找到并勾选。
    ![](https://raw.githubusercontent.com/lukelee98/PicBed/main/Pic2022/CodeChunk.png)

    > 问题解决：代码含有中文无法运行？
    解决方法：如Python3，加上`#-- coding:UTF-8 --`
    
    示例：
    ![](https://raw.githubusercontent.com/lukelee98/PicBed/main/Pic2022/chunk.png)
    代码块右上角会显示操作键，点击运行会将运行解决显示在下面。
    
    + Markdown 之 Python3编译
        示例 1: Python3
        ```python {cmd="/usr/local/bin/python3"}
        print("这个将会运行 python3 程序")
        ```
        
        示例 2: matplotlib画图
        ```python {cmd=true matplotlib=true}
        import matplotlib.pyplot as plt
        plt.plot([1,2,3, 4])
        plt.show() # show figure
        ```
    + Markdown 之 LaTex编译
      
        需要先安装好 `pdf2svg` 以及 `LaTeX engine`
        + https://shd101wyy.github.io/markdown-preview-enhanced/#/zh-cn/extra?id=install-svg2pdf

    
    
5. LaTeX 数学
    + `$...$` 或者 `\(...\)` 中的数学表达式将会在行内显示
        示例 :
        $f(x) = sin(x)$
    + `$$...$$` 或者 `\[...\]` 或者 ````math` 中的数学表达式将会在块内显示
        示例 :
        $$\sum_{\mathclap{1\le i\le j\le n}} x_{ij}$$
    
    > 更多数学符号表示：https://katex.org/docs/supported.html

    
    

### GitLens + Git Graph + Git History（Git相关）
#### 1. GitLens （git文件和操作信息）
> 名称: GitLens — Git supercharged
ID: eamodio.gitlens
说明: Supercharge Git within VS Code — Visualize code authorship at a glance via Git blame annotations and CodeLens, seamlessly navigate and explore Git repositories, gain valuable insights via rich visualizations and powerful comparison commands, and so much more
版本: 12.1.2
发布者: GitKraken
VS Marketplace 链接: https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens

#### 2. Git Graph （看到Git流程图）
> 名称: Git Graph
ID: mhutchie.git-graph
说明: View a Git Graph of your repository, and perform Git actions from the graph.
版本: 1.30.0
发布者: mhutchie
VS Marketplace 链接: https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph

#### 3. Git History （查看Git历史）
>名称: Git History
ID: donjayamanne.githistory
说明: View git log, file history, compare branches or commits
版本: 0.6.19
发布者: Don Jayamanne
VS Marketplace 链接: https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory


### Codelf(变量命名神器)
>名称: Codelf
ID: unbug.codelf
说明: Best GitHub stars, repositories tagger and organizer. Search Github, GitLab to find real-world usage variable names.
版本: 11.7.0
发布者: unbug
VS Marketplace 链接: https://marketplace.visualstudio.com/items?itemName=unbug.codelf

### Tabnine (智能补全代码)
>名称: Tabnine AI Autocomplete for Javascript, Python, Typescript, PHP, Go, Java, Ruby & more
ID: TabNine.tabnine-vscode
说明: 👩‍💻🤖 JavaScript, Python, Java, Typescript & all other languages - AI Code completion plugin. Tabnine makes developers more productive by auto-completing their code.
版本: 3.6.5
发布者: TabNine
VS Marketplace 链接: https://marketplace.visualstudio.com/items?itemName=TabNine.tabnine-vscode


### Leetcode (刷题插件)
>名称: LeetCode
ID: LeetCode.vscode-leetcode
说明: Solve LeetCode problems in VS Code
版本: 0.18.1
发布者: 力扣 LeetCode
VS Marketplace 链接: https://marketplace.visualstudio.com/items?itemName=LeetCode.vscode-leetcode

### AREPL for python(代码实时输出与评价)
>名称: AREPL for python
ID: almenon.arepl
说明: real-time python scratchpad
版本: 2.0.3
发布者: Almenon
VS Marketplace 链接: https://marketplace.visualstudio.com/items?itemName=almenon.arepl

1. 仅限Python；
2. 点击上面狐狸头标志（类似markdown)；
3. 若没有出现在右栏就保存一下代码；
4. 效果如图：
    ![](https://raw.githubusercontent.com/lukelee98/PicBed/main/Pic2022/AREPL%20for%20python.png)



