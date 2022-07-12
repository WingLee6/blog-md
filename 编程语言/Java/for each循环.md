## Java 的 for each 循环
&ensp;&ensp;&ensp; Java可以用一个功能来依次处理数组中的每个元素（其他类型的元素集合亦可）而不必为指定下标值分心。  
&ensp;&ensp;&ensp; 这种增强的for循环格式为：  
```
    for (变量类型 新变量名:数组名)  
        System.out.println(新变量名);
```  
举个例子：
```java
int[] a = {1, 3, 8};
for (int element: a)
	System.out.println(element);
```
&ensp;&ensp;&ensp; 打印数组 a 的每一个元素，一个元素占一行。  
&ensp;&ensp;&ensp; (**优势**)这个循环应该被读作“循环a中的每一个元素”(for each element in a)。当然，传统的for循环也可以获得的同样的效果，但是需要花费精力去关心下标的起始值和终止值。
