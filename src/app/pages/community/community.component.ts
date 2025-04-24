import { Component } from '@angular/core';
import { CommunityCardsComponent } from 'projects/ngx-xchange-ui/src/components/community-cards/community-cards.component';
import { SortByComponent } from 'projects/ngx-xchange-ui/src/components/sort-by/sort-by.component';
import { Button400Module, Button500Module, HeadlineStylesDirective } from '@indziaki/ngx-xchange-ui';

@Component({
  selector: 'app-community',
  standalone: true,
  imports: [
    CommunityCardsComponent,
    SortByComponent,
    Button500Module,
    Button400Module,
    HeadlineStylesDirective
  ],
  templateUrl: './community.component.html',
  styleUrl: './community.component.scss',
})
export class CommunityComponent {

}
