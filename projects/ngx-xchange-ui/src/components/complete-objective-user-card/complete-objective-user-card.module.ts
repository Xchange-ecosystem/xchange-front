import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompleteObjectiveUserCardComponent } from './complete-objective-user-card/complete-objective-user-card.component';
import { XcIconClockComponent, XcIconClockFiveComponent } from '@xchange-ecosystem/ngx-xchange-icons';
import { RatingBarModule } from '../rating-bar/rating-bar.module';
import { RoundedImageModule } from '../rounded-image/rounded-image.module';
import { TagModule } from '../../directives/tag/tag.module';



@NgModule({
  declarations: [
    CompleteObjectiveUserCardComponent
  ],
  imports: [
    CommonModule,
    RoundedImageModule,
    TagModule,
    XcIconClockComponent,
    XcIconClockFiveComponent,
    RatingBarModule,
],
  exports: [
    CompleteObjectiveUserCardComponent
  ]
})
export class CompleteObjectiveUserCardModule { }
