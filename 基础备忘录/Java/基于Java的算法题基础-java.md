# 基于Java的算法题基础 -JAVA


<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [基于Java的算法题基础 -JAVA](#基于java的算法题基础-java)
  - [1. 基本数据结构](#1-基本数据结构)
    - [1.1 数组](#11-数组)
    - [1.2 二维数组](#12-二维数组)
    - [1.3 字符--char 与 Character数据类型](#13-字符-char-与-character数据类型)
  - [2. 基础语法](#2-基础语法)
    - [2.1 for-each循环](#21-for-each循环)

<!-- /code_chunk_output -->


##  1. 基本数据结构
### 1.1 数组
1. 语法结构  
    `数据类型[] 数组名 = new 数据类型[数组长度]`  
    或  
    `数据类型[] 数组名 = {value0, value1, value2, value3, value4, value5}`
2. 示例
    ```java
    // 定义数组长度
    int size = 10; 
    // 定义数组
    double[] arr = new double[size];
    // 赋值
    arr[0] = 1; 
    arr[1] = 2;
    arr[2] = 3;
    arr[3] = 4;
    // 打印
    for (int i = 0; i < size; i++) {
        System.out.println(arr[i]);     // output: 1.0     2.0     3.0     4.0     0.0(double默认为0.0)
    }
    ```
    或
    ```java
    double[] arr = {1, 2, 3};
    // 打印
    for (int i = 0; i < arr.length; i++) {
        System.out.println(arr[i]);
    }
    ```
### 1.2 二维数组
1. 语法示例
    + 法一：直接分配空间
        ```java
        // 生成三行四列的空间
        String[][] str = new String[3][4];
        ```
    + 法二：先分配高维，再逐一分配每一维空间
        ```java
        // 生成两行，
        // 第一行两列、第二行三列
        String[][] str = new String[2][];
        str[0] = new String[2];
        str[1] = new String[3];
        ```

### 1.3 字符--char 与 Character数据类型
1. char 字符类型
    ```java
    // 字符类型
    char ch = 'a';
    System.out.println(ch);                 // output: a
    char uniCHar = '\u039A';                // Unicode字符表示形式
    System.out.println(uniCHar);            // output: K

    // 字符数组
    char[] charArray = {'a', 'b', 'c'};     
    System.out.println(charArray);          // output: abc
    ```

2. 


### 1.4 HashSet 哈希集合
1. 引入 HashSet 类：
    ```java 
    import java.util.HashSet;
    ```

2. `String`字符串哈希集合示例：
    ```java
    // 声明哈希集合
    HashSet<String> sites = new HashSet<String>();
    // 添加元素 .add()
    sites.add("ross");
    sites.add("mike");
    sites.add("tim");
    sites.add("luke");
    sites.add("luke");  // 重复的元素不会被添加

    // 输出哈希集合
    System.out.println(sites);                      // output: [luke, mike, ross, tim]
    // 迭代输出 for-each
    for (String v : sites) {
        System.out.println(v);                      // output: luke      mike      ross      tim
    }

    // 计算元素个数 .size()
    System.out.println(sites.size());               // output: 4

    // 判断元素是否存在 .contains()
    System.out.println(sites.contains("tim"));      // output: true
    System.out.println(sites.contains("lee"));      // output: false

    // 删除元素
    // 1. 删除制定元素 .remove()
    sites.remove("tim");            // 删除元素，删除成功返回 true，否则为 false
    sites.remove("lee");            // 删除元素，删除成功返回 true，否则为 false
    System.out.println(sites);          // output: [luke, mike, ross, tim]
    // 2. 删除集合所有元素 .clear()
    sites.clear();                      // 删除所有元素
    System.out.println(sites);          // output: []
    ```

3. `Integer`整形哈希集合示例：
    ```java
    HashSet<Integer> sites = new HashSet<Integer>();
    ```


### 1.5 HashMap 哈希字典
1. 引入 HashMap 类：
    ```java 
    import java.util.HashMap;
    ```

2. 基础示例：
    ```java
    // 声明哈希字典
    HashMap<Integer, String> dict = new HashMap<Integer, String>();
    // 添加元素 | .put()
    dict.put(1, "ross");
    dict.put(2, "mike");
    dict.put(3, "tim");
    dict.put(4, "luke");

    // 输出哈希字典
    System.out.println("输出哈希字典");
    System.out.println(dict);           // output: {1=ross, 2=mike, 3=tim, 4=luke}

    // 计算哈希字典长度
    System.out.println("计算哈希字典长度");
    System.out.println(dict.size());    // output: 4

    // for-each输出
    // 1. 输出 key 和 value | .keySet()
    System.out.println("1. 输出 key 和 value | .keySet()");
    for (Integer k : dict.keySet()) {
        System.out.println("key: " + k + " value: " + dict.get(k));     // output: key: 1 value: ross ……
    }
    // 2. 返回所有的 value 值 | .value()
    System.out.println("2. 返回所有的 value 值 | .value()");
    for (String v : dict.values()) {
        System.out.println(v + ", ");               // output: ross,    mike,    tim,    luke,
    }

    // 根据指定 key 获取 value | .get()
    System.out.println("根据指定 key 获取 value | .get()");
    System.out.println(dict.get(3));    // output: tim

    // 删除
    // 1. 根据 key 删除元素 value | .remove()
    System.out.println("1. 根据 key 删除元素 value | .remove()");
    dict.remove(3);
    System.out.println(dict);           // output: {1=ross, 2=mike, 4=luke}
    // 2. 删除所有 ｜ .clear()
    System.out.println("2. 删除所有 ｜ .clear()");
    dict.clear();
    System.out.println(dict);           // output: {}
    ```

3.  其他方法【参考：https://www.runoob.com/java/java-hashmap.html】
    | 方法 | 描述 | 
    | - | - |
    | `clear()` | 	删除 hashMap 中的所有键/值对 |
    | `clone()` | 	复制一份 hashMap |
    | `isEmpty()` | 	判断 hashMap 是否为空 |
    | `size()` | 	计算 hashMap 中键/值对的数量 |
    | `put()` | 	将键/值对添加到 hashMap 中 |
    | `putAll()` | 	将所有键/值对添加到 hashMap 中 |
    | `putIfAbsent()` | 	如果 hashMap 中不存在指定的键，则将指定的键/值对插入到 hashMap 中 |
    | `remove()` | 	删除 hashMap 中指定键 key 的映射关系 |
    | `containsKey()` | 	检查 hashMap 中是否存在指定的 key 对应的映射关系 |
    | `containsValue()` | 	检查 hashMap 中是否存在指定的 value 对应的映射关系 |
    | `replace()` | 	替换 hashMap 中是指定的 key 对应的 value |
    | `replaceAll()` | 	将 hashMap 中的所有映射关系替换成给定的函数所执行的结果 |
    | `get()` | 	获取指定 key 对应对 value |
    | `getOrDefault()` | 	获取指定 key 对应对 value，如果找不到 key ，则返回设置的默认值 |
    | `forEach()` | 	对 hashMap 中的每个映射执行指定的操作 |
    | `entrySet()` | 	返回 hashMap 中所有映射项的集合集合视图 |
    | `keySet()` | 	返回 hashMap 中所有 key 组成的集合视图 |
    | `values()` | 	返回 hashMap 中存在的所有 value 值 |
    | `merge()` | 	添加键值对到 hashMap 中 |
    | `compute()` | 	对 hashMap 中指定 key 的值进行重新计算 |
    | `computeIfAbsent()` | 	对 hashMap 中指定 key 的值进行重新计算，如果不存在这个 key，则添加到 hasMap 中 |
    | `computeIfPresent()` | 	对 hashMap 中指定 key 的值进行重新计算，前提是该 key 存在于 hashMap 中 |
    
    


## 2. 基础语法
### 2.1 for-each循环
1. 语法示例：
    ```java
    double[] arr = {1, 2, 3};
    // 打印
    for (double v : arr) {
        System.out.println(v);      // output: 1.0      2.0      3.0
    }  
    ```  