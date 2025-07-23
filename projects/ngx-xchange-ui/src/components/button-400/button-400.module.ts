import { NgModule } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { Button400Component } from './button-400/button-400.component';
import { XcIconAngleLeftComponent, XcIconCloseSComponent, XcIconMoreThreeDots, XcIconAIComponent, XcIconCheckComponent } from '@indziaki/ngx-xchange-icons';



@NgModule({
  declarations: [Button400Component],
  imports: [
    CommonModule,
    XcIconMoreThreeDots,
    XcIconAngleLeftComponent,
    XcIconCloseSComponent,
    XcIconAIComponent,
    XcIconCheckComponent,
    NgClass
],
  exports: [
    Button400Component
  ]
})
export class Button400Module { }
