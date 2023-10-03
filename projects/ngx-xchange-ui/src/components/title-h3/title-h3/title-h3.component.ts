import { Component, Input } from '@angular/core';

@Component({
  selector: 'xc-title-h3',
  templateUrl: './title-h3.component.html',
  styleUrls: ['./title-h3.component.css']
})
export class TitleH3Component {
@Input()
titleContent: String;

constructor() {
  this.titleContent = ""
}
}
