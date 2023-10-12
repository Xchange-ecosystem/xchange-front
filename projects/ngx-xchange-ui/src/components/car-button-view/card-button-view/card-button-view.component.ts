import { Component, Input } from '@angular/core';

@Component({
  selector: 'xc-card-button-view',
  templateUrl: './card-button-view.component.html',
  styleUrls: ['./card-button-view.component.css']
})
export class CardButtonViewComponent {

  @Input()
  icon: String

  constructor(){
    this.icon = ""
  }

}
