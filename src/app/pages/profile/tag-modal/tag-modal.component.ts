import { Component, EventEmitter, Output } from '@angular/core';
import { XcIconAIComponent, XcIconCheckCircleComponent, XcIconPlugComponent, XcIconPlusCircleComponent } from '@indziaki/ngx-xchange-icons';
import { XcIconCloseSComponent } from 'projects/ngx-xchange-icons/src/public-api';

@Component({
  selector: 'app-tag-modal',
  imports: [
    XcIconCloseSComponent,
    XcIconCheckCircleComponent,
    XcIconPlusCircleComponent,
    XcIconAIComponent
  ],
  standalone:true,
  templateUrl: './tag-modal.component.html',
  styleUrl: './tag-modal.component.scss'
})
export class TagModalComponent {
  @Output() close: EventEmitter<boolean> = new EventEmitter<boolean>()
  
  closeTags() {
    this.close.emit()
  }
}
