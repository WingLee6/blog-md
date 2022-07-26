# 随机选中 列表或字符串等 中的元素random.choice()-Python

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [随机选中 列表或字符串等 中的元素random.choice()-Python](#随机选中-列表或字符串等-中的元素randomchoice-python)
  - [`random.choice()`使用语法](#randomchoice使用语法)
  - [实例](#实例)

<!-- /code_chunk_output -->

## `random.choice()`使用语法
```python
import random
random.choice(列表或字符串等)
```

## 实例
1. 在**列表**中随机选：
    ```python
    import random
    print(random.choice(['剪刀', '石头', '布']))
    ```
2. 在**字符串**中随机选：
    ```python   
    import random
    print(random.choice('abcdefghijklmnopqrstuvwxyz'))
    ```
