import { NgFor } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { XcIconAIComponent, XcIconCloseSComponent, XcIconPlusCircleComponent } from '@xchange-ecosystem/ngx-xchange-icons';
import { ProfileTagsDirective } from '@xchange-ecosystem/ngx-xchange-ui';

@Component({
  selector: 'app-tags-modal',
  standalone: true,
  imports: [
    NgFor,
    XcIconAIComponent,
    XcIconCloseSComponent,
    XcIconPlusCircleComponent,
    ProfileTagsDirective
  ],
  templateUrl: './tags-modal.component.html',
  styleUrl: './tags-modal.component.scss'
})
export class TagsModalComponent {
@Output() close = new EventEmitter<void>();
  
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

  closeTagsModal() {
    this.close.emit();
  }
}
