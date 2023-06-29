var g_state = 0;        // 0 means no point;  1 means has P but no Q; 2 means both has P and Q;

var pTarget = [0, 0];
var qTarget = [0, 0];

var errClickZone = "请在下方灰色测量区域点击";
var errColor = "hsl(348, 100%, 61%)";

var currentStateTextColor = "hsl(141, 71%, 48%)";
var currentStateTextClickQ = "P坐标已获取. 请再次点击,锁定Q的坐标";
var currentStateTextOutput = "请查看P与Q的距离和角度";
var currentStateTextNext = "请再次点击新P点位置";
