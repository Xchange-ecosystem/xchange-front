import { Component, Input } from '@angular/core';

@Component({
  selector: 'xc-project-progress-bar',
  templateUrl: './project-progress-bar.component.html',
  styleUrls: ['./project-progress-bar.component.css'],
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
    return String((100 / total) * amount) + '%';
  }

  // --xc-categories-progress: #FAE651;
  // --xc-categories-suggestion: #AF71F1;
  // --xc-categories-completed: #1ccd66;
  // --xc-grey200: #DBE0DC;
  // bg-[var(--xc-grey200)]
  getCompleteClass() {
    return this.completed !== this.objectivesInProject
      ? 'rounded-e-lg'
      : 'rounded-lg';
  }
  getOpenClass(objectives: number, completeObjectives: number) {
    const rightSideColor = this.completed > 0 ? 'bg-Main_accent' : '';
    const isRound =
      this.completed + this.open + this.suggested == this.objectivesInProject
        ? 'rounded-lg'
        : '';
    return completeObjectives === objectives
      ? `${rightSideColor} ${isRound} h-full`
      : `${rightSideColor} ${isRound}  h-full`;
  }

  get SuggestedClass() {
    return this.suggested && this.completed > 0 && this.open === 0 ?
    "bg-Main_accent h-full" :
    this.suggested && this.open > 0 ?
    "bg-[var(--xc-categories-progress)]  h-full" :
    ''
  }
  getTotalClass(objectivesOpen: number, objectivesComplete: number) {
    return objectivesOpen === 0 && objectivesComplete === 0 && this.suggested === 0
      ? 'bg-[var(--xc-grey200)] rounded-lg h-full flex items-center justify-center'
      : this.suggested > 0
      ? 'bg-[var(--xc-categories-suggestion)] rounded-s-lg h-full flex items-center justify-center'
      : objectivesOpen === 0 && objectivesComplete > 0 && this.suggested === 0
      ? 'bg-Main_accent rounded-s-lg h-full flex items-center justify-center'
      : objectivesOpen > 0 && this.suggested === 0
      ? 'bg-[var(--xc-categories-progress)] rounded-s-lg h-full flex items-center justify-center'
      : '';
  }
}
