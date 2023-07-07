function CircleRobot() {};

CircleRobot.prototype = Object.create(Robot.prototype);

CircleRobot.prototype.p1 = [];
CircleRobot.prototype.p2 = [];
CircleRobot.prototype.p3 = [];

CircleRobot.prototype.SetPoint = function (p1x, p1y) {
    console.log("LineRobot.SetPoint获取坐标" + p1x + ", " + p1y);
    if (g_state == 0) {
        this.p1 = [p1x, p1y];
        g_state++;

        return CIRCLE_ROBOT_GOT_P1;
    }
    
    if (g_state == 1) {
        this.p2 = [p1x, p1y];
        g_state++;
    
        return CIRCLE_ROBOT_GOT_P2;
    }

    if (g_state == 2) {
        this.p3 = [p1x, p1y];
        g_state++;

        return CIRCLE_ROBOT_GOT_P3;
    }
    return 0;
};

// 计算圆的半径
CircleRobot.prototype.GetState = function () {
    console.log("GetState :" + g_state);
    
    var p1x, p2x, p3x, p1y, p2y, p3y, x, y, r, A, B, C, D;
    p1x = this.p1[0];
    p1y = this.p1[1];
    p2x = this.p2[0];
    p2y = this.p2[1];
    p3x = this.p3[0];
    p3y = this.p3[1];
    
    A = p1x * (p2y - p3y) - p1y * (p2x - p3x) + p2x * p3y - p3x * p2y;
    B = (p1x * p1x + p1y * p1y) * (0-(p2y-p3y)) + (p2x * p2x + p2y * p2y) * (p1y - p3y) + (p3x * p3x + p3y * p3y) * (p2y - p1y);
    C = (p1x * p1x + p1y * p1y) * (p2x - p3x) + (p2x * p2x - p2y * p2y) * (p3x - p1x) + (p3x * p3x + p3y * p3y) * (p1x - p2x);
    D = (p1x * p1x + p1y * p1y) * (p3x * p2y - p2x * p3y) + (p2x * p2x + p2y * p2y) * (p1x * p3y - p3x * p1y) + (p3x * p3x + p3y * p3y) * (p2x * p1y - p1x * p2y);
 
    x =- B / ( 2 * A);
    y =- C / ( 2 * A);
    r = Math.sqrt((B * B + C * C - 4 * A * D) / (4 * A * A));
    
    g_state++;

    if(!A) {
        return "圆不存在";
    } else {
        return "直径d = "+ r.toFixed(3) + "px";
    }
};

exports.CircleRobot = CircleRobot;