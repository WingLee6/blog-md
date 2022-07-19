# Python代码风格规范

> **参考来源**：
> 1. https://zhuanlan.zhihu.com/p/389055515  
> 2. 【谷歌-样式指南】https://google.github.io/styleguide/pyguide.html#s3.16-naming


- [Python代码风格规范](#python代码风格规范)
  - [一、命名规范](#一命名规范)
    - [1.1 一般命名规范](#11-一般命名规范)
    - [1.2 约定俗成的情况：](#12-约定俗成的情况)
    - [1.3 应当避免的情况](#13-应当避免的情况)
  - [二、代码规范](#二代码规范)
    - [2.1 行长度](#21-行长度)
    - [2.2 主函数](#22-主函数)
    - [2.3 缩进规则](#23-缩进规则)
    - [2.4 导入规则](#24-导入规则)
    - [2.5 生成器（推导式）的使用规则](#25-生成器推导式的使用规则)
    - [2.6 条件表达式（“三元运算符”）](#26-条件表达式三元运算符)
    - [2.7 函数（方法）](#27-函数方法)
    - [2.8 “隐式”假](#28-隐式假)
    - [2.9 注释](#29-注释)


## 一、命名规范
### 1.1 一般命名规范
1. 包Packages	
    + 公共：lower_with_under	
2. 模块Modules	
    + 公共：lower_with_under	
    + 私有变量： _lower_with_under
3. 类名Classes	
    + 公共：CapWords	
    + 私有变量： _CapWords
4. 例外Exceptions	
    + 公共：CapWords	
5. 函数名Functions	
    + 公共：lower_with_under()	
    + 私有变量： _lower_with_under()
6. 全局常量Global/Class Constants	
    + 公共：CAPS_WITH_UNDER	
    + 私有变量： _CAPS_WITH_UNDER
7. 全局变量Global/Class Variables	
    + 公共：lower_with_under	
    + 私有变量： _lower_with_under
8. 实例变量Instance Variables	
    + 公共：lower_with_under	
    + 私有变量： _lower_with_under (protected)


### 1.2 约定俗成的情况：
1. 计数器或者迭代器（例如，i、j、k、v等）
    例如，
    ```python
    for i in range(100):
        print(i)
    ```

2. 字母e在作为 try/except 语句中的异常标识符的时候
    例如，下面的代码可以准确的定位错误类型与错误明细：
    ```python
    a = [1,2,3]
    
    try:
        a[3]
    except Exception as e:  # 注意e在这里的用法
        print('错误类型是',e.__class__.__name__)
        print('错误明细是',e)
    ```

3. 字母f在with语句中作为文件句柄的时候
    例如，如果我们要读取一个文件：
    ```python
    with open('/path/to/file', 'r') as f:
        print(f.read())

    for line in f.readlines():
        print(line.strip()) # 把末尾的'\n'删掉
    ```

4. 没有约束的私有TypeVar（例如_T、_U、_V）

5. 少数几个常见的、公认的缩写： 
    temp-->tmp  
    flag-->flg  
    statistic-->stat  
    increment-->inc  
    message-->msg  



### 1.3 应当避免的情况
1. 避免在任何包名或者模块名中使用中划线（-）。
2. 避免在一个变量的开头和结尾加双下划线
    例如：`__this_name__`  
    因为这种类型的变量名是由Python所保留的，用户不能自己定义这种变量名。

3. 不必要地把变量类型加入到变量名中  
    例如，`id_to_name_dict`，就是不合适的命名方法，因为Python是动态类型语言。




## 二、代码规范
### 2.1 换行规范
1. 最大行长为80个字符  
2. 80 个字符限制的明确例外：
    + 长长的导入语句。
    + 注释中的URL、路径名或长标志。
        ```
        Yes:  
            # http://www.example.com/us/developer/documentation/api/content/v2.0/csv_file_name_extension_full_specification.html
        No:  
            # http://www.example.com/us/developer/documentation/api/content/\
            # v2.0/csv_file_name_extension_full_specification.html
        ```
    + 不包含空格的长字符串模块级常量，不方便在URL或路径名等行之间拆分。


### 2.2 主函数
```python
def main():
    ...

if __name__ == '__main__':
    main()
```


### 2.3 缩进规则
1. 一般使用Tab键使其缩进四格
2. 行的长度限制的换行与缩进风格



### 2.4 导入规则
1. 使用`import x`导入软件包和模块
2. `from x import y`使用，其中x是软件包前缀，y是没有前缀的模块名称
3. 如果要导入两个名为y的模块，如果y与当前模块中定义的顶级名称冲突，或者如果y是一个不方便的长名称，则`from x import y as z`
4. 只有当z为一个公认的缩写，才能使用`import y as z` (e.g., np for numpy).
5. 在`from x import y`中`x`应当为一个完整的路径名
    例如，
    ```python
    Yes:
    import absl.flags
    from doctor.who import jodie

    Yes:
    from absl import flags
    from doctor.who import jodie

    No:
    # （假设此文件位于doctor/who/jodie.py也存在）
    import jodie
    ```

### 2.5 生成器（推导式）的使用规则
1. 推导式的基本示例
    + 列表(list)推导式  
        计算 30 以内可以被 3 整除的整数：
        ```python
        >>> multiples = [i for i in range(30) if i % 3 == 0]
        >>> print(multiples)
        [0, 3, 6, 9, 12, 15, 18, 21, 24, 27]
        ```
    + 字典(dict)推导式  
        提供三个数字，以三个数字为键，三个数字的平方为值来创建字典：
        ```python
        >>> dic = {x: x**2 for x in (2, 4, 6)}
        >>> dic
        {2: 4, 4: 16, 6: 36}
        >>> type(dic)
        <class 'dict'>
        ```
    + 集合(set)推导式  
        计算数字 1,2,3 的平方数：
        ```python
        >>> setnew = {i**2 for i in (1,2,3)}
        >>> setnew
        {1, 4, 9}
        ```
    + 元组(tuple)推导式  
        生成一个包含数字 1~9 的元组：
        ```python
        >>> a = (x for x in range(1,10))
        >>> a
        <generator object <genexpr> at 0x7faf6ee20a50>  # 返回的是生成器对象

        >>> tuple(a)       # 使用 tuple() 函数，可以直接将生成器对象转换成元组
        (1, 2, 3, 4, 5, 6, 7, 8, 9)
        ```

2. 代码风格规则
    + 一行中只有一个for，if可视情况有选择的换行；
    + 多行应该合理缩进；
    
    ```python
    Yes:
    result = [mapping_expr for value in iterable if filter_expr]

    result = [{'key': value} for value in iterable
                if a_long_filter_expression(value)]

    result = [complicated_transform(x)
                for x in iterable if predicate(x)]

    descriptive_name = [
        transform({'key': key, 'value': value}, color='black')
        for key, value in generate_iterable(some_input)
        if complicated_condition_is_met(key, value)
    ]

    result = []
    for x in range(10):
        for y in range(5):
            if x * y > 10:
                result.append((x, y))

    return {x: complicated_transform(x)
            for x in long_generator_function(parameter)
            if x is not None}

    squares_generator = (x**2 for x in range(10))

    unique_names = {user.name for user in users if user is not None}

    eat(jelly_bean for jelly_bean in jelly_beans
        if jelly_bean.color == 'black')
    No:
    result = [complicated_transform(
                    x, some_argument=x+1)
                for x in iterable if predicate(x)]

    result = [(x, y) for x in range(10) for y in range(5) if x * y > 10]

    return ((x, y, z)
            for x in range(5)
            for y in range(5)
            if x != y
            for z in range(5)
            if y != z)
    ```

### 2.6 条件表达式（“三元运算符”）
1. if语句提供较短语法的机制  
    例如：`x = 1 if cond else 2`
2. 代码风格规则：  
    每个部分必须适合一行：真表达式、if表达式、别式表达式。当事情变得更加复杂时，请使用完整的if语句。
    ```python
    Yes:
    one_line = 'yes' if predicate(value) else 'no'
    slightly_split = ('yes' if predicate(value)
                      else 'no, nein, nyet')
    the_longest_ternary_style_that_can_be_done = (
        'yes, true, affirmative, confirmed, correct'
        if predicate(value)
        else 'no, false, negative, nay')

    No:
    bad_line_breaking = ('yes' if predicate(value) else
                         'no')
    portion_too_long = ('yes'
                        if some_long_module.some_long_predicate_function(
                            really_long_variable_name)
                        else 'no, false, negative, nay')
    ```

### 2.7 函数（方法）
1. 函数的代码风格
2. 函数的默认参数值  
    **代码规则**：不要在函数或方法定义中使用可变对象作为默认值
    ```python
    Yes: def foo(a, b=None):
         if b is None:
             b = []
    Yes: def foo(a, b: Optional[Sequence] = None):
            if b is None:
                b = []
    Yes: def foo(a, b: Sequence = ()):  # Empty tuple OK since tuples are immutable
            ...


    from absl import flags
    _FOO = flags.DEFINE_string(...)

    No:  def foo(a, b=[]):
            ...
    No:  def foo(a, b=time.time()):  # The time the module was loaded???
            ...
    No:  def foo(a, b=_FOO.value):  # sys.argv has not yet been parsed...
            ...
    No:  def foo(a, b: Mapping = {}):  # Could still get passed to unchecked code
            ...
    ```
3. 类型注释（或“类型提示”）
   + **用途**：用于注释 参数和返回值 的类型
   + 例如：`def func(a: int) -> list[int]:`  
        其中参数 `a`变量类型为int， 返回值为int列表类型

### 2.8 “隐式”假
1. [“隐式”假]定义：  
    Python在布尔上下文中将某些值评估为False。一个快速的“经验法则”是，所有“空”值都被认为是假的，所以0, None, [], {}, ''布尔上下文中都计算为false。

2. 代码风格规则
    如果可能，请使用“隐式”false，例如，`if foo:`而不是`if foo != []:`.不过，您应该记住一些注意事项：

    + `if foo is None:`（或`is not None`）总是用来检查None值。例如，在测试默认为`None`的变量或参数是否设置为其他值时。另一个值可能是布尔上下文中为假的值！

    + 比较`False`时，不要用`==`， 应当使用`if not x:`代替。如果想在代码判断中区分`False`和`None`，可以用 `if not x and x is not None:`.
  
    + 对于序列（字符串、列表、元组），请使用空序列为假的事实  
        因此，`if seq:`和`if not seq:`分别优于`if len(seq):`和`if not len(seq):`。

    + 在处理整数时，会意外将`None`处理为`0`。  
        您可以将已知为整数（而不是`len()`的结果）的值与整数0进行比较。  
        **请注意，**'0'（即0作为字符串）计算为true。
    ```python
    Yes: if not users:
            print('no users')

        if i % 10 == 0:
            self.handle_multiple_of_ten()

        def f(x=None):
            if x is None:
                x = []
    No:  if len(users) == 0:
            print('no users')

        if not i % 10:
            self.handle_multiple_of_ten()

        def f(x=None):
            x = x or []
    ```
    请注意，Numpy数组可能会在隐式布尔上下文中引发异常。在测试np.array的空性时，更喜欢.size属性（例如if not users.size）。


### 2.9 注释
1. 函数的名称和注释可用`__doc__`提取
    例如：
    ```python

    class Say:
    """
    Say something
    """
    def print_hi(name):
        """
        say hello

        :param name:
        :return:
        """
        print(f'Hi, {name}')


    if __name__ == '__main__':
        print(Say.__name__)
        print(Say.__doc__)
        print(Say.print_hi.__name__)
        print(Say.print_hi.__doc__)
    ```

2. 注释的要求
   1. 模块的注释  
        文件应该以描述模块内容和用法的文档字符串开头。
        ```python
        """模块的单行摘要，以句号结束。

        模块的详细描述和使用方法。XXXXXXXXXXXXXXX

        使用示例（Typical usage example）:

        foo = ClassFoo()
        bar = foo.FunctionBar()
        """
        ```
   2. 类的注释  
        类应该在描述类的类定义下方有一个文档字符串。如果您的类有公共属性，则应将其记录在Attributes部分，并遵循与函数的Args部分相同的格式。
        ```python
        class SampleClass:
            """类的单行摘要，以句号结束。

            类的详细描述和使用方法。XXXXXXXXXXXXXXX

            Attributes:
                likes_spam: bool值，表示是否喜欢垃圾邮件
                eggs: int类型，表示鸡蛋的个数
            """

            def __init__(self, likes_spam: bool = False):
                """Inits SampleClass with blah."""
                self.likes_spam = likes_spam
                self.eggs = 0

            def public_method(self):
                """Performs operation blah."""
        ```
   3. 函数的注释  
        函数必须具有文档字符串，除非它满足以下所有条件：  
        + 外部不可见
        + 非常短
        + 显而易见
        例如：
        ```python
        def fetch_smalltable_rows(table_handle: smalltable.Table,
                                  keys: Sequence[Union[bytes, str]],
                                  require_all_keys: bool = False,
        ) -> Mapping[bytes, tuple[str, ...]]:
            """简短描述.

            详细描述和使用方法。
            XXXXXXXXXXXXXXX

            Args:
                table_handle: An open smalltable.Table instance.
                keys: A sequence of strings representing the key of each table
                row to fetch.  String keys will be UTF-8 encoded.
                require_all_keys: If True only rows with values set for all keys will be
                returned.

            Returns:
                A dict mapping keys to the corresponding table row data
                fetched. Each row is represented as a tuple of strings. For
                example:

                {b'Serak': ('Rigel VII', 'Preparer'),
                b'Zim': ('Irk', 'Invader'),
                b'Lrrr': ('Omicron Persei 8', 'Emperor')}

                Returned keys are always bytes.  If a key from the keys argument is
                missing from the dictionary, then that row was not found in the
                table (and require_all_keys must have been False).

            Raises:
                IOError: An error occurred accessing the smalltable.
            """
        ```
   4. 一般注释`#`  
        注意：只要描述代码逻辑功能，不要描述代码