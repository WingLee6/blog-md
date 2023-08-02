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

// #region 组件
// 组件 - 侧边栏
app.component("sidebarComponent", {
    templateUrl: './template/sidebar.html',
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

// 组件 - 操作内容
app.component("articleComponent", {
    templateUrl: './template/article.html',
    controller: function($scope, baseService) {
        // 点击测量区域
        $scope.RecordClickPoint = function(e) {
            console.log("START CLICK - x=" + e.offsetX + ", y=" + e.offsetY)
            if (g_measure_state == 'distance' || g_measure_state == 'angle') {
                _RunLineRobot(e.clientX, e.clientY)
            } else if (g_measure_state == 'radius') {
                _RunCircleRobot(e.clientX, e.clientY)
            } else {
                ChangeInfoBox(SELECT_ROBOT, 'danger', NO_RESULT)
            }
        }

        // 运行距离测量和角度测量对象
        function _RunLineRobot(x, y) {
            // 记录坐标 + 页面打印新坐标及状态改变
            ChangeInfoBox(baseService.LR.SetPoint(x, y), 'primary', NO_RESULT)

            // 判断当前数据是否满足计算要求, 满足则计算结果
            if (baseService.LR.IsAvailable(2)) {
                ChangeInfoBox(LINE_ROBOT_GOT_P_AND_Q, 'success', baseService.LR.GetState(g_measure_state))
            }
        }

        // 运行三点测圆半径实例
        function _RunCircleRobot(x, y) {
            // 记录坐标 + 页面打印新坐标及状态改变
            ChangeInfoBox(baseService.CR.SetPoint(x, y), 'primary', NO_RESULT)

            // 判断当前数据是否满足计算要求, 满足则计算结果
            if (baseService.CR.IsAvailable(3)) {
                ChangeInfoBox(CIRCLE_ROBOT_GOT_P3, 'success', baseService.CR.GetState())
            }
        }
        
        $scope._CancelMeasurement = function(isSaveChecked) {
            baseService.CancelMeasurement(isSaveChecked)
        }
    }
})

// 组件 - 切换机器人模态
app.component("robotSwitchModalComponent", {
    templateUrl: './template/modalRobotSwitch.html',
    controllerAs: 'vm',
    bindings: {
        sendRobotsOptionsObj: '<',
    },
    controller: function($scope, baseService) {
        $scope.getSendRobotsOptionsObj = {}

        // 机器人选项卡信息列表
        // 每个元素包括类型、名称、选中情况，传递而来
        this.robotsInfoList = []     

        this.$onInit = function() {
            console.log("robotSwitchModalComponent - onInit - sendRobotsOptionsObj=" + this.sendRobotsOptionsObj)
            $scope.getSendRobotsOptionsObj = this.sendRobotsOptionsObj
            // 根据机器人库存生成列表
            var retRobotObj = baseService.RM.QueryRobotType()
            
            for (var prop in retRobotObj) {
                this.sendRobotsOptionsObj[prop].stock = retRobotObj[prop].stock
                this.robotsInfoList.push(this.sendRobotsOptionsObj[prop])
            }
        }

        $scope._RecordOnLine = function(strOnlineBtn) {
            baseService.RecordOnLine(strOnlineBtn)
        }
        
    }
})

// 组件 - 机器人管理模态
app.component("robotManagerModalComponent", {
    templateUrl: './template/modalRobotManager.html',
    controllerAs: 'vm',
    bindings: {
        sendRobotsOptionsObj: '='
    },
    controller: function($scope, baseService) {
        $scope.strInputRobotTypeForSearch = 'CircleRobot'
        $scope.strInputRobotTypeForAdd = 'CircleRobot'
        $scope.strInputRobotStockForAdd = 9

        $scope.getSendRobotsOptionsObj = {}
        
        this.$onInit = function() {
            console.log('robotManagerModalComponent - onInit - sendRobotsOptionsObj=' + this.sendRobotsOptionsObj)
            $scope.getSendRobotsOptionsObj = this.sendRobotsOptionsObj
        }

        $scope.SearchRobotByType = function() {
            console.log('robotManagerModalComponent - SearchRobotByType')
            $scope.robotInfoForSearchList = []  
            
            var retSearchRobotByType = baseService.RM.QueryRobotByType($scope.strInputRobotTypeForSearch)[$scope.strInputRobotTypeForSearch]
            
            if (!retSearchRobotByType) {
                alert("未查到此类机器人")
                return
            }
            $scope.getSendRobotsOptionsObj[$scope.strInputRobotTypeForSearch].stock = retSearchRobotByType.stock
            $scope.robotInfoForSearchList.push($scope.getSendRobotsOptionsObj[$scope.strInputRobotTypeForSearch])
        }

        $scope.AddRobotByTypeAndStock = function() {
            console.log('robotManagerModalComponent - AddRobotByTypeAndStock')

            $scope.robotInfoForAddList = []  

            var retSearchRobotByType = baseService.RM.QueryRobotByType($scope.strInputRobotTypeForAdd)[$scope.strInputRobotTypeForAdd]
    
            var robotObj = new Object()
            if (retSearchRobotByType) {
                // 有该类机器人, 若有执行方法MakedRobot
                robotObj = baseService.RM.MakeRobot($scope.strInputRobotTypeForAdd, $scope.strInputRobotStockForAdd)[$scope.strInputRobotTypeForAdd]                        
            } else {
                // 若没有该机器人, 去商店注册RegisterRobot
                robotObj = baseService.RM.RegisterRobot($scope.strInputRobotTypeForAdd, $scope.strInputRobotStockForAdd)[$scope.strInputRobotTypeForAdd]
            }

            if(!robotObj) {
                alert("注册失败，仓库库存不足")
                return
            }
                
            alert("已为您增加" + robotObj.displayName + "库存" + $scope.strInputRobotStockForAdd + "台, 当前库存为" +  robotObj.stock + "台")

            $scope.getSendRobotsOptionsObj[$scope.strInputRobotTypeForAdd].stock = robotObj.stock
            $scope.robotInfoForAddList.push($scope.getSendRobotsOptionsObj[$scope.strInputRobotTypeForAdd])
        }

        $scope._RecordOnLine = function(strOnlineBtn) {
            baseService.RecordOnLine(strOnlineBtn)
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
        