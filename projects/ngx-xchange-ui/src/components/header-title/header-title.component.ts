import { Component, EventEmitter, Input, Output } from '@angular/core';
import { XcIconEditComponent } from '@indziaki/ngx-xchange-icons';

@Component({
  selector: 'xc-header-title',
  standalone: true,
  imports: [XcIconEditComponent],
  templateUrl: './header-title.component.html',
  styleUrl: './header-title.component.css'
})
export class HeaderTitleComponent {
  @Input() title: string = '';
  @Output() editClicked: EventEmitter<void> = new EventEmitter<void>();

  onEditClick(): void {
    this.editClicked.emit();
  }
}
