import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'xc-card-button-view',
  templateUrl: './card-button-view.component.html',
  styleUrls: ['./card-button-view.component.css']
})
export class CardButtonViewComponent {

  @Input()
  description: String
  @Input()
  width: string | null;

  constructor(){
    this.description = ""
    this.width = '120'
  }

  getWidth(){
    return this.width!? this.width : '120'
  }

}
