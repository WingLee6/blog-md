// var ROBOT_TYPE_LINE = 0;        // 线性机器人个数
// var ROBOT_TYPE_CIRCLE = 1;      // 曲线机器人个数
 
var RobotManager = function() { }

RobotManager.prototype.robotObj = {
    LineRobot: {
        onLine: true,
        stock: 5,
        displayName: "线性机器人",
        type: "LineRobot",
    },
    CircleRobot: {
        onLine: false, 
        stock: 10,
        displayName: "曲线机器人",
        type: "CircleRobot",
    },
}

RobotManager.GetIntance = (function() {
    let instance = null;
    return function() {
      if(!instance) {
        instance = new RobotManager()
      }
      return instance;
    }
})()


// 注册新机器人 - 去机器人商店找
// 再列表中增加新的机器人
RobotManager.prototype.RegisterRobot = function(type, stock) {
    console.log("RegisterRobot")
    if (Object.keys(robotStoreObj).indexOf(type) <= -1) {
        // 商店也无此机器人
        return 0
    } 

    if (robotStoreObj[type].stock < stock ) {
        // 商店库存不足
        return 0
    }

    var ret = new Object();
    ret[type] = robotStoreObj[type]
    ret[type].stock = Number(stock)

    this.robotObj[type] = ret
    return ret
}

// 创造机器人 - 增加库存
RobotManager.prototype.MakeRobot = function(type, stock) { 
    console.log("MakeRobot")
    if (Object.keys(robotStoreObj).indexOf(type) <= -1) {
        // 商店也无此机器人
        return 0
    } 

    if (robotStoreObj[type].stock < stock ) {
        // 商店库存不足
        return 0
    }
    
    this.robotObj[type].stock += Number(stock);

    var ret = new Object();
    ret[type] = this.robotObj[type];
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