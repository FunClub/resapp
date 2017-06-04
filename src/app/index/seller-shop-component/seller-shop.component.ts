import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/primeng';

@Component({
  selector: 'app-seller-shop',
  templateUrl: './seller-shop.component.html',
  styleUrls: ['./seller-shop.component.css']
})
export class SellerShopComponent implements OnInit {
  goodsTypes:SelectItem[];
  goodsType:string="全部商品";
  constructor() {
    this.goodsTypes=[];
    this.goodsTypes.push({label:'全部商品', value:'全部商品'});
    this.goodsTypes.push({label:'米线', value:'米线'});
    this.goodsTypes.push({label:'面食', value:'面食'});
    this.goodsTypes.push({label:'盖饭', value:'盖饭'});
    this.goodsTypes.push({label:'炒菜', value:'炒菜'});
    this.goodsTypes.push({label:'火锅', value:'火锅'});
    this.goodsTypes.push({label:'凉菜', value:'凉菜'});
    this.goodsTypes.push({label:'烧烤', value:'烧烤'});
    this.goodsTypes.push({label:'蛋糕', value:'蛋糕'});
    this.goodsTypes.push({label:'甜品', value:'甜品'});
    this.goodsTypes.push({label:'水果', value:'水果'});
    this.goodsTypes.push({label:'料理', value:'料理'});
    this.goodsTypes.push({label:'下午茶', value:'下午茶'});
  }

  ngOnInit() {
  }

}
