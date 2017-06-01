import {Component, OnInit, ViewChild, ViewChildren} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MenuItemModel} from '../home-model/menu.item.model';
import {MenuItemComponent} from '../menu-item-component/menu-item.component';
import {Router} from '@angular/router';
import {UserService} from '../../login/user.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({opacity: 1, transform: 'translateX(0)'})),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100%)'
        }),
        animate('0.3s ease-in')
      ]),
      transition('* => void', [
        animate('0.3s 10 ease-out', style({
          opacity: 0,
          transform: 'translateX(100%)'
        }))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  items:Array<MenuItemModel>=[];
  user:any;
  constructor(private router:Router,public userService:UserService) {
    this.items.push(new MenuItemModel("../../../assets/img/rank","销售总览",true,0,"home/salesInfo"));
    this.items.push(new MenuItemModel("../../../assets/img/addGoods","推出菜品",false,1,"home/addGoods"));
    this.items.push(new MenuItemModel("../../../assets/img/orderManager","订单管理",false,2,"orderManage"));
    this.items.push(new MenuItemModel("../../../assets/img/goodsManger","菜品管理",false,3,"goodsManage"));
    this.items.push(new MenuItemModel("../../../assets/img/updateInfo","资料修改",false,4,"home/update"));
  }

  /*导航*/
  nav(index:number){
    this.items[index].activated=true;
    for(let i=0;i<this.items.length;i++){
      if(i!=index&&this.items[i].activated){
        this.items[i].activated=false;
      }
    }
    this.router.navigateByUrl(this.items[index].nav);
  }
  ngOnInit() {
  this.userService.getUser().subscribe(res=>{
    this.user=res;
  });
  }

}
