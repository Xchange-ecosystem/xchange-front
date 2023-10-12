import { Component, Input } from '@angular/core';

@Component({
  selector: 'xc-main-title',
  templateUrl: './main-title.component.html',
  styleUrls: ['./main-title.component.css']
})
export class MainTitleComponent {
  @Input()
  content: String

  constructor() {
    this.content = '';
  }
}
