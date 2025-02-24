import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
type ViewOption = 'table' | 'board' | 'graph' 

@Component({
  selector: 'xc-navigator-filter-selector-switch-view-option',
  standalone: false,
  templateUrl: './navigator-filter-selector-switch-view-option.component.html',
  styleUrl: './navigator-filter-selector-switch-view-option.component.css'
})
export class NavigatorFilterSelectorSwitchViewOptionComponent implements OnInit {
  
  @Input() index: number = 0;
  @Input() viewOption: ViewOption = 'board'
  @Input() selection: boolean = false;
  @Output() selectionChange = new EventEmitter<ViewOption>();
  public labelName = '';
  
  ngOnInit(): void {
    this.labelName = `label-${this.index}`
  }
}
