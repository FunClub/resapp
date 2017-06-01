import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UpdateSellerInfoComponent} from './update-seller-info/update-seller-info.component';
import {FormsModule} from '@angular/forms';
import {EditorModule, FileUploadModule} from 'primeng/primeng';
import {HttpModule} from '@angular/http';
import {SellerAndShopModel} from './update-seller-model/SellerAndShopModel';

@NgModule({
  imports: [
    CommonModule,FormsModule,FileUploadModule,EditorModule,HttpModule
  ],
  providers:[SellerAndShopModel],
  declarations: [UpdateSellerInfoComponent]
})
export class UpdateSellerModule { }
