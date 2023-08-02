// 组件 - 机器人管理模态
app.component("robotManagerModalComponent", {
    templateUrl: './modalRobotManager.html',
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