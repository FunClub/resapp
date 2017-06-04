import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IndexComponent} from './index-component/index.component';
import {SelectButtonModule} from 'primeng/primeng';
import {FormsModule} from '@angular/forms';
import {RatingModule} from 'primeng/primeng';
import { ShopComponent } from './shop-component/shop.component';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import {IndexeService} from './index.service.';
import { IndexHeaderComponent } from './index-header/index-header.component';
import {SellerShopComponent} from './seller-shop-component/seller-shop.component';
@NgModule({
  imports: [
    CommonModule,SelectButtonModule,FormsModule,RatingModule,RouterModule,HttpModule
  ],
  providers:[IndexeService],
  declarations: [IndexComponent, ShopComponent, IndexHeaderComponent,SellerShopComponent],
  exports:[IndexHeaderComponent]
})
export class IndexModule { }
