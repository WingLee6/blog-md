
class LineRobot {
    

    
    //Set P or Q, depends on current state.
    //return int
    SetPoint(x, y) {

        if (g_state == 0) {
            pTarget[0] = x;
            pTarget[1] = y;
            console.log("LineRobot.SetPoint获取P坐标"+pTarget);
            document.getElementById("pTargetX").value = pTarget[0]; 
            document.getElementById("pTargetY").value = pTarget[1]; 
            document.getElementById("current-state").innerHTML=currentStateTextClickQ;
            document.getElementById("current-state").style.color=currentStateTextColor;
            g_state++

            return g_state;
        }

        if (g_state == 1) {
            qTarget[0] = x;
            qTarget[1] = y;
            console.log("LineRobot.SetPoint获取Q坐标"+qTarget);
            document.getElementById("qTargetX").value = qTarget[0]; 
            document.getElementById("qTargetY").value = qTarget[1]; 
            document.getElementById("current-state").innerHTML=currentStateTextOutput;
            document.getElementById("current-state").style.color=currentStateTextColor;
            g_state++

            return g_state;
        }
        
        return 0;
    }

    //It's available only when Start point and end point is both set.
    //return bool
    //return true if it's available to calculate distance and angle.
    IsAvailable() {
        console.log("IsAvailable" + g_state);
        if (g_state == 2) {
            return true;
        }
        
        return false;
    }

    //return >=0 if cancel succeeded.
    //return <0 otherwise.
    Cancel() {
        pTarget = [0, 0];
        document.getElementById("pTargetX").value = pTarget[0]; 
        document.getElementById("pTargetY").value = pTarget[1]; 
        qTarget = [0, 0];
        document.getElementById("qTargetX").value = qTarget[0]; 
        document.getElementById("qTargetY").value = qTarget[1]; 


        document.getElementById("current-state").innerHTML=currentStateTextOutput;
        document.getElementById("current-state").style.color=currentStateTextColor;

        g_state = 0;

        return 0;
    }

    //Get current state, for example, return "P1", "P2" to indicate user is in state of setting point P1, P2 respectively.  Return result when all points is ready, for example "d = 10px, a = 5°"
    //return string.
    GetState() {
        console.log("GetState" + g_state);
        var diffX = Math.abs(pTarget[0]-qTarget[0]);
        var diffY = Math.abs(pTarget[1]-qTarget[1]);

        var distance =  Math.sqrt(diffX * diffX + diffY * diffY);
        var angle = Math.round(Math.asin(diffY/distance)/Math.PI*180);

        g_state++;

        return "d = "+ distance.toFixed(3) + "px, a = " + angle + "°";
    }
}