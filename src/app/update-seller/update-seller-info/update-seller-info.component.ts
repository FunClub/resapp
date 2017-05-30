import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

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

  constructor() { }

  ngOnInit() {
  }

}
