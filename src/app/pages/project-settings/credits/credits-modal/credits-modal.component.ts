import { Component, EventEmitter, Output } from '@angular/core';
import {
  XcIconShoppingCartComponent,
  XcIconTimesComponent,
} from '@xchange-ecosystem/ngx-xchange-icons';

@Component({
  selector: 'app-credits-modal',
  standalone: true,
  imports: [XcIconShoppingCartComponent, XcIconTimesComponent],
  templateUrl: './credits-modal.component.html',
  styleUrl: './credits-modal.component.scss',
})
export class CreditsModalComponent {
  @Output() close = new EventEmitter<void>();

  closeBuyCredits() {
    this.close.emit();
  }
}
