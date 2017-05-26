import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {RegisterModel} from './login-model/register.model';
import {CustomerModel} from './login-model/customer.model';
import {SellerModel} from './login-model/seller.model';
import {ShopModel} from './login-model/shop.model';
import {LoginModel} from './login-model/login.model';

@Injectable()
export class UserService {
  constructor(private http:Http,private customerModel:CustomerModel,private sellerModel:SellerModel
  ) { }
  /*登录*/
  doLogin(loginModel:LoginModel):Observable<boolean>{
    return this.http.post("login",loginModel).map(res=>res.json(),error=>error.statusText);
  }
  /*账号注册*/
  doRegister(registerModel:RegisterModel):Observable<boolean>{
    if(registerModel.type.type==1){
      this.customerModel.customerAccount=registerModel.account;
      this.customerModel.customerPassword=registerModel.password;
      this.customerModel.customerName=registerModel.name;
      return this.http.post("customer", this.customerModel).map(res=>res.json(),error=>error.statusText);
    }else{
      this.sellerModel.sellerAccount=registerModel.account;
      this.sellerModel.sellerPassword=registerModel.password;
      this.sellerModel.sellerName=registerModel.name;
      this.sellerModel.shopName=registerModel.shopName;
      return this.http.post("seller",this.sellerModel).map(res=>res.json(),error=>error.statusText);
    }
  }
  /*账号验证*/
  identifyAccount(account:string):Observable<boolean>{
    return this.http.get("/identifyAccount/"+account).map(res=>res.json(),error=>error.statusText);
  }
  /*验证码验证*/
  registerIdentify(identifyCode:string):Observable<boolean>{
    return this.http.get("/identifyCode/"+identifyCode).map(res=>res.json(),error=>error);
  }
}
