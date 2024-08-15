# 备忘录-openCV记录


<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [〇. 写在前面](#〇-写在前面)
  - [0.1 关于OpenCV](#01-关于opencv)
  - [0.2 关于本文档](#02-关于本文档)
  - [0.3 安装OpenCV](#03-安装opencv)
- [一. 图像处理](#一-图像处理)
  - [1.1 读取图像](#11-读取图像)
  - [1.2 保存图像](#12-保存图像)
  - [1.3 图像缩放](#13-图像缩放)
- [X. 一些辨析](#x-一些辨析)
  - [X.1 图像](#x1-图像)
    - [1. 图像的尺寸](#1-图像的尺寸)
    - [2. 图像的通道](#2-图像的通道)
    - [3. 图像的读取 `plt.imread()`和`cv2.imread()`的区别](#3-图像的读取-pltimread和cv2imread的区别)

<!-- /code_chunk_output -->


## 〇. 写在前面
### 0.1 关于OpenCV
OpenCV（Open Source Computer Vision Library）是一个开源计算机视觉库，由Intel、OpenCV.org和其他贡献者共同开发。OpenCV支持多种编程语言，包括C、C++、Python、Java、MATLAB等。OpenCV的主要功能包括图像处理、计算机视觉、机器学习和3D图形。

### 0.2 关于本文档
本文档是对OpenCV的一些常用操作的记录，主要基于Python语言，并附有相应的OpenCV官方文档的链接。

### 0.3 安装OpenCV


## 一. 图像处理
### 1.1 读取图像
OpenCV中读取图像的函数为cv2.imread()，该函数可以读取各种格式的图像文件，并将其转换为OpenCV可以处理的图像格式。

```python
import cv2      

# 读取图像
img = cv2.imread('path/to/image.jpg')

# 显示图像
cv2.imshow('image', img)    

# 等待按键输入
cv2.waitKey(0)      # 光标放到图片上, 点击esc键退出  
cv2.destroyAllWindows()
```

### 1.2 保存图像
OpenCV中保存图像的函数为`cv2.imwrite()`，该函数可以将OpenCV图像格式的图像保存为各种格式的图像文件。

```python
import cv2              

# 读取图像
img = cv2.imread('path/to/image.jpg')

# 保存图像
cv2.imwrite('path/to/save/image.jpg', img)
```


### 1.3 图像缩放
OpenCV中图像缩放的函数为cv2.resize()，该函数可以将图像缩放到指定大小。

```python
import cv2              


# 读取图像
img = cv2.imread('path/to/image.jpg')

# 缩放图像  

# 缩放到指定大小
img_resized = cv2.resize(img, (640, 480))


# 显示图像
cv2.imshow('image', img_resized)        

# 等待按键输入
cv2.waitKey(0)    
cv2.destroyAllWindows()
```




## X. 一些辨析
### X.1 图像

#### 1. 图像的尺寸

- 图像的尺寸：图像的长和宽。
- 图像的宽度：图像的宽度，即图像的列数。
- 图像的高度：图像的高度，即图像的行数。

OpenCV中图像的尺寸可以通过`img.shape`属性获取，其中`img`为读取的图像。

```python
import cv2

# 读取图像
img = cv2.imread('path/to/image.jpg')

# 获取图像的尺寸
img_shape = img.shape
# 获取图像的宽度和高度
width = img.shape[1]
height = img.shape[0]

# 打印图像的尺寸
print('图像的宽度：', width)
print('图像的高度：', height)
```
解析: 
1. `img_shape`：(tuple) 图像的尺寸
    + `img_shape[0]`：图像的高度
    + `img_shape[1]`：图像的宽度
    + `img_shape[2]`：图像的通道数

#### 2. 图像的通道

- 彩色图像：图像中包含三个通道，分别为红色、绿色和蓝色。
- 灰度图像：图像中只有一个通道，表示图像的灰度值。
- 单通道图像：图像中只有一个通道，表示图像的单色值。
- 多通道图像：图像中包含多个通道，表示图像的颜色信息。

OpenCV中图像的通道数可以通过`img.shape`属性获取，其中`img`为读取的图像。

```python
import cv2

# 读取图像
img = cv2.imread('path/to/image.jpg')
# 获取图像的通道数
channels = img.shape[2]

# 判断图像的通道数
if channels == 1:
    print('单通道图像')
elif channels == 3:
    print('彩色图像')
else:
    print('多通道图像')
```

#### 3. 图像的读取 `plt.imread()`和`cv2.imread()`的区别

| description | `plt.imread()` | `cv2.imread()` | 备注 | 
| --- | --- | --- | --- |
| 库名 | `matplotlib` | `OpenCV` |
| 读取图像文件 | 读取图像文件并返回`numpy`数组 | 读取图像文件并返回`OpenCV`图像对象 |
| 颜色通道顺序 | 按照RGB顺序返回 | 按照BGR顺序返回 | 1. 主要区别; </ br>2. 一般情况下，OpenCV的图像处理函数需要BGR格式的图像^[1] ^[2] | 
| 图像尺寸 | 图像尺寸为(高度, 宽度, 通道数) | 图像尺寸为(高度, 宽度, 通道数) |
| 是否能在jupyter notebook中显示 | 可以 | 不可以, 以弹窗形式显示 | 建议不使用`cv2.imshow()`, 转换颜色通道后用`plt.imshow()`显示^[3] |

[1] `plt.imread()`和`cv2.imread()`图像格式转换：
```python
import cv2
import matplotlib.pyplot as plt

# 读取图像
img = cv2.imread('path/to/image.jpg')
# 转换图像格式
img_rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
# 显示图像
plt.imshow(img_rgb)
plt.show()
```
[2] `cv2.imread()`和`plt.imread()`图像格式转换：
```python
import cv2
import matplotlib.pyplot as plt

# 读取图像
img = plt.imread('path/to/image.jpg')
# 转换图像格式
img_bgr = cv2.cvtColor(img, cv2.COLOR_RGB2BGR)
# 显示图像
cv2.imshow('image', img_bgr)
cv2.waitKey(0)
cv2.destroyAllWindows()
```
[3] `plt.imshow()`与`cv2.imshow()`显示相互转换：
```python
import cv2
import matplotlib.pyplot as plt

# 读取图像
img = cv2.imread('path/to/image.jpg')
# 转换图像格式
img_rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
# 本示例为cv2.imshow()转换为plt.imshow()
# 若使用cv2.imshow()则不需要转换格式
# 若plt.imshow()转换为cv2.imshow()则需要转换格式
# img_bgr = cv2.cvtColor(img, cv2.COLOR_RGB2BGR)

# 显示图像
plt.imshow(img_rgb)
plt.show()
```




