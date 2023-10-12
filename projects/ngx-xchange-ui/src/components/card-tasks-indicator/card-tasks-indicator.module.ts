import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardTasksIndicatorComponent } from './card-tasks-indicator/card-tasks-indicator.component';



@NgModule({
  declarations: [
    CardTasksIndicatorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardTasksIndicatorComponent
  ]
})
export class CardTasksIndicatorModule { }
