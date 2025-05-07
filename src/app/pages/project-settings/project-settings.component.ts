import { Component } from '@angular/core';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { XcIconAIComponent, XcIconArrowRightComponent, XcIconCloseSComponent, XcIconCopyComponent, XcIconImagePlusComponent, XcIconPlayComponent, XcIconPlusCircleComponent, XcIconSaveComponent, XcIconStarComponent, XcIconTimesComponent, XcIconTrashComponent } from '@indziaki/ngx-xchange-icons';
import { ProfileTagsDirective, ProjectProgressBarModule, ToggleComponent } from '@indziaki/ngx-xchange-ui';

@Component({
  selector: 'app-project-settings',
  standalone: true,
  imports: [
        NgFor,
        NgClass,
        NgIf,
        ProjectProgressBarModule,
        XcIconPlayComponent,
        XcIconStarComponent,
        ToggleComponent,
        ProfileTagsDirective,
        XcIconArrowRightComponent,
        XcIconImagePlusComponent,
        XcIconCopyComponent,
        XcIconTrashComponent,
        XcIconSaveComponent,
        XcIconCloseSComponent,
        XcIconTimesComponent,
        XcIconPlusCircleComponent,
        XcIconAIComponent
  ],
  templateUrl: './project-settings.component.html',
  styleUrl: './project-settings.component.scss'
})
export class ProjectSettingsComponent {
  isSuspend = false;
  isTagsOpen = false;
  section: string = 'Appearance';
  
  sections = [
    'Appearance', 
    'Legal', 
    'Credits',
    'Members',
  ];

  tags = [
    "Apperance",
    "Testing",
    "Rest,",
    "Ai",
    "Entrepeneur"
  ]

  ModalTags = [
    'Innovation',
    'Leadership',
    'Teamwork',
    'Problem Solving',
    'Creativity',
    'Communication',
    'Critical Thinking',
    'Adaptability',
    'Time Management',
    'Collaboration',
    'Strategic Thinking',
    'Decision Making',
    'Emotional Intelligence',
    'Conflict Resolution',
    'Project Management',
    'Analytical Skills',
    'Customer Service',
    'Negotiation',
    'Networking',
    'Public Speaking',
    'Technical Writing',
    'Research',
    'Data Analysis',
    'Programming',
    'UX Design',
    'Marketing',
    'Sales',
    'SEO Optimization',
    'Social Media Management',
    'Content Creation',
    'Branding',
    'Finance',
    'Accounting',
    'Budgeting',
    'Risk Management',
    'Supply Chain Management',
    'Product Development',
    'Quality Assurance',
    'Operations Management',
    'Human Resources',
    'Recruitment',
    'Training',
    'Coaching',
    'Mentoring',
    'Event Planning',
    'Graphic Design',
    'Video Editing',
    'Photography',
    'Copywriting',
    'E-commerce',
    'Cloud Computing',
    'Cybersecurity',
  ];

  changeSection(section: string): void {
    this.section = section;
  }

  openSuspendModal () {
    this.isSuspend = true;
  }
  closeSuspendModal () {
    this.isSuspend = false;
  }

  openTagsModal() {
    this.isTagsOpen = true;
  }
  closeTagsModal() {
    this.isTagsOpen = false;
  }
}
