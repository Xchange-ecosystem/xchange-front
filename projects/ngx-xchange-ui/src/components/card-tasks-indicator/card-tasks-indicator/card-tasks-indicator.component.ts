import { Component, Input } from '@angular/core';

@Component({
  selector: 'xc-card-tasks-indicator',
  templateUrl: './card-tasks-indicator.component.html',
  styleUrls: ['./card-tasks-indicator.component.css']
})
export class CardTasksIndicatorComponent {
  @Input()
  completeTasks: Number;
  @Input()
  tasks: Number;


  constructor() {
    this.completeTasks = 0;
    this.tasks = 0;
  }

}
