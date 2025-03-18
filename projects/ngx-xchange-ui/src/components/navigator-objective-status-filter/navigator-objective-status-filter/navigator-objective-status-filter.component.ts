import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { BehaviorSubject, ShareReplayConfig } from 'rxjs';

type SelectOptions = {
  suggestions: boolean;
  open: boolean;
  complete: boolean;
  notOpen: boolean;
};

@Component({
  selector: 'xc-navigator-objective-status-filter',
  standalone: false,
  templateUrl: './navigator-objective-status-filter.component.html',
  styleUrl: './navigator-objective-status-filter.component.css',
})
export class NavigatorObjectiveStatusFilterComponent {
  @Input() selectOptions: SelectOptions = {
    suggestions: false,
    open: false,
    complete: false,
    notOpen: false,
  };
  @Output() selectOptionsChange = new EventEmitter<SelectOptions> 
  @Input() visible: boolean = false
  @Output() visibleChange = new EventEmitter<boolean>()

  resetSelectOptions(){
    this.selectOptions = {
      suggestions: true,
      open: true,
      complete: true,
      notOpen: false,
    }
    this.selectOptionsChange.emit(this.selectOptions)
    this.visibleChange.emit(false)
  }
  sendOptionsSelected(){
    this.selectOptionsChange.emit(this.selectOptions)
    this.visibleChange.emit(false)
  }
}
