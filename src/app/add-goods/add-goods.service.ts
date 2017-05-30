import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {AddGoodsModel} from './add-goods-model/add.goods.model';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AddGoodsService {

  constructor(private http:Http) { }

  /*添加商品*/
  addGoods(addGoodsModel:AddGoodsModel):Observable<boolean>{
    console.log(addGoodsModel);
    return this.http.post("goods",addGoodsModel).map(res=>res.json());
  }

}
