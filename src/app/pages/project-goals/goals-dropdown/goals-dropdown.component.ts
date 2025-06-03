import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';

import { ObjectivesDropdownComponent } from './objectives-dropdown/objectives-dropdown.component';
import { DescriptionModalComponent } from '../description-modal/description-modal.component';
import { ProjectProgressBarModule, RoundedImageModule, ProfileTagsDirective } from 'projects/ngx-xchange-ui/src/public-api';
import { XcIconCalenderComponent } from 'projects/ngx-xchange-icons/src/lib/calender.component';
import { XcIconPlayComponent } from 'projects/ngx-xchange-icons/src/lib/play.component';

@Component({
  selector: 'app-goals-dropdown',
  standalone: true,
  imports: [
    NgIf,
    NgClass,
    ProjectProgressBarModule,
    RoundedImageModule,
    XcIconCalenderComponent,
    ProfileTagsDirective,
    ObjectivesDropdownComponent,
    DescriptionModalComponent,
    XcIconPlayComponent
  ],
  templateUrl: './goals-dropdown.component.html',
  styleUrl: './goals-dropdown.component.scss',
})
export class GoalsDropdownComponent {
  dropdownOpen = false;
  isDescription = false;

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  openDescription () {
    this.isDescription = true;
  }
  handleDescritionModalClose () {
    this.isDescription = false;
  }
}
