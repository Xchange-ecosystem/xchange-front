import { Component, EventEmitter, Output } from '@angular/core';
import { NgFor } from '@angular/common';
import { XcIconAIComponent, XcIconCheckCircleComponent, XcIconPlugComponent, XcIconPlusCircleComponent } from '@xchange-ecosystem/ngx-xchange-icons';
import { XcIconCloseSComponent } from 'projects/ngx-xchange-icons/src/public-api';
import { ButtonsWrappersDirective, HeadlineStylesDirective, ProfileTagsDirective } from '@xchange-ecosystem/ngx-xchange-ui';
@Component({
  selector: 'app-tag-modal',
  imports: [
    XcIconCloseSComponent,
    XcIconCheckCircleComponent,
    XcIconPlusCircleComponent,
    XcIconAIComponent,
    ButtonsWrappersDirective,
    NgFor,
    ProfileTagsDirective,
    HeadlineStylesDirective
  ],
  standalone:true,
  templateUrl: './tag-modal.component.html',
  styleUrl: './tag-modal.component.scss'
})
export class TagModalComponent {
  @Output() close: EventEmitter<boolean> = new EventEmitter<boolean>()
  
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


  closeTags() {
    this.close.emit(false)
  }
}
