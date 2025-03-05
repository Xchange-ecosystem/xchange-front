import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

type InformationToggleView ={
  index: number;
  status: ColorStatus;
}
type ColorStatus = 'suggested' | 'open' | 'complete' | 'new';

@Component({
  selector: 'xc-navigator-filter-toggle',
  templateUrl: './navigator-filter-toggle.component.html',
  styleUrl: './navigator-filter-toggle.component.css',
  standalone: false
})
export class NavigatorFilterToggleComponent implements OnInit {
  @Input() index: number = 0;
  @Input() status: ColorStatus = 'new'
  @Input() value: boolean = false;
  @Output() valueChange = new EventEmitter<boolean>();
  
  
  public labelName = ''
  
  ngOnInit(): void {
    this.labelName = `label-${this.index}`
  }

  colorSelection(): string{
    const toggleColor = {
      'suggested':'suggested',
      'complete':'complete',
      'open':'open',
      'new':'new'
    }
    return toggleColor[this.status]
  }

}
