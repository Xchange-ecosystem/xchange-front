import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'xc-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnInit {
  @Input() maxRate: number = 5;
  @Input() rate:number = 0;
  @Input() isToRate: boolean = false;
  @Output() rateChange = new EventEmitter<number>()
  index: number[] = []

  ngOnInit(): void {
    this.index = Array.from({length: this.maxRate}, (_, i) => i + 1).reverse();
  }

  chose(rate: number) {
    this.rate = rate;
    this.rateChange.emit(this.rate)
  }
}
