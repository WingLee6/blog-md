function CircleRobot() {};

CircleRobot.prototype = new Robot();

CircleRobot.prototype.SetPoint = function (x1, y1) {
    if (g_state == 0) {
        pointDic.P1[0] = x1;
        pointDic.P1[1] = y1;
        console.log("LineRobot.SetPoint获取P1坐标"+pointDic.P1);
        g_state++

        return g_state;
    }
    
    if (g_state == 1) {
        pointDic.P2[0] = x1;
        pointDic.P2[1] = y1;
        console.log("LineRobot.SetPoint获取P1坐标"+pointDic.P2);
        g_state++
    
        return g_state;
    }
    

    if (g_state == 2) {
        pointDic.P3[0] = x1;
        pointDic.P3[1] = y1;
        console.log("LineRobot.SetPoint获取P3坐标"+pointDic.P3);
        g_state++

        return g_state;
    }
    return 0;
};

// 计算圆的半径
CircleRobot.prototype.GetState = function () {
    console.log("GetState :" + g_state);
    
    
    var x1,x2,x3,y1,y2,y3,x,y,r,A,B,C,D;
    x1 = pointDic.P1[0];
    y1 = pointDic.P1[1];
    x2 = pointDic.P2[0];
    y2 = pointDic.P2[1];
    x3 = pointDic.P3[0];
    y3 = pointDic.P3[1];
    
    var x1x1 = x1*x1;
    var y1y1 = y1*y1;
    var x2x2 = x2*x2;
    var y2y2 = y2*y2;
    var x3x3 = x3*x3;
    var y3y3 = y3*y3;
 
    var x2y3 = x2*y3;
    var x3y2 = x3*y2;
 
    var x2_x3 = x2-x3;
    var y2_y3 = y2-y3;
 
    var x1x1py1y1 = x1x1 + y1y1;
    var x2x2py2y2 = x2x2 + y2y2;
    var x3x3py3y3 = x3x3 + y3y3;
 
    A = x1 * y2_y3 - y1 * x2_x3 + x2y3 - x3y2;
    B = x1x1py1y1 * (-y2_y3) + x2x2py2y2 * (y1-y3) + x3x3py3y3 * (y2-y1);
    C = x1x1py1y1 * x2_x3 + x2x2py2y2 * (x3 - x1) + x3x3py3y3 * (x1-x2);
    D = x1x1py1y1 * (x3y2 - x2y3) + x2x2py2y2 * (x1*y3 - x3*y1) + x3x3py3y3 * (x2*y1-x1*y2);
 
    x =- B/(2*A);
    y =- C/(2*A);
    r = Math.sqrt((B*B+C*C-4*A*D)/(4*A*A));
    
    g_state++;

    if(!A) {
        return "圆不存在";
    } else {
        return "d = "+ r.toFixed(3) + "px";
    }
};