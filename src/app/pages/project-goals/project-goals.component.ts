import { Component } from '@angular/core';
import { XcIconPlusComponent } from '@xchange-ecosystem/ngx-xchange-icons';
import { GoalsDropdownComponent } from './goals-dropdown/goals-dropdown.component';
import { NgIf } from '@angular/common';
import { NewGoalModalComponent } from './new-goal-modal/new-goal-modal.component';

@Component({
  selector: 'app-project-goals',
  standalone: true,
  imports: [
    NgIf,
    XcIconPlusComponent,
    GoalsDropdownComponent,
    NewGoalModalComponent
  ],
  templateUrl: './project-goals.component.html',
  styleUrl: './project-goals.component.scss'
})
export class ProjectGoalsComponent {
  isNewGoal = false;

  openNewGoalModal() {
    this.isNewGoal = true;
  }
  handleNewGoalModalClose() {
    this.isNewGoal = false;
  }
}
