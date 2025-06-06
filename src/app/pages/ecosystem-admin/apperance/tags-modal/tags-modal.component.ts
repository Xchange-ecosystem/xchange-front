import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { XcIconCloseSComponent, XcIconAIComponent, XcIconPlusCircleComponent } from '@indziaki/ngx-xchange-icons';
import { ProfileTagsDirective } from '@indziaki/ngx-xchange-ui';

@Component({
  selector: 'app-tags-modal',
  standalone: true,
  imports: [
    XcIconCloseSComponent,
    XcIconAIComponent,
    NgFor,
    ProfileTagsDirective,
    XcIconPlusCircleComponent
    ],
  templateUrl: './tags-modal.component.html',
  styleUrl: './tags-modal.component.scss',
})
export class TagsModalComponent {
  @Output() close: EventEmitter<boolean> = new EventEmitter<boolean>();
  tags = [
    'Technology',
    'Health',
    'Education',
    'Finance',
    'Sports',
    'Music',
    'Travel',
    'Web Development',
    'Artificial Intelligence',
    'Science',
    'Fashion',
    'Cooking',
    'Marketing',
    'Wellness',
    'Photography',
    'Video Games',
    'History',
    'Movies',
    'Politics',
    'Psychology',
    'Programming',
    'UX/UI',
    'React',
    'Angular',
    'TypeScript',
    'Next.js',
    'MongoDB',
    'Node.js',
  ];

  closeTagsModal() {
    this.close.emit(true);
  }
}
