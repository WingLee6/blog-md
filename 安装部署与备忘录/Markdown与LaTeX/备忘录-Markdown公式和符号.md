# 备忘录-Markdown公式

> 1. 记录公式和符号的语法

参考博客: 
1. [史上最全Markdown公式、符号总结！！！](https://blog.csdn.net/weixin_42782150/article/details/104878759)
2. [Latex常见符号对照表](http://t.csdnimg.cn/s2I1Y)

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [一. 基础格式](#一-基础格式)
  - [1.1 行内公式 和 行间公式](#11-行内公式-和-行间公式)
  - [1.2 公式编号](#12-公式编号)
  - [1.3 空格](#13-空格)
  - [1.4 公式排列](#14-公式排列)
  - [1.5 环境](#15-环境)
    - [1.5.2 对齐环境](#152-对齐环境)
    - [1.5.2 大括号环境](#152-大括号环境)
      - [补充: `\left` `\right`标签来实现花括号](#补充-left-right标签来实现花括号)
  - [1.6 分段函数：](#16-分段函数)
  - [1.7 矩阵](#17-矩阵)
    - [1.7.1 不带括号的矩阵 - `matrix`](#171-不带括号的矩阵---matrix)
    - [1.7.2 小括号矩阵 - `pmatrix`](#172-小括号矩阵---pmatrix)
    - [1.7.3 中括号矩阵 - `bmatrix`](#173-中括号矩阵---bmatrix)
    - [1.7.4 大括号矩阵 - `Bmatrix`](#174-大括号矩阵---bmatrix)
    - [1.7.5 行列式 - `vmatrix`](#175-行列式---vmatrix)
    - [1.7.6 行列式 - `Vmatrix`](#176-行列式---vmatrix)
    - [1.7.7 省略号矩阵](#177-省略号矩阵)
    - [1.7.8 横线/竖线分割矩阵](#178-横线竖线分割矩阵)
- [二. 数学符号](#二-数学符号)
  - [2.1 上下标](#21-上下标)
  - [2.2 括号](#22-括号)
  - [2.3 三角函数](#23-三角函数)
  - [2.4 算式符号](#24-算式符号)
  - [2.5 运算和逻辑符号](#25-运算和逻辑符号)
  - [四. 进阶表达](#四-进阶表达)

<!-- /code_chunk_output -->


## 一. 基础格式
### 1.1 行内公式 和 行间公式
1. 行内公式
    在公式代码块的前后均添加一个`$`;
    如:  $ \Gamma(z) = \int_0^\infty t^{z-1}e^{-t}dt $
    
    源码:
    ```
    $ \Gamma(z) = \int_0^\infty t^{z-1}e^{-t}dt $
    ```

2. 行间公式
    则是在公式代码块的前后均添加两个`$$`
    如
    $$
    \Gamma(z) = \int_0^\infty t^{z-1}e^{-t}dt
    $$
    
    源码:
    ```
    $$
    \Gamma(z) = \int_0^\infty t^{z-1}e^{-t}dt
    $$
    ```

### 1.2 公式编号
分为带圆括号的方式和不带圆括号的方式
1. 带圆括号的公式编号方法
    如
    $$
    x^2+y^2=z^2 \tag{1$'$}  
    $$
    源码:
    ```
    $$
    x^2+y^2=z^2 \tag{1$'$}
    $$
    ```
2. 不带圆括号的公式编号方法
    $$
    x^5+y^5=z^5 \tag*{1-1}
    $$
    源码:
    ```
    $$
    x^5+y^5=z^5 \tag*{1-1}
    $$
    ```
3. 有些环境会自动编号 及 取消编码
    详见"环境"内容
    $$
    \begin{align}
        x^5+y^5=z^5 \\
        x^2+y^2=z^2 \notag \\
        x^2+y^2=z^2
    \end{align}
    $$
    源码:
    ```
    $$
    \begin{align}
        x^5+y^5=z^5 \\
        x^2+y^2=z^2 \notag \\
        x^2+y^2=z^2
    \end{align}
    $$
    ```

4. 多行公式选择任意行编码
    转换思路根据 3.有些环境会自动编号, 然后取消一些行的编码
    $$
    \begin{align}
        v 
        &= \frac{s}{t} \notag \\
        &= \frac{s}{t} \tag{123}
    \end{align}
    $$ 
    源码:
    ```
    $$
    \begin{align}
        v 
        &= \frac{s}{t} \notag \\
        &= \frac{s}{t} \tag{123}
    \end{align}
    $$ 
    ```


### 1.3 空格
| 名称 | 数学算式 | Markdown公式 | 备注 | 
| - | - | - | :- |
| 单空格 | $ 12\ 34 $ | `$ 12\ 34 $` | `\` + 空格 | 
| 缩一格 | $123\!123$ | `$123\!123$` | 空格距离：-3/18 em | 
| 空一格 | $123\,123$ | `$123\,123$` | 空格距离：3/18 em | 
| 空两格 | $123\:123$ | `$123\:123$` | 空格距离：4/18 em |
| 空三格 | $123\;123$ | `$123\;123$` | 空格距离：5/18 em |
| (竖向)空行 | $ 12 \\[2ex] 34 $ | `$ 12 \\[2ex] 34 $` | `[1ex]` `[3ex]`同理 

### 1.4 公式排列
一般使用`\binom{a}{b}`或者`{a \choose b}`实现对a , b 两个公式的排列。

1. `\binom{a}{b}`方法
    如
    $$\binom{n+1}{2k} $$
    源码:
    ```
    $$\binom{n+1}{2k} $$
    ```

2. `{a \choose b}`方法
    如
    $${n+1 \choose 2k} $$
    源码:
    ```
    $${n+1 \choose 2k} $$
    ```

### 1.5 环境
> 自己总结的内容

环境有**对齐环境** 和 **大括号环境**两种

环境的基本语法是
```
$$
\begin{环境名}
% 插入公式
\end{环境名}
$$
```
#### 1.5.2 对齐环境
对齐环境的可选项有:
1. `aligned` 最基本的对齐环境
    > `align`会给每行公式编号, `aligned`则无编号
    
    如
    $$
    \begin{aligned}
    J
    &=123\\
    &=456
    \end{aligned}
    $$

    源码:
    ```
    $$
    \begin{aligned}
    J
    &=123\\
    &=456
    \end{aligned}
    $$
    ```
    **注意**: 需要配合`&`进行对齐

2. `multline` 非对齐环境
    > 没成功

    $$
    \begin{multlined}
    J=456
    \end{multlined}
    $$
    
    
3. `gathered` 无对齐的连续方程
    > `gather`会给每行公式编号, `gathered`则无编号

    $$
    \begin{gathered}
    J
    &=456\\
    &=123
    \end{gathered}
    $$
    源码:
    ```
    $$
    \begin{gathered}
    J
    &=456\\
    &=123
    \end{gathered}
    $$
    ```

4. `matrix` 居中对齐
    $$
    \begin{matrix}
    F=ma \\
    v = \frac{s}{t}
    \end{matrix}
    $$
    源码:
    ```
    $$
    \begin{matrix}
    F=ma \\
    v = \frac{s}{t}
    \end{matrix}
    $$
    ```

#### 1.5.2 大括号环境
大括号环境的可选项有:
1. `cases` 左花括号，内容靠左边对齐
    如
    $$
    \begin{cases}
    F=ma \\
    v = \frac{s}{t}
    \end{cases}
    $$
    源码:
    ```
    $$
    \begin{cases}
    F=ma \\
    v = \frac{s}{t}
    \end{cases}
    $$
    ```
2. `rcases` 右花括号，内容靠左边对齐
    如
    $$
    \begin{rcases}
        F=ma \\
        v = \frac{s}{t}
    \end{rcases}
    $$
    源码:
    ```
    $$
    \begin{rcases}
        F=ma \\
        v = \frac{s}{t}
    \end{rcases}
    $$
    ```

##### 补充: `\left` `\right`标签来实现花括号
**注意**: 结尾有句号`.`
1. 如(左括号)
    $$
    \left\{
        \begin{matrix}
            m=10kg \\
            F=ma
        \end{matrix}
    \right.
    $$
    源码:
    ```
    $$
    \left\{
        \begin{matrix}
            m=10kg \\
            F=ma
        \end{matrix}
    \right.
    $$
    ```

2. 如(右括号)
    $$
    \left.
        \begin{matrix}
            m=10kg \\
            F=ma
        \end{matrix}
    \right\}
    $$
    源码:
    ```
    $$
    \left.
        \begin{matrix}
            m=10kg \\
            F=ma
        \end{matrix}
    \right\}
    $$
    ```


### 1.6 分段函数：
+ 使用`\`来换行, 但要加转义符`\`, 因此`\\`实现换行；
+ 使用`&`来指示需要对齐的位置；
+ 使用`\` + 空格来表示空格；
+ 如果要使分类之间的垂直间隔变大，可以使用`\[2ex]` 代替`\` 来分隔不同的情况。(`3ex`,`4ex` 也可以用，`1ex` 相当于原始距离）。

1. 分段函数
    $$
    y=
    \begin{cases}
        -x,\quad &x\leq 0\\
        x, \quad &x>0
    \end{cases}
    $$
    源码:
    ```
    $$
    y=
    \begin{cases}
        -x,\quad &x\leq 0\\
        x, \quad &x>0
    \end{cases}
    \tag{1}
    $$
    ```

2. 方程组
    $$
    \left\{ 
        \begin{array}{c}
            a_1x+b_1y+c_1z=d_1 \\ 
            a_2x+b_2y+c_2z=d_2 \\ 
            a_3x+b_3y+c_3z=d_3
        \end{array}
    \right. 
    $$
    源码:
    ```
    $$
    \left\{ 
        \begin{array}{c}
            a_1x+b_1y+c_1z=d_1 \\ 
            a_2x+b_2y+c_2z=d_2 \\ 
            a_3x+b_3y+c_3z=d_3
        \end{array}
    \right.
    $$
    ```

3. 推导过程    
    如  
    $$
    \begin{aligned}
        (a+b)^2
        & = a^2 + 2ab +b^2 \\
        & = 123\\
        & = 112
    \end{aligned}
    $$

    源码:
    ```
    $$
    \begin{aligned}
        (a+b)^2
        & = a^2 + 2ab +b^2 \\
        & = 123\\
        & = 112
    \end{aligned}
    $$
    ```

### 1.7 矩阵
#### 1.7.1 不带括号的矩阵 - `matrix`
$$
\begin{matrix}
    1 & 2 & 3 \\
    4 & 5 & 6 \\
    7 & 8 & 9
\end{matrix}
\tag{1}
$$
源码:
```
$$
\begin{matrix}
    1 & 2 & 3 \\
    4 & 5 & 6 \\
    7 & 8 & 9
\end{matrix}
\tag{1}
$$
```

#### 1.7.2 小括号矩阵 - `pmatrix`
$$
\begin{pmatrix}
    1 & 2 \\ 
    3 &4 \\ 
\end{pmatrix}
$$
源码:
```
$$
\begin{pmatrix}
    1 & 2 \\ 
    3 &4 \\ 
\end{pmatrix}
$$
```

#### 1.7.3 中括号矩阵 - `bmatrix`
$$
\begin{bmatrix}
    1 & 2 \\ 
    3 & 4 \\ 
\end{bmatrix}
$$
源码:
```
$$
\begin{bmatrix}
    1 & 2 \\ 
    3 & 4 \\ 
\end{bmatrix}
$$
```

#### 1.7.4 大括号矩阵 - `Bmatrix`
$$
\begin{Bmatrix}
    1 &2 \\ 
    3 &4 \\ 
\end{Bmatrix}
$$
源码:
```
$$
\begin{Bmatrix}
    1 &2 \\ 
    3 &4 \\ 
\end{Bmatrix}
$$
```

#### 1.7.5 行列式 - `vmatrix`
$$
\begin{vmatrix}
    1 &2 \\ 
    3 &4 \\ 
\end{vmatrix}
$$ 
源码:
```
$$
\begin{vmatrix}
    1 &2 \\ 
    3 &4 \\ 
\end{vmatrix}
$$ 
```

#### 1.7.6 行列式 - `Vmatrix`
$$
\begin{Vmatrix}
    1 &  2 \\ 
    3 &  4 \\ 
\end{Vmatrix}
$$
源码:
```
$$
\begin{Vmatrix}
    1 &  2 \\ 
    3 &  4 \\ 
\end{Vmatrix}
$$
```

#### 1.7.7 省略号矩阵
$$
\begin{pmatrix}
    1&a_1&a_1^2&\cdots&a_1^n \\
    1&a_2&a_2^2&\cdots&a_2^n \\
    \vdots&\vdots&\vdots&\ddots&\vdots \\
    1&a_m&a_m^2&\cdots&a_m^n \\
\end{pmatrix}
$$
源码:
```
$$
\begin{pmatrix}
    1&a_1&a_1^2&\cdots&a_1^n \\
    1&a_2&a_2^2&\cdots&a_2^n \\
    \vdots&\vdots&\vdots&\ddots&\vdots \\
    1&a_m&a_m^2&\cdots&a_m^n \\
\end{pmatrix}
$$
```

#### 1.7.8 横线/竖线分割矩阵
1. 横线分割 - `{ccc}`+`\hline`实现
    如
    $$
    \left[
        \begin{array} {ccc}
        1 & 2 & 3 \\ \hline
        4 & 5 & 6 \\
        7 & 8 & 9
        \end{array}
    \right]
    $$
    源码:
    ```
    $$
    \left[
        \begin{array}{ccc}
        1 & 2 & 3 \\ \hline
        4 & 5 & 6 \\
        7 & 8 & 9
        \end{array}
    \right]
    $$
    ```
2. 横线分割 - `{ccc}`实现
    $$
    \left[
        \begin{array}{c|cc}
            1 & 2 & 3 \\
            4 & 5 & 6 \\
            7 & 8 & 9
        \end{array}
    \right]
    $$
    源码:
    ```
    $$
    \left[
        \begin{array}{c|cc}
            1 & 2 & 3 \\
            4 & 5 & 6 \\
            7 & 8 & 9
        \end{array}
    \right]
    $$
    ```
    



## 二. 数学符号
### 2.1 上下标
| 名称 | 数学算式 | Markdown公式 | 备注 | 
| - | - | - | :- |
| 下标 | $a_i$, $a_{pre}$ | `$a_i$`, `$a_{pre}$` | 上标单个字符不用加`{}` |
| 上标 | $a^i$,  $a^{pre}$ | `$a^i$`,  `$a^{pre}$` | 同上 | 
| 取反 / 上横线 | $\bar{a}$ | `$\bar{a}$` | - |
| 尖音符 | $\acute{a}$ | `$\acute{a}$` | - | 
| - | $\breve{a}$ | `$\breve{a}$` | | 
| - | $\check{a}$ | `$\check{a}$` | | 
| - | $\dot{a}$ | `$\dot{a}$` | | 
| - | $\ddot{a}$ | `$\ddot{a}$` | | 
| - | $\dddot{a}$ | `$\dddot{a}$` | | 
| - | $\ddddot{a}$ | `$\ddddot{a}$` | | 
| - | $\grave{a}$ | `$\grave{a}$` | | 
| - | $\hat{a}$ | `$\hat{a}$` | | 
| - | $\widehat{a}$ | `$\widehat{a}$` | | 
| - | $\mathring{a}$ | `$\mathring{a}$` | | 
| - | $\tilde{a}$ | `$\tilde{a}$` | | 
| - | $\widetilde{a}$ | `$\widetilde{a}$` | | 
| - | $\vec{a}$ | `$\vec{a}$` | | 
| - | $$ | `$$` | | 


### 2.2 括号
| 名称 | 数学算式 | Markdown公式 | 备注 | 
| - | - | - | :- |
| 小括号 / 圆括号 | $(1, 2)$ |  `$(1, 2)$` | | 	
| 中括号 / 方括号 | $[1, 2]$ | `$[1, 2]$` | |	
| 尖括号 | $\lang 1, 2\rang$, $\langle 1, 2\rangle$ | 法1: `$\lang 1, 2\rang$` <br> 法2: `$\langle 1, 2\rangle$` | |
| 绝对值 | $\lvert -123 \rvert$ | `$\lvert -123 \rvert$` | |
| 双竖线 | $\lVert 1, 2 \rVert$ | `$\lVert 1, 2 \rVert$` | |
| 加大括号 | 普通尺寸$(x)$<br> 大尺寸$\big( x \big)$ <br> 大大尺寸$\Big( x \Big)$ <br> 大大大尺寸$\bigg( x \bigg)$ <br> 大大大大尺寸$\Bigg( x \Bigg)$ <br> | 普通尺寸`$(x)$`<br> 大尺寸`$\big( x \big)$` <br> 大大尺寸`$\Big( x \Big)$` <br> 大大大尺寸`$\bigg( x \bigg)$` <br> 大大大大尺寸`$\Bigg( x \Bigg)$` <br> | |
| 不同尺寸嵌套括号 | $\Bigg(\bigg(\Big(\big((x)\big)\Big)\bigg)\Bigg)$ | `$\Bigg(\bigg(\Big(\big((x)\big)\Big)\bigg)\Bigg)$` | | 


### 2.3 三角函数
| 名称 | 数学算式 | Markdown公式 | 备注 | 
| - | - | - | :- |
| sin / 正弦| $\sin$ | `$\sin$`	| 正弦 |
| cos / 余弦⁡| $\cos$ | `$\cos$` |	余弦
| tan / 正切| $\tan$ | `$\tan$` |	正切
| cot / 余切⁡| $\cot$ | `$\cot$` |	余切
| sec / 反正弦 ⁡| $\sec$ | `$\sec$` |	反正弦
| csc / 反余弦 ⁡| $\csc$ | `$\csc$` |	反余弦
| 直角 / 垂直 | $\bot$ | `$\bot$` |	垂直
| 角 / 夹角 | $\angle$ | `$\angle$` |	
| 度 | $40^\circ$ | `$40^\circ$` | 




### 2.4 算式符号
| 名称 | 数学算式 | Markdown公式 | 备注 | 
| - | - | - | :- |
| 分数 / 分式 | $\frac{a}{b}$ | `$\frac{a}{b}$` | |
| 平方根 / 根号 |  $\sqrt{a + b}$ | `$\sqrt{a + b}` | |
| n次根号 |  $\sqrt[n]{a + b}$ | `$\sqrt[n]{a + b}$` | 1. 加上方括号`[n]` |
| 累加 | $\sum_{i = 0}^{n} x$ | `$\sum_{i = 0}^{n} x^2$` | |
| 累乘 | $\prod_{i = 0}^{n} x$ | `$\prod_{i = 0}^{n}\frac{1}{x}$` | |
| 以e为底的对数函数 | $\ln{a + b}$ | `$\ln{a + b}$` | |
| 以n为底的对数函数 | $\log_{n}^{b}$ | `$\log_{n}^{b}$` | |
| 以10为底的对数函数 | $\lg(a + b)$ | `$\lg{a + b}$` | | 
| 极限 | $$\lim_{n\rightarrow+\infty}n$$ | `$$\lim_{n\rightarrow+\infty}n$$` | | 
| 向量 / 矢量(箭头表示) | $\vec{a}$ | `$\vec{a}$` | |
| 向量(加粗表示) | $\mathbf{x}$ | `$\mathbf{x}$` ||
| 模运算 | $\pmod n$ | `$\pmod n$` | |
| 一阶导数 / 撇' | $v^\prime$ | `$\prime$` | |
| 一重积分 | $\int$ | `$\int$`| |
| 二重积分 | $\iint$ | `$\iint$` | |
| 三重积分 | $\iiint$ | `$\iiint$` | |
| 曲面积分 | $\oint$ | `$\oint$` | |
| 二重曲面积分 | $\oiint$ | `$\oiint$` | |
| 梯度 | $\nabla$ | `$\nabla$` | |
| 一重积分实例 | $\int_0^2 x^2 dx$ | `$\int_0^2 x^2 dx$` | |
| 偏导 | $\partial$ | `$\partial$` | |


### 2.5 运算和逻辑符号
| 名称 | 数学算式 | Markdown公式 | 备注 | 
| - | - | - | :- |
| 正负号 / 加减 | $\pm$ | `$\pm$` | |
| 负正号 / 减加 | $\mp$ | `$\mp$` | |
| 乘号 / 叉乘 | $\times$ | `$\times$` | |
| 除号 | $\div$ | `$\div$` | |
| 星号 / 乘 | $\ast$ | `$\ast$` | |
| | $\star$ | `$\star$` | |	
| 竖线 | $\mid$ | `$\mid$` | |
| | $\nmid$ | `$\nmid$` | |
| 圆圈 | $\circ$ | `$\circ$` | |
| | $\bullet$ | `$\bullet$` | |
| 点 / 点积 / 点乘 | $\cdot$ | `$\cdot$` | |
| | $\wr$ | `$\wr$` | |
| | $\diamond$ | `$\diamond$` | |
| | $\Diamond$ | `$\Diamond$` | |
| | $\triangle$ | `$\triangle$` | |
| | $\bigtriangleup$ | `$\bigtriangleup$` | |
| | $\bigtriangledown$ | `$\bigtriangledown$` | |
| | $\triangleleft$ | `$\triangleleft$` | |
| | $\triangleright$ | `$\triangleright$` | |
| | $\lhd$ | `$\lhd$` | |
| | $\rhd$ | `$\rhd$` | |
| | $\unlhd$ | `$\unlhd$` | |
| | $\unrhd$ | `$\unrhd$` | |
| | $\circ$ | `$\circ$` | |
| | $\bigcirc$ | `$\bigcirc$` | |
| | $\odot$ | `$\odot$` | |
| 点积 | $\bigodot$ | `$\bigodot$` | |
| | $\oslash$ | `$\oslash$` | |
| | $\ominus$ | `$\ominus$` | |
| | $\otimes$ | `$\otimes$` | |
| 克积 | $\bigotimes$ | `$\bigotimes$` | |
| | $\oplus$ | `$\oplus$` | |	
| 异或 | $\bigoplus$ | `$\bigoplus$` | |
| | $\dagger$ | `$\dagger$` | |
| | $\ddagger$ | `$\ddagger$` | |
| | $\amalg$ | `$\amalg$` | |
| 小于等于 | $\leq$ | `$\leq$` | | 
| 大于等于 | $\geq$ | `$\geq$` | |
| 全等于 / 恒等于 | $\equiv$ | `$\equiv$` | |
| | $\models$ | `$\models$` | |
| | $\prec$ | `$\prec$` | |
| | $\succ$ | `$\succ$` | |
| | $\sim$ | `$\sim$` | |
| | $\perp$ | `$\perp$` | |
| | $\preceq$ | `$\preceq$` | |
| | $\succeq$ | `$\succeq$` | |
| | $\simeq$ | `$\simeq$` | |
| | $\mid$ | `$\mid$` | |
| 远远小于 | $\ll$ | `$\ll$` | |
| 远远大于 | $\gg$ | `$\gg$` | |
| | $\asymp$ | `$\asymp$` | |
| | $\parallel$ | `$\parallel$` | |
| 约等于 | $\approx$ | `$\approx$` | |
| 全等于 | $\cong$ | `$\cong$` | |
| 不等于 | $\neq$ | `$\neq$` | |
| | $\doteq$ | `$\doteq$` | |
| 正相关 / 正比例关系 | $\propto$ | `$\propto$` | |
| | $\bowtie$ | `$\bowtie$` | |
| | $\Join$ | `$\Join$` | |
| | $\smile$ | `$\smile$` | |
| | $\frown$ | `$\frown$` | |
| 推导 | $\vdash$ | `$\vdash$` | $x\vdash y$表示y由x导出 |
| | $\dashv$ | `$\dashv$` | |
| 无穷 / 无限 | $\infty$ | `$\infty$` | | 
| 向上箭头 | $\uparrow$ | `$\uparrow$` | | 
| 向下箭头 | $\downarrow$ | `$\downarrow$` | | 
| 上下双向箭头 | $\updownarrow$ | `$\updownarrow$` | | 
| 向上推导箭头 | $\Uparrow$ | `$\Uparrow$` | | 
| 向下推导箭头 | $\Downarrow$ | `$\Downarrow$` | | 
| 双向推导箭头 | $\Updownarrow$ | `$\Updownarrow$` | | 
| 向右箭头 | $\rightarrow$ | `$\rightarrow$` | | 
| 向左箭头 | $\leftarrow$ | `$\leftarrow$` | | 
| 左右双向箭头 / 充要条件 / 当且仅当 / 等价 | $\leftrightarrow$ | `$\leftrightarrow$` | |
| 向右推导箭头 | $\Rightarrow$ | `$\Rightarrow$` | | 
| 向左推导箭头 | $\Leftarrow$ | `$\Leftarrow$` | | 
| 左右双向推导箭头 | $\Leftrightarrow$ | `$\Leftrightarrow$` | | 
| 向右长箭头 | $\longrightarrow$ | `$\longrightarrow$` | | 
| 向左长箭头 | $\longleftarrow$ | `$\longleftarrow$` | | 
| 左右双向长箭头 | $\longleftrightarrow$ | `$\longleftrightarrow$` | | 
| | $\Longrightarrow$ | `$\Longrightarrow$` | | 
| | $\Longleftarrow$ | `$\Longleftarrow$` | | 
| | $\Longleftrightarrow$ | `$\Longleftrightarrow$` | | 
| | $\mapsto$ | `$\mapsto$` | | 
| | $\longmapsto$ | `$\longmapsto$` | | 
| | $\hookleftarrow$ | `$\hookleftarrow$` | | 
| | $\hookrightarrow$ | `$\hookrightarrow$` | | 
| | $\rightharpoonup$ | `$\rightharpoonup$` | | 
| | $\leftharpoondown$ | `$\leftharpoondown$` | | 
| | $\rightleftharpoons$ | `$\rightleftharpoons$` | | 
| | $\leftharpoonup$ | `$\leftharpoonup$` | | 
| | $\rightharpoondown$ | `$\rightharpoondown$` | | 	
| | $\leadsto$ | `$\leadsto$` | | 
| | $\nearrow$ | `$\nearrow$` | | 
| | $\searrow$ | `$\searrow$` | | 
| | $\swarrow$ | `$\swarrow$` | | 
| | $\nwarrow$ | `$\nwarrow$` | | 
| 空集 | $\emptyset$ | `$\emptyset$` | | 
| 空集 | $\varnothing$ | `$\varnothing$` | | 
| 属于 | $\in$ | `$\in$` | | 
| 属于 | $\ni$ | `$\ni$` | | 
| 不属于 | $\notin$ | `$\notin$` | | 	
| 子集 | $\subset$ | `$\subset$` | | 
| 父集 | $\supset$ | `$\supset$` | | 
| 非子集 | $\not\subset$ | `$\not\subset$` | |
| 真子集 | $\subseteq$ | `$\subseteq$` | | 
| 非子集 | $\subsetneq$ | `$\subsetneq$` | | 
| 超集 | $\supseteq$ | `$\supseteq$` | | 
| 并集 | $\cup$ | `$\cup$` | | 
| 并集 | $\bigcup$ | `$\bigcup$` | | 
| 交集 | $\cap∩$ | `$\cap$` | | 
| 交集 | $\bigcap$ | `$\bigcap$` | | 
| 多重集 | $\uplus$ | `$\uplus$` | | 
| 多重集| $\biguplus$ | `$\biguplus$` | |
| | $\sqsubset$ | `$\sqsubset$` | | 
| | $\sqsupset$ | `$\sqsupset$` | | 
| | $\sqcap$ | `$\sqcap$` | | 
| | $\sqsubseteq$ | `$\sqsubseteq$` | | 	
| | $\sqsupseteq$ | `$\sqsupseteq$` | | 
| | $\vee$ | `$\vee$` | | 
| | $\wedge$ | `$\wedge$` | | 
| 差集 | $\setminus$ | `$\setminus$` | | 
| 因为 | $\because$ | `$\because$` | | 
| 所以 | $\therefore$ | `$\therefore$` | | 
| 任意 | $\forall$ | `$\forall$` | | 
| 存在 | $\exist$ | `$\exist$` | | 
| 逻辑与 | $\vee$ | `$\vee$` | | 
| 逻辑或 | $\wedge$ | `$\wedge$` | | 
| 逻辑与 | $\bigvee$ | `$\bigvee$` | | 
| 逻辑或 | $\bigwedge$ | `$\bigwedge$` | | 
| | $\Alpha$ | `$Alpha$` | | 
| | $\alpha$ | `$\alpha$` | | 
| | $\Beta$ | `$\Bete$` | | 
| | $\beta$ | `$\beta$` | | 
| | $\Gamma$ | `$\Gamma$` | | 
| | $\gamma$ | `$\gamma$` | | 
| | $\Delta$ | `$\Delta$` | | 
| | $\delta$ | `$\delta$` | | 
| | $\Epsilon$ | `$\Epsilon$` | | 
| | $\epsilon$ | `$\epsilon$` | | 
| | $\varepsilon$ | `$\varepsilon$` | | 
| | $\Zeta$ | `$\Zeta$` | | 
| | $\zeta$ | `$\zeta$` | | 
| | $\Eta$ | `$\Eta$` | | 
| | $\eta$ | `$\eta$` | | 
| | $\Theta$ | `$\Theta$` | | 
| | $\theta$ | `$\theta$` | | 
| | $\Iota$ | `$\Iota$` | | 
| | $\iota$ | `$\iota$` | | 
| | $\Kappa$ | `$\Kappa$` | | 
| | $\kappa$ | `$\kappa$` | | 
| | $\Lambda$ | `$\Lambda$` | | 
| | $\lambda$ | `$\lambda$` | | 
| | $\Mu$ | `$\Mu$` | | 
| | $\mu$ | `$\mu$` | | 
| | $\Nu$ | `$\Nu$` | | 
| | $\nu$ | `$\nu$` | | 
| | $\Xi$ | `$\Xi$` | | 
| | $\xi$ | `$\xi$` | | 
| | $\Omicron$ | `$\Omicron$` | | 
| | $\omicron$ | `$\omicron$` | | 
| | $\Pi$ | `$\Pi$` | | 
| | $\pi$ | `$\pi$` | | 
| | $\Rho$ | `$\Rho$` | | 
| | $\rho$ | `$\rho$` | | 
| | $\Sigma$ | `$\Sigma$` | | 
| | $\sigma$ | `$\sigma$` | | 
| | $\Tau$ | `$\Tau$` | | 
| | $\tau$ | `$\tau$` | | 
| | $\Upsilon$ | `$\Upsilon$` | | 
| | $\upsilon$ | `$\upsilon$` | | 
| | $\Phi$ | `$\Phi$` | | 
| | $\phi$ | `$\phi$` | | 
| | $\varphi$ | `$\varphi$` | | 
| | $\Chi$ | `$\Chi$` | | 
| | $\chi$ | `$\chi$` | | 
| | $\Psi$ | `$\Psi$` | | 
| | $\psi$ | `$\psi$` | | 
| | $\Omega$ | `$\Omega$` | | 
| | $\omega$ | `$\omega$` | | 
| (中间)点 | $\dots$ <br> $1, 2, \cdots, n$ | `$\dots$` <br> `$1, 2, \cdots, n$` | 一般用于有下标的序列 |
| (底部)点 | $\ldots$ | `$\ldots$` | | 
| (中间)点 | $\cdots$ | `$\cdots$` | 纵向位置比\dots稍高 |
| (竖向)点 | $\vdots$ | `$\vdots$` | | 
| (斜)点 | $\ddots$ | `$\ddots$` | | 

### 四. 进阶表达

















































