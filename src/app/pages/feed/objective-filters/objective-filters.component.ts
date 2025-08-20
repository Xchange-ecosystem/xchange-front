import { NgClass, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
} from '@angular/core';
import { XcIconAIComponent, XcIconHomeAltComponent } from '@xchange-ecosystem/ngx-xchange-icons';
import { NotificationBubbleDirective } from 'projects/ngx-xchange-ui/src/directives/notification-bubble/notification-bubble.directive';
import { ButtonsWrappersDirective } from 'projects/ngx-xchange-ui/src/public-api';

@Component({
  selector: 'app-objective-filters',
  standalone: true,
  imports: [
    NgIf, 
    NotificationBubbleDirective, 
    ButtonsWrappersDirective,
    XcIconHomeAltComponent,
    NgSwitchCase,
    NgSwitch,
    NgSwitchDefault,
    XcIconAIComponent
  ],
  templateUrl: './objective-filters.component.html',
  styleUrl: './objective-filters.component.scss',
})
export class ObjectiveFiltersComponent {
  @Input() label: string = '';
  @Input() showNotification: boolean = false;
  @Input() selectedLabel: string = '';
  @Output() sectionClicked = new EventEmitter<string>();

  handleClick(): void {
    this.sectionClicked.emit(this.label);
  }
}
