import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
type Goal =  {
  id: string,
  name: string,
  description: string,
  objectiveIds: string[],
  objectiveCatalogIds: number[],
  startDate: string,
  endDate: string,
  projectId: string,
  createdAt: string,
  userId: number,
  isComplete: true,
  objectiveCount: number
}

@Component({
  selector: 'xc-navigator-goals-filter',
  standalone: false,
  templateUrl: './navigator-goals-filter.component.html',
  styleUrl: './navigator-goals-filter.component.css'
})
export class NavigatorGoalsFilterComponent {
  @Input() goals: Goal[] = [];
  @Input() isVisible: boolean = false;
  @Input() selectedGoal: number = 0;
  @Output()  changeIsVisible = new EventEmitter<boolean>
  @Output() changeSelectedGoal = new EventEmitter<number>();
}
