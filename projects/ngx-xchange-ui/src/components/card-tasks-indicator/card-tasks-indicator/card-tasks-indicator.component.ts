import { Component, Input } from '@angular/core';

@Component({
  selector: 'xc-card-tasks-indicator',
  templateUrl: './card-tasks-indicator.component.html',
  styleUrls: ['./card-tasks-indicator.component.css']
})
export class CardTasksIndicatorComponent {
  @Input()
  icon: String;
  @Input()
  content: String;


  constructor() {
    this.icon = "";
    this.content = "";
  }

}
