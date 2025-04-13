import { NgIf } from '@angular/common';
import { Component, HostListener, } from '@angular/core';
import {
  XcIconAIComponent,
  XcIconClipboardComponent,
  XcIconHomeAltComponent,
  XcIconHomeComponent,
  XcIconMicrophoneComponent,
  XcIconRedoComponent,
  XcIconSendComponent,
} from '@indziaki/ngx-xchange-icons';
import { AiFilterComponent } from 'projects/ngx-xchange-ui/src/components/ai-filter/ai-filter.component';
import { ChatOptionsButtonComponent } from 'projects/ngx-xchange-ui/src/components/chat-options-button/chat-options-button.component';
import { FeedObjectiveComponent } from 'projects/ngx-xchange-ui/src/components/feed-objective/feed-objective.component';
import { FeedButtonDirective } from 'projects/ngx-xchange-ui/src/directives/feed-button/feed-button.directive';
import { HeadlineStylesDirective } from 'projects/ngx-xchange-ui/src/directives/headline-styles/headline-styles.directive';
import { NotificationBubbleDirective } from 'projects/ngx-xchange-ui/src/directives/notification-bubble/notification-bubble.directive';
import { ChatMessageComponent } from './chat-message/chat-message.component';
import { ButtonsWrappersDirective } from 'projects/ngx-xchange-ui/src/public-api';

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [
    ChatOptionsButtonComponent,
    FeedObjectiveComponent,
    AiFilterComponent,
    XcIconRedoComponent,
    XcIconHomeComponent,
    XcIconAIComponent,
    NotificationBubbleDirective,
    FeedButtonDirective,
    XcIconSendComponent,
    XcIconMicrophoneComponent,
    XcIconClipboardComponent,
    NgIf,
    ButtonsWrappersDirective,
    HeadlineStylesDirective,
    ChatMessageComponent,
    XcIconHomeAltComponent
  ],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss',
})
export class FeedComponent {
  isAiFiltersVisible = false;

  toggleAiFilters() {
    this.isAiFiltersVisible = !this.isAiFiltersVisible;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.ai-button') && !target.closest('.ai-filters')) {
      this.isAiFiltersVisible = false;
    }
  }
}
