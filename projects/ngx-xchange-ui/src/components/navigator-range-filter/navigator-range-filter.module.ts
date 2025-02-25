import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XcIconCheckComponent, XcIconTimesComponent } from '@indziaki/ngx-xchange-icons';
import { NavigatorRangeFilterComponent } from './navigator-range-component/navigator-range-filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NavigatorRangeFilterComponent
  ],
  imports: [
    CommonModule,
    XcIconTimesComponent,
    XcIconCheckComponent,
    FormsModule, 
    ReactiveFormsModule,
  ], 
  exports: [  
    NavigatorRangeFilterComponent
  ]
})
export class NavigatorRangeFilterModule { }
