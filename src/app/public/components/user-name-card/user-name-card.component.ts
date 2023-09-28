import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-name-card',
  templateUrl: './user-name-card.component.html',
})
export class UserNameCardComponent {
  @Input()
  name: String;
  @Input()
  lastName: String;
  
  constructor() {
    this.name = '';
    this.lastName = '';
  }
}
