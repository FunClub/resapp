import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/primeng';
import {ShopModel} from '../index-model/shop.model';
import {IndexeService} from '../index.service.';
import {UserService} from '../../login/user.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  shopTypes:SelectItem[];
  shops:ShopModel[];
  selectedShopType:string="全部店铺";
  customer:any;
  constructor(private indexService:IndexeService,private userService:UserService) {
    this.shopTypes=[];
    this.shopTypes.push({label:'全部店铺', value:'全部店铺'});
    this.shopTypes.push({label:'快餐便当', value:'快餐便当'});
    this.shopTypes.push({label:'特色菜系', value:'特色菜系'});
    this.shopTypes.push({label:'异国料理', value:'异国料理'});
    this.shopTypes.push({label:'小吃宵夜', value:'小吃宵夜'});
    this.shopTypes.push({label:'甜品饮品', value:'甜品饮品'});
    this.shopTypes.push({label:'果蔬生鲜', value:'果蔬生鲜'});
    this.shopTypes.push({label:'生日蛋糕', value:'生日蛋糕'});
    this.shopTypes.push({label:'美食优选', value:'美食优选'});
    this.shopTypes.push({label:'香辣烧烤', value:'香辣烧烤'});
    this.shopTypes.push({label:'下午香茶', value:'下午香茶'});

  }

  ngOnInit() {
    this.indexService.getIndexShop("all").subscribe(res=>this.shops=res);
    this.userService.getUser().subscribe(res=>this.customer=res);
  }
  getIndexShop(type:any){
    type=type.value;
    if(type!="全部店铺"){
      this.indexService.getIndexShop(type).subscribe(res=>this.shops=res);
    }else{
      this.indexService.getIndexShop("all").subscribe(res=>this.shops=res);
    }
  }
  trackByShops(index:number,shopModel:ShopModel){
    return shopModel.sellerId;
  }
}
