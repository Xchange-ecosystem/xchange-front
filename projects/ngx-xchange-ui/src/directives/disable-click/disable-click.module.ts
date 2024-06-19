import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisableCLickDirective } from './disable-click.directive';



@NgModule({
  declarations: [
    DisableCLickDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DisableCLickDirective
  ]
})
export class DisableClickModule { }
