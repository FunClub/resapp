import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home-component/home.component';
import { MenuComponent } from './menu-component/menu.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HomeComponent, MenuComponent]
})
export class HomeModule { }
