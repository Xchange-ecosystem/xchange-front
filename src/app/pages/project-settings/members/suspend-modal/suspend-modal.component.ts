import { Component, EventEmitter, Output } from '@angular/core';
import { XcIconBanComponent, XcIconSendComponent, XcIconTimesComponent } from '@indziaki/ngx-xchange-icons';

@Component({
  selector: 'app-suspend-modal',
  standalone: true,
  imports: [
    XcIconBanComponent,
    XcIconTimesComponent,
    XcIconSendComponent
  ],
  templateUrl: './suspend-modal.component.html',
  styleUrl: './suspend-modal.component.scss'
})
export class SuspendModalComponent {
  @Output() close = new EventEmitter<void>();

    onClose(): void {
    this.close.emit(); 
  }
}
