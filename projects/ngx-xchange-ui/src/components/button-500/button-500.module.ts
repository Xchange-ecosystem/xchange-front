import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button500Component } from './button-500/button-500.component';
import { XcIconSearchComponent } from '@xchange-ecosystem/ngx-xchange-icons';
import { XcIconCloseXlComponent } from '@xchange-ecosystem/ngx-xchange-icons';

@NgModule({
  declarations: [
    Button500Component
  ],
  imports: [
    CommonModule,
    XcIconSearchComponent,
    XcIconCloseXlComponent
  ],
  exports: [
    Button500Component
  ]
})
export class Button500Module { }
