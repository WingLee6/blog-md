function LineRobot() {}

LineRobot.prototype = Object.create(Robot.prototype)

LineRobot.prototype.pos = []

// 判断两点是否都已录入
// 返回: 已录入返回ture, 反之返回false
LineRobot.prototype.IsAvailable = function (availableNum) {
    console.log("START LineRobot.IsAvailable - availableNum=" + availableNum);
    if (this.pos.length == availableNum) {
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
LineRobot.prototype.GetState = function (measureType) {
    console.log("START LineRobot.GetState - measureType=" + measureType)

    var diffX = Math.abs(this.pos[1][0] - this.pos[0][0])
    var diffY = Math.abs(this.pos[1][1] - this.pos[0][1])
    
    var ret = MEASURE_ERR
    if (measureType == 'distance') {
        var distance =  Math.sqrt(diffX * diffX + diffY * diffY)
        ret = "距离 d = "+ distance.toFixed(3) + "px"
    } else if (measureType == 'angle') {
        var distance =  Math.sqrt(diffX * diffX + diffY * diffY)
        var angle = Math.round(Math.asin(diffY / distance) / Math.PI * 180)
        ret = "角度 a = " + angle + "°"
    }
    
    this.pos.splice(0, this.pos.length)
    return ret
}
