# 基于Python将数据集划分成训练集和测试集 -Python

> 背景：  
&ensp; &ensp; 在实际项目中，源数据往往只包含一个完整的数据集，而在机器学习的项目中，就需要对此适当处理，从而产生训练集和测试集。

常见的三种方法：留出法、交叉验证法、自助法  
```
符号解释：
    数据集：D    
    训练集：S  
    测试集：T  
    即𝐷=𝑆∪𝑇
```

1. **留出法(hold-out)**  

    &ensp; &ensp; 留出法直接将数据集𝐷划分为两个互斥的集合，其中一个集合作为训练集𝑆，留下的集合作为测试集𝑇，即𝐷=𝑆∪𝑇,𝑆∩𝑇=∅。在𝑆上训练出模型后，用𝑇来评估其测试误差，作为对泛化误差的估计。以二分类任务为例，假设𝐷包含1000个样本，我们采取7/3分样，将其划分为𝑆包含700个样本，𝑇包含300个样本。

    &ensp; &ensp; **𝑆/𝑇的划分要尽可能的保持数据分布的一致性(𝑆/𝑇中的数据分布跟𝐷是一样的)，才能避免因数据划分过程引入额外的偏差而对最终结果产生影响**。例如，在分类任务中，至少要保持样本的类别比例相似。保留类别比例的采样方式，即分层采样(stratified sampling)。例如，𝐷中含有500个正例，500个反例，当采用分层采样获取70%的样本的训练集𝑆和30%的赝本的测试集𝑇时，则𝑆包含有350个正例和350个反例，𝑇有150个正例和150个反例。

    &ensp; &ensp; 给定样本比例，有多种划分方式对𝐷进行分割。如在上面的例子中，我们可以把𝐷的样本排序，然后把前350个正例放到𝑆中，也可以把后350个正例放入𝑆... 

    &ensp; &ensp; 这种不同的划分将导致不同的训练/测试集，相应的模型评估也是有差别的。因此，**使用留出法时，一般要采用若干次随机划分、重复进行实验评估后取平均值作为留出法的评估结果**。例如进行100次随机划分，每次产生一个𝑆/𝑇进行实验评估，得到100个结果，而留出法返回的则是这100个结果的平均。

    &ensp; &ensp; 常见做法将大约20%/30%~40%/50%的样本作为𝑆，剩下的作为𝑇。

    **代码实现**：  
    其中test_size=0.30表示测试集占30%.
    ```python
    import numpy as np
    from sklearn.model_selection import train_test_split
    
    X, Y = np.arange(10).reshape((5, 2)), range(5)
    print("X=", X)
    print("Y=", Y)
    X_train, X_test, Y_train, Y_test = train_test_split(
        X, Y, test_size=0.30, random_state=42)
    print("X_train=", X_train)
    print("X_test=", X_test)
    print("Y_train=", Y_train)
    print("Y_test=", Y_test)
    ```
    输出为：
    ```python
    X= [[0 1]
        [2 3]
        [4 5]
        [6 7]
        [8 9]]
    Y= range(0, 5)
    X_train= [[4 5]
            [0 1]
            [6 7]]
    X_test= [[2 3]
            [8 9]]
    Y_train= [2, 0, 3]
    Y_test= [1, 4]
    ```

2. **交叉验证法(cross validation)**  

    &ensp; &ensp; 交叉验证法将𝐷划分为𝑘个大小相似的互斥子集，即𝐷=𝐷1∪𝐷2∪⋯∪𝐷𝑘,𝐷𝑖∩𝐷𝑗=∅(𝑖≠𝑗)。每个子集𝐷𝑖都尽可能保持数据分布的一致性，即从𝐷中通过分层采样得到。然后，每次用𝑘−1个子集的并集作为𝑆，剩下的那个子集作为𝑇，这样可获得𝑘组𝑆/𝑇，从而可进行𝑘次训练和测试，最终返回这𝑘个测试结果的平均。

    &ensp; &ensp; **交叉验证法评估结果的稳定性和保真性在很大程度上取决于𝑘的取值、为强调这一点，通常把交叉验证法称为“𝑘折交叉验证”(𝑘-fold cross validation)**。𝑘最常用的取值是10，有时也取5和20等。  
    &ensp; &ensp;交叉验证的好处就是从有限的数据中尽可能挖掘多的信息，从各种角度去学习我们现有的有限的数据，避免出现局部的极值。在这个过程中无论是训练样本还是测试样本都得到了尽可能多的学习。(By 知乎 张戎 https://mp.weixin.qq.com/s?__biz=MzIzODExMDE5MA==&mid=400415610&idx=1&sn=381dd64fbdc7c130a6314fb65815d4e1#rd)  
    **代码实现**：  
    其中n_splits=2表示𝑘=2
    ```python
    import numpy as np
    from sklearn.model_selection import KFold

    X= np.arange(10).reshape((5, 2))
    print("X=", X)
    kf = KFold(n_splits=2)
    for train_index, test_index in kf.split(X):
        print('X_train:%s ' % X[train_index])
        print('X_test: %s ' % X[test_index])
    ```
    + 留一法(Leave-One-Out，简称LOO)  
        &ensp; &ensp; 当𝐷包含𝑚个样本，令`𝑘=𝑚`，则得到交叉验证法的一个特例——留一法(Leave-One-Out，简称LOO)。留一法使用的𝑆只比𝐷少一个样本，所以在绝大多数情况下，实际评估结果与用𝐷训练的模型相似。因此，留一法被认为比较准确。但留一法对于大数据集，计算开销太大；另外也不见得永远比其他方法准确。  
        **代码实现**：  
        通过调用sklearn.model_selection.LeaveOneOut按留一法划分训练集和测试集
        ```python
        import numpy as np
        from sklearn.model_selection import LeaveOneOut

        X= np.arange(10).reshape((5, 2))
        print("X=", X)
        loo = LeaveOneOut()
        for train_index, test_index in loo.split(X):
            print('X_train:%s ' % X[train_index])
            print('X_test: %s ' % X[test_index])
        ```
3. **自助法(bootstrapping)**  
    &ensp; &ensp; 自助法在数据集较小、难以划分𝑆/𝑇时很有用。此外，自助法能从𝐷中产生不同的𝑆，对集成学习等方法有好吃。自助法产生的𝑆改变了𝐷的分布，会引入估计偏差。**当数据量足够时，留出法和交叉验证法更常用**.

    &ensp; &ensp; 在前两种方法中都保留部分样本作为𝑇用于测试，因此实际评估模型使用的训练集𝑇总是比期望评估模型使用的训练集𝐷小，这样会引入一些因训练样本规模不同而导致的估计偏差。

    &ensp; &ensp; 自助法，以自助采样(bootstrap sampling)为基础。对𝐷进行采样产生𝐷′：每次随机从𝐷中挑选一个样本，将其拷贝一份放入𝐷′中，保持𝐷不变，重复以上过程𝑚次。显然，𝐷中有部分样本会多次出现在𝐷′中，而另一部分不会出现。样本在𝑚次采样中的始终不被采到的概率为(1−1𝑚)𝑚，当𝑚→∞时，(1−1𝑚)𝑚→1/𝑒≈0.368。

    &ensp; &ensp; 通过自助法，𝐷中有36.8%不会出现𝐷′中。于是我们把𝐷′当作训练集𝑆，把𝐷∖𝐷′当作测试集𝑇，这样实际评估模型与期望评估模型都为𝑚个样本，而仍有数据总量1/3的、没有出现在训练集中的样本用于测试。这样的测试结果为包外估计(out-of-bag estimate)。


