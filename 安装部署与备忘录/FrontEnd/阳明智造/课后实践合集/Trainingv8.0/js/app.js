var app = angular.module('globalApp', [])

// #region 组件
// 组件 - 切换机器人模态
app.component("globalComponent", {
    controllerAs: 'vm',
    controller: function($scope) {
        this.LR = new LineRobot()
        this.CR = new CircleRobot()
        this.RM = new RobotManager()
        
        this.robotsOptionsObj = {
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

        this.strStateText = SELECT_ROBOT        // 状态栏文本内容
        this.strStateStyle = 'alert-primary'    // 状态栏背景颜色 'alert-success'|'alert-primary'|'alert-danger'
        this.strAnswerText = NO_RESULT          // 结果栏文本
        this.strActiveMeasureState = ''         // 当前激活的测量状态
        
        this.$onInit = function() {
            console.log("sidebarComponent - onInit")
            // 初始化 - 根据机器人库存生成列表
            var retRobotObj = this.RM.QueryRobotType()
            for (var prop in retRobotObj) {
                this.robotsOptionsObj[prop].stock = retRobotObj[prop].stock
                this.robotsOptionsObj[prop].isHidedAndCheckedMeasureBtn = retRobotObj[prop].onLine
            }
        }

        // 侧边栏-取消测量按钮
        // isSaveChecked 是否保留侧边栏的激活状态 0 保留 ｜ 1 不保留
        this.CancelMeasurement = function(isSaveChecked) { 
            console.log("START CancelMeasurement - isSaveChecked=" + isSaveChecked)

            if (isSaveChecked) {
                this.strActiveMeasureState = ''
            }

            this.LR.pos.splice(0, this.LR.pos.length)
            this.CR.pos.splice(0, this.CR.pos.length)

            if (this.strActiveMeasureState == 'distance' || this.strActiveMeasureState == 'angle') {
                this.ChangeInfoBox(LINE_ROBOT_START_AGAIN, 'alert-danger', NO_RESULT)
            } else if (this.strActiveMeasureState == 'radius') {
                this.ChangeInfoBox(CIRCLE_ROBOT_START_AGAIN, 'alert-danger', NO_RESULT)
            } else {
                this.ChangeInfoBox(SELECT_ROBOT, 'alert-danger', NO_RESULT)
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

        // 更改提示信息 和 结果信息
        // strStateText状态栏文本内容
        // strStateStyle状态栏背景颜色 'alert-success'|'alert-primary'|'alert-danger'
        // strAnswerText结果栏文本
        this.ChangeInfoBox = function(strStateText, strStateStyle, strAnswerText) {
            this.strStateText = strStateText        
            this.strStateStyle = strStateStyle   
            this.strAnswerText = strAnswerText        
        }
    }
})

// 组件 - 侧边栏
app.component("sidebarComponent", {
    templateUrl: './template/sidebar.html',
    require: {
        global: '?^globalComponent' 
    },
    controllerAs: 'vm',
    controller: function($scope) {
        this.$onInit = function() {
            console.log("sidebarComponent - onInit")
        }
        
        // 侧边栏-点击测量距离按键
        this.StartLineRobot = function(strMeasureType) {
            console.log("START StartLineRobot - strMeasureType=" + strMeasureType)

            // 记录当前在测量的内容
            this.global.strActiveMeasureState = strMeasureType
            // 状态栏更新
            this.global.ChangeInfoBox(LINE_ROBOT_START, 'alert-primary', NO_RESULT)
            // 清空历史坐标
            this.global.LR.pos.splice(0, this.global.LR.pos.length)
        }

        // 侧边栏-点击测量三点圆半径按键
        this.StartCircleRobot = function(strMeasureType) {        
            console.log("START StartCircleRobot - strMeasureType=" + strMeasureType)

            // 记录当前在测量的内容
            this.global.strActiveMeasureState = strMeasureType
            // 状态栏更新
            this.global.ChangeInfoBox(CIRCLE_ROBOT_START, 'alert-primary', NO_RESULT)
            // 清空历史坐标
            this.global.CR.pos.splice(0, this.global.CR.pos.length)
        }
    }
})

// 组件 - 操作内容
app.component("articleComponent", {
    templateUrl: './template/article.html',
    require: {
        global: '?^globalComponent' 
    },
    controllerAs: 'vm',
    controller: function($scope) {
        // 点击测量区域
        this.RecordClickPoint = function(e) {
            console.log("START CLICK - x=" + e.offsetX + ", y=" + e.offsetY)
            if (this.global.strActiveMeasureState == 'distance' || this.global.strActiveMeasureState == 'angle') {
                this.RunLineRobot(e.clientX, e.clientY)
            } else if (this.global.strActiveMeasureState == 'radius') {
                this.RunCircleRobot(e.clientX, e.clientY)
            } else {
                this.global.ChangeInfoBox(SELECT_ROBOT, 'alert-danger', NO_RESULT)
            }
        }

        // 运行距离测量和角度测量对象
        this.RunLineRobot = function(x, y) {
            // function _RunLineRobot(x, y) {
            // 记录坐标 + 页面打印新坐标及状态改变
            this.global.ChangeInfoBox(this.global.LR.SetPoint(x, y), 'alert-primary', NO_RESULT)

            // 判断当前数据是否满足计算要求, 满足则计算结果
            if (this.global.LR.IsAvailable(2)) {
                this.global.ChangeInfoBox(LINE_ROBOT_GOT_P_AND_Q, 'alert-success', this.global.LR.GetState(this.global.strActiveMeasureState))
            }
        }

        // 运行三点测圆半径实例
        this.RunCircleRobot = function(x, y) {
            // 记录坐标 + 页面打印新坐标及状态改变
            this.global.ChangeInfoBox(this.global.CR.SetPoint(x, y), 'alert-primary', NO_RESULT)

            // 判断当前数据是否满足计算要求, 满足则计算结果
            if (this.global.CR.IsAvailable(3)) {
                this.global.ChangeInfoBox(CIRCLE_ROBOT_GOT_P3, 'alert-success', this.global.CR.GetState())
            }
        }
    }
})

// 组件 - 切换机器人模态
app.component("robotSwitchModalComponent", {
    templateUrl: './template/modalRobotSwitch.html',
    controllerAs: 'vm',
    require: {
        global: '?^globalComponent' 
    },
    controller: function($scope) {
        // 机器人选项卡信息列表
        // 每个元素包括类型、名称、选中情况，传递而来
        this.robotsInfoList = []     

        this.$onInit = function() {
            console.log("robotSwitchModalComponent - onInit")
            // 根据机器人库存生成列表
            var retRobotObj = this.global.RM.QueryRobotType()
            
            for (var prop in retRobotObj) {
                this.robotsInfoList.push(this.global.robotsOptionsObj[prop])
            }
        }
    }
})

// 组件 - 机器人管理模态
app.component("robotManagerModalComponent", {
    templateUrl: './template/modalRobotManager.html',
    controllerAs: 'vm',
    require: {
        global: '?^globalComponent' 
    },
    controller: function($scope) {
        this.strInputRobotTypeForSearch = 'CircleRobot'
        this.strInputRobotTypeForAdd = 'CircleRobot'
        this.strInputRobotStockForAdd = 9
        
        this.$onInit = function() {
            console.log('robotManagerModalComponent - onInit')
        }

        this.SearchRobotByType = function() {
            console.log('robotManagerModalComponent - SearchRobotByType')
            this.robotInfoForSearchList = []  
            
            var retSearchRobotByType = this.global.RM.QueryRobotByType(this.strInputRobotTypeForSearch)[this.strInputRobotTypeForSearch]
            
            if (!retSearchRobotByType) {
                alert("未查到此类机器人")
                return
            }
            this.global.robotsOptionsObj[this.strInputRobotTypeForSearch].stock = retSearchRobotByType.stock
            this.robotInfoForSearchList.push(this.global.robotsOptionsObj[this.strInputRobotTypeForSearch])
        }

        this.AddRobotByTypeAndStock = function() {
            console.log('robotManagerModalComponent - AddRobotByTypeAndStock')

            this.robotInfoForAddList = []  

            var retSearchRobotByType = this.global.RM.QueryRobotByType(this.strInputRobotTypeForAdd)[this.strInputRobotTypeForAdd]
    
            var robotObj = new Object()
            if (retSearchRobotByType) {
                // 有该类机器人, 若有执行方法MakedRobot
                robotObj = this.global.RM.MakeRobot(this.strInputRobotTypeForAdd, this.strInputRobotStockForAdd)[this.strInputRobotTypeForAdd]                        
            } else {
                // 若没有该机器人, 去商店注册RegisterRobot
                robotObj = this.global.RM.RegisterRobot(this.strInputRobotTypeForAdd, this.strInputRobotStockForAdd)[this.strInputRobotTypeForAdd]
            }

            if(!robotObj) {
                alert("注册失败，仓库库存不足")
                return
            }
                
            alert("已为您增加" + robotObj.displayName + "库存" + this.strInputRobotStockForAdd + "台, 当前库存为" +  robotObj.stock + "台")

            this.global.robotsOptionsObj[this.strInputRobotTypeForAdd].stock = robotObj.stock
            this.robotInfoForAddList.push(this.global.robotsOptionsObj[this.strInputRobotTypeForAdd])
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
        