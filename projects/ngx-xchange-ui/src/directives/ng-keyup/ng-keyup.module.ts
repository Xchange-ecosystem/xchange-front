import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgKeyupDirective } from './ng-keyup.directive';



@NgModule({
  declarations: [NgKeyupDirective],
  imports: [
    CommonModule
  ],
  exports: [
    NgKeyupDirective
  ]
})
export class NgKeyupModule { }
