import {Component, Input, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {AddGoodsModel} from '../add-goods-model/add.goods.model';
import {UserService} from '../../login/user.service';
import {AddGoodsService} from '../add-goods.service';
import {Message} from 'primeng/primeng';

@Component({
  selector: 'app-add-goods',
  templateUrl: './add-goods.component.html',
  styleUrls: ['./add-goods.component.css'],
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
export class AddGoodsComponent implements OnInit {
  preAble:boolean=false;
  goodsTypes=[
    {label:'请选择商品的类型', value:null},
  {label:'米线', value:{type:'米线',label:'米线'}},
  {label:'面食', value:{type:'面食',label:'面食'}},
  {label:'盖饭', value:{type:'盖饭',label:'盖饭'}},
  {label:'炒菜', value:{type:'炒菜',label:'炒菜'}},
  {label:'火锅', value:{type:'火锅',label:'火锅'}},
  {label:'凉菜', value:{type:'凉菜',label:'凉菜'}},
  {label:'烧烤', value:{type:'凉菜',label:'烧烤'}}
];
  goodsRebate=[
    {label:'请选择商品的折扣', value:null},
    {label:'原价', value:{rebate:1,label:'原价'}},
    {label:'9折', value:{rebate:0.9,label:'9折'}},
    {label:'8折', value:{rebate:0.8,label:'8折'}},
    {label:'7折', value:{rebate:0.7,label:'7折'}},
    {label:'6折', value:{rebate:0.6,label:'6折'}},
    {label:'5折', value:{rebate:0.5,label:'5折'}},
    {label:'4折', value:{rebate:0.4,label:'4折'}},
    {label:'3折', value:{rebate:0.3,label:'3折'}},
    {label:'2折', value:{rebate:0.2,label:'2折'}},
    {label:'1折', value:{rebate:0.1,label:'1折'}},
  ];
  goodsFiles:any[]=[];
  goodsImgUrl:string[]=[];
  addGoodsMessage:Message[];
  user:any;
  showMessage(){

  }
  constructor(public addGoodsModel:AddGoodsModel,public userService:UserService,public addGoodsService:AddGoodsService) {
    this.addGoodsModel.goodsImg=[];
  }

  ngOnInit() {
    this.userService.getUser().subscribe(res=>this.user=res);
  }

  /*
  * 添加商品
  * */
  doAddGoods(){
    this.addGoodsModel.shopId=this.user.shopId;
    this.addGoodsModel.goodsType=this.addGoodsModel.goodsType.type;
    this.addGoodsModel.rebate=this.addGoodsModel.rebate.rebate;
    this.addGoodsService.addGoods(this.addGoodsModel).subscribe(res=>{
      this.addGoodsMessage=[];
      if(res){
        this.addGoodsMessage.push({severity:'success',summary:'添加商品成功',detail:this.addGoodsModel.goodsName});
      }else{
        this.addGoodsMessage.push({severity:'error',summary:'添加商品失败',detail:this.addGoodsModel.goodsName});
      }
    });
  }

  /*
  * 选择图片
  * */
  doSelectedGoodsImgs(event){
    for(let file of event.files) {
      this.goodsFiles.push(file);
    }
    for(let file of this.goodsFiles){
      let r = new FileReader();
      r.readAsDataURL(file);
      r.onload=()=>{
        this.goodsImgUrl.push( r.result);
      }
    }
  }
  /*
  * 上传图片成功后的回调函数
  * */
  doUploadGoodsImg(event){
    this.addGoodsModel.goodsImg=JSON.parse(event.xhr.responseText);
  }
}
