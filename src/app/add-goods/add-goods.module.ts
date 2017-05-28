import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddGoodsComponent } from './add-goods-component/add-goods.component';
import {DropdownModule} from 'primeng/primeng';
import {FormsModule} from '@angular/forms';
import {AddGoodsModel} from './add-goods-model/add.goods.model';
import {EditorModule,SharedModule} from 'primeng/primeng';
import {ToggleButtonModule} from 'primeng/primeng';
import {FileUploadModule} from 'primeng/primeng';
import { CarouselModule } from 'ngx-bootstrap';
@NgModule({
  imports: [
    CommonModule,DropdownModule,FormsModule,EditorModule,SharedModule,ToggleButtonModule,FileUploadModule,CarouselModule.forRoot()
  ],
  providers:[AddGoodsModel],
  declarations: [AddGoodsComponent]
})
export class AddGoodsModule { }
