import { Component, OnInit } from '@angular/core';
import {UserModel} from '../login-model/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[UserModel]
})
export class LoginComponent implements OnInit {

  constructor( public userModel:UserModel) {

  }

  ngOnInit() {
  }

}
