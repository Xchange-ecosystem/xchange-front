import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  XcIconAIComponent,
  XcIconArrowRightComponent,
  XcIconCheckCircleComponent,
  XcIconCloseSComponent,
  XcIconCopyComponent,
  XcIconPlusCircleComponent,
  XcIconSaveComponent,
  XcIconStarComponent,
} from '@indziaki/ngx-xchange-icons';
import { ToggleComponent } from 'projects/ngx-xchange-ui/src/components/toggle/toggle.component';
import { CopyStylesDirective } from 'projects/ngx-xchange-ui/src/directives/copy-styles/copy-styles.directive';
import { HeadlineStylesDirective } from 'projects/ngx-xchange-ui/src/directives/headline-styles/headline-styles.directive';
import { ButtonsWrappersDirective, ProfileTagsDirective, RateModule } from 'projects/ngx-xchange-ui/src/public-api';
import { ProfileHeaderComponent } from './profile-header/profile-header.component';
import { NgModel } from '@angular/forms';
import { LanguageDropdownComponent } from './language-dropdown/language-dropdown.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    XcIconSaveComponent,
    ProfileTagsDirective,
    XcIconArrowRightComponent,
    XcIconCopyComponent,
    ToggleComponent,
    CopyStylesDirective,
    NgIf,
    NgFor,
    ButtonsWrappersDirective,
    XcIconCloseSComponent,
    XcIconAIComponent,
    XcIconPlusCircleComponent,
    HeadlineStylesDirective,
    XcIconCheckCircleComponent,
    XcIconStarComponent,
    RateModule,
    ProfileHeaderComponent,
    LanguageDropdownComponent
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  activeSection: string = 'Apperance';
  isTagsOpen = false;
  selectedLang: string | null = null;

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

  languageOptions = [
    { value: 'en', label: 'English' },
    { value: 'es', label: 'Español' },
    { value: 'fr', label: 'Français' },
    { value: 'de', label: 'Deutsch' },
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

  onSectionChange(section: string): void {
    this.activeSection = section;
  }

  onLanguageChange(newLang: string) {
    this.selectedLang = newLang;
    console.log('Idioma seleccionado:', newLang);
  }
}
