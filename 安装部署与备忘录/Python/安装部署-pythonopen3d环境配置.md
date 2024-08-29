# 安装部署 - Python open3d 环境配置(+conda)

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Mac版本安装](#mac版本安装)
  - [1. 创建conda环境](#1-创建conda环境)
  - [2. 安装open3d](#2-安装open3d)
  - [3. 验证安装](#3-验证安装)
- [Windows11版本安装](#windows11版本安装)
- [问题解决](#问题解决)

<!-- /code_chunk_output -->


## Mac版本安装
### 1. 创建conda环境
+ Python版本：3.9

### 2. 安装open3d
```bash
pip install open3d
```
输出: 
```
......
Successfully installed Flask-3.0.3 Jinja2-3.1.4 MarkupSafe-2.1.5 addict-2.4.0 attrs-24.2.0 blinker-1.8.2 certifi-2024.7.4 charset-normalizer-3.3.2 click-8.1.7 configargparse-1.7 contourpy-1.2.1 cycler-0.12.1 dash-2.17.1 dash-core-components-2.0.0 dash-html-components-2.0.0 dash-table-5.0.0 fastjsonschema-2.20.0 fonttools-4.53.1 idna-3.7 importlib-metadata-8.2.0 importlib-resources-6.4.0 itsdangerous-2.2.0 joblib-1.4.2 jsonschema-4.23.0 jsonschema-specifications-2023.12.1 jupyter-core-5.7.2 kiwisolver-1.4.5 matplotlib-3.9.2 nbformat-5.10.4 nest-asyncio-1.6.0 numpy-2.0.1 open3d-0.18.0 packaging-24.1 pandas-2.2.2 pillow-10.4.0 platformdirs-4.2.2 plotly-5.23.0 pyparsing-3.1.2 pyquaternion-0.9.9 python-dateutil-2.9.0.post0 pytz-2024.1 pyyaml-6.0.2 referencing-0.35.1 requests-2.32.3 retrying-1.3.4 rpds-py-0.20.0 scikit-learn-1.5.1 scipy-1.13.1 six-1.16.0 tenacity-9.0.0 threadpoolctl-3.5.0 tqdm-4.66.5 traitlets-5.14.3 typing-extensions-4.12.2 tzdata-2024.1 urllib3-2.2.2 werkzeug-3.0.3 zipp-3.20.0
```
表示安装成功

### 3. 验证安装
```python
import open3d as o3d  
import numpy as np  
  
def create_sphere(center, radius, num_points=1000):  
    """  
    创建一个球体并返回其点云  
  
    参数:  
    - center: 球心坐标 (x, y, z)  
    - radius: 球的半径  
    - num_points: 球体表面点的数量  
  
    返回:  
    - 点云对象  
    """  
    # 生成球体表面的点  
    theta = np.linspace(0, 2 * np.pi, num_points)  
    phi = np.linspace(0, np.pi, num_points // 2)  
    theta, phi = np.meshgrid(theta, phi)  
    theta = theta.flatten()  
    phi = phi.flatten()  
  
    x = center[0] + radius * np.sin(phi) * np.cos(theta)  
    y = center[1] + radius * np.sin(phi) * np.sin(theta)  
    z = center[2] + radius * np.cos(phi)  
  
    points = np.vstack((x, y, z)).transpose()  
    pcd = o3d.geometry.PointCloud()  
    pcd.points = o3d.utility.Vector3dVector(points)  
  
    return pcd  
  
# 使用函数  
center = [0, 0, 0]  # 球心  
radius = 1.0  # 半径  
num_points = 2000  # 点的数量  
  
sphere = create_sphere(center, radius, num_points)  
  
# 可视化  
o3d.visualization.draw_geometries([sphere])
```
会生产一个彩色球体，显示在3D视图中


## Windows11版本安装
1. 创建conda环境
    + Python版本：3.8

2. 安装基础库
    ```bash
    conda install opencv
    conda install numpy 
    conda install matplotlib 
    ```

3. 安装open3d
    ``` 
    conda install -c open3d-admin open3d
    ```
4. 验证安装
    [同上](#3-验证安装)


5. 若不可以, 则在输入命令行
    ```bash
    pip install open3d -U
    ```
    这个会下载很多东西, 等5分钟左右, 然后安装成功.



## 问题解决
1. 内核报错
    在python环境中, 用pip安装open3d, 安装成功, 但是在jupyter运行出现报错,无法导入包:
    ```
    在当前单元格或上一个单元格中执行代码时 Kernel 崩溃。
    请查看单元格中的代码，以确定故障的可能原因。
    单击此处了解详细信息。
    有关更多详细信息，请查看 Jupyter log。
    ```
    问题解决:
    用conda安装更兼容环境
    ```
    conda install -c open3d-admin -c conda-forge open3d
    ```