import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from './login-component/login.component';
import {FormsModule} from '@angular/forms';
import {CheckboxModule, DropdownModule} from 'primeng/primeng';
import {SharedModule} from '../shared/shared.module';
import {ModalModule} from 'ngx-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpModule} from '@angular/http';
import {UserService} from './user.service';



@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    CheckboxModule,
    ModalModule.forRoot(),
    DropdownModule,
    BrowserAnimationsModule,
    HttpModule
  ],
  declarations: [LoginComponent],
  providers:[UserService]
})
export class LoginModule { }
