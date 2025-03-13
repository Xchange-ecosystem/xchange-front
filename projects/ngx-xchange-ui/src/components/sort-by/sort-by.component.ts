import { NgClass, NgFor } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import {
  XcIconAngleDownComponent,
  XcIconRefreshComponent,
  XcIconSearchComponent,
} from '@indziaki/ngx-xchange-icons';

@Component({
  selector: 'xc-sort-by',
  standalone: true,
  imports: [
    XcIconAngleDownComponent,
    XcIconRefreshComponent,
    XcIconSearchComponent,
    NgFor, NgClass
  ],
  templateUrl: './sort-by.component.html',
  styleUrl: './sort-by.component.css',
})
export class SortByComponent {
  isDropdownOpen = false;
  selectedOption = 'Newest';
  sortOptions = ['Newest', 'Oldest', 'Alphabetical'];

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
