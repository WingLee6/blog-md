# 字符的操作 -Python

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [字符的操作 -Python](#字符的操作-python)
  - [一、字符串的变化](#一-字符串的变化)
  - [二、判断字符类型](#二-判断字符类型)
- [三、字符串的操作](#三-字符串的操作)
    - [对字符串进行统计且统计结果字典化 - `Counter`](#对字符串进行统计且统计结果字典化-counter)

<!-- /code_chunk_output -->


> 参考来源：https://www.runoob.com/python3/python3-string.html

## 一、字符串的变化
1. 将字符串统一为小写
    ```python
    ch = "dgdfgDFSFRGEdef453645,,,;#$"
    print(ch.lower())
    ```

## 二、判断字符类型
1. 判断字符串是否只由字母和数字组成 `isalnum()`
    + 若字符串至少有一个字符并且所有字符都是字母或数字则返 回 True；
    + 否则返回 False

    ```python
    str = "this2009" 
    print(str.isalnum())                # True
    
    str = "this is string example....wow!!!"
    print(str.isalnum())                # False  因为有空格
    ```

2. 检查字符串是否以 obj 结束 `endswith(suffix, beg=0, end=len(string))`
    + 若beg 或者 end 指定则检查指定的范围内是否以 obj 结束，如果是，返回 True；
    + 否则返回 False.

# 三、字符串的操作

### 对字符串进行统计且统计结果字典化 - `Counter`
```python{cmd=true}
from collections import Counter

Var1 = "aaabbc"
Var2 = "19982000"

print(Counter(Var1))
print(Counter(Var2))
```
输出：
```
Counter({'a': 3, 'b': 2, 'c': 1})
Counter({'0': 3, '9': 2, '1': 1, '8': 1, '2': 1})
```
#### Counter字典可以相加减，便于统计
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





