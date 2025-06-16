import { Component, Output, EventEmitter } from '@angular/core';
import { XcIconSaveComponent, XcIconTimesComponent } from '@indziaki/ngx-xchange-icons';

@Component({
  selector: 'app-set-password',
  standalone: true,
  imports: [
    XcIconTimesComponent,
    XcIconSaveComponent
  ],
  templateUrl: './set-password.component.html',
  styleUrl: './set-password.component.scss'
})
export class SetPasswordComponent {
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }
}
