var g_state = 0;        // 0 means no point;  1 means has P but no Q; 2 means both has P and Q;
var g_btn_state;        // 记录当前被激活的按键, 即测量模式

var SELECT_ROBOT = "请在左边选择您要测量的项目";
var NO_RESULT = "暂无测量结果";

var LINE_ROBOT_START = "线型机器人已启动, 请点击指定区域";
var LINE_ROBOT_GOT_P = "线型机器人已获得P点坐标, 请再次点击作为Q点坐标";
var LINE_ROBOT_GOT_P_AND_Q = "线型机器人已获得P点和Q点坐标, 请查看结果";

var CIRCLE_ROBOT_START = "曲线型机器人已启动, 请点击指定区域";
var CIRCLE_ROBOT_GOT_P1 = "曲线型机器人已获得P1点坐标, 请继续点击";
var CIRCLE_ROBOT_GOT_P2 = "曲线型机器人已获得P1和P2坐标, 请继续点击";
var CIRCLE_ROBOT_GOT_P3 = "曲线型机器人已获得P1&P2&P3点坐标, 请查看结果";
