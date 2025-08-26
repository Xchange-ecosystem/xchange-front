import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import {
  CompleteObjectiveUserCardModule,
  NavigatorFilterSelectorModule,
  NavigatorObjectiveStatusFilterModule,
  NavigatorRangeFilterModule,
  NavigatorUsersFilterModule,
} from '@xchange-ecosystem/ngx-xchange-ui';
export interface Collaborator {
  id: number;
  name: string;
}
@Component({
  selector: 'app-project-navigator',
  standalone: true,
  imports: [
    NavigatorFilterSelectorModule,
    NavigatorUsersFilterModule,
    NavigatorObjectiveStatusFilterModule,
    NavigatorRangeFilterModule,
    CompleteObjectiveUserCardModule,
    NgFor
  ],
  templateUrl: './project-navigator.component.html',
  styleUrl: './project-navigator.component.scss',
})
export class ProjectNavigatorComponent {
  
}
