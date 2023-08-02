/// <reference path = "../typings.d.ts" /> 
// import { AnimateTimings } from '@angular/animations';
import {CircleRobot} from '../assets/js/CircleRobot'
import {LineRobot} from '../assets/js/LineRobot'
import {Robot} from '../assets/js/Robot'
import {RobotManager} from '../assets/js/RobotManager'

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  // 初始化
  LR: any;
  CR: any;
  RM = new RobotManager();

  title = 'Train';
  sendFrontRobotInfoAllArr: any = []

  sendFrontRobotInfoBySearchObj: any    // 基于搜索,将返回机器人数据返回给页面
  searchRobotInputText = ""             // 搜索框输入文本
  IsShowRobotInfoBySearch = false       // 是否显示搜索出的机器人信息

  sendFrontRobotInfoByAddObj: any       // 基于添加,将返回机器人数据返回给页面
  addRobotInputTextDisplayName = ""     // 添加框-机器人名字输入文本
  addRobotInputTextType = ""            // 添加框-机器人类型输入文本
  addRobotInputTextStock = 0            // 添加框-机器人库存输入文本
  IsShowRobotInfoByAdd = false          // 是否显示搜索出的机器人信息


  // 侧边栏-呼叫机器人管理-呼叫机器人管理员操作
  StartRobotManager() {
    console.log("Start RobotManager");
    // 清空内容
    this.sendFrontRobotInfoAllArr = []
    

    var robotInfoAllObj: any = this.RM.QueryRobotType();
    
    // 根据机器人库存生成列表
    for (var prop in robotInfoAllObj) {
      console.log(prop);
      console.log(robotInfoAllObj[prop]);
      var tempObj: any = {
        divClass: "all-robot-info",
        robotType: robotInfoAllObj[prop].type,
        robotDisplayName: robotInfoAllObj[prop].displayName,
        robotStock: robotInfoAllObj[prop].stock,
        robotOnLine: robotInfoAllObj[prop].onLine,
        placeholderContent: "当前库存"
      }

      this.sendFrontRobotInfoAllArr.push(tempObj);
    };
  };

  // 模态框-按钮-查找-执行搜索机器人操作-done
  SearchRobot() {
    console.log("Start SearchRobot");

    var ret: any = this.RM.QueryRobotByType(this.searchRobotInputText);

    if (ret) {
      this.IsShowRobotInfoBySearch = true;
      this.sendFrontRobotInfoBySearchObj = {
        divClass: "search-robot-info",
        robotType: ret[this.searchRobotInputText].type,
        robotDisplayName: ret[this.searchRobotInputText].displayName,
        robotStock: ret[this.searchRobotInputText].stock,
        robotOnLine: ret[this.searchRobotInputText].onLine,
        placeholderContent: "当前库存"
      }
    } else {
      this.IsShowRobotInfoBySearch = false;
      alert("未发现该机器人, 请添加");
    }
  };

  // 模态框-按钮-添加-执行添加机器人操作
  // 检索是否有该类机器人, 若有执行RegisterRobot方法; 若还没有此类机器人, 执行MakeRobot方法
  AddRobot() {
    console.log("Start AddRobot");    
    // 检索是否有该类机器人
    var ret: any = this.RM.QueryRobotByType(this.addRobotInputTextType);
    // var ret = RM.QueryRobotByType(addRobotTypeText);

    this.IsShowRobotInfoByAdd = true;
    if (ret) {
      // 有该类机器人, 若有执行RegisterRobot方法, 使库存+1
      // var temp: any = this.RM.RegisterRobot(this.addRobotInputTextType)[this.addRobotInputTextType]
      
      this.sendFrontRobotInfoByAddObj = {
        divClass: "add-robot-info",
        robotType: ret[this.searchRobotInputText].type,
        robotDisplayName: ret[this.searchRobotInputText].displayName,
        robotStock: ret[this.searchRobotInputText].stock,
        robotOnLine: ret[this.searchRobotInputText].onLine,
        placeholderContent: "新增后库存"
      }
      
      // ShowRobotInfo("add-robot-info", this.RM.RegisterRobot(addRobotTypeText)[addRobotTypeText], "新增后库存");
    } else {
      // 若没有该机器人, 制作该机器人
      // ShowRobotInfo("add-robot-info", RM.MakeRobot(addRobotTypeText, addRobotDisplayNameText, addRobotStockText, addRobotBtnText)[addRobotTypeText], "新机器人库存");

      this.sendFrontRobotInfoByAddObj = {
        divClass: "add-robot-info",
        robotType: ret[this.searchRobotInputText].type,
        robotDisplayName: ret[this.searchRobotInputText].displayName,
        robotStock: ret[this.searchRobotInputText].stock,
        robotOnLine: ret[this.searchRobotInputText].onLine,
        placeholderContent: "新机器人库存"
      }
    }
  }


  // 元素更改 - 根据选中情况在首页侧边栏增加机器人控制按钮
  ShowRobotBtn() {
    console.log("Start ShowRobotBtn");
    // // 清空
    // $(".add-robot-btn-div-class").empty();

    // for (var prop in RM.robotObj) {
    //   if (RM.robotObj[prop].onLine) {
    //     $(".add-robot-btn-div-class").append(RM.robotObj[prop].btnHtmlText);
    //   }
    // };
  }

  // 监控搜索机器人输入框文本
  OnSearchRobotInput(event: any) {
    this.searchRobotInputText = event.target.value;
  }

  // 监控添加机器人输入框文本
  OnAddRobotInputDisplayName(event: any) {
    this.addRobotInputTextDisplayName = event.target.value;
  }
  // 监控添加机器人输入框文本
  OnAddRobotInputType(event: any) {
    this.addRobotInputTextType = event.target.value;
  }
  // 监控添加机器人输入框文本
  OnAddRobotInputStock(event: any) {
    this.addRobotInputTextStock = event.target.value;
  }
  // 监控添加机器人输入框文本
  OnAddRobotInputBtnHtml(event: any) {
    // this.addRobotInputTextDisplayName = event.target.value;
  }
  
  

  ngOnInit(): void {

  }
}
