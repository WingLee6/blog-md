# 计算凸包 ConvexHull -Python

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [计算凸包 ConvexHull -Python](#计算凸包-convexhull-python)
  - [凸包的定义](#凸包的定义)
  - [Python计算](#python计算)

<!-- /code_chunk_output -->

## 凸包的定义
https://baike.baidu.com/item/%E5%87%B8%E5%8C%85/179150?fr=aladdin


## Python计算
1. 参考：https://blog.csdn.net/weixin_35757704/article/details/122707064
2. 示例：
    ```python
    from scipy.spatial import ConvexHull
    import numpy as np

    points = np.array([
        [0, 0],
        [0, 2],
        [2, 0],
        [2, 2],
        [1, 1],
    ])
    hull = ConvexHull(points)
    print("凸包：")
    print(points[hull.vertices])
    ```