import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile-sort',
  standalone: true,
  imports: [
    FormsModule,
    NgFor
  ],
  templateUrl: './profile-sort.component.html',
  styleUrl: './profile-sort.component.scss'
})
export class ProfileSortComponent {
  filterOptions = [
    { value: 'latest', label: 'Latest' },
    { value: 'name',   label: 'Name'   },
    { value: 'price',  label: 'Price'  },
  ];
  selectedFilter = this.filterOptions[0].value;
  onFilterChange(newFilter: string) {
    this.selectedFilter = newFilter;
    console.log('Filtro seleccionado:', newFilter);
  }
}
