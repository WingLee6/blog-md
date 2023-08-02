// 组件 - 侧边栏
app.component("sidebarComponent", {
    templateUrl: './sidebar.html',
    bindings: {
        sendRobotsOptionsObj: '='
    },
    controllerAs: 'vm',
    controller: function($scope, baseService) {
        this.$onInit = function() {
            console.log("sidebarComponent - onInit - sendRobotsOptionsObj=" + this.sendRobotsOptionsObj)
            // 初始化 - 侧边栏功能控制按钮
            this.sendRobotsOptionsObj.LineRobot.isHidedAndCheckedMeasureBtn = baseService.RM.robotObj.LineRobot.onLine
            this.sendRobotsOptionsObj.CircleRobot.isHidedAndCheckedMeasureBtn = baseService.RM.robotObj.CircleRobot.onLine
        }
        
        // 侧边栏-点击测量距离按键
        $scope.StartLineRobot = function(strMeasureType) {
            console.log("START StartLineRobot - strMeasureType=" + strMeasureType)

            // 记录当前在测量的内容
            g_measure_state = strMeasureType
            // 状态栏更新
            ChangeInfoBox(LINE_ROBOT_START, 'primary', NO_RESULT)
            // 清空历史坐标
            baseService.LR.pos.splice(0, baseService.LR.pos.length)
        }

        // 侧边栏-点击测量三点圆半径按键
        $scope.StartCircleRobot = function(strMeasureType) {        
            console.log("START StartCircleRobot - strMeasureType=" + strMeasureType)

            // 记录当前在测量的内容
            g_measure_state = strMeasureType
            // 状态栏更新
            ChangeInfoBox(CIRCLE_ROBOT_START, 'primary', NO_RESULT)
            // 清空历史坐标
            baseService.CR.pos.splice(0, baseService.CR.pos.length)
        }

        // 取消测量操作激活状态
        $scope._CancelMeasurement = function(isSaveChecked) {
            baseService.CancelMeasurement(isSaveChecked)
        }
    }
})