import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { XcIconAngleDownComponent } from '@xchange-ecosystem/ngx-xchange-icons';

@Component({
  selector: 'app-interest-select',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    XcIconAngleDownComponent
  ],
  templateUrl: './interest-select.component.html',
  styleUrl: './interest-select.component.scss'
})
export class InterestSelectComponent {
 @Input() options: { value: string; label: string }[] = [];
 @Input() selectedValue: string | null = null;
 @Output() selectionChange = new EventEmitter<string>();

 isOpen = false;

 get selectedLabel() {
   const found = this.options.find(o => o.value === this.selectedValue);
   return found ? found.label : 'Select Interest';
 }

 toggleDropdown() {
   this.isOpen = !this.isOpen;
 }

 closeDropdown() {
   this.isOpen = false;
 }

 selectOption(opt: { value: string; label: string }) {
   this.selectedValue = opt.value;
   this.selectionChange.emit(opt.value);
   this.closeDropdown();
 }
}
