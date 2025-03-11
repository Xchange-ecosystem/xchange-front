import { Component } from '@angular/core';
import { CardMeasuresDirective } from 'projects/ngx-xchange-ui/src/directives/card-measures/card-measures.directive';
import {CommunityCardsComponent} from 'projects/ngx-xchange-ui/src/components/community-cards/community-cards.component';
@Component({
  selector: 'app-community',
  standalone: true,
  imports: [CardMeasuresDirective,CommunityCardsComponent],
  templateUrl: './community.component.html',
  styleUrl: './community.component.scss'
})
export class CommunityComponent {

}
