# 问题解决-VScode如何根据不同文件类型设置诸如tab的长度

> 参考链接： https://www.zhihu.com/question/49624784

## 方法指引
### Step 1： 首选项 -> 设置setting.json （虽然 JSON 不支持注释，但 vs code 的此配置文件支持注释）

### Step 2： 在合适位置增加一下内容
```JSON
{
   "[html]": {
       "editor.tabSize": 4
   },
   "[css]": {
       "editor.tabSize": 4
   },
   "[javascript]": {
       // 按 "Tab" 时插入空格。该设置在 `editor.detectIndentation` 启用时根据文件内容进行重写。
       "editor.insertSpaces": true,
       // 一个制表符等于的空格数。该设置在 `editor.detectIndentation` 启用时根据文件内容进行重写。
       "editor.tabSize": 2
   },
   "[typescript]": {
       "editor.tabSize": 2
   },
   // fortran 需要在 vscode 扩展中安装 fortran 语言支持后设置才生效
   "[fortran]": {
       "editor.tabSize": 2
   }
}
```