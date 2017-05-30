import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ShopComponent} from './shop-component/shop.component';
import {SelectButtonModule} from 'primeng/primeng';
import {FormsModule} from '@angular/forms';
import {RatingModule} from 'primeng/primeng';
@NgModule({
  imports: [
    CommonModule,SelectButtonModule,FormsModule,RatingModule
  ],
  declarations: [ShopComponent]
})
export class ShopModule { }
