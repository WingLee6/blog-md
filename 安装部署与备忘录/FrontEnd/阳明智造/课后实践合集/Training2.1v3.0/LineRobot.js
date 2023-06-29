function LineRobot() {}

LineRobot.prototype.SetPoint = function (x1, y1) {
    if (g_state == 0) {
        pTarget[0] = x1;
        pTarget[1] = y1;
        console.log("LineRobot.SetPoint获取P坐标"+pTarget);
        g_state++

        return g_state;
    }

    if (g_state == 1) {
        qTarget[0] = x1;
        qTarget[1] = y1;
        console.log("LineRobot.SetPoint获取Q坐标"+qTarget);
        g_state++

        return g_state;
    }
    
    return 0;
    // return { x: parseInt(x1), y: parseInt(y1) };
};

LineRobot.prototype.IsAvailable = function () {
    console.log("IsAvailable" + g_state);
    if (g_state == 2) {
        return true;
    }
    
    return false;
};

LineRobot.prototype.Cancel = function () {
    pTarget = [0, 0];
    qTarget = [0, 0];
    g_state = 0;

    return 0;
};

LineRobot.prototype.GetState = function () {
    console.log("GetState" + g_state);
    var diffX = Math.abs(pTarget[0]-qTarget[0]);
    var diffY = Math.abs(pTarget[1]-qTarget[1]);

    var distance =  Math.sqrt(diffX * diffX + diffY * diffY);
    var angle = Math.round(Math.asin(diffY/distance)/Math.PI*180);

    g_state++;

    return "d = "+ distance.toFixed(3) + "px, a = " + angle + "°";
};
