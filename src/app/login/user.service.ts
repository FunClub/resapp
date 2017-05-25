import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserService {
  constructor(private http:Http) { }
  registerIdentify(identifyCode:string):Observable<boolean>{
    return this.http.get("/identifyCode/"+identifyCode).map(res=>res.json());
  }
}
