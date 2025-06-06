import { Component, EventEmitter, Output } from '@angular/core';
import { XcIconShoppingCartComponent, XcIconTimesComponent } from '@indziaki/ngx-xchange-icons';

@Component({
  selector: 'app-buy-credits',
  standalone: true,
  imports: [
    XcIconTimesComponent,
    XcIconShoppingCartComponent
  ],
  templateUrl: './buy-credits.component.html',
  styleUrl: './buy-credits.component.scss'
})
export class BuyCreditsComponent {
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }
}
