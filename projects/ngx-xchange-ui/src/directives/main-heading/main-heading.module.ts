import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainHeadingDirective } from './main-heading.directive';



@NgModule({
  declarations: [
    MainHeadingDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainHeadingDirective
  ]
})
export class MainHeadingModule { }
