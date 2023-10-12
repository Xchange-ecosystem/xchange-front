import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonViewDirective } from './button-view.directive';



@NgModule({
  declarations: [
    ButtonViewDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonViewDirective
  ]
})
export class ButtonViewModule { }
