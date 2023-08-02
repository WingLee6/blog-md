function LineRobot() {}

LineRobot.prototype = Object.create(Robot.prototype)

LineRobot.prototype.pos = []

// 判断两点是否都已录入
// 返回: 已录入返回ture, 反之返回false
LineRobot.prototype.IsAvailable = function (nAvailableNum) {
    console.log("START LineRobot.IsAvailable - nAvailableNum=" + nAvailableNum);
    if (this.pos.length == nAvailableNum) {
        return true;
    }
    return false;
}

// 记录点坐标
// 返回: 录入信息
LineRobot.prototype.SetPoint = function (x, y) {
    console.log("START LineRobot.SetPoint - x=" + x + ", y=" + y)
        
    this.pos.push([x, y])
    return '已录入第' + this.pos.length + '个点, 坐标为[' + x + ', ' + y + ']'  
}

// 运算
// 返回: 运算结果
LineRobot.prototype.GetState = function (strMeasureType) {
    console.log("START LineRobot.GetState - strMeasureType=" + strMeasureType)

    var diffX = Math.abs(this.pos[1][0] - this.pos[0][0])
    var diffY = Math.abs(this.pos[1][1] - this.pos[0][1])
    
    var ret = MEASURE_ERR
    if (strMeasureType == 'distance') {
        var fDistance =  Math.sqrt(diffX * diffX + diffY * diffY)
        ret = "距离 d = "+ fDistance.toFixed(3) + "px"
    } else if (strMeasureType == 'angle') {
        var fDistance =  Math.sqrt(diffX * diffX + diffY * diffY)
        var fAngle = Math.round(Math.asin(diffY / fDistance) / Math.PI * 180)
        ret = "角度 a = " + fAngle + "°"
    }
    
    this.pos.splice(0, this.pos.length)
    return ret
}
