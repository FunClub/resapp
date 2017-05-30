import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UpdateSellerInfoComponent} from './update-seller-info/update-seller-info.component';
import {FormsModule} from '@angular/forms';
import {EditorModule, FileUploadModule} from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,FormsModule,FileUploadModule,EditorModule
  ],
  declarations: [UpdateSellerInfoComponent]
})
export class UpdateSellerModule { }
