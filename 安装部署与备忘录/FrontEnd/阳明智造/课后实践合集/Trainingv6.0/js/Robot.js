function Robot() {};

Robot.prototype.init = function(){

};

Robot.prototype.IsAvailable = function (availableNum) {
    console.log("START Robot.IsAvailable - availableNum=" + availableNum)
    
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
