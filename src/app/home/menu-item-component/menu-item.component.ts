import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MenuItemModel} from '../home-model/menu.item.model';
import {log} from 'util';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
  @Input()
  item:MenuItemModel;
  @Output()
  eNav:EventEmitter<number>;
  constructor() {
    this.eNav = new EventEmitter();
  }
  doNav(){
    if(this.item.activated==false){
      this.eNav.emit(this.item.index);
    }
  }
  ngOnInit() {
  }
  getPointer():string{
    return this.item.activated ? "../../../assets/img/toTop.png" : "../../../assets/img/toBottom.png";
  }
  getImg():string{
    return this.item.activated ? this.item.img+"1.png":this.item.img+".png";
  }
}
