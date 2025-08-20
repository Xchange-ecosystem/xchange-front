import { Component, EventEmitter, Output } from '@angular/core';
import { XcIconTimesComponent, XcIconTrashComponent } from '@xchange-ecosystem/ngx-xchange-icons';

@Component({
  selector: 'app-suspend-modal',
  standalone: true,
  imports: [
    XcIconTimesComponent,
    XcIconTrashComponent
  ],
  templateUrl: './suspend-modal.component.html',
  styleUrl: './suspend-modal.component.scss'
})
export class SuspendModalComponent {
  @Output() close = new EventEmitter<void>();

  closeSuspendModal () {
    this.close.emit(); 
  }
}
