import { Component, EventEmitter, Output } from '@angular/core';
import { XcIconCloseSComponent } from '@xchange-ecosystem/ngx-xchange-icons';

@Component({
  selector: 'app-description-modal',
  standalone: true,
  imports: [
    XcIconCloseSComponent
  ],
  templateUrl: './description-modal.component.html',
  styleUrl: './description-modal.component.scss'
})
export class DescriptionModalComponent {
  @Output() close = new EventEmitter<void>();

  closeDescriptionModal() {
    this.close.emit() ;
  }
}
