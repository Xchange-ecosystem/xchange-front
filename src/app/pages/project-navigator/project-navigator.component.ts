import { Component } from '@angular/core';
import { NavigatorFilterSelectorModule,NavigatorObjectiveStatusFilterModule,NavigatorRangeFilterModule,NavigatorUsersFilterModule } from '@indziaki/ngx-xchange-ui';

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
  collaborator: any[] = [
    { id: 1, name: 'User 1' },
    { id: 2, name: 'User 2' },
    { id: 3, name: 'User 3' }
  ];
}
