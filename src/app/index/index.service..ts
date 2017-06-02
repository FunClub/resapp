import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {ShopModel} from './index-model/shop.model';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class IndexeService {

  constructor(private http:Http) { }

  /*获得首页店铺*/
  getIndexShop():Observable<ShopModel[]>{
    return this.http.get("indexShop").map(res=>res.json());
  }
}
