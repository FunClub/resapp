import {  Routes} from '@angular/router'
import {LoginComponent} from './login/login-component/login.component';
import {HomeComponent} from './home/home-component/home.component';
import {LoginGuard} from './home/home-guard/login.guard';
import {AddGoodsComponent} from './add-goods/add-goods-component/add-goods.component';
import {SalesInfoComponent} from './sales-info/sales-info-component/sales-info.component';
import {ShopComponent} from './shop/shop-component/shop.component';
import {UpdateSellerInfoComponent} from './update-seller/update-seller-info/update-seller-info.component';

export const rootRouterConfig:Routes=[
  {path:'',component:LoginComponent},
  {
    path:'home',
    component:HomeComponent,
    canActivate:[LoginGuard],
    children:[{
      path:'salesInfo',component:SalesInfoComponent
    },{
      path:'addGoods',component:AddGoodsComponent
    },
      {
        path:'update',component:UpdateSellerInfoComponent
      }
    ]
  },{
    path:'index',
    component:ShopComponent,
    children:[]
  }

];
