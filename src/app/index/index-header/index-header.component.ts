import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../../login/user.service';

@Component({
  selector: 'app-index-header',
  templateUrl: './index-header.component.html',
  styleUrls: ['./index-header.component.css']
})
export class IndexHeaderComponent implements OnInit {
  customer:any;

  constructor(private userService:UserService) {

  }

  ngOnInit() {
    this.userService.getUser().subscribe(res=>this.customer=res);
  }
}
