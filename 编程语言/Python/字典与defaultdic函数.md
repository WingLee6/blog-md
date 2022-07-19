# 字典 与 defauldict()函数

defaultdict(param) 相当于给字典设置一个默认值
1. 默认值包括
    + 默认key值
    + 默认value值  
        defaultdict(int)， 则默认value值为0  
        defaultdict(str)， 则默认value值为''  
        defaultdict(set)， 则默认value值为set()  
        defaultdict(list)， 则默认value值为[]  

    ```python
    dic1 = defaultdict(int)
    dic2 = defaultdict(str)
    dic3 = defaultdict(set)
    dic4 = defaultdict(list)
    print(dic1["任何key"])
    print(dic2["任何key"])
    print(dic3["任何key"])
    print(dic4["任何key"])
    ```
    输出内容：
    ```
    #0
    #
    #set()
    #[]
    ```

2. 解析：
    若
    ```python
    dic = {}
    dic['A'].append(5)
    print(dic)
    ```
    因为字典没有key等于'A'，所以报错；  
    若改正上述错误，应为
    ```python
    dic = {}
    dic.setdefault('A', [])
    dic['A'].append(5)
    print(dic)
    ```
    正常运行，第二行设置了默认key值  
    但是每次都setdefault设置，很麻烦  
    可用 defaultdict 函数简化代码  

    使用 defaultict(param) 实现有默认值的定义字典：
    ```python
    dic = defaultdict(list)
    dic['A'].append(5)
    print(dic)
    ```