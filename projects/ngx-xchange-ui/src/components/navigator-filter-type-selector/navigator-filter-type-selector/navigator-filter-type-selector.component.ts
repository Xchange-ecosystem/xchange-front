import { Component, EventEmitter, Input, Output } from '@angular/core';
type ViewOption = 'table' | 'board' | 'graph' 

@Component({
  selector: 'xc-navigator-filter-type-selector',
  standalone: false,
  templateUrl: './navigator-filter-type-selector.component.html',
  styleUrl: './navigator-filter-type-selector.component.css'
})
export class NavigatorFilterTypeSelectorComponent {
  public switchState = {
    'table': false,
    'board': true,
    'graph': false
  }
  @Input() selection: ViewOption = 'board'
  @Output() selectionChange = new EventEmitter<ViewOption>();

  selectorChanger(option: ViewOption){
    (Object.keys(this.switchState) as ViewOption[]).forEach(key => {
      if(key !== option){
        this.switchState[key] = false;
      }
      if(key === option){
        this.switchState[key] = true;
      }
    })
    this.selectionChange.emit(option)
  }
}
