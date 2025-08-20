import { Component } from '@angular/core';
import { CommunityCardsComponent } from 'projects/ngx-xchange-ui/src/components/community-cards/community-cards.component';
import { SortByComponent } from 'projects/ngx-xchange-ui/src/components/sort-by/sort-by.component';
import { Button400Module, Button500Module } from '@xchange-ecosystem/ngx-xchange-ui';
import { Headline600Directive } from 'projects/ngx-xchange-ui/src/directives/headline-600/headline-600.directive';

@Component({
  selector: 'app-community',
  standalone: true,
  imports: [
    CommunityCardsComponent,
    SortByComponent,
    Button500Module,
    Button400Module,
    Headline600Directive
  ],
  templateUrl: './community.component.html',
  styleUrl: './community.component.scss',
})
export class CommunityComponent {

}
