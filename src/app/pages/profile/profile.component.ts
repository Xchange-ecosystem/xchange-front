import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  XcIconAIComponent,
  XcIconArrowRightComponent,
  XcIconCloseSComponent,
  XcIconCopyComponent,
  XcIconPlusCircleComponent,
  XcIconSaveComponent,
} from '@indziaki/ngx-xchange-icons';
import { ToggleComponent } from 'projects/ngx-xchange-ui/src/components/toggle/toggle.component';
import { UserHeaderComponent } from 'projects/ngx-xchange-ui/src/components/user-header/user-header.component';
import { CopyStylesDirective } from 'projects/ngx-xchange-ui/src/directives/copy-styles/copy-styles.directive';
import { Headline200Directive } from 'projects/ngx-xchange-ui/src/directives/headline-200/headline-200.directive';
import { Headline300Directive } from 'projects/ngx-xchange-ui/src/directives/headline-300/headline-300.directive';
import { Headline400Directive } from 'projects/ngx-xchange-ui/src/directives/headline-400/headline-400.directive';
import { ButtonsWrappersDirective, ProfileTagsDirective } from 'projects/ngx-xchange-ui/src/public-api';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    UserHeaderComponent,
    XcIconSaveComponent,
    ProfileTagsDirective,
    XcIconArrowRightComponent,
    XcIconCopyComponent,
    Headline300Directive,
    Headline200Directive,
    ToggleComponent,
    CopyStylesDirective,
    Headline400Directive,
    NgIf,
    NgFor,
    ButtonsWrappersDirective,
    XcIconCloseSComponent,
    XcIconAIComponent,
    XcIconPlusCircleComponent
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  isTagsOpen = false;

  tags = [
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

  saveChanges() {
    alert('Changes saved');
  }
  closeDialog() {
    alert('Dialog closed');
  }

  openTags() {
    this.isTagsOpen = true;
  }
  closeTags() {
    this.isTagsOpen = false;
  }

}
