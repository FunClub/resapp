import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/primeng';
import {LoginModel} from 'app/login/login-model/login.model';
import {RegisterModel} from '../login-model/register.model';
import {UserService} from '../user.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginModel,RegisterModel]
})
export class LoginComponent implements OnInit {
  remember:boolean=true;
  loginInfo:string='账号密码错误';
  types: SelectItem[];
  trueIdentifyCode:boolean;
  identifyCodeUrl:string;
  trueAccount:boolean;
  registerResult:boolean;
  registerResultText:string;
  loginResult:boolean;
  constructor( public loginModel:LoginModel,public registerModel:RegisterModel,private router:Router,
  private userService:UserService
  ) {
    this.types = [];
    this.types.push({label:'选择一个身份', value:null});
    this.types.push({label:'顾客', value:{type:1}});
    this.types.push({label:'商家', value:{type:2}});
    this.identifyCodeUrl='/getIdentifyCode';
  }
  doLogin(){
    this.userService.doLogin(this.loginModel).subscribe((user):any =>{
        if(user==="seller"){
          this.router.navigateByUrl("/home");
        }else if(user=="customer"){
          this.router.navigateByUrl("/index");
        }

    },error=>{this.loginResult=false;})
  }
  doRegister(registerForm){
    this.userService.doRegister(this.registerModel).subscribe(res=>{
      this.registerResult=res;
      if(this.registerResult){
        this.registerResultText='注册成功';
      }else{
        this.registerResultText='注册失败';
      }
    },error=>console.log(error));
  }
  /*验证账号是否合法*/
  identifyAccount(account:FormControl){
     if (account.valid){
       this.userService.identifyAccount(this.registerModel.account).subscribe(res=>this.trueAccount=res,error=>{console.log(error)});
     }
  }
  /*验证码验证*/
  identifyCode(){
    if(this.registerModel.identifyCode!=undefined&&this.registerModel.identifyCode.length>=1) {
      this.userService.registerIdentify(this.registerModel.identifyCode).subscribe(res => this.trueIdentifyCode = res, error => {
        console.log(error)
      });
    }
  }
  /*更换验证码
  * */
  changeIdentifyCode(){
    this.identifyCodeUrl='/getIdentifyCode?'+Math.random();
  }
  ngOnInit() {

  }
  /*判断能否注册*/
  registerAble(form):boolean{
    return form.valid&&!this.trueAccount&&this.trueIdentifyCode;
  }
}
