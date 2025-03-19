import { Component } from '@angular/core';
import {CommunityCardsComponent} from 'projects/ngx-xchange-ui/src/components/community-cards/community-cards.component';
import { NewAsideNavComponent } from 'projects/ngx-xchange-ui/src/components/new-aside-nav/new-aside-nav.component';
import { SortByComponent } from 'projects/ngx-xchange-ui/src/components/sort-by/sort-by.component';
import { UserHeaderComponent } from 'projects/ngx-xchange-ui/src/components/user-header/user-header.component';
import { UserProfileModalComponent } from 'projects/ngx-xchange-ui/src/components/user-profile-modal/user-profile-modal.component';

@Component({
  selector: 'app-community',
  standalone: true,
  imports: [CommunityCardsComponent,NewAsideNavComponent,SortByComponent,UserHeaderComponent],
  templateUrl: './community.component.html',
  styleUrl: './community.component.scss'
})
export class CommunityComponent {

}
