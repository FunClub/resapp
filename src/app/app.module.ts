import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {LoginModule} from './login/login.module';
import {RouterModule} from '@angular/router';
import {rootRouterConfig} from 'app/app.routes';
import {HomeModule} from './home/home.module';
import {UserService} from './login/user.service';
import {LoginGuard} from './home/home-guard/login.guard';
import {AddGoodsModule} from './add-goods/add-goods.module';
import {SalesInfoModule} from './sales-info/sales-info.module';
import {ShopModule} from './shop/shop.module';
import {UpdateSellerModule} from './update-seller/update-seller.module';
import {UpdateSellerService} from './update-seller/update-seller.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig,{useHash:true}),
    LoginModule,
    HomeModule,
    AddGoodsModule,
    SalesInfoModule,
    ShopModule,
    UpdateSellerModule
  ],
  providers: [UserService,LoginGuard,UpdateSellerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
