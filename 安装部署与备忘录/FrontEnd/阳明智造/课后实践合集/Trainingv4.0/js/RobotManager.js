// var ROBOT_TYPE_LINE = 0;        // 线性机器人个数
// var ROBOT_TYPE_CIRCLE = 1;      // 曲线机器人个数
 
var RobotManager = function() { }

RobotManager.prototype.robotObj = {
    LineRobot: {
        onLine: false,
        stock: 5,
        displayName: "线性机器人",
        type: "LineRobot",
        btnHtmlText: '<a class="list-group-item list-group-item-action list-group-item-light p-3 robot-btn-class" id="line-robot-btn-id" onclick="StartLineRobot()"><div class="d-flex w-100 justify-content-between"><h4 class="mb-1">线性机器人</h4></div><p class="mb-1">要求: </p><ul><li>两点P & Q</li></ul><p class="mb-1">功能: </p><ul><li>测量两点距离; </li><li>测量两点角度</li></ul></a>',
    },
    CircleRobot: {
        onLine: true, 
        stock: 1,
        displayName: "曲线机器人",
        type: "CircleRobot",
        btnHtmlText: '<a class="list-group-item list-group-item-action list-group-item-light p-3 robot-btn-class" id="circle-robot-btn-id" onclick="StartCircleRobot()"><div class="d-flex w-100 justify-content-between"><h4 class="mb-1">曲线机器人</h4></div><p class="mb-1">要求: </p><ul><li>三点P1 & P2 & P3</li></ul><p class="mb-1">功能: </p><ul><li>测量圆的半径; </li></ul></a>',
    },
}

// RobotManager.GetIntance



// 注册新机器人 - 已经存在机器人类型, 增加库存
// 再列表中增加新的机器人
RobotManager.prototype.RegisterRobot = function(type) {
    this.robotObj[type].stock++;

    var ret = new Object();
    var temp = new Object();
    temp[type] = type;
    temp.displayName = this.robotObj[type].displayName;
    temp.stock = this.robotObj[type].stock;
    temp.onLine = this.robotObj[type].onLine;

    ret[type] = temp;
    return ret;
}

// 创造机器人 - 不存在机器人类型, 创造
RobotManager.prototype.MakeRobot = function(type, displayName, stock, btnText) { 
    var temp = new Object();
    var ret = new Object();
    temp.displayName = displayName;
    temp.stock = stock;
    temp.type = type;
    temp.onLine = false; 
    temp.btnHtmlText = btnText; 
    this.robotObj[type] = temp;

    ret[type] = temp;
    return ret;
}


// 查询机器人是否存在
// 输入: 机器人类型
// 返回: 若存在则返回具体信息, 否则返回0
RobotManager.prototype.QueryRobotByType = function(type) {
    var ret = new Object();
    
    if (Object.keys(this.robotObj).indexOf(type) > -1) {
        ret[type] = this.robotObj[type];
        console.log("ret = " + ret);
        return ret;
    } else {
        return 0;
    }
}


// 查询当前机器人
// 返回: 当前机器人列表
RobotManager.prototype.QueryRobotType = function() {
    var ret = new Object();
    
    for (var prop in this.robotObj) {
        var temp = new Object();
        temp.type = prop;
        temp.displayName = this.robotObj[prop].displayName;
        temp.stock = this.robotObj[prop].stock;
        temp.onLine = this.robotObj[prop].onLine;
        ret[prop] = temp;
    };
    
    return ret;
}

// 将选中机器人上线
RobotManager.prototype.CheckOnLineRobot = function(type, IsCheckOnLine) {
    this.robotObj[type].onLine = IsCheckOnLine;
}