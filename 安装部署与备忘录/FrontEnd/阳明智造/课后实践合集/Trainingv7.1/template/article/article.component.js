// 组件 - 操作内容
app.component("articleComponent", {
    templateUrl: './article.html',
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