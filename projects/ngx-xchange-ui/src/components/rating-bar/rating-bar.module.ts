import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingBarComponent } from './rating-bar/rating-bar.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RatingBarComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    RatingBarComponent
  ]
})
export class RatingBarModule { }
