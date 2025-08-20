import { Component, EventEmitter, Output } from '@angular/core';
import { XcIconShoppingCartComponent, XcIconTimesComponent } from '@xchange-ecosystem/ngx-xchange-icons';

@Component({
  selector: 'app-send-credits',
  standalone: true,
  imports: [
    XcIconTimesComponent,
    XcIconShoppingCartComponent
  ],
  templateUrl: './send-credits.component.html',
  styleUrl: './send-credits.component.scss'
})
export class SendCreditsComponent {
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }
}
