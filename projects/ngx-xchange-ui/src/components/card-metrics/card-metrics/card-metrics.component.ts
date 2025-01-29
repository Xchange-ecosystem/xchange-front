import { Component, Input } from '@angular/core';

@Component({
    selector: 'xc-card-metrics',
    templateUrl: './card-metrics.component.html',
    styleUrls: ['./card-metrics.component.css'],
    standalone: false
})
export class CardMetricsComponent {
  @Input()
    value: Number | null;
  @Input()
  description: string | null;
  @Input()
  width: string | null;
  @Input() symbol: string | null;

  constructor() {
    this.value = 0;
    this.description = ""
    this.width = '84'
    this.symbol = '€'
  }
  
  getWidth(){
    return this.width!? this.width : '84'
  }
}
