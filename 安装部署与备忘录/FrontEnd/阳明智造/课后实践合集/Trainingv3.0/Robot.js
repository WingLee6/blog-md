function Robot() {};


Robot.prototype.init = function(){

};

Robot.prototype.hello = function (x1, y1) {
    console.log("Hello");
};

Robot.prototype.IsAvailable = function (availableNum) {
    console.log("IsAvailable :" + g_state);
    if (g_state == availableNum) {
        return true;
    }
    
    return false;
};


Robot.prototype.Cancel = function () {
    pointDic = {
        P1: [0, 0],
        P2: [0, 0],
        P3: [0, 0],
        P: [0, 0],
        Q: [0, 0]
    };
    g_state = 0;

    return 0;
};