import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ChipComponent} from './chip/chip.component';
import { XcIconMultiplyComponent } from '@indziaki/ngx-xchange-icons';



@NgModule({
  declarations: [
    ChipComponent
  ],
  imports: [
    CommonModule,
    XcIconMultiplyComponent
  ],
  exports: [
    ChipComponent
  ]
})
export class ChipModule { }
