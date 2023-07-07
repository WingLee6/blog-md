function LineRobot() {};

LineRobot.prototype = Object.create(Robot.prototype);

LineRobot.prototype.p = [];
LineRobot.prototype.q = [];

LineRobot.prototype.SetPoint = function (x1, y1) {
    console.log("LineRobot.SetPoint获取坐标" + x1 + " " + y1);
    if (g_state == 0) {
        this.p = [x1, y1];
        g_state++

        return LINE_ROBOT_GOT_P;
    }

    if (g_state == 1) {
        this.q = [x1, y1];
        g_state++

        return LINE_ROBOT_GOT_P_AND_Q;
    }
    return 0;
};


LineRobot.prototype.GetState = function () {
    console.log("GetState :" + g_state + ", P : " + this.p + ", Q : " + this.q);
    var diffX = Math.abs(this.p[0] - this.q[0]);
    var diffY = Math.abs(this.p[1] - this.q[1]);

    var distance =  Math.sqrt(diffX * diffX + diffY * diffY);
    var angle = Math.round(Math.asin(diffY / distance) / Math.PI * 180);

    g_state++;

    return "距离d = "+ distance.toFixed(3) + "px, 角度a = " + angle + "°";
};


exports.LineRobot = LineRobot;