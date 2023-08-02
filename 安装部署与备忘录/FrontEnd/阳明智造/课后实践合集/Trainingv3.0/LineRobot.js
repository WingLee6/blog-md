function LineRobot() {};

LineRobot.prototype = new Robot();

LineRobot.prototype.SetPoint = function (x1, y1) {
    if (g_state == 0) {
        pointDic.P[0] = x1;
        pointDic.P[1] = y1;
        console.log("LineRobot.SetPoint获取P坐标"+pointDic.P);
        g_state++

        return g_state;
    }

    if (g_state == 1) {
        pointDic.Q[0] = x1;
        pointDic.Q[1] = y1;
        console.log("LineRobot.SetPoint获取Q坐标"+pointDic.Q);
        g_state++

        return g_state;
    }
    return 0;
};


LineRobot.prototype.GetState = function () {
    console.log("GetState :" + g_state);
    console.log("P :" + pointDic.P);
    console.log("Q :" + pointDic.Q);
    var diffX = Math.abs(pointDic.P[0]-pointDic.Q[0]);
    var diffY = Math.abs(pointDic.P[1]-pointDic.Q[1]);

    var distance =  Math.sqrt(diffX * diffX + diffY * diffY);
    var angle = Math.round(Math.asin(diffY/distance)/Math.PI*180);

    g_state++;

    return "d = "+ distance.toFixed(3) + "px, a = " + angle + "°";
};
