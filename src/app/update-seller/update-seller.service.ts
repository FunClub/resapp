import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';

@Injectable()
export class UpdateSellerService {

  constructor(private http:Http) { }

  updateInfo(info):Observable<boolean>{
    return this.http.put("seller",info).map(res=>res.json());
  }
}
