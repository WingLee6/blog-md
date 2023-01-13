# Java 常用**类**和**方法** -Java
>  &ensp;  
>  1) 基于《 Java核心技术 卷I 》
>  2) 参考链接：
>                                                 <p align="right">2019年7月 未完待续



---
1. Math类：  
    + 计算**平方根**：sqrt方法  
        ```java
        double x = 4;
        double y = Math.sqrt(x);
        ``` 
    + **幂运算**：pow方法
        ```java
        double y = Math.pow(x, a);
        ```
    + 对浮点数的**舍入运算**：round方法
         ```java
         double x = 9.997
         int nx = (int)Math.round(x);
         // 结果为 nx = 10；
         ```
        ==注释==：当调用round时，仍然需要使用强制类型转换（int）。其原因是round方法返回的结果为 long 类型，由于存在信息丢失的可能性，所以只有使用显式的强类型转换才能够将long类型转换成int类型。
        
2. String类：
    + **提取**子串：substring方法  
        ```java
        // 从一个较大的字符串中提取一个子串
        String greeting = "Hello";
        String s = greeting.substring(0, 3);    
        // 第一个参数为开始复制的位置，第二个参数为不想复制的位置；
        // 结果为 s = "Hel";
        ```     
    + 将多个字符串**拼接**在一起，用一个界定符分割：静态join方法
        ```java
        String all = String.join("/", "S", "M", "L", "XL");
        // all = "S/M/L/XL";    
        ```
        当然，Java允许**使用 + 号连接**字符串。
         ```java
         int age = 13;
         String name = "Tom";

         String Message = age + name;
         // 在本例中，age将被转换成字符串
         ```


3. 检测** 字符串是否相等**
    + equals方法：s.equals(t)  
    &ensp; 如果字符串s与t相等，返回true；否则，返回false。
    注意：s与t可以是字符串变量，也也可以是字符串字面量。例如，下列表达式是合法的:
         ```java
         "hello".equals(greeting);       // greeting 已被定义
         ```
    + **不区分大小**写检测相等：equalsIgnoreCase方法
         ```java
         "hello".equalsIgnoreCase("HELLO");
         ```
    ==注意==：一定不要用 == 运算符检测两个字符串是否相等！==运算符只能够确定两个字符串是否放在同一个位置上。当然，如果字符串放在同一个位置上，他们必然相等。但是，完全有可能将内容相同的多个字符串的拷贝放在不同的位置上。
     ```java
     // 错误示范：==判断相等的间歇性错误
     String greeting = "hello";
     if (greeting == "hello")...
        // probably true
     if (greeting.substring(0, 3) == "hel")...
        // probably false
     ```

4. **空串**与**Null串**
    + 空串：空串是Java的一个对象，有自己的长度（0）和内容（空）  
        + 检测一个字符串是否为空
            ```java
            if (str.length() == 0)
            ```
            或
            ```java
            if (str.equals(""))
            ```
    + NUll串：String变量存放的特殊值，名为null，表示目前没有任何对象与该变量关联
        + 检测一个字符串是否为Null
            ```java
            if (str == null)
            ```
    + 检查一个字符串既不是Null也不是空串：
         ```java
         if (str != null && str.length() != 0)
         ```
        ==注意==：首先要检查str是不是null，否则会出现错误。

5. **输入**和**输出**
    + 通过控制台进行**输入**：
        首先要构造一个Scanner对象，并与“标准输入流”System.in关联
         ```java
         Scanner in = new Scanner(System.in);
         ```
        然后，就可以使用Scanner类的各种方法实现输入操作了。例如，nextLine方法将**输入一行**：
         ```java
         System.out.print("What's your name ?");
         String name = in.nextLine();
         ```
        在这里，使用nextLine方法是因为在输入行中可能包含空格。要想**读取一个单词**（以空白符作为分隔符），就调用：
         ```java
         String fistName = in.next();
         ```
        要想读取一个整数，就调用nextInt方法：
         ```java
         System.out.print("How old are you ?");
         int age = in.nextInt();
         // 同理。读取下一个浮点数，就调用nextDouble方法。
         ```
        最后，在程序的最开始加上一行：
         ```java
         import java.util.*;
         // Scanner 类定义在java.util包中。
         ```
        ==注释==：（**输入密码**）因为输入是可见的，所以Scanner类不适合用于从控制台读取密码。Java SE 6 特别引入了Console类实现这一目的。想要读取一个密码，可以采用下列代码：
         ``` java
         Console cons = System.console();
         String username = cous.readLine("User name:");
         char[] passwd = cons.readPassword("Password:");
         // 解析详见《 Java核心技术 卷I 》 P57
         ```
    + **输出**到控制台：  
        将数值x输出到控制台上：
         ```java
         System.out.print(x);
         ```
        + print：一般标准输出；
        + println: 同 print，但换行；
        + printf: 格式化输出，同C/C++特性。*（详见《 Java核心技术 卷I 》 P58）*
    + **文件的输入和输出** 
        +  **读**：要想对文件进行读取。就需要一个用File对象构造一个Scanner对象，如下：
            ```java
            Scanner in = new Scanner(Paths.get("D:\\myfile.txt"), "UTF-8");
            // 如果文件名中包含反斜杠，就要在反斜杠之前再加上一个额外的转义反斜杠："c:\\myfile.txt"
            ```
            + ==警告==：可以构造一个带有字符串参数的Scanner，但这个Scanner将字符串解释为数据，而不是文件名。例如，如果调用：
                ```java
                Scanner in = new Scanner("myfile.txt");
                // 则这个scanner会将参数包括为：'m', 'y', 'f'等10个字符，而不是文件内容。
                ```  
        + **写**：想要写入文件，就要构造一个PrintWriter对象。在构造器中，只需要提供文件名：
            ```java
            PrintWriter out = new PrintWriter("MyFile.txt", "UTF-8");
            // 如果文件不存在，则创建该文件。
            ```

6.  **遍历数组**
    + Arrays类的**toString**方法：
        调用Arrays.toString(a)，返回一个包含数组元素的字符串，这些元素被放置在方括号内，并且用逗号隔开。例如：  
        ```java
        int[] a = {1, 3, 8};
	    System.out.println(Arrays.toString(a));
        ```
        返回结果为：
        ```
        [1, 3, 8]
        ```
    + **for循环** 或 **for each循环**  
        详见：https://blog.csdn.net/Gordo_Li/article/details/96295402 
        



        

        








    