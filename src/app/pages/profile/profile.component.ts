import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
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
import { ButtonsWrappersDirective, ProfileTagsDirective, RateModule, RoundedImageModule } from 'projects/ngx-xchange-ui/src/public-api';
import { ProfileHeaderComponent } from './profile-header/profile-header.component';
import { FormsModule } from '@angular/forms';
import { LanguageDropdownComponent } from './language-dropdown/language-dropdown.component';
import { InterestsProfileComponent } from './interests-profile/interests-profile.component';
import { InterestCardComponent } from './interest-card/interest-card.component';
import { ProfileSortComponent } from './profile-sort/profile-sort.component';

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
    LanguageDropdownComponent,
    FormsModule,
    InterestsProfileComponent,
    InterestCardComponent,
    ButtonsWrappersDirective,
    RoundedImageModule,
    ProfileSortComponent,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  @Input() email: string = 'fabian@xchange.eco';
  @Input() linkedin: string = 'https://www.linkedin.com/in/fabian-bermeo';
  @Input()description: string = `I founded COBIOM as a network of professionals who believe that
  collaboration and cocreation are our best tools to transform
  businesses into agents for a better future. As Director and head of
  strategy and product development, my great team and I develop the
  COBIOM ecosystem as a consultancy, coworking and learning platform
  that provides end-to-end services from intent to implementation in
  innovation and business transformation.`;
  @Input() image: string = 'https://randomuser.me/api/portraits/women/26.jpg'
  
  tempDescription = '';
  tempEmail = '';
  tempLinkedin = '';

  activeSection: string = 'Premium settings';
  isTagsOpen = false;
  selectedLang: string | null = null;

  editingDescription = false;
  editingEmail       = false;
  editingLinkedin    = false;
  editing = false;

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

  invoiceData = [
    {
      invoiceName: "John Doe",
      date: "15 July 24",
      amount: "99 Euro",
      status: "Invoice"
    },
    {
      invoiceName: "Jane Smith",
      date: "15 July 24",
      amount: "99 Euro",
      status: "Invoice"
    },
    {
      invoiceName: "Michael Johnson",
      date: "15 July 24",
      amount: "99 Euro",
      status: "Invoice"
    },
    {
      invoiceName: "Emily Davis",
      date: "15 July 24",
      amount: "99 Euro",
      status: "Invoice"
    },
    {
      invoiceName: "Daniel Martinez",
      date: "15 July 24",
      amount: "99 Euro",
      status: "Invoice"
    },
    {
      invoiceName: "Laura Hernandez",
      date: "15 July 24",
      amount: "99 Euro",
      status: "Invoice"
    },
    {
      invoiceName: "Carlos López",
      date: "15 July 24",
      amount: "99 Euro",
      status: "Invoice"
    },
    {
      invoiceName: "Natalie Wilson",
      date: "15 July 24",
      amount: "99 Euro",
      status: "Invoice"
    }
  ];
  
  languageOptions = [
    { value: 'en', label: 'English' },
    { value: 'es', label: 'Español' },
    { value: 'fr', label: 'Français' },
    { value: 'de', label: 'Deutsch' },
  ];

  interestOptions = [
    { value: 'design',    label: 'Design' },
    { value: 'marketing', label: 'Marketing' },
    { value: 'dev',       label: 'Development' },
    { value: 'ux',        label: 'UX/UI' },
    { value: 'data',      label: 'Data Science' },
  ];
  selectedInterests: { interest: string | null; level: number }[] = [];

  ngOnInit() {
    this.selectedInterests = Array.from({ length: 5 }, () => ({
      interest: null,
      level: 0
    }));
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

  editDescription() {
    this.tempDescription = this.description;
    this.editingDescription = true;
  }
  saveDescription() {
    this.description = this.tempDescription.trim();
    this.editingDescription = false;
  }
  cancelDescription() {
    this.editingDescription = false;
  }
  editEmail() {
    this.tempEmail = this.email;
    this.editingEmail = true;
  }
  saveEmail() {
    this.email = this.tempEmail.trim();
    this.editingEmail = false;
  }
  cancelEmail() {
    this.editingEmail = false;
  }
  editLinkedin() {
    this.tempLinkedin = this.linkedin;
    this.editingLinkedin = true;
  }
  saveLinkedin() {
    this.linkedin = this.tempLinkedin.trim();
    this.editingLinkedin = false;
  }
  cancelLinkedin() {
    this.editingLinkedin = false;
  }
  saveChanges() {
    console.log('Cambios guardados');
  }


  getFilteredOptions(idx: number) {
    const taken = this.selectedInterests
      .filter((_, i) => i !== idx)
      .map(sel => sel.interest)
      .filter((v): v is string => v !== null);

    return this.interestOptions.filter(opt => !taken.includes(opt.value));
  }

  onInterestSelected(event: { interest: string; level: number }, idx: number) {
    this.selectedInterests[idx] = event;
    console.log(`Selector ${idx}:`, event);
  }

  addSelector() {
    this.selectedInterests.push({ interest: null, level: 0 });
  }
}
