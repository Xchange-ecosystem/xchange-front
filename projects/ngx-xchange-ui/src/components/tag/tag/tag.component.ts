import { Component, Input } from '@angular/core';
import { TagDirective } from 'projects/ngx-xchange-ui/src/directives/tag.directive';


@Component({
  selector: 'xc-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css'],
  viewProviders: [TagDirective]
})
export class TagComponent {
@Input()
tagContent : String;

constructor(){
  this.tagContent = ""
}
}
