import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NotificationBubbleDirective } from 'projects/ngx-xchange-ui/src/directives/notification-bubble/notification-bubble.directive';
import { ButtonsWrappersDirective } from 'projects/ngx-xchange-ui/src/public-api';

@Component({
  selector: 'app-objective-filters',
  standalone: true,
  imports: [NgIf,NotificationBubbleDirective,ButtonsWrappersDirective],
  templateUrl: './objective-filters.component.html',
  styleUrl: './objective-filters.component.scss'
})
export class ObjectiveFiltersComponent {
  @Input() label: string = '';
  @Input() showNotification: boolean = false;
  @Input() selectedLabel: string = '';
  @Output() sectionClicked = new EventEmitter<string>();

  handleClick(): void {
    console.log('Hijo clickeado:', this.label);
    this.sectionClicked.emit(this.label);
  }
}

