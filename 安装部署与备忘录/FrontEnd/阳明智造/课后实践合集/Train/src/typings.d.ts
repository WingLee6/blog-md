declare module "assets/js/CircleRobot" {
    export class CircleRobot {
        SetPoint(p1x: number, p1y: number): string;
        GetState(): string;
    }
}

declare module "assets/js/LineRobot" {
    export class LineRobot {
        SetPoint(x1: number, y1: number): string;
        GetState(): void;
    }
}

declare module "assets/js/Robot" {
    export class Robot {
        IsAvailable(): boolean;
        Cancel(): number;
    }
}

declare module "assets/js/RobotManager" {
    export class RobotManager {
        robotObj(): any;
        RegisterRobot(type: string): any;
        MakeRobot(type: string, displayName: string, stock: number, btnText: string): any;
        QueryRobotByType(type: string): any;
        QueryRobotType(): any;
        CheckOnLineRobot(type: string, IsCheckOnLine: boolean): void;

    }
}



// declare var fun_1 : any;
// declare var numText:number

declare var g_state: number        // 0 means no point;  1 means has P but no Q; 2 means both has P and Q;
declare var g_btn_state: number        // 记录当前被激活的按键, 即测量模式

declare var SELECT_ROBOT: string
declare var NO_RESULT: string

declare var LINE_ROBOT_START: string
declare var LINE_ROBOT_GOT_P: string
declare var LINE_ROBOT_GOT_P_AND_Q: string

declare var CIRCLE_ROBOT_START: string
declare var CIRCLE_ROBOT_GOT_P1: string
declare var CIRCLE_ROBOT_GOT_P2: string
declare var CIRCLE_ROBOT_GOT_P3: string

