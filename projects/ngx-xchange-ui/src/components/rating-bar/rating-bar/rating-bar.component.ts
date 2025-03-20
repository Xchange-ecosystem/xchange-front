import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'xc-rating-bar',
  templateUrl: './rating-bar.component.html',
  styleUrl: './rating-bar.component.css'
})
export class RatingBarComponent {

  @Input() rating: number;
  @Input() maxRate: number;
  @Input() readOnly: boolean;
  @Output() ratingChange = new EventEmitter<ratingValuesFormats>;
  
  public stepValue: number;

  constructor(){
    this.rating = 0;
    this.maxRate = 5;
    this.readOnly = false;
    this.stepValue = 100/this.maxRate;
  }

  onChange(){
    this.ratingChange.emit(
      {
        step: this.rating,
        percentage: +(this.stepValue * (+ this.rating))
      }
    )
  }
}

export interface ratingValuesFormats {
  step: number,
  percentage: number
}