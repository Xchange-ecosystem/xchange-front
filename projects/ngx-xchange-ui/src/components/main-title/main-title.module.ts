import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainTitleComponent } from './main-title/main-title.component';



@NgModule({
  declarations: [
    MainTitleComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    MainTitleComponent
  ]
})
export class MainTitleModule { }
