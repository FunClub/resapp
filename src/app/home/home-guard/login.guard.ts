/**
 * Created by Administrator on 2017/5/26.
 */
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {UserService} from '../../login/user.service';
@Injectable()
export class LoginGuard implements CanActivate{
  constructor(private userService:UserService){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
   return this.userService.isLogin();
  }


}
