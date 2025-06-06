import { Component, Output, EventEmitter } from '@angular/core';
import { XcIconSaveComponent, XcIconTimesComponent } from '@indziaki/ngx-xchange-icons';

@Component({
  selector: 'app-edit-member',
  standalone: true,
  imports: [
    XcIconTimesComponent,
    XcIconSaveComponent
  ],
  templateUrl: './edit-member.component.html',
  styleUrl: './edit-member.component.scss'
})
export class EditMemberComponent {
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }
}
