import { NgFor, NgIf } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { XcIconAngleDownComponent } from '@xchange-ecosystem/ngx-xchange-icons';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    XcIconAngleDownComponent
  ],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
 @Input() label : string = ""
 @Input() options: Array<{ label: string }> = [];
 @Output() selectedOption: EventEmitter<any> = new EventEmitter<any>();

 isFilterOpen = false

 toggleFilter(): void {
  this.isFilterOpen = !this.isFilterOpen;
}

selectOption(option: any): void {
  this.selectedOption.emit(option);
  this.isFilterOpen = false; // Opcional: cerrar al seleccionar
}
}
