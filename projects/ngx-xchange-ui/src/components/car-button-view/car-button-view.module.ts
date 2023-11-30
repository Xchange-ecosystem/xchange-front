import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardButtonViewComponent } from './card-button-view/card-button-view.component';
import { RouterLink } from '@angular/router';



@NgModule({
  declarations: [
    CardButtonViewComponent
  ],
  imports: [
    CommonModule,
    RouterLink
  ],
  exports: [
    CardButtonViewComponent
  ]
})
export class CarButtonViewModule { }
