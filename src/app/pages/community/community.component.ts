import { Component } from '@angular/core';
import { CommunityCardsComponent } from 'projects/ngx-xchange-ui/src/components/community-cards/community-cards.component';
import { SortByComponent } from 'projects/ngx-xchange-ui/src/components/sort-by/sort-by.component';
import { Button400Module, Button500Module } from '@indziaki/ngx-xchange-ui';
import { ProfileHeaderDirective } from 'projects/ngx-xchange-ui/src/directives/profile-header/profile-header.directive';

@Component({
  selector: 'app-community',
  standalone: true,
  imports: [
    CommunityCardsComponent,
    SortByComponent,
    Button500Module,
    Button400Module,
    ProfileHeaderDirective
  ],
  templateUrl: './community.component.html',
  styleUrl: './community.component.scss',
})
export class CommunityComponent {

}
