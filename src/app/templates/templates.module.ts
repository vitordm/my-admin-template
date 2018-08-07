import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeadComponent } from './head/head.component';
import { MenuComponent } from './menu/menu.component';
import { MainComponent } from './main/main.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    HeadComponent, 
    MenuComponent, 
    MainComponent
  ],
  exports: [
    MainComponent
  ]
})
export class TemplatesModule { }
