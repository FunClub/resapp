import { Injectable } from '@angular/core';
import {Http, RequestOptions} from '@angular/http';
import {ShopModel} from './index-model/shop.model';
import {Observable} from 'rxjs/Observable';



@Injectable()
export class IndexeService {

  constructor(private http:Http) { }

  /*获得首页店铺*/
  getIndexShop(type:string):Observable<ShopModel[]>{
      return this.http.post('indexShop',{shopType:type}).map(res=>res.json(),error=>console.log(error));
  }
}
