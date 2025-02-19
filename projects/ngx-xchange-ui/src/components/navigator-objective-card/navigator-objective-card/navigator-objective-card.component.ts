import { Component, Input } from '@angular/core';

type ObjectiveCardInformation = {
  objectiveName: string;
  totalTasks: number;
  tasksCompleted: number;
  proofsCount: number;
  startDate: string;
  status: Status
}

type Status = 'new' |'completed' | 'open' | 'suggested'

@Component({
  selector: 'xc-navigator-objective-card',
  templateUrl: './navigator-objective-card.component.html',
  styleUrl: './navigator-objective-card.component.css'
})

export class NavigatorObjectiveCardComponent {

  @Input() objectiveInformation: ObjectiveCardInformation = {
    objectiveName: '',
    totalTasks: 0,
    tasksCompleted: 0,
    proofsCount: 0,
    startDate: '',
    status: 'new'
  }

  selectObjectiveCardColor(status: Status){
    const colorObjectiveStatusOption = {
      'open':'bg-[var(--xc-categories-progress)]' ,
      'completed':'bg-[var(--xc-categories-completed)]',
      'suggested':'bg-[var(--xc-categories-suggestion)]',
      'new':'bg-[var(--xc-grey200)]',
    }
    return  colorObjectiveStatusOption[status];
  }  

}
