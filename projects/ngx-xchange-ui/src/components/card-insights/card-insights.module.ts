import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardInsightsComponent } from './card-insights/card-insights.component';

@NgModule({
  declarations: [
    CardInsightsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [CardInsightsComponent]
})
export class CardInsightsModule { }
