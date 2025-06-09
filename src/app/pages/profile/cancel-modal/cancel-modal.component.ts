import { Component , EventEmitter, Output } from '@angular/core';
import { XcIconCloseSComponent } from 'projects/ngx-xchange-icons/src/public-api';

@Component({
  selector: 'app-cancel-modal',
  imports: [
    XcIconCloseSComponent
  ],
  standalone: true,
  templateUrl: './cancel-modal.component.html',
  styleUrl: './cancel-modal.component.scss'
})
export class CancelModalComponent {
 @Output() close:EventEmitter<boolean> = new EventEmitter<boolean>();

 closeModal() {
  this.close.emit()
 }
}
