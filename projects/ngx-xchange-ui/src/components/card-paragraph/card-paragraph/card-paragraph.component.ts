import { Component, Input } from '@angular/core';

@Component({
  selector: 'xc-card-paragraph',
  templateUrl: './card-paragraph.component.html',
  styleUrls: ['./card-paragraph.component.css']
})
export class CardParagraphComponent {
@Input()
titleContent: string;

constructor(){
  this.titleContent = "";
}
}
