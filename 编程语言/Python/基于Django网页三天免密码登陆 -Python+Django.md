# 基于Django网页三天免密码登陆 -Python+Django

> 由于.md格式文件若插入图片无法单文件发送，故转为word格式提交，部分格式稍有错位。
## 一、实验简述
基于Django实现三天免密码登陆,以及附带实现常规登陆界面应有功能，包括判断密码是否符合后台信息、登陆失败等内容。

## 二、基本实现效果图

![](https://raw.githubusercontent.com/lukelee98/PicBed/main/Pic2022/%E4%B8%89%E5%A4%A9%E5%85%8D%E5%AF%86%E7%A0%81%E7%99%BB%E9%99%86.png)

## 三、实现步骤：
1. **判断用户是否登陆成功逻辑模块**
    ```python
    if uname == "liyi" and pwd == '123456':
            response.set_signed_cookie('login', uname+','+pwd, path='/login',max_age=3*24*60*60)
            return response
    ```

2. **登陆失败**
    + **实现逻辑**：
        判定登陆失败后，返回并提示登陆失败。  
    + **代码实现**：
        ```python
        response.delete_cookie('login', path="/login")
        response.content = '登录失败'
        ```

3. **三天免密码登陆模块**
    + **实现逻辑**：
        判定浏览器端是否存在cookie信息，若有则选择输入；
    + **代码实现**：
        ```python
        if 'login' in request.COOKIES:
            login = request.get_signed_cookie('login', salt='hello').split(',')
            uname = login[0]
            pwd = login[1]
            return render(request, 'login.html', {'uname': uname, 'pwd': pwd})
        ```

4. **HTML部分主要代码**：
    + **主要内容**：
        用户名与密码输入框，登陆按键
    + **代码内容**：
        ```html
        <form action="/login/" method="post">
        {% csrf_token %}
            <!-- 输入框 -->
            <p><label>用户名</label><input type="text" name="uname" value="{{uname}}"></p>
            <p><label>密码</label><input type="text" name="pwd" value="{{pwd}}"></p>
            <!-- 登陆按键 -->
            <div class="logC">
                <a target="_self"><button>登 录</button></a>
            </div>
        </form>
        ```


## 四、代码整体预览：
```python
# 处理登陆功能函数
def login(request):
    if request.method=='GET':
        # 判断浏览器端是否存在cookie信息
        if 'login' in request.COOKIES:
            login = request.get_signed_cookie('login', salt='hello').split(',')
            uname = login[0]
            pwd = login[1]
            return render(request, 'login.html', {'uname': uname, 'pwd': pwd})
        return render(request, 'login.html')
    else:
        # 接受请求参数
        uname = request.POST.get('uname', '')
        pwd = request.POST.get('pwd', '')
        response = HttpResponse('登录成功')
        # 判断是否登陆成功
        if uname == "liyi" and pwd == '123456':
            response.set_signed_cookie('login', uname+','+pwd, salt='hello', path='/login',max_age=3*24*60*60)
            return response
        response.delete_cookie('login', path="/login")
        response.content = '登录失败'
    return response
```





