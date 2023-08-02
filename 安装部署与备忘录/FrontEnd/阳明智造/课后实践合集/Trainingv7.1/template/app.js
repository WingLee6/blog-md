var app = angular.module('globalApp', [])

// #region 控制器 和 服务
// 控制器
app.controller('globalCtrl', function($scope, baseService) {  
    $scope.robotsOptionsObj = {
        LineRobot: {
            displayName: '线性机器人',
            type: 'LineRobot',
            stock: -1,
            isHidedAndCheckedMeasureBtn: false,     // 侧边栏的操作按钮是否显示 true显示 ｜ false隐藏
        },
        CircleRobot: {
            displayName: '曲线机器人',
            type: 'CircleRobot',
            stock: -1,
            isHidedAndCheckedMeasureBtn: false,     // 侧边栏的操作按钮是否显示 true显示 ｜ false隐藏
        }
    } 

    // 判断esc键
    document.addEventListener("keyup", function (e) {
        if (e.keyCode == 27) {
            console.log("START KEYUP - esc取消")
            baseService.CancelMeasurement(0)
        }
    })
})

app.service('baseService', function() {
    this.LR = new LineRobot()
    this.CR = new CircleRobot()
    this.RM = new RobotManager()

    // 侧边栏-取消测量按钮
    // isSaveChecked 是否保留侧边栏的激活状态 0 保留 ｜ 1 不保留
    this.CancelMeasurement = function(isSaveChecked) { 
        console.log("START CancelMeasurement - isSaveChecked=" + isSaveChecked)

        if (isSaveChecked) {
            g_measure_state = ''
        }

        this.LR.pos.splice(0, this.LR.pos.length)
        this.CR.pos.splice(0, this.CR.pos.length)

        if (g_measure_state == 'distance' || g_measure_state == 'angle') {
            ChangeInfoBox(LINE_ROBOT_START_AGAIN, 'danger', NO_RESULT)
        } else if (g_measure_state == 'radius') {
            ChangeInfoBox(CIRCLE_ROBOT_START_AGAIN, 'danger', NO_RESULT)
        } else {
            ChangeInfoBox(SELECT_ROBOT, 'danger', NO_RESULT)
        }
    }

    // 点击事件 - 记录机器人是否激活
    this.RecordOnLine = function(strOnlineBtn) {
        console.log("START RecordOnLine - strOnlineBtn=" + strOnlineBtn)
        
        if (strOnlineBtn == 'isHideMeasureDistanceBtnAndAngleBtn') {
            this.RM.robotObj['LineRobot'].onLine = !this.RM.robotObj['LineRobot'].onLine
        } else if (strOnlineBtn == 'isHideMeasureRadiusBtn') {
            this.RM.robotObj['CircleRobot'].onLine = !this.RM.robotObj['CircleRobot'].onLine
        }
    }
})
// #endregion

// #region 过滤器
// 过滤器 - 列表样式 有库存可选 ''｜ 无库存不可选灰色 'bg-light'
app.filter('disabledStyleFilter', function() { 
    return function(text) {
        if (text <= 0) {
            return 'bg-light'
        } else {
            return ''
        }
    }
})

// 过滤器 - 是否可选 有库存可选 'false'｜ 无库存不可选灰色 'true'
app.filter('isDisabledFilter', function() { 
    return function(text) {
        return text <= 0
    }
})
// #endregion
        