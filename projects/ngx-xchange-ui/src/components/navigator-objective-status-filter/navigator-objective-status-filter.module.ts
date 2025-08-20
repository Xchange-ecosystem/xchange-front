import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigatorObjectiveStatusFilterComponent } from './navigator-objective-status-filter/navigator-objective-status-filter.component';
import { NavigatorFilterToggleModule } from '../navigator-filter-toggle/navigator-filter-toggle.module';
import { XcIconCancelComponent, XcIconCheckComponent, XcIconTimesComponent } from '@xchange-ecosystem/ngx-xchange-icons';



@NgModule({
  declarations: [NavigatorObjectiveStatusFilterComponent],
  imports: [
    CommonModule,
    NavigatorFilterToggleModule,
    XcIconCheckComponent,
    XcIconTimesComponent
  ],
  exports: [
    NavigatorObjectiveStatusFilterComponent
  ]
})
export class NavigatorObjectiveStatusFilterModule { }
