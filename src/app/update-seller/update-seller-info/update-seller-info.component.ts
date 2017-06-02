import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {UserService} from '../../login/user.service';
import {UpdateSellerService} from '../update-seller.service';
import {SellerAndShopModel} from '../update-seller-model/SellerAndShopModel';
import {Message} from 'primeng/primeng';

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
  shopTypes=[
    {label:'请选择店铺的类型', value:null},
    {label:'全部店铺', value:{type:'全部店铺'}},
    {label:'快餐便当', value:{type:'快餐便当'}},
    {label:'特色菜系', value:{type:'特色菜系'}},
    {label:'异国料理', value:{type:'异国料理'}},
    {label:'小吃宵夜', value:{type:'小吃宵夜'}},
    {label:'甜品饮品', value:{type:'甜品饮品'}},
    {label:'果蔬生鲜', value:{type:'果蔬生鲜'}},
    {label:'生日蛋糕', value:{type:'生日蛋糕'}},
    {label:'美食优选', value:{type:'美食优选'}},
    {label:'香辣烧烤', value:{type:'香辣烧烤'}},
    {label:'下午香茶', value:{type:'下午香茶'}}
    ];
  updateMessage:Message[];

  constructor(private userService:UserService,private updateService:UpdateSellerService,public sellerAndShopModel:SellerAndShopModel) {
  }
  doUpdateInfo(){
    this.sellerAndShopModel.shopType=this.sellerAndShopModel.shopType.type;
    this.updateService.updateInfo(this.sellerAndShopModel).subscribe(res=>{
      this.updateMessage=[];
      if(res){
        this.updateMessage.push({severity:'success',summary:'修改资料成功',detail:this.sellerAndShopModel.shopName});
      }else{
        this.updateMessage.push({severity:'error',summary:'修改资料失败',detail:this.sellerAndShopModel.shopName});
      }
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
      this.sellerAndShopModel.shopType={type:shop.shopType}
    });
  }
  doUploadShopImg(event){
    this.sellerAndShopModel.shopImg=JSON.parse(event.xhr.responseText)[0];
  }
}
