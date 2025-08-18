import { Component } from '@angular/core';
import { NavigatorFilterSelectorModule,NavigatorObjectiveStatusFilterModule,NavigatorRangeFilterModule,NavigatorUsersFilterModule } from '@xchange-ecosystem/ngx-xchange-ui';
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
    NavigatorRangeFilterModule
  ],
  templateUrl: './project-navigator.component.html',
  styleUrl: './project-navigator.component.scss'
})
export class ProjectNavigatorComponent {
  collaborator: Collaborator[] = [
    { id: 1, name: 'User 1' },
    { id: 2, name: 'User 2' },
    { id: 3, name: 'User 3' }
  ];
}
