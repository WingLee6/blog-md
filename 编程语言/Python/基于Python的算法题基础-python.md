# 基于Python的算法题基础 -python

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [基于Python的算法题基础 -python](#基于python的算法题基础-python)
  - [一、基础语法](#一-基础语法)
  - [二、常用方法](#二-常用方法)
    - [1. `repr()` 将 变量的数据和转义字符 都显化为 字符串](#1-repr-将-变量的数据和转义字符-都显化为-字符串)
  - [三、常用模块](#三-常用模块)
    - [1. `collections`模块](#1-collections模块)
      - [功能一： `collections.Counter()` 对变量进行统计且将结果字典化](#功能一-collectionscounter-对变量进行统计且将结果字典化)
      - [功能二： `collections.deque()` 操作双端队列](#功能二-collectionsdeque-操作双端队列)
      - [功能三： `collections.defaultdict()` 生成带默认值字典](#功能三-collectionsdefaultdict-生成带默认值字典)
    - [2. `random` 随机模块](#2-random-随机模块)
      - [功能一： `random.choice()` 随机选中 列表或字符串等 中的元素](#功能一-randomchoice-随机选中-列表或字符串等-中的元素)
    - [3. `sortedcontainers` 排序模块](#3-sortedcontainers-排序模块)
      - [功能一：`sortedcontainers.SortedList()`对列表元素排序](#功能一sortedcontainerssortedlist对列表元素排序)
      - [功能二：`sortedcontainers.SortedDict()`对字典排序](#功能二sortedcontainerssorteddict对字典排序)
      - [功能三：`sortedcontainers.SortedSet()`对集合排序](#功能三sortedcontainerssortedset对集合排序)
    - [4. `bisect` 对**有序**序列的插入和查找](#4-bisect-对有序序列的插入和查找)
      - [功能一： 查找](#功能一-查找)
      - [功能二： 插入](#功能二-插入)
  - [四、 大合集](#四-大合集)
    - [1. 排序相关](#1-排序相关)
      - [方法一. `text_list.sort()`与`sorted(text_list)`函数](#方法一-text_listsort与sortedtext_list函数)
      - [方法二. 利用`sortedcontainers`模块实现](#方法二-利用sortedcontainers模块实现)
      - [方法三. 利用`bisect`模块实现](#方法三-利用bisect模块实现)
  - [附录：](#附录)
    - [A. 链表的Python实现](#a-链表的python实现)
    - [B. 二叉树的Python实现](#b-二叉树的python实现)
    - [C. Python中Switch/Case实现](#c-python中switchcase实现)

<!-- /code_chunk_output -->


## 一、基础语法

## 二、常用方法
### 1. `repr()` 将 变量的数据和转义字符 都显化为 字符串 
1. 对于字符串
    ```python{cmd=true}
    text1 = "xxx"
    print(text1)
    print(text1[0])

    print(repr(text1))
    print(repr(text1)[0])
    ```
    打印输出内容：
    ```
    xxx         # 正常输出字符串
    x           # 输出字符串第一个字符
    'xxx'       # 将字符串的引号也字符串化
    '           # 将repr显化后的字符串第一个字符输出
    ```

2. 对于列表
    ```python{cmd=true}
    text2 = ['q', 'w']
    print(text2)        
    print(text2[0])

    print(repr(text2))
    print(repr(text2)[0])
    ```
    打印输出内容：
    ```
    ['q', 'w']      # 正常输出列表
    q               # 输出列表第一个元素
    ['q', 'w']      # 输出的内容其实是一个字符串，等同于"['q', 'w']"
    [               # 输出字符串（"['q', 'w']"）的第一个字符
    ```

3. 对于字典
    ```python{cmd=true}
    text3 = {'k': 'v'}
    print(text3)
    print(text3['k'])

    print(repr(text3))
    print(repr(text3)['k'])
    ```
    打印输出内容：
    ```
    {'k': 'v'}      # 正常输出字典
    v               # 输出字典的第一个值
    {'k': 'v'}      # 输出 将字典字符串化 的内容
    **报错**         # 已经字符串化后的字典，没有key值，因此 **报错**
    ```

4. 对于转义字符
    ```python{cmd=true}
    text4 = "xx\\x"
    print(text4)
    print(repr(text4))
    ```
    打印输出内容：
    ```
    xx\x            # 正常输出字符串
    'xx\\x'         # 将 变量的数据和转义字符 都显化变为 字符串 
    ```




## 三、常用模块
### 1. `collections`模块
#### 功能一： `collections.Counter()` 对变量进行统计且将结果字典化
1. 统计并字典化
    ```python{cmd=true}
    from collections import Counter

    Var1 = "aaabbc"
    Var2 = [1, 2, 3, 4, 5]
    
    print(Counter(Var1))
    print(Counter(Var2))
    ```
    输出：
    ```
    Counter({'a': 3, 'b': 2, 'c': 1})
    Counter({1: 1, 2: 1, 3: 1, 4: 1, 5: 1})
    ```

2. Counter字典可以相加减，便于统计
    ```python{cmd=true}
    from collections import Counter

    dict1 = Counter({'c': 1, 'a': 1, 't': 1})
    dict2 = Counter({'a': 2, 't': 1, 'c': 1, 'h': 1})
    print(dict1)
    print(dict2)
    print(dict1 - dict2)
    print(dict2 - dict1)
    ```
    输出:
    ```
    Counter({'a': 1, 'c': 1, 't': 1})
    Counter({'a': 2, 'h': 1, 'c': 1, 't': 1})
    Counter()
    Counter({'a': 1, 'h': 1})
    ```


#### 功能二： `collections.deque()` 操作双端队列 
1. 示例：
    ```python{cmd=true}
    #-- coding:UTF-8 --
    from collections import deque
    d = deque([])   # 除了列表也可以是字典、set等

    print("******** 入队 **********")
    # 右端追加
    # 法1: 追加单元素
    d.append('a')
    print(d) 
    # 法2: 批量追加元素
    d.extend(['c', 'd']) 
    print(d) 

    # 左端追加
    # 法1: 追加单元素
    d.appendleft('b')
    print(d) 
    # 法2: 批量追加元素
    d.extendleft(['e', 'f'])
    print(d) 

    print("******** 出队 **********")
    # 右端出队
    d.pop() 
    print(d) 
    # 左端出队
    d.popleft() 
    print(d) 

    print("******** 旋转 **********")
    # 向左旋转两个位置（正数则向右旋转）
    d.rotate(-2) 
    print(d) 
    ```

    ```python{cmd=true}
    #-- coding:UTF-8 --
    from collections import deque
    # 可以指定队列的长度，如果添加的元素超过指定长度，则原元素会被挤出
    e = deque(maxlen=5)
    e.extend([1,2,3,4,5])
    e.append("a")
    print(e)
    e.appendleft("b")
    print(e)
    e.extendleft(["c","d"])
    print(e)
    ```

#### 功能三： `collections.defaultdict()` 生成带默认值字典
相当于给字典设置一个默认值
1. 默认值包括
    + 默认key值
    + 默认value值  
        defaultdict(int)， 则默认value值为`0` , 类型为int    
        defaultdict(str)， 则默认value值为`''`, 类型为str  
        defaultdict(set)， 则默认value值为`set([])`, 类型为set  
        defaultdict(list)， 则默认value值为`[]`, 类型为列表  

2. 示例：
    ```python{cmd=true}
    #-- coding:UTF-8 --
    from  collections import defaultdict
    dic1 = defaultdict(int)
    dic2 = defaultdict(str)
    dic3 = defaultdict(set)
    dic4 = defaultdict(list)

    print(dic1["任何key"])
    print(dic2["任何key"])
    print(dic3["任何key"])
    print(dic4["任何key"])
    ```
3. 解析：
    若
    ```python{cmd=true}
    dic = {}
    dic['A'].append(5)
    print(dic)
    ```
    会报错，因为字典没有key等于'A'；    
    若要避免上述错误，可改为
    + **法一**: 提前设置默认值【麻烦，不推荐】
        ```python{cmd=true}
        dic = {}
        dic.setdefault('A', [])
        dic['A'].append(5)
        print(dic)
        ```
        正常运行，第二行设置了默认key值.   
        但是每次都setdefault设置，很麻烦. 
           
    + **法二**: defaultdict 函数简化代码   
        使用 defaultict(param) 实现有默认值的定义字典：
        ```python{cmd=true}
        from  collections import defaultdict
        dic = defaultdict(list)
        dic['A'].append(5)
        print(dic)
        ```



### 2. `random` 随机模块
#### 功能一： `random.choice()` 随机选中 列表或字符串等 中的元素
1. `random.choice()`使用语法
    ```python{cmd=true}
    import random
    random.choice(列表或字符串等)
    ```
2. 实例
    1. 在**列表**中随机选：
        ```python{cmd=true}
        #-- coding:UTF-8 --
        import random
        print(random.choice(['剪刀', '石头', '布']))
        ```
    2. 在**字符串**中随机选：
        ```python{cmd=true}
        #-- coding:UTF-8 --   
        import random
        print(random.choice('abcdefghijklmnopqrstuvwxyz'))
        ```

### 3. `sortedcontainers` 排序模块

#### 功能一：`sortedcontainers.SortedList()`对列表元素排序
1. `SortedList`基础操作
    ```python{cmd=true}
    #-- coding:UTF-8 --
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

2. `sortedcontainers.SortedList()`排序操作
    + 逆序排序:
        ```python{cmd=true}
        from sortedcontainers import SortedList
        from operator import neg
        
        sl = SortedList([3,5,1,2,7,6,4], key=neg)
        
        print(sl)           # output: SortedKeyList([7, 6, 5, 4, 3, 2, 1], key=<built-in function neg>)
        ```

    + 按**字符串长度**排序:
        ```python
        from sortedcontainers import SortedList

        sl = SortedList(["1", "431", "34"], key=lambda item:len(item))
        
        print(sl)           # output: SortedKeyList(['1', '34', '431'], key=<function <lambda> at 0x7fb883b36820>)
        ```


#### 功能二：`sortedcontainers.SortedDict()`对字典排序
1. `sortedcontainers.SortedDict()`基础操作
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
    

#### 功能三：`sortedcontainers.SortedSet()`对集合排序
1. `sortedcontainers.SortedSet()`基础操作
    ```python
    from sortedcontainers import SortedSet

    ss = SortedSet('abracadabra')   
    print(ss)                   # output: SortedSet(['a', 'b', 'c', 'd', 'r'])

    print(ss.bisect_left('4'))  # output: 4
    ```


### 4. `bisect` 对**有序**序列的插入和查找
> bisect是python内置模块，用于**有序**序列的插入和查找。

#### 功能一： 查找
1. `bisect_left(array, item)`:
    在**有序**列表`array`中查找`item`元素；
    + 若`item`存在，返回`item`**左侧**下标（若有多个相同`item`，返回第一个下标）；
    + 若`item`不存在，返回在**有序**列表`array`中应该插入的位置下标；  
    
    示例：
    ```python{cmd=true}
    #-- coding:UTF-8 --
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
    ```python{cmd=true}
    #-- coding:UTF-8 --
    import bisect
    arr = [1, 13, 13, 13, 18, 20, 55]
    
    idx_right = bisect.bisect_right(arr, 13)
    print(idx_right)                # output: 4

    idx_right = bisect.bisect_right(arr, 15)
    print(idx_right)                # output: 4
    ```

#### 功能二： 插入
1. insort(array,item)
2. insort_left(array,item)
3. insort_right(array,item)
    示例：
    ```python{cmd=true}
    #-- coding:UTF-8 --
    import bisect
    arr = [1, 13, 13, 13, 18, 20, 55]
    
    # 用可变序列内置的insert方法插入
    arr.insert(1, 13)
    print(arr)        # output: [1, 13, 13, 13, 13, 18, 20, 55]
    ```





## 四、 大合集
### 1. 排序相关
#### 方法一. `text_list.sort()`与`sorted(text_list)`函数
1. `text_list.sort()`函数:
    + sort函数没有返回值；
    + 会改变原元素的值；
    + 示例：
        ```python{cmd=true}
        #-- coding:UTF-8 --
        l1 = [10, 3, 13, 3, 8, 20, 55]

        print(sorted(l1))                   # 默认升序：[3, 3, 8, 10, 13, 20, 55]
        print(sorted(l1, reverse=True))     # True降序：[55, 20, 13, 10, 8, 3, 3]
        print(sorted(l1, reverse=False))    # False升序：[3, 3, 8, 10, 13, 20, 55]

        print(l1)                           # sorted()对l1不影响：[10, 3, 13, 3, 8, 20, 55]
        ```
        
2. `sorted(text_list)`函数:
    + sorted函数有返回值；
    + 不会改变原元素的值；
    + 示例：
        ```python{cmd=true}
        #-- coding:UTF-8 --
        l1 = [10, 3, 13, 3, 8, 20, 55]

        l1.sort()                           
        print(l1)                           # 默认升序：[3, 3, 8, 10, 13, 20, 55]
        l1.sort(reverse=True)               
        print(l1)                           # True降序：[55, 20, 13, 10, 8, 3, 3]
        l1.sort(reverse=False)
        print(l1)                           # False升序：[3, 3, 8, 10, 13, 20, 55]
        ```
#### 方法二. 利用`sortedcontainers`模块实现
> 见本文【`sortedcontainers`模块】相关内容

#### 方法三. 利用`bisect`模块实现
> 见本文【`bisect`模块】相关内容



--------------
## 附录：
### A. 链表的Python实现
### B. 二叉树的Python实现
### C. Python中Switch/Case实现
> 参考：https://www.cnblogs.com/gerrydeng/p/7191927.html  
1. 方法一: 通过字典实现
    ```python{cmd=true}
    #-- coding:UTF-8 --
    def foo(var):
        return {
            'a': 1,
            'b': 2,
            'c': 3,
        }.get(var,'error')    #'error'为默认返回值，可自设置
    ```

2. 方法二: 通过匿名函数实现
    ```python{cmd=true}
    #-- coding:UTF-8 --
    def foo(var,x):
        return {
            'a': lambda x: x+1,
            'b': lambda x: x+2,
            'c': lambda x: x+3, 
        }[var](x)
    ```

