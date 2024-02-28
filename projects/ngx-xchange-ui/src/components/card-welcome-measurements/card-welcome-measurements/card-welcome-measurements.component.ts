import { Component, Input } from '@angular/core';

@Component({
  selector: 'xc-card-welcome-measurements',
  templateUrl: './card-welcome-measurements.component.html',
  styleUrls: ['./card-welcome-measurements.component.css'],
})
export class CardWelcomeMeasurementsComponent {
  @Input()
  value: Number | null;
  @Input()
  description: String | null;

  constructor() {
    this.value = 0;
    this.description = '';
  }
}
