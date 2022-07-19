# Python的 repr() 函数：将变量的数据和转义字符都显化为字符串 -Python
repr() 函数：将 变量的数据和转义字符 都显化为 字符串 
1. 字符串
    ```python
    text1: str = "xxx"
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

2. 列表
    ```python
    text2: list = ['q', 'w']
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

3. 字典
    ```python
    text3: dict = {'k': 'v'}
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
    **报错**         # 已经字符串化后的字典，没有key值，因此报错
    ···

4. 转义字符
    ```python
    text4: str = "xx\\x"
    print(text4)
    print(repr(text4))
    ```
    打印输出内容：
    ```
    xx\x            # 正常输出字符串
    'xx\\x'         # 将 变量的数据和转义字符 都显化变为 字符串 
    ···
