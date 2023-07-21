function Robot() {};

Robot.prototype.init = function(){

};

Robot.prototype.IsAvailable = function (availableNum) {
    console.log("IsAvailable :" + g_state);
    if (g_state == availableNum) {
        return true;
    }
    
    return false;
};

Robot.prototype.Cancel = function () {
    g_state = 0;

    return 0;
};

Robot.prototype.GetState = function () {
    console.log("GetState");

    return ;
};
