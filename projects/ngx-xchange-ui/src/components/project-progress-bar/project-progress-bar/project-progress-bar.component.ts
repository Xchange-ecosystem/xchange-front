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

  getSize(amount: number, total:number): string{
    return String((100 / total ) * amount ) + '%'
  }
}
