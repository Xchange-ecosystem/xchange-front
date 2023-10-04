import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardDeadlineIndicatorComponent } from './card-deadline-indicator/card-deadline-indicator.component';



@NgModule({
  declarations: [
    CardDeadlineIndicatorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardDeadlineIndicatorComponent
  ]
})
export class CardDeadlineIndicatorModule { }
