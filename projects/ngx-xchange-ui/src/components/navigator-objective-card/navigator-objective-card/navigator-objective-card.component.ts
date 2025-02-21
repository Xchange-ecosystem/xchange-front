import { Component, Input } from '@angular/core';

type ObjectiveCardInformation = {
  name: string;
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
    name: '',
    totalTasks: 0,
    tasksCompleted: 0,
    proofsCount: 0,
    startDate: '',
    
    status: 'new'
  }

  selectObjectiveCardColor(status: Status){
    const colorObjectiveStatusOption = {
      'open':'border-[var(--xc-categories-progress)]' ,
      'completed':'border-[var(--xc-categories-completed)]',
      'suggested':'border-[var(--xc-categories-suggestion)]',
      'new':'border-[var(--xc-grey200)]',
    }
    return  colorObjectiveStatusOption[status];
  }  

}
