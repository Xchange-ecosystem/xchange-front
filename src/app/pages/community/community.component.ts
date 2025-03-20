import { Component } from '@angular/core';
import { CommunityCardsComponent } from 'projects/ngx-xchange-ui/src/components/community-cards/community-cards.component';
import { NewAsideNavComponent } from 'projects/ngx-xchange-ui/src/components/new-aside-nav/new-aside-nav.component';
import { SortByComponent } from 'projects/ngx-xchange-ui/src/components/sort-by/sort-by.component';
import { UserHeaderComponent } from 'projects/ngx-xchange-ui/src/components/user-header/user-header.component';
import { ChatTextComponent } from 'projects/ngx-xchange-ui/src/components/chat-text/chat-text.component';
import { ChatOptionsButtonComponent } from 'projects/ngx-xchange-ui/src/components/chat-options-button/chat-options-button.component';
import { Button400Module, Button500Module } from '@indziaki/ngx-xchange-ui';
import { FeedButtonsComponent } from 'projects/ngx-xchange-ui/src/components/feed-buttons/feed-buttons.component';
@Component({
  selector: 'app-community',
  standalone: true,
  imports: [
    CommunityCardsComponent,
    NewAsideNavComponent,
    SortByComponent,
    UserHeaderComponent,
    ChatOptionsButtonComponent,
    Button500Module,
    Button400Module,
    FeedButtonsComponent,
  ],
  templateUrl: './community.component.html',
  styleUrl: './community.component.scss',
})
export class CommunityComponent {}
