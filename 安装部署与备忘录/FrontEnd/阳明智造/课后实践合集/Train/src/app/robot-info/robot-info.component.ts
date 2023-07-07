/// <reference path = "../../typings.d.ts" /> 
// import { AnimateTimings } from '@angular/animations';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {CircleRobot} from '../../assets/js/CircleRobot'
import {LineRobot} from '../../assets/js/LineRobot'
import {Robot} from '../../assets/js/Robot'
import {RobotManager} from '../../assets/js/RobotManager'

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-robot-info',
  templateUrl: './robot-info.component.html',
  styleUrls: ['./robot-info.component.css']
})

export class RobotInfoComponent {
  @Input()
  divClass!: string;

  @Input()
  robotType!: string;

  @Input()
  robotDisplayName!: string;

  @Input()
  robotStock!: number;

  @Input()
  robotOnLine!: number;

  @Input()
  placeholderContent!: string;
  
  idText = this.divClass + '-' + this.robotType + '-input-id';

  rememberLoginControl = new FormControl({value:'n/a',disabled:false});
  
  // 模态框-单选框-选择机器人
  CheckRobot(event: any): void {
    console.log("Start CheckRobot 选中机器人" + event.target.value)

    console.log(this.rememberLoginControl)
    console.log(this.rememberLoginControl.value)
    // var IsChecked: any = document.getElementById(checkBoxId).checked;        // 选中或取消
    
    // // 更改机器人在线数据
    // RM.CheckOnLineRobot(text, IsChecked);
    
    // // 侧边栏-机器人按钮状态改变
    // ShowRobotBtn();
  };

}
