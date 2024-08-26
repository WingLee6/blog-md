# 撤回最近一次的 commit

可以使用 `git reset` 或 `git revert` 命令，具体取决于你的需求：

1. 撤回最近一次 commit 并保留修改（即将修改放入暂存区）：
    ```bash
    git reset --soft HEAD~1
    ```

2. 撤回最近一次 `commit` 并丢弃修改（即不保留修改）：
    ```bash
    git reset --hard HEAD~1
    ```
3. 创建一个新的 commit 来撤销最近一次 `commit` 的修改（保留历史记录）：
    ```bash
    git revert HEAD
    ```
    如果你已经推送到远程仓库，git revert 是最安全的选择，因为它不会改变历史记录。