import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild, viewChild } from '@angular/core';
type FilterDescription = 'Goal' | 'Objective state' | 'Members' | 'Date' | 'Value' | 'User Input Search'
@Component({
  selector: 'xc-navigator-filter-selector',
  standalone: false,
  templateUrl: './navigator-filter-selector.component.html',
  styleUrl: './navigator-filter-selector.component.css'
})
export class NavigatorFilterSelectorComponent implements OnInit, OnChanges{
  @Input() filterDescription: FilterDescription = 'Goal';
  @Input() index: number = 0;
  @Input() selection: boolean = false;
  @Output() selectionChange = new EventEmitter<boolean>();
  public labelName =  ''
  @ViewChild('dropContainer') dorpContainer!: ElementRef;
  
  ngOnInit(): void {
    this.labelName = `label-${this.index}`
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['selection']){
      this.selection = changes['selection'].currentValue
    }
  }

focusOut(event: FocusEvent){
  setTimeout(() => {
    const relatedTarget = event.relatedTarget as HTMLElement
    if(!this.dorpContainer.nativeElement.contains(relatedTarget)){
      this.selectionChange.emit(!this.selection);
    }
  }, 150);
}
}
