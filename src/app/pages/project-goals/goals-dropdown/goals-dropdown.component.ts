import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { XcIconCalenderComponent } from '@indziaki/ngx-xchange-icons';
import {
  ProfileTagsDirective,
  ProjectProgressBarModule,
  RoundedImageModule,
} from '@indziaki/ngx-xchange-ui';

@Component({
  selector: 'app-goals-dropdown',
  standalone: true,
  imports: [
    NgIf,
    ProjectProgressBarModule,
    RoundedImageModule,
    XcIconCalenderComponent,
    ProfileTagsDirective
  ],
  templateUrl: './goals-dropdown.component.html',
  styleUrl: './goals-dropdown.component.scss',
})
export class GoalsDropdownComponent {
  dropdownOpen = false;

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  handleOpenDescriptionModal() {
    console.log('Abrir modal de descripción');
  }
}
