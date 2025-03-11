import { Component } from '@angular/core';
import {CommunityCardsComponent} from 'projects/ngx-xchange-ui/src/components/community-cards/community-cards.component';
@Component({
  selector: 'app-community',
  standalone: true,
  imports: [CommunityCardsComponent],
  templateUrl: './community.component.html',
  styleUrl: './community.component.scss'
})
export class CommunityComponent {

}
