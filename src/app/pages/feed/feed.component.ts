import { Component } from '@angular/core';
import { XcIconAlignCenterVComponent, XcIconRedoComponent } from '@indziaki/ngx-xchange-icons';
import { AiFilterComponent } from 'projects/ngx-xchange-ui/src/components/ai-filter/ai-filter.component';
import { ChatOptionsButtonComponent } from 'projects/ngx-xchange-ui/src/components/chat-options-button/chat-options-button.component';
import { FeedButtonsComponent } from 'projects/ngx-xchange-ui/src/components/feed-buttons/feed-buttons.component';
import { FeedObjectiveComponent } from 'projects/ngx-xchange-ui/src/components/feed-objective/feed-objective.component';
import { NewButton400Component } from 'projects/ngx-xchange-ui/src/components/new-button-400/new-button-400.component';
import { NewButton500Component } from 'projects/ngx-xchange-ui/src/components/new-button-500/new-button-500.component';
import { UserHeaderComponent } from 'projects/ngx-xchange-ui/src/components/user-header/user-header.component';

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [
    UserHeaderComponent,
    ChatOptionsButtonComponent,
    NewButton500Component,
    NewButton400Component,
    FeedObjectiveComponent,
    AiFilterComponent,
    XcIconRedoComponent,
    FeedButtonsComponent,
    XcIconAlignCenterVComponent
  ],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss',
})
export class FeedComponent {
  isSidebarHidden = true;
  toggleSidebar() {
    this.isSidebarHidden = !this.isSidebarHidden;
  }
}
