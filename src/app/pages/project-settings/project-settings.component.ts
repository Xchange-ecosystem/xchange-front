import { Component } from '@angular/core';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { XcIconAIComponent, XcIconArrowRightComponent, XcIconCloseSComponent, XcIconCopyComponent, XcIconFileUploadComponent, XcIconImagePlusComponent, XcIconPaperclipComponent, XcIconPlayComponent, XcIconPlusCircleComponent, XcIconSaveComponent, XcIconStarComponent, XcIconTimesComponent, XcIconTrashComponent } from '@indziaki/ngx-xchange-icons';
import { ProfileTagsDirective, ProjectProgressBarModule, ToggleComponent } from '@indziaki/ngx-xchange-ui';
import { NgModel } from '@angular/forms';

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
        XcIconAIComponent,
        XcIconFileUploadComponent,
        XcIconPaperclipComponent,
  ],
  templateUrl: './project-settings.component.html',
  styleUrl: './project-settings.component.scss'
})
export class ProjectSettingsComponent {
  isSuspend = false;
  isTagsOpen = false;
  isBuyCredits = false;
  isHistory = false;
  section: string = 'Credits';
  
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

  countries = [
    'Mexico',
    'United States',
    'Canada',
    'Argentina',
    'Colombia'
  ];
  transactions = [
    {
      name: "Manuel Cabrera",
      date: "14 Aug.24",
      amount: -500,
      destination: "Jake Gyllenhaal"
    },
    {
      name: "Lucía Torres",
      date: "10 Aug.24",
      amount: -250,
      destination: "Ecosystem"
    },
    {
      name: "Carlos Rivera",
      date: "05 Aug.24",
      amount: +1200,
      destination: "Ecosystem"
    },
    {
      name: "Ana Gómez",
      date: "28 Jul.24",
      amount: -150,
      destination: "Team Orion"
    },
    {
      name: "Diego Martínez",
      date: "21 Jul.24",
      amount: +800,
      destination: "Team Orion"
    },
    {
      name: "Valeria Salgado",
      date: "18 Aug.24",
      amount: +300,
      destination: "Team Alpha"
    },
    {
      name: "Jorge Peña",
      date: "12 Aug.24",
      amount: -700,
      destination: "Marketing Hub"
    },
    {
      name: "Mariana Castro",
      date: "09 Aug.24",
      amount: +1500,
      destination: "Development Core"
    },
    {
      name: "Emilio Rodríguez",
      date: "04 Aug.24",
      amount: -120,
      destination: "UI Task Force"
    },
    {
      name: "Gabriela Ruiz",
      date: "01 Aug.24",
      amount: +500,
      destination: "Ecosystem"
    },
    {
      name: "Matías Soto",
      date: "29 Jul.24",
      amount: -90,
      destination: "External Wallet"
    },
    {
      name: "Laura Mendoza",
      date: "26 Jul.24",
      amount: +1100,
      destination: "Investor Rewards"
    }
  ];

  sortOption = 'latest';
  

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

  openBuyCredits () {
    this.isBuyCredits = true;
  }

  closeBuyCredits () {
    this.isBuyCredits = false;
  }

  openHistoryModal () {
    this.isHistory = true;
  }

  closeHistoryModal () {
    this.isHistory = false;
  }
}
