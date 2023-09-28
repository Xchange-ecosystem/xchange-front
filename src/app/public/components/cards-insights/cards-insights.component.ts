import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards-insights',
  templateUrl: './cards-insights.component.html',
  styleUrls: ['./cards-insights.component.scss']
})
export class CardsInsightsComponent {
  @Input()
  insights: {
    completedObjectives: Number;
    activeObjectives: Number;
    suggestedNextSteps: Number;
    involvedProjects: Number;
  }

  constructor(){
    this.insights = {
      completedObjectives: 0,
      activeObjectives: 0,
      suggestedNextSteps: 0,
      involvedProjects: 0
    }
  }
}
