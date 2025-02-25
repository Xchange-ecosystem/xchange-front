import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigatorFilterSelectorComponent } from './navigator-filter-selector/navigator-filter-selector.component';
import { FormsModule, NgModel } from '@angular/forms';
import { XcIconAngleDownComponent, XcIconSearchComponent } from '@indziaki/ngx-xchange-icons';



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
