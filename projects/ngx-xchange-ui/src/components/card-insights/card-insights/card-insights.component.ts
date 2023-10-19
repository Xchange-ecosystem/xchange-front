import { Component , Input } from '@angular/core';

@Component({
  selector: 'xc-card-insights',
  templateUrl: './card-insights.component.html',
  styleUrls: ['./card-insights.component.css']
})

export class CardInsightsComponent {
  @Input()
    value: Number | null;
  @Input()
    description: String | null;

  constructor(){
    this.value = 0;
    this.description = "";
  }
}

export interface CardInsightsProps {
  amount: number
  name: string
}
