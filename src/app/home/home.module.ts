import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home-component/home.component';
import { MenuItemComponent } from './menu-item-component/menu-item.component';
import {MenuItemModel} from './home-model/menu.item.model';
import {RouterModule} from '@angular/router';
import {rootRouterConfig} from '../app.routes';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(rootRouterConfig)
  ],
  providers:[],
  declarations: [HomeComponent,MenuItemComponent]
})
export class HomeModule { }
