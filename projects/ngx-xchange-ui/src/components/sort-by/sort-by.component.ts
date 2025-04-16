import { NgClass, NgFor } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import {
  XcIconAngleDownComponent,
  XcIconRedoComponent,
  XcIconRefreshComponent,
  XcIconSearchComponent,
} from '@indziaki/ngx-xchange-icons';
import { ButtonsWrappersDirective } from '../../public-api';

@Component({
  selector: 'xc-sort-by',
  standalone: true,
  imports: [
    XcIconAngleDownComponent,
    XcIconSearchComponent,
    NgFor, 
    NgClass,
    XcIconRedoComponent,
    ButtonsWrappersDirective,
  ],
  templateUrl: './sort-by.component.html',
  styleUrl: './sort-by.component.css',
})
export class SortByComponent {
  isDropdownOpen = false;
  selectedOption = '';
  sortOptions = ['Alphabet A-Z', 'Alphabet Z-A', 'Collaborations'];
  isFilterActive = false;

  toggleDropdown(event: Event): void {
    event.stopPropagation();
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectOption(option: string): void {
    this.selectedOption = option;
    this.isDropdownOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const dropdown = document.querySelector('.dropdown');
    
    if (dropdown && !dropdown.contains(target)) {
      this.isDropdownOpen = false;
    }
  }
}
