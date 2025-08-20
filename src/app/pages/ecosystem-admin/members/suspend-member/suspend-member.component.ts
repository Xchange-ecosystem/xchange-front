import { Component, Output, EventEmitter } from '@angular/core';
import { XcIconBanComponent, XcIconTimesComponent } from '@xchange-ecosystem/ngx-xchange-icons';

@Component({
  selector: 'app-suspend-member',
  standalone: true,
  imports: [
    XcIconTimesComponent,
    XcIconBanComponent
  ],
  templateUrl: './suspend-member.component.html',
  styleUrl: './suspend-member.component.scss'
})
export class SuspendMemberComponent {
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }
}
