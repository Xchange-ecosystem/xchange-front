import { Component , Input } from '@angular/core';

@Component({
  selector: 'xc-card-insights',
  templateUrl: './card-insights.component.html',
  styleUrls: ['./card-insights.component.css']
})

export class CardInsightsComponent {
  @Input()
  insights: {
    completedObjectives: Number | null;
    activeObjectives: Number | null;
    suggestedNextSteps: Number | null;
    involvedProjects: Number | null;
  }
  @Input()
  imgSrc: string = "";

  constructor(){
    this.insights = {
      completedObjectives: 0,
      activeObjectives: 0,
      suggestedNextSteps: 0,
      involvedProjects: 0
    }
  }
}

export interface CardInsightsProps {
  amount: number
  name: string
}
