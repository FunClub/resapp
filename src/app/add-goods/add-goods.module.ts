import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddGoodsComponent } from './add-goods-component/add-goods.component';
import {DropdownModule, GrowlModule, MessagesModule} from 'primeng/primeng';
import {FormsModule} from '@angular/forms';
import {AddGoodsModel} from './add-goods-model/add.goods.model';
import {EditorModule,SharedModule} from 'primeng/primeng';
import {ToggleButtonModule} from 'primeng/primeng';
import {FileUploadModule} from 'primeng/primeng';
import { CarouselModule } from 'ngx-bootstrap';
import {AddGoodsService} from './add-goods.service';
import {HttpModule} from '@angular/http';
@NgModule({
  imports: [
    HttpModule,
    CommonModule,DropdownModule,FormsModule,EditorModule,SharedModule,ToggleButtonModule,FileUploadModule,CarouselModule.forRoot(),
    GrowlModule
  ],
  providers:[AddGoodsModel,AddGoodsService],
  declarations: [AddGoodsComponent]
})
export class AddGoodsModule { }
