import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemSelectorComponent } from './list-item-selector/list-item-selector.component';
import { XcIconAngleDownComponent } from '@indziaki/ngx-xchange-icons';



@NgModule({
  declarations: [ListItemSelectorComponent],
  imports: [
    CommonModule,
    XcIconAngleDownComponent
  ],
  exports: [
    ListItemSelectorComponent
  ]
})
export class ListItemSelectorModule { }
