import { NgIf } from '@angular/common';
import { Component, HostListener, } from '@angular/core';
import {
  XcIconAIComponent,
  XcIconClipboardComponent,
  XcIconHomeComponent,
  XcIconMicrophoneComponent,
  XcIconRedoComponent,
  XcIconSendComponent,
} from '@indziaki/ngx-xchange-icons';
import { AiFilterComponent } from 'projects/ngx-xchange-ui/src/components/ai-filter/ai-filter.component';
import { ChatOptionsButtonComponent } from 'projects/ngx-xchange-ui/src/components/chat-options-button/chat-options-button.component';
import { FeedObjectiveComponent } from 'projects/ngx-xchange-ui/src/components/feed-objective/feed-objective.component';
import { UserHeaderComponent } from 'projects/ngx-xchange-ui/src/components/user-header/user-header.component';
import { Button400Directive } from 'projects/ngx-xchange-ui/src/directives/button-400/button-400.directive';
import { Button500Directive } from 'projects/ngx-xchange-ui/src/directives/button-500/button-500.directive';
import { CardStylesDirective } from 'projects/ngx-xchange-ui/src/directives/card-styles/card-styles.directive';
import { FeedButtonDirective } from 'projects/ngx-xchange-ui/src/directives/feed-button/feed-button.directive';
import { HeadlineStylesDirective } from 'projects/ngx-xchange-ui/src/directives/headline-styles/headline-styles.directive';
import { NotificationBubbleDirective } from 'projects/ngx-xchange-ui/src/directives/notification-bubble/notification-bubble.directive';
import { ChatMessageComponent } from './chat-message/chat-message.component';
import { ButtonsWrappersDirective } from 'projects/ngx-xchange-ui/src/public-api';

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [
    UserHeaderComponent,
    ChatOptionsButtonComponent,
    FeedObjectiveComponent,
    AiFilterComponent,
    XcIconRedoComponent,
    CardStylesDirective,
    XcIconHomeComponent,
    XcIconAIComponent,
    Button400Directive,
    Button500Directive,
    NotificationBubbleDirective,
    FeedButtonDirective,
    XcIconSendComponent,
    XcIconMicrophoneComponent,
    XcIconClipboardComponent,
    NgIf,
    ButtonsWrappersDirective,
    HeadlineStylesDirective,
    ChatMessageComponent
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
