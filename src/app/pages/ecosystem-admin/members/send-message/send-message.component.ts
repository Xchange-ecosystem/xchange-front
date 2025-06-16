import { Component, Output, EventEmitter } from '@angular/core';
import { XcIconSaveComponent, XcIconSendComponent, XcIconTimesComponent } from '@indziaki/ngx-xchange-icons';

@Component({
  selector: 'app-send-message',
  standalone: true,
  imports: [
    XcIconTimesComponent,
    XcIconSendComponent
  ],
  templateUrl: './send-message.component.html',
  styleUrl: './send-message.component.scss'
})
export class SendMessageComponent {
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }
}
