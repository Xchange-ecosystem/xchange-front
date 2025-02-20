import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

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
  @Output() selectOptionsChange: BehaviorSubject<SelectOptions> = new BehaviorSubject<SelectOptions>(
    {
      suggestions: false,
      open: false,
      complete: false,
      notOpen: false,
    }
  );
  @Output() visible: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true)

  resetSelectOptions(){
    this.selectOptions = {
      suggestions: false,
      open: false,
      complete: false,
      notOpen: false,
    }
    this.selectOptionsChange.next(this.selectOptions)
    this.visible.next(false)
  }
  sendOptionsSelected(){
    this.selectOptionsChange.next(this.selectOptions)
    this.visible.next(false)
  }
}
