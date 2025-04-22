import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { XcIconAngleDownComponent } from '@indziaki/ngx-xchange-icons';

@Component({
  selector: 'app-language-dropdown',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    XcIconAngleDownComponent
  ],
  templateUrl: './language-dropdown.component.html',
  styleUrl: './language-dropdown.component.scss'
})
export class LanguageDropdownComponent {
  @Input() options: { value: string; label: string }[] = [];
  @Output() change = new EventEmitter<string>();

  isOpen = false;
  selectedValue: string | null = null;

  get selectedLabel() {
    const found = this.options.find(o => o.value === this.selectedValue);
    return found?.label ?? '';
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  closeDropdown() {
    this.isOpen = false;
  }

  selectOption(opt: { value: string; label: string }) {
    this.selectedValue = opt.value;
    this.change.emit(opt.value);
    this.closeDropdown();
  }
}
