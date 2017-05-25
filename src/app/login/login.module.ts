import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from './login-component/login.component';
import {FormsModule} from '@angular/forms';
import {CheckboxModule} from "primeng/primeng";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CheckboxModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
