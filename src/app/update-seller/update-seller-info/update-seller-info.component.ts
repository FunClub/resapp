import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {UserService} from '../../login/user.service';
import {UpdateSellerService} from '../update-seller.service';
import {SellerAndShopModel} from '../update-seller-model/SellerAndShopModel';

@Component({
  selector: 'app-update-seller-info',
  templateUrl: './update-seller-info.component.html',
  styleUrls: ['./update-seller-info.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({opacity: 1, transform: 'translateX(0)'})),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100%)'
        }),
        animate('0.5s ease-in')
      ]),
      transition('* => void', [
        animate('0.5s 10 ease-out', style({
          opacity: 0,
          transform: 'translateX(100%)'
        }))
      ])
    ])
  ]
})
export class UpdateSellerInfoComponent implements OnInit {
  constructor(private userService:UserService,private updateService:UpdateSellerService,public sellerAndShopModel:SellerAndShopModel) {
  }
  doUpdateInfo(){
    this.updateService.updateInfo(this.sellerAndShopModel).subscribe(res=>{
      alert(res);
    })
  }
  ngOnInit() {
    this.userService.getUser().subscribe((res)=>{
      let shop = res.shop;let seller=res.seller;
      this.sellerAndShopModel.sellerName=seller.sellerName;
      this.sellerAndShopModel.shopImg=shop.shopImg;
      this.sellerAndShopModel.shopId=shop.shopId;
      this.sellerAndShopModel.shopName=shop.shopName;
      this.sellerAndShopModel.sellerPassword=seller.sellerPassword;
      this.sellerAndShopModel.shopNotice=shop.shopNotice;
      this.sellerAndShopModel.sellerId=seller.sellerId;
      this.sellerAndShopModel.sellerTelephone=seller.sellerTelephone;
      this.sellerAndShopModel.shopType=shop.shopType;
      this.sellerAndShopModel.sellerAddress=seller.sellerAddress;
      this.sellerAndShopModel.leastPrice=shop.leastPrice;
    });
  }
  doUploadShopImg(event){
    this.sellerAndShopModel.shopImg=JSON.parse(event.xhr.responseText)[0];
  }
}
