import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from './login-component/login.component';
import {FormsModule} from '@angular/forms';
import {CheckboxModule, DropdownModule} from 'primeng/primeng';
import {SharedModule} from '../shared/shared.module';
import {ModalModule, PopoverModule} from 'ngx-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpModule} from '@angular/http';
import {UserService} from './user.service';
import {CustomerModel} from './login-model/customer.model';
import {SellerModel} from './login-model/seller.model';
import {ShopModel} from './login-model/shop.model';
import {LoginModel} from './login-model/login.model';



@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    CheckboxModule,
    ModalModule.forRoot(),
    DropdownModule,
    BrowserAnimationsModule,
    HttpModule,
    PopoverModule.forRoot()
  ],
  declarations: [LoginComponent],
  providers:[UserService,CustomerModel,SellerModel,ShopModel,LoginModel]
})
export class LoginModule { }
