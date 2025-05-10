import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ProjectDashboardNavigatorService, TabState } from '../../services/services-dashboard-navigator-service.service';

@Component({
  selector: 'app-option-tabs',
  standalone: true,
  imports: [
    NgFor, 
    NgClass,
  ],
  templateUrl: './option-tabs.component.html',
  styleUrl: './option-tabs.component.scss',
})
export class OptionTabsComponent {
  private ProjectDashboardNavigatorService = inject(ProjectDashboardNavigatorService) 
  section: TabState = 'Credits';

  sections:TabState[] = ['Appearance', 'Legal', 'Credits', 'Members'];

  changeSection(section: TabState): void {
    this.section = section;
    this.ProjectDashboardNavigatorService.setTabState(section)
  }
}
