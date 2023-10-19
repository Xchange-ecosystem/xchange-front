import { Component, Input } from '@angular/core';

@Component({
  selector: 'xc-tag-component',
  templateUrl: './tag-component.component.html',
  styleUrls: ['./tag-component.component.css']
})
export class TagComponentComponent {
  
  @Input()
  tagContent: String;

  constructor() {
    this.tagContent = '';
  }

}
