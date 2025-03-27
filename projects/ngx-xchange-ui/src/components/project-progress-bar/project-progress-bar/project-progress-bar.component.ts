import { Component, Input } from '@angular/core';

@Component({
  selector: 'xc-project-progress-bar',
  templateUrl: './project-progress-bar.component.html',
  styleUrls: ['./project-progress-bar.component.css']
})
export class ProjectProgressBarComponent {
  @Input() completed: number = 0;
  @Input() objectivesInProject: number = 0;
  @Input() open: number = 0;
  @Input() suggested: number = 0;
  @Input() showMarkers: boolean = false;

  public mouseMarkersActionComplete: boolean = false;
  public mouseMarkersActionOpen: boolean = false;
  public mouseMarkersActionObjectives: boolean = false;

  getSize(amount: number, total: number): string {
    return String((100 / total ) * amount ) + '%'
  }

      // --xc-categories-progress: #FAE651; 
    // --xc-categories-suggestion: #AF71F1;
    // --xc-categories-completed: #1ccd66;
    // --xc-grey200: #DBE0DC;
    // bg-[var(--xc-grey200)]
  get getCompleteClass() {
    
    let  rigthSideColor = 'bg-[var(--xc-grey200)]'
    if (this.open > 0) 
      rigthSideColor = 'bg-[var(--xc-categories-progress)]'
    else if (this.suggested > 0) 
      rigthSideColor = 'bg-[var(--xc-categories-suggestion)]'
    const isRound = (this.completed !== this.objectivesInProject) ? '': ''
   return `${rigthSideColor} ${isRound} h-full rounded-l-full ` 
  }
  getOpenClass(objectives: number, completeObjectives: number){
    const rigthSideColor = this.suggested > 0 ? 'bg-[var(--xc-categories-suggestion)]': 'bg-[var(--xc-grey200)]'
    const isRound = ((this.completed + this.open + this.suggested) === this.objectivesInProject) ? 'rounded-lg':''
    return completeObjectives === objectives ? 
    `${rigthSideColor} ${isRound} h-full` :
    `${rigthSideColor} rounded-l-lg h-full`
  }

  get SuggestedClass() {
    if(this.suggested > 0) 
      return 'bg-[var(--xc-grey200)]'
    else return ''
    // return this.objectivesInProject === this.suggested ? 
    // "bg-Second_accent rounded-lg h-full" :
    // "bg-Suggestion  rounded-l-lg h-full"
  }
  getTotalClass(objectivesOpen: number, objectivesComplete: number) {
    return objectivesOpen === 0 && objectivesComplete && this.suggested === 0 ? 
    "bg-[var(--xc-grey200)] rounded-lg h-full flex items-center justify-center":
    "bg-[var(--xc-grey200)] rounded-e-lg h-full flex items-center justify-center"
  }

}
