import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { XcIconAngleDownComponent } from '@indziaki/ngx-xchange-icons';
import { CopyStylesDirective } from 'projects/ngx-xchange-ui/src/directives/copy-styles/copy-styles.directive';

@Component({
  selector: 'app-profile-sort',
  standalone: true,
  imports: [
    FormsModule,
    NgFor,
    NgIf,
    CopyStylesDirective,
    XcIconAngleDownComponent
  ],
  templateUrl: './profile-sort.component.html',
  styleUrl: './profile-sort.component.scss'
})
export class ProfileSortComponent {
  filterOptions = [
    { value: 'latest', label: 'latest' },
    { value: 'name',   label: 'name'   },
    { value: 'price',  label: 'price'  },
  ];
  selectedFilter: string | null = null;
  isOpen = false;

  get selectedLabel() {
    const found = this.filterOptions.find(o => o.value === this.selectedFilter);
    return found?.label ?? '';
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }
  closeMenu() {
    this.isOpen = false;
  }
  selectFilter(val: string) {
    this.selectedFilter = val;
    this.closeMenu();
  }
}
