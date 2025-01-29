import { Component, Input } from '@angular/core';

@Component({
    selector: 'xc-project-progress-bar',
    templateUrl: './project-progress-bar.component.html',
    styleUrls: ['./project-progress-bar.component.css'],
    standalone: false
})
export class ProjectProgressBarComponent {
  @Input() completed: number = 0;
  @Input() objectivesInProject: number = 0;
  @Input() open: number = 0;
  @Input() showMarkers: boolean = false;

  public mouseMarkersActionComplete: boolean = false;
  public mouseMarkersActionOpen: boolean = false;
  public mouseMarkersActionObjectives: boolean = false;

  getSize(amount: number, total:number): string{
    return String((100 / total ) * amount ) + '%'
  }
  getCompleteClass(objectives: number, completeObjectives: number){
    return completeObjectives === objectives ? 
    "bg-Main_accent rounded-lg h-full" :
    "bg-Second_accent rounded-l-lg h-full"
  }
  getOpenClass(objectives: number, completeObjectives: number){
    return completeObjectives === objectives ? 
    "bg-Second_accent rounded-lg h-full" :
    "bg-Quaternary_Fonts rounded-l-lg h-full"
  }
  getTotalClass(objectivesOpen: number, objectivesComplete: number){
    return objectivesOpen === 0 && objectivesComplete === 0 ? 
    "bg-Quaternary_Fonts rounded-lg h-full flex items-center justify-center":
    "bg-Quaternary_Fonts rounded-e-lg h-full flex items-center justify-center"
  }

}
