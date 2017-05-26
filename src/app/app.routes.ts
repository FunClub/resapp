import {  Routes} from '@angular/router'
import {LoginComponent} from './login/login-component/login.component';
import {HomeComponent} from './home/home-component/home.component';
import {LoginGuard} from './home/home-guard/login.guard';

export const rootRouterConfig:Routes=[
  {path:'',component:LoginComponent},
  {path:'home',component:HomeComponent,canActivate:[LoginGuard]}
];
