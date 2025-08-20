import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigatorFilterSelectorComponent } from './navigator-filter-selector/navigator-filter-selector.component';
import { FormsModule, NgModel } from '@angular/forms';
import { XcIconAngleDownComponent, XcIconSearchComponent } from '@xchange-ecosystem/ngx-xchange-icons';
import { NavigatorUserTextInputFilterModule } from '../navigator-user-text-input-filter/navigator-user-text-input-filter.module';



@NgModule({
  declarations: [NavigatorFilterSelectorComponent],
  imports: [
    CommonModule,
    XcIconAngleDownComponent,
    FormsModule,
    XcIconSearchComponent,
  ],
  exports: [
    NavigatorFilterSelectorComponent
  ]
})
export class NavigatorFilterSelectorModule { }
