import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAssessmentCardComponent } from './user-assessment-card/user-assessment-card.component';
import { RoundedImageModule } from '../rounded-image/rounded-image.module';
import { XcIconClockFiveComponent } from '@indziaki/ngx-xchange-icons';
import { RatingBarModule } from '../rating-bar/rating-bar.module';
import { TagModule } from '@indziaki/ngx-xchange-ui';
import { XcIconAngleRightBComponent } from 'projects/ngx-xchange-icons/src/public-api';



@NgModule({
  declarations: [
    UserAssessmentCardComponent
  ],
  imports: [
    CommonModule,
    RoundedImageModule,
    XcIconClockFiveComponent,
    RatingBarModule,
    XcIconAngleRightBComponent, 
    TagModule
  ],
  exports: [
    UserAssessmentCardComponent
  ]
})
export class UserAssessmentCardModule { }
