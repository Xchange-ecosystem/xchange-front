import { Component, EventEmitter, Output } from '@angular/core';
import { XcIconSendComponent, XcIconTimesComponent } from '@xchange-ecosystem/ngx-xchange-icons';

@Component({
  selector: 'app-message-modal',
  standalone: true,
  imports: [
    XcIconTimesComponent,
    XcIconSendComponent
  ],
  templateUrl: './message-modal.component.html',
  styleUrl: './message-modal.component.scss'
})
export class MessageModalComponent {
  @Output() close = new EventEmitter<void>();

    onClose(): void {
    this.close.emit(); 
  }
}
