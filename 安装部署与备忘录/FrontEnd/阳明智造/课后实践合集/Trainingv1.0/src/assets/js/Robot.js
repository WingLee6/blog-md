// var numText = 7777;

function Robot() {

}

Robot.prototype.init = function(){

}

// Robot.prototype.Say = function() {
//     console.log("hello world");
// }

Robot.prototype.IsAvailable = function () {
    console.log("IsAvailable :" + g_state);
    if (g_state == availableNum) {
        return true;
    }
    
    return false;
}

Robot.prototype.Cancel = function () {
    g_state = 0;

    return 0;
}

exports.Robot = Robot;