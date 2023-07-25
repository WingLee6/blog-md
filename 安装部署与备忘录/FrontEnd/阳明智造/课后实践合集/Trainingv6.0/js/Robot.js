function Robot() {};

Robot.prototype.init = function(){

};

Robot.prototype.IsAvailable = function (nAvailableNum) {
    console.log("START Robot.IsAvailable - nAvailableNum=" + nAvailableNum)
    
    return false
};

Robot.prototype.Cancel = function () {
    console.log("START Robot.Cancel");

    return 0
};

Robot.prototype.GetState = function () {
    console.log("START Robot.GetState")

    return
};
