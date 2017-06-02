import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/primeng';
import {UserService} from '../../login/user.service';

@Component({
  selector: 'app-shop',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  customer:any;
  constructor(private userService:UserService) {

  }

  ngOnInit() {
    this.userService.getUser().subscribe(res=>this.customer=res);
  }

}
