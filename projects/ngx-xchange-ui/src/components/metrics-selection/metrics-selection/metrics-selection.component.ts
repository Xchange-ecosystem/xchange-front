import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

const MetricsCatalog = {
  'metric': ['kg', 'liter', 'tons', 'FTE', 'EURO', 'USD'],
  'rating': [1,2,3,4,5] ,
  'select': ['Yes', 'No', "Don't know", 'Not applicable']
}
type MetricsCatalogKey = keyof typeof MetricsCatalog;

@Component({
  selector: 'xc-metrics-selection',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './metrics-selection.component.html',
  styleUrl: './metrics-selection.component.css'
})

export class MetricsSelectionComponent {
  @Input() selection: MetricsCatalogKey = 'select';
  @Output() selectionChosen = new EventEmitter<string | number>();
  @Output() unit = new EventEmitter<number>();

  public userSelection!: string | number;
  public optionsOpen: boolean = false;
  
  constructor(){
  }

  emitSelection(selection: number){
    const value:  string | number =  MetricsCatalog[this.selection].sort((a,b) => a > b ? 1 : b > a ? -1 : 0)[selection]
    this.userSelection = value
    this.selectionChosen.emit(value)
    this.optionsClose();
  } 
  getTaskOptionsCatalog(metricType: MetricsCatalogKey = 'select'): (string | number)[]{
    return MetricsCatalog[metricType].sort((a,b) => a > b ? 1 : b > a ? -1 : 0);
  }
  optionsClose(){
    setTimeout(() => {
      this.optionsOpen = false;
    }, 100);
  }
  getOptionStatus(){
    return this.optionsOpen;
  }
  setUnit(event: Event){
    const value = (event.target as HTMLInputElement).value
    this.unit.emit(parseInt(value))
  }
}
