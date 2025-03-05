import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigatorGoalsFilterComponent } from './navigator-goals-filter/navigator-goals-filter.component';



@NgModule({
  declarations: [
    NavigatorGoalsFilterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavigatorGoalsFilterComponent
  ]
})
export class NavigatorGoalsFilterModule { }
