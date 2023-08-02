// 组件 - 切换机器人模态
app.component("robotSwitchModalComponent", {
    templateUrl: './modalRobotSwitch.html',
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