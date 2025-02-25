import { Component, EventEmitter, inject, Input, Output, output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
type FilterType = 'date' | 'value';

type DateAnswer = {
  startDate: string;
  endDate: string;
}

type ValueAnswer = {
  minValue: number;   
  maxValue: number;
}


@Component({
  selector: 'xc-navigator-range-filter',
  templateUrl: './navigator-range-filter.component.html',
  styleUrl: './navigator-range-filter.component.css'
})
export class NavigatorRangeFilterComponent {
  @Input() type:FilterType = 'date';
  @Input() isVisible: boolean = true;
  @Input() rangeSelection: DateAnswer | ValueAnswer = {startDate: '', endDate: ''};
  @Output() isVisibleChange = new EventEmitter<boolean>();
  @Output() changeRangeSelection = new EventEmitter<DateAnswer | ValueAnswer>(); 
  private forms = inject(FormBuilder);
  public dateForm: FormGroup;
  public valueForm: FormGroup;

  constructor(){
    this.dateForm = this.forms.group({
      starDate: ['', Validators.required],
      endDate: ['', Validators.required]
    });
    this.valueForm = this.forms.group({
      minValue: [undefined, Validators.min(0)],
      maxValue: [undefined, Validators.min(0)]
    });
  }

  sendOptionsSelected(){
    if(this.type === 'date'){
      const sendValues = this.dateForm.value;
      this.changeRangeSelection.emit(sendValues)
    }else{
      const sendValues = this.valueForm.value;
      this.changeRangeSelection.emit(sendValues)
    }
    this.isVisibleChange.next(false);
  }
  resetSelectOptions(){
    this.dateForm.reset();
    this.valueForm.reset();
    this.isVisibleChange.next(false);
  } 
}
