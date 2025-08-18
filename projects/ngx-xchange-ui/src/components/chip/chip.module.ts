import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ChipComponent} from './chip/chip.component';
import { XcIconMultiplyComponent } from '@xchange-ecosystem/ngx-xchange-icons';
import { TagModule } from '../../directives/tag/tag.module';




@NgModule({
  declarations: [
    ChipComponent
  ],
  imports: [
    CommonModule,
    TagModule,
    XcIconMultiplyComponent
  ],
  exports: [
    ChipComponent
  ]
})
export class ChipModule { }
