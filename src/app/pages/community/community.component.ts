import { Component } from '@angular/core';
import {CommunityCardsComponent} from 'projects/ngx-xchange-ui/src/components/community-cards/community-cards.component';
import { NewAsideNavComponent } from 'projects/ngx-xchange-ui/src/components/new-aside-nav/new-aside-nav.component';
@Component({
  selector: 'app-community',
  standalone: true,
  imports: [CommunityCardsComponent,
    NewAsideNavComponent
  ],
  templateUrl: './community.component.html',
  styleUrl: './community.component.scss'
})
export class CommunityComponent {

}
