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

export class MetricsSelectionComponent implements OnInit {
  @Input() selection: MetricsCatalogKey = 'select';
  @Input() setValue: string | number | undefined;
  @Input() showMode: string | undefined;
  @Input() unitValue: number | undefined;
  @Input() blockElement: boolean = false;
  @Output() selectionChosen = new EventEmitter<string | number>();
  @Output() setValueChange = new EventEmitter<string | number>();
  @Output() unit = new EventEmitter<number>();

  public userSelection!: string | number |undefined;
  public optionsOpen: boolean = false;
  
  constructor(){
  }
  ngOnInit(): void {
    if(this.setValue) this.userSelection = this.setValue;
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
    this.optionsOpen = false;
    const value = (event.target as HTMLInputElement).value
    this.unit.emit(parseInt(value))
  }
}
