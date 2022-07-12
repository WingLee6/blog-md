# Github使用指南
---

0. Github安装  
    下载链接：https://desktop.github.com/
1. 配置Git  
    + 本地创建ssh key:
        ```
        ssh-keygen -t rsa -C "your_email@163.com"
        ```
        your_email@163.com为Github登陆邮箱；
        在用户目录下的隐藏目录.ssh，cd进去，cat里面的id_rsa.pub文件：  
        ```
        cd /Users/XXXXX/.ssh
        cat id_rsa.pub
        ```
        回到网页Github，进入Account Setting（账号设置），左侧选择SSH Keys，Add SSH Key，title随便填，然后**完整**粘贴cat id_rsa.pub的内容到下面内容框；
    + 验证是否创建成功  
        ```
        ssh -T git@github.com
        ```
        如果是第一次的会提示是否continue，输入yes就会看到：You've successfully authenticated, but GitHub does not provide shell access 。这就表示已成功连上github。
    + 设置Username和Email  
        github每一次commit都会记录他们
        ```
        git config --global user.name "yourname"
        git config --global user.email "youremail"
        ```
2. 创建操作
    + 创建一个本地的仓库,并**初始化**
        ```
        cd 
        mkdir gitrepos 
        cd gitrepos/
        git init    # 初始化
        ```
    + 克隆仓库
        ```
        git clone https://github.com/Gordo-li/hahahah
        ```
    + 将本地仓库上传到
        ```
        git remote add origin git@github.com:Gordo-li/hahahah.git
        ```
    + 创建分支：
        ```
        git checkout -b qianduan
        ```
    + 查看当前分支：
        ```
        $ git status
        On branch qianduan
        ······
        ```
    + 查看此仓库的分支：
        ```
        git branch -a
        ```
        如果没有看到你想要的分支,先获取所有分支：
        ```
        git fetch
        ```
    + 切换分支：
        ```
        git checkout qianduan
        ```
    + 将分支推送到远端仓库：
        ```
        git push origin qianduan
        ```
        再把新建的分支删掉：
        ```
        git branch -d qianduan
        ```

3. 上传及更新操作
    + 更新你的本地仓库至最新改动
        ```
        git pull
        ```
        > clone是将一个库复制到你的本地，是一个本地从无到有的过程;  
        pull是指同步一个你在本地有版本的库内容更新的部分到你的本地库
    + 三棵树
        + 添加到暂存区
            ```
            git add README.md
            ```
        + 提交到了 **HEAD**
            ```
            git commit -m "代码提交信息"
            ```
            但是还没到远端仓库；
        + 提交到**远端仓库**
            ```
            git push origin qianduan
            ```
    + 回溯旧版本
        ```
        $ git log --pretty=oneline
        0b1cc6b2d9a387580063b825742806a4d8c3ac38 (HEAD -> qianduan, origin/qianduan, origin/master, origin/HEAD, master) test上传测试‘
        bcfe90db06c597df54c97b16ba996d6b683b51b4 Initial commit

        $ git reset --hard bcfe90db06c597df54c97b16ba996d6b683b51b4
        ```
            
