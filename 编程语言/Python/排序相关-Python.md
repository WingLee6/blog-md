# 排序相关

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [排序相关](#排序相关)
  - [一、 sort()与sorted()函数](#一-sort与sorted函数)
  - [二、 SortedList](#二-sortedlist)
    - [`SortedList`相关](#sortedlist相关)
    - [`SortedDict`相关](#sorteddict相关)
    - [`SortedSet`相关](#sortedset相关)
  - [三、bisect用法](#三-bisect用法)
    - [查找](#查找)
    - [插入](#插入)

<!-- /code_chunk_output -->

## 一、 sort()与sorted()函数
1. sort函数:
    + sort函数没有返回值；
    + 会改变原元素的值；
2. sorted函数:
    + sorted函数有返回值；
    + 不会改变原元素的值；

示例：
```python
l1 = [10, 3, 13, 3, 8, 20, 55]

print(sorted(l1))                   # 默认升序：[3, 3, 8, 10, 13, 20, 55]
print(sorted(l1, reverse=True))     # True降序：[55, 20, 13, 10, 8, 3, 3]
print(sorted(l1, reverse=False))    # False升序：[3, 3, 8, 10, 13, 20, 55]

print(l1)                           # sorted()对l1不影响：[10, 3, 13, 3, 8, 20, 55]

l1.sort()                           
print(l1)                           # 默认升序：[3, 3, 8, 10, 13, 20, 55]
l1.sort(reverse=True)               
print(l1)                           # True降序：[55, 20, 13, 10, 8, 3, 3]
l1.sort(reverse=False)
print(l1)                           # False升序：[3, 3, 8, 10, 13, 20, 55]

```


## 二、 SortedList
包含三个类：`SortedList`、`SortedDict`、`SortedSet`

### `SortedList`相关
1. `SortedList`基础操作
    ```python 
    from sortedcontainers import SortedList
    sl = SortedList([3,5,1])

    print(sl)                   # output: SortedList([1, 3, 5])

    # 添加元素
    sl.add(2) 
    sl.add(8)
    sl.add(1)
    print(sl)                   # output: SortedList([1, 1, 2, 3, 5, 8])

    # 删除元素 元素不存在时会报错
    sl.remove(4) 
    # 删除元素 元素不存在时不会报错
    sl.discard(1) 
    print(sl)                   # output: SortedList([1, 2, 3, 8])

    # 移除最后一个元素
    sl.pop() 
    print(sl)                   # output: SortedList([1, 2, 3])

    # 查找元素存在的位置
    pos_left = sl.bisect_left(3)        # bisect相关见“bisect用法”
    pos_right = sl.bisect_right(3)
    print(pos_left, pos_right)  # output: 2 3
    
    # 计数
    num = sl.count(2) 
    print(num)                  # output: 2 3
    
    # 返回第一次出现的下标
    print(sl.index(2))          # output: 1
    ```

2. `SortedList`其他设置
    + 逆序排序:
        ```python
        from sortedcontainers import SortedList
        from operator import neg
        
        sl = SortedList([3,5,1,2,7,6,4], key=neg)
        
        print(sl)           # output: SortedKeyList([7, 6, 5, 4, 3, 2, 1], key=<built-in function neg>)
        ```

    + 按字符串长度排序:
        ```python
        from sortedcontainers import SortedList

        sl = SortedList(["1", "431", "34"], key=lambda item:len(item))
        
        print(sl)           # output: SortedKeyList(['1', '34', '431'], key=<function <lambda> at 0x7fb883b36820>)
        ```


### `SortedDict`相关
1. `SortedDict`基础操作
    ```python
    from sortedcontainers import SortedDict
    
    sd = SortedDict({'c': 3, 'a': 10, 'b': 2})
    # 会按key值排序
    print(sd)                   # output: SortedDict({'a': 10, 'b': 2, 'c': 3})
    
    # 字典的key值列表
    print(sd.keys())            # output: SortedKeysView(SortedDict({'a': 10, 'b': 2, 'c': 3}))
    
    # 删除元素
    # 按序号删除
    sd.popitem(index=-1)
    print(sd)                   # output: SortedDict({'a': 1, 'b': 2})
    # 按key值删除
    sd.pop('a')                 
    print(sd)                   # output: SortedDict({'b': 2})
    
    ```
    

### `SortedSet`相关
1. `SortedSet`基础操作
    ```python
    from sortedcontainers import SortedSet

    ss = SortedSet('abracadabra')   
    print(ss)                   # output: SortedSet(['a', 'b', 'c', 'd', 'r'])

    print(ss.bisect_left('4'))  # output: 4
    ```









## 三、bisect用法
> bisect是python内置模块，用于**有序**序列的插入和查找。

### 查找
1. `bisect_left(array, item)`:
    在**有序**列表`array`中查找`item`元素；
    + 若`item`存在，返回`item`**左侧**下标（若有多个相同`item`，返回第一个下标）；
    + 若`item`不存在，返回在**有序**列表`array`中应该插入的位置下标；  
    
    示例：
    ```python
    import bisect
    arr = [1, 13, 13, 13, 18, 20, 55]
    
    # 若`13`元素存在于列表中
    idx_left = bisect.bisect_left(arr, 13)
    print(idx_left)                 # output: 1
    
    # 若`15`元素不存在于列表中
    idx_left = bisect.bisect_left(arr, 15)
    print(idx_left)                 # output: 4  （应当插入到下标为4的位置，不影响列表的有序性）
    ```

2. `bisect_right(array, item)`:
    在**有序**列表`arry`中查找`item`元素；
    + 若`item`存在，返回`item`**右侧**下标+1（若有多个相同`item`，返回最后一个元素下标+1）；
    + 若`item`不存在，返回在**有序**列表`arry`中应该插入的位置下标；
    
    示例：
    ```python
    import bisect
    arr = [1, 13, 13, 13, 18, 20, 55]
    
    idx_right = bisect.bisect_right(arr, 13)
    print(idx_right)                # output: 4

    idx_right = bisect.bisect_right(arr, 15)
    print(idx_right)                # output: 4
    ```


### 插入
1. insort(array,item)
2. insort_left(array,item)
3. insort_right(array,item)
    
    示例：
    ```python
    import bisect
    arr = [1, 13, 13, 13, 18, 20, 55]
    
    # 用可变序列内置的insert方法插入
    arr.insert(idx_left, 13)
    print(arr)        # output: [1, 13, 13, 13, 13, 18, 20, 55]
    ```

