import { Component } from '@angular/core';
import {CommunityCardsComponent} from 'projects/ngx-xchange-ui/src/components/community-cards/community-cards.component';
import { NewAsideNavComponent } from 'projects/ngx-xchange-ui/src/components/new-aside-nav/new-aside-nav.component';
import { SortByComponent } from 'projects/ngx-xchange-ui/src/components/sort-by/sort-by.component';
import { UserHeaderComponent } from 'projects/ngx-xchange-ui/src/components/user-header/user-header.component';
import { ChatTextComponent } from 'projects/ngx-xchange-ui/src/components/chat-text/chat-text.component'
@Component({
  selector: 'app-community',
  standalone: true,
  imports: [ChatTextComponent,CommunityCardsComponent,NewAsideNavComponent,SortByComponent,UserHeaderComponent],
  templateUrl: './community.component.html',
  styleUrl: './community.component.scss'
})
export class CommunityComponent {

}
