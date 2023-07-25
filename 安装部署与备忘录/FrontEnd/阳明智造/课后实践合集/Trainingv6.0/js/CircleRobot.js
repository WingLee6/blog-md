function CircleRobot() {}

CircleRobot.prototype = Object.create(Robot.prototype)

CircleRobot.prototype.pos = []

// 记录点坐标
// 返回: 录入信息
CircleRobot.prototype.SetPoint = function (x, y) {
    console.log("START CircleRobot.SetPoint - x=" + x + ", y=" + y)

    this.pos.push([x, y])
    return '已录入第' + this.pos.length + '个点, 坐标为[' + x + ', ' + y + ']'  
}

// 判断三点是否都已录入
// 返回: 已录入返回ture, 反之返回false
CircleRobot.prototype.IsAvailable = function (nAvailableNum) {
    console.log("START CircleRobot.IsAvailable - nAvailableNum=" + nAvailableNum)
    if (this.pos.length == nAvailableNum) {
        return true;
    }
    return false;
}

// 计算圆的半径
CircleRobot.prototype.GetState = function () {
    console.log("START CircleRobot.GetState")

    // 结合圆的一般方程 x^2 + y^2 + ax +by + c = 0 带入三点求abc
    var strEquation1 = this.pos[0][0] ** 2 + this.pos[0][1] ** 2 + '+' + this.pos[0][0] + '*a+' + this.pos[0][1] + '*b+c=0'
    var strEquation2 = this.pos[1][0] ** 2 + this.pos[1][1] ** 2 + '+' + this.pos[1][0] + '*a+' + this.pos[1][1] + '*b+c=0'
    var strEquation3 = this.pos[2][0] ** 2 + this.pos[2][1] ** 2 + '+' + this.pos[2][0] + '*a+' + this.pos[2][1] + '*b+c=0'
    
    try {
        // 解方程
        var solutionList = nerdamer.solveEquations([strEquation1, strEquation2, strEquation3])
        var ret = 0.5 * Math.sqrt(solutionList[0][1] ** 2 +  solutionList[1][1] ** 2 -  4 * solutionList[2][1])
        return '圆的半径 r=' + ret.toFixed(3) + 'px'
    } catch(err) {
        return '圆不存在'
    } finally {
        this.pos.splice(0, this.pos.length)
    }
}