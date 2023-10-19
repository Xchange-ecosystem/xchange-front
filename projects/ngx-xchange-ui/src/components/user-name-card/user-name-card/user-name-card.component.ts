import { Component, Input } from '@angular/core';

@Component({
  selector: 'xc-user-name-card',
  templateUrl: './user-name-card.component.html',
  styleUrls: ['./user-name-card.component.css']
})
export class UserNameCardComponent {
  @Input()
  name: String
  @Input ()
  lastname: String

  constructor () {
    this.name = "";
    this.lastname = "";
  }

}
