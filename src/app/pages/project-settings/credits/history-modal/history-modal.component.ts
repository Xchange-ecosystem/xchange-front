import { Component, EventEmitter, Output } from '@angular/core';
import { XcIconArrowRightComponent, XcIconCloseSComponent } from '@xchange-ecosystem/ngx-xchange-icons';

@Component({
  selector: 'app-history-modal',
  standalone: true,
  imports: [
    XcIconArrowRightComponent,
    XcIconCloseSComponent
  ],
  templateUrl: './history-modal.component.html',
  styleUrl: './history-modal.component.scss'
})
export class HistoryModalComponent {
  @Output() close = new EventEmitter<void>();

  closeHistoryModal() {
    this.close.emit() ;
  }
}
