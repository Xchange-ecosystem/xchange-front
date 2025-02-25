import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XcIconAngleDownComponent } from 'projects/ngx-xchange-icons/src/public-api';
import { NavigatorFilterSelectorComponent } from './navigator-filter-selector/navigator-filter-selector.component';
import { FormsModule, NgModel } from '@angular/forms';
import { XcIconSearchComponent } from '@indziaki/ngx-xchange-icons';



@NgModule({
  declarations: [NavigatorFilterSelectorComponent],
  imports: [
    CommonModule,
    XcIconAngleDownComponent,
    FormsModule,
    XcIconSearchComponent
  ],
  exports: [
    NavigatorFilterSelectorComponent
  ]
})
export class NavigatorFilterSelectorModule { }
