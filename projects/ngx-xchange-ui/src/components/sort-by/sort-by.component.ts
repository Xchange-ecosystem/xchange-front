import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import {
  XcIconAngleDownComponent,
  XcIconRedoComponent,
  XcIconSearchComponent,
} from '@indziaki/ngx-xchange-icons';
import { ButtonsWrappersDirective } from '../../public-api';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'xc-sort-by',
  standalone: true,
  imports: [
    XcIconAngleDownComponent,
    XcIconSearchComponent,
    NgFor,
    NgIf,
    NgClass,
    XcIconRedoComponent,
    ButtonsWrappersDirective,
    FormsModule
  ],
  templateUrl: './sort-by.component.html',
  styleUrl: './sort-by.component.css',
})
export class SortByComponent {
  isDropdownOpen = false;
  isFilterActive = false;
  isSearchOpen = false;
  
  selectedOption = '';
  searchTerm = '';
  
  sortOptions = ['Alphabet A-Z', 'Alphabet Z-A', 'Collaborations'];
  
  toggleDropdown(event: Event): void {
    event.stopPropagation();
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectOption(option: string): void {
    this.selectedOption = option;
    this.isDropdownOpen = false;
  }

  toggleSearch() {
    this.isSearchOpen = !this.isSearchOpen;
    if (!this.isSearchOpen) {
      this.searchTerm = '';
    }
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
