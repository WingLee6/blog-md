# 备忘录 - 保存 Linux 会话
> 在SSH断开后重新连接，如果你希望查看先前运行的Python代码的运行情况，有几种常见的方法：

1. **通过`screen`或`tmux`**：
   - 这两个工具可以创建一个持久的会话，你可以在断开SSH连接后重新连接并恢复之前的会话。
   - 使用方法：
     - 进入服务器后，使用命令启动一个新的会话：
       ```bash
       screen -S my_session
       ```
       或者：
       ```bash
       tmux new -s my_session
       ```
     - 在会话中运行你的Python代码。
     - 如果SSH断开，重新连接后可以通过以下命令恢复会话：
       ```bash
       screen -r my_session
       ```
       或者：
       ```bash
       tmux attach -t my_session
       ```

2. **使用`nohup`命令**：
   - 这个命令可以让你的程序在后台运行，即使SSH断开，程序仍然会继续运行。
   - 你可以这样运行代码：
     ```bash
     nohup python my_script.py &
     ```
   - 输出将被保存到`nohup.out`文件中，你可以使用`tail -f nohup.out`查看运行情况。

3. **使用Jupyter Notebook**：
   - 如果你习惯使用Jupyter Notebook，可以在服务器上启动它，然后通过浏览器进行访问。即使SSH断开，你的代码仍然会在服务器上运行。

4. **查看日志文件**：
   - 如果你的Python代码会产生日志文件，你可以通过重新连接服务器并查看日志文件来了解代码的运行情况。

如果你之前没有使用类似`screen`或`nohup`，代码可能已经因为SSH断开而终止了。以后建议在运行长时间任务时使用这些工具来避免意外断开连接带来的影响。