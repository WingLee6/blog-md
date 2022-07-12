# Matlab数字图像处理学习文档


<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Matlab数字图像处理学习文档](#matlab数字图像处理学习文档)
  - [一、 图像的输入/输出和显示](#一-图像的输入输出和显示)
  - [二、 灰度变换函数](#二-灰度变换函数)
    - [函数imadjust和stretchlim](#函数imadjust和stretchlim)
  - [三、 直方图相关函数](#三-直方图相关函数)
  - [四、 空间滤波](#四-空间滤波)
    - [1. 线性空间滤波 -- imfilter](#1-线性空间滤波-imfilter)
      - [最常见的 imfilter 的语法为：](#最常见的-imfilter-的语法为)
      - [示例演示：](#示例演示)
    - [2. 非线性空间滤波](#2-非线性空间滤波)
        - [略](#略)
    - [3. 标准空间滤波器 -- 滤波模版](#3-标准空间滤波器-滤波模版)
      - [线性空间滤波器](#线性空间滤波器)
      - [非线性空间滤波器](#非线性空间滤波器)
        - [中值滤波器演示：](#中值滤波器演示)

<!-- /code_chunk_output -->

## 一、 图像的输入/输出和显示
```matlab
% 读取图像
f = imread('f0203.tif')

% 显示图像
% 显示图像方法一：若显示多幅图像，可保存第一幅并显示第二幅
figure, imshow(f)
% 或方法二：显示一幅一幅的显示 imshow(f)
```

生成被椒盐噪声污染的图像：
```matlab
fn = imnoise(f, 'salt & pepper', 0.2)
% 设置噪声黑点和白点出现的概率为0.2
```

## 二、 灰度变换函数
### 函数imadjust和stretchlim
1. 函数**imadjust** 基本语法  

    g = imadjust(f, [low_in high_in], [low_out high_out], gamma)

    ###### 参数解释：
    + **gamma**：当gamma<1偏亮，当gamma=1原图，当gamma>1偏案；

    ```matlab
    % 第一步：读取图像，并显示原图像
    f = imread('f0203.tif')
    figure, imshow(f)
    % 第二步：使用函数imadjust
    % % 效果：明暗反转
    % % 相同效果函数：g = imcomplement(f)
    g1 = imadjust(f, [0 1], [1 0]);
    figure, imshow(g1)
    % 第三步：调整参数
    % % 效果：将0.5至0.75之间的灰度拓展到整个[0, 1]范围
    g2 = imadjust(f, [0.5 0.75], [0 1]);
    figure, imshow(g2)
    % 第四步：通过压缩灰度级的低端并拓展高端，增加更多灰色调
    g3 = imadjust(f, [ ], [ ], 2)
    figure, imshow(g3)
    ```

2. 函数 **stretchlim** 基本语法
    Low_High = stretchlim(f)
    ###### 参数解释：
    + Low_High：Low_High包含图像f中从顶部到底部的全部灰度级； 

    代码实现：
    ```matlab
    % 第一步：读取图像，并显示原图像
    f = imread('f0203.tif')
    figure, imshow(f)

    % 使对比度增强
    g = imadjust(f, stretchlim(f), []);
    figure, imshow(g)
    % 负片（明暗转换）效果
    g1 = imadjust(f, stretchlim(f), [1 0]);
    figure, imshow(g1)
    ```

3. 利用对数变换减少动态范围

    ```matlab
    % 第一步：读取图像，并显示原图像
    f = imread('f0203.tif')
    figure, imshow(f)

    g3 = im2uint8(mat2gray(log(1 + double(f))));
    figure, imshow(g3) 
    ``` 
    ###### 函数解释：
    + mat2gray： 归一化，将值限定在[0,1]范围内；
    + im2uint8：将值限定在[0,255]范围内，把图像转换为uint8类；

## 三、 直方图相关函数
1. 直方图：
    ```matlab
    h = imhist(f, b)
    ```
    ###### 参数解释：
    + f：为输入图像；
    + h：为其直方图；
    + b：用来形成直方图的“容器”的数目（可空，默认为256）;

2. 归一化直方图
    ```matlab
    hnorm = imhist(f)./numel(f)
    ```
    ###### 参数解释：
    + numel(f)： 该函数表示数组f中的元素数（即图像中的像素数）

3. 用条形图绘制直方图
    ```matlab
    bar(horz, z, width)
    ```
    ###### 参数解释：
    + horz：若省略则水平轴会从0到length(z)等分成若干个单位
    + z：
    + width：为条形宽度，范围在0～1之间，若为 1 则竖条较为明显，0 则竖条是垂直线，默认为0.8

    ###### 示例演示：
    ```matlab
    h = imhist(f, 25);
    bar(h)
    ```

4. 直方图均衡
    ```matlab
    g = histeq(f, nlev)
    ```
    ###### 参数解释：
    + nlev：为输出图像设定的灰度级，默认为64，一般最大为256；
    ###### 示例演示：
    ```matlab
    g = histeq(f, 256);
    figure, imshow(g) % 显示均衡后的图像
    figure, imhist(g) % 显示均衡后的直方图
    ```

5. 直方图匹配（规定化）
    ```matlab
    g = histeq(f, hspect)
    ```

6. 自适应直方图均衡：
    ```matlab
    g = adapthisteq(f, paraml, vall, param2, val2, ···）
    ```
    ###### 参数解释：
    + param/val为下表所示内容：
        参数 | 值 
        :-: | :-
        'NumTiles' | 一个有正整数组成的两元素向量[r, c]，由向量的行和列指定小片数。r和c都必须至少是2，小片总数等于r*c。默认值是[8  8]
        'ClipLimit' | 范围是[0 1]内的标量，用于指定对比度增强的限制。较高的值**产生较强的对比度**。默认值是0.01
        'NBins' | 针对建立对比度增强变黄所用的直方图容器数目指定的正整数标量。较高的值会在较慢的处理速度下导致较大的动态范围。默认值是256
        'Range' | 规定输出图像数据范围的字符串  <br>1. 'original'——范围被限制到原始图像的范围，[min(f(: ))  max(f(: ))]; <br>2. 'full'——使用输出图像类的整个范围。例如，对于uint8类的数据，范围是[0 255]。这是默认值。
        'Distribution'|为图像小片指定期望直方图形状的字符串<br>1. 'uniform'——平坦的直方图（默认）； <br>2. 'rayleigh'——钟形直方图；<br>3. 'exponential'——曲线直方图；<br>4. 'Alpha' 适用于瑞利和指数分布的非负标量。默认值为0.4；

    ###### 示例演示：
    ```matlab
    % 本代码片含三个示例，暗部细节逐渐加强
    g1 = adapthisteq(f);
    figure, imshow(g1)
    
    % 将小片尺寸增加到[25 25], 清晰度增强，但没有更多细节
    g2 = adapthisteq(f, 'NumTiles', [25, 25]);
    figure, imshow(g2)

    % 增加对比度
    g3 = adapthisteq(f, 'NumTiles', [25, 25], 'ClipLimit', 0.05);
    figure, imshow(g3) 
    % 对比 g1和g3 证明：局部增强方法好于全局增强方法，但是要付出额外的函数复杂性；
    ```

## 四、 空间滤波
### 1. 线性空间滤波 -- imfilter
使用函数 imfilter 来实现线性空间滤波，该函数的语法如下：
```matlab
g = imfiter(f, w, filtering_mode, boundar_options, size_options)
```
**参数解释**：
+ f： 为输入图像；
+ w： 为滤波模版；
+ g： 为滤波后结果；
+ filtering_mode： 为滤波形式，默认为`'corr'`【相关】, 对【卷积】规定为`'conv'`；
+ boundar_options： 为处理边界填充问题，边界大小由滤波器的尺寸决定；
    + P：默认为0，选项为P（注意无引号）；
    + 'replicate': 图像大小通过复制外边界的值来扩展；
    + 'symmetric': 图像大小通过镜像反射其边界来扩展；
    + 'circular': 图像大小通过将图像看成是一个二维周期函数的一个周期来扩展；

+ size_options： 不是‘same’，就是‘full’；

#### 最常见的 imfilter 的语法为：
1. 实现标准的线性空间滤波（默认为【相关】）
    ```matlab
    g = imfilter(f, w, 'replicate')
    ```

2. 若希望实现【卷积】，有以下两个方法：
    方法一，
    ```matlab
    g = imfilter(f, w, 'conv', 'replicate')
    ```
    方法二，先使用函数rot90(w,2)把w转动180度：
    ```matlab
    g = imfilter(f, rot90(w, 2), 'replicate')
    ```
    注：函数rot90(w,k)将w旋转🉑k*90度，其中k为整数；

结果将是一幅大小于输入相关的图像g（即前面的**默认'same'模式**）

#### 示例演示：
```matlab
f = imread('f0216.tif')
figure, imshow(f)

% 10X10的滤波器
w = ones(10);
% 使用默认边界选项，即用0（黑色）对图像边界进行填充。滤波后的图像中黑白边界将被模糊
gd = imfilter(f, w);
figure, imshow(gd, [])
% 解决上述问题；
% % 方法1：'replicate'
gr = imfilter(f, w, 'replicate');
figure, imshow(gr, [])
% % 方法2：'symmetric'
gs = imfilter(f, w, 'symmetric');
figure, imshow(gs, [])
% % 方法3：'circular'
gc = imfilter(f, w, 'circular');
figure, imshow(gc, [])
```

### 2. 非线性空间滤波
##### 略

### 3. 标准空间滤波器 -- 滤波模版
#### 线性空间滤波器
预定义的二维线性空间滤波器，通过函数 fspecial 得到，该函数将生成哟个滤波模版w， 语法为：
```matlab
w = fspecial('type', parameters)
```
**参数解释**：
+ type：指定滤波器的类型，类型见下表；
+ parameters：进一步定义滤波器；
    类型（type） | 语法和参数 
    :-: | :-
    'average' | 为均值滤波，参数为hsize代表模板尺寸，默认值为【3，3】。
    'disk' | 为圆形区域均值滤波，参数为radius代表区域半径，默认值为5.
    'gaussian' | 为高斯低通滤波，有两个参数，hsize表示模板尺寸，默认值为【3 3】，sigma为滤波器的标准值，单位为像素，默认值为0.5.
    'laplacian' | 为拉普拉斯算子，参数alpha用于控制算子形状，取值范围为【0，1】，默认值为0.2.
    'log' | 为拉普拉斯高斯算子，有两个参数，hsize表示模板尺寸，默认值为【3 3】，sigma为滤波器的标准差，单位为像素，默认值为0.5.
    'motion' | 为运动模糊算子，有两个参数，表示摄像物体逆时针方向以theta角度运动了len个像素，len的默认值为9，theta的默认值为0；
    'prewitt' | 用于边缘增强，大小为【3 3】，无参数
    'sobel' | 用于边缘提取，无参数
    'unsharp' | 为对比度增强滤波器。参数alpha用于控制滤波器的形状，范围为【0，1】，默认值为0.2.

#### 非线性空间滤波器
函数 ordfilter2 计算统计排序滤波器（也称**排序滤波器**），语法为
```matlab
g = ordfilter2(f, order, domain)
```
**参数解释**：
+ order：使用邻域的排序集合中的第order个元素代替f中的每个元素，来生成输出图像g；
+ domain： 邻域由domain内的非零元素指定，这里domain是一个由0和1组成的m*n的矩阵；
例如：实现一个大小为m*n的最小滤波器（排序1），语法为：
```matlab
g = ordfilter2(f, 1, ones(m, n))
```
在排序滤波器中最著名的是**中值滤波器**，由两种实现方式：
+ 方法1: 使用ordfilter2函数，对应第50个百分位；
    ```matlab
    g = ordfilter2(f, (m*n + 1)/2, ones(m, n))
    ```
+ 方法2: 二维中值滤波专门实现函数：
    ```matlab
    g = medfilt2(f, [m n], padopt)
    ```
    **参数解释**：
    + 数组[m n]定义一个大小为m*n的邻域，在该邻域上计算中值；
    + padopt： 指定三个可能的边界填充选项，'zeros'（默认），'symmetric'指出f按镜像反射方式对称的沿边界扩展，'indexed'表示若f是double类的则用1填充，否则用0填充。
    默认语法为：`g = medfilt2(f)`
##### 中值滤波器演示：
```matlab
% 将图像加上校验噪声
fn = imnoise(f, 'salt & pepper', 0.2)
figure, imshow(fn)

% 对带噪声的图像进行中值滤波
gm = medfilt2(fn);
figure, imshow(gm)

% 上述图像由黑色污点，使用'symmetric'选项可降低黑点
gms = medfilt2(fn, 'symmetric');
figure, imshow(gms)
```















