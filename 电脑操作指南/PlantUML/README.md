# 绘制UML
> 参考：http://plantuml.com/zh/starting
## 0. 环境准备
&ensp; &ensp; 需要提前安装好Java,是运行PlantUML的必需条件。  
&ensp; &ensp; (如果想绘制除"时序图"和"活动图"以外的图, 就需要安装 Graphviz 软件)

## 1. 下载安装plantuml.jar
1. 下载地址：http://sourceforge.net/projects/plantuml/files/plantuml.jar/download

2. 下载后，双击 plantuml.jar 文件

## 2. 使用plantuml
1. 启动plantUML界面  
    在plantUML界面中，点击"Change Directory",选择一个工作文件夹；
2. 建立文件  
    保持plantUML界面不关闭，可以选择（txt, tex, java, htm, html, c, h, cpp, apt, pu, puml, hpp, hh）任一文件格式，手动在上一步选择的文件夹下手动建立一个文件。比如建立一个demo.txt,内容如下：
    ```
    @startuml
    Alice -> Bob: test
    @enduml
    ```
3. 生成UML文件  
    PlantUML会自动生成一个图像png文件放在该文件夹下。
