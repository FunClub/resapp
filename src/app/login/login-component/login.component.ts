import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/primeng';
import {LoginModel} from 'app/login/login-model/login.model';
import {RegisterModel} from '../login-model/register.model';
import {PatternModel} from 'app/login/login-model/pattern.model';
import {UserService} from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginModel,RegisterModel,PatternModel]
})
export class LoginComponent implements OnInit {
  remember:boolean=true;
  loginInfo:string='账号密码错误';
  types: SelectItem[];
  isIdentify=false;
  identifyCodeUrl:string
  constructor( public loginModel:LoginModel,public registerModel:RegisterModel,public patternModel: PatternModel,
  private userService:UserService
  ) {
    this.types = [];
    this.types.push({label:'选择一个身份', value:null});
    this.types.push({label:'顾客', value:{type:1}});
    this.types.push({label:'商家', value:{type:2}});
    this.identifyCodeUrl="/identifyCode?"+Math.random();
  }
  identifyCode(){
    this.userService.registerIdentify(this.registerModel.identifyCode).subscribe(res=>this.isIdentify=res)
  }
  /*更换验证码
  * */
  changeIdentifyCode(){
    this.identifyCodeUrl="/identifyCode?"+Math.random();
  }
  ngOnInit() {

  }

}
