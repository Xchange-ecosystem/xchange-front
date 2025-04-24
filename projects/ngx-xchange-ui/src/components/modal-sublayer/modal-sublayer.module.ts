import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalSubLayerComponent } from './modal-sublayer/modal-sublayer.component';
import { Button400Module } from '../button-400/button-400.module';
import { XcIconTimesComponent } from '@indziaki/ngx-xchange-icons';
import { MainHeadingModule } from '../../directives/main-heading/main-heading.module';



@NgModule({
  declarations: [
    ModalSubLayerComponent
  ],
  imports: [
    CommonModule,
    Button400Module,
    MainHeadingModule,
    XcIconTimesComponent
  ],
  exports: [
    ModalSubLayerComponent
  ]
})
export class ModalSubLayerModule { }
