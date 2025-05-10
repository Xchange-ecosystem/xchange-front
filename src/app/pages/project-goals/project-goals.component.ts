import { Component } from '@angular/core';
import { XcIconPlusComponent } from '@indziaki/ngx-xchange-icons';
import { GoalsDropdownComponent } from './goals-dropdown/goals-dropdown.component';

@Component({
  selector: 'app-project-goals',
  standalone: true,
  imports: [
    XcIconPlusComponent,
    GoalsDropdownComponent
  ],
  templateUrl: './project-goals.component.html',
  styleUrl: './project-goals.component.scss'
})
export class ProjectGoalsComponent {

}
