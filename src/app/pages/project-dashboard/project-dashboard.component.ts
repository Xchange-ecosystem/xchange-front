import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-project-dashboard',
  standalone: true,
  imports: [
    NgFor,
    NgClass,
    NgIf
  ],
  templateUrl: './project-dashboard.component.html',
  styleUrl: './project-dashboard.component.scss'
})
export class ProjectDashboardComponent {

  sections = [
    'Operations', 
    'Value', 
    'Pitch',
  ];
  section: string = 'Operations';

  changeSection(section: string): void {
    this.section = section;
  }
}
