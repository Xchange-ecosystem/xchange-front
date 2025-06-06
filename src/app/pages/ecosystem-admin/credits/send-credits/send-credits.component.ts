import { Component } from '@angular/core';
import { XcIconShoppingCartComponent, XcIconTimesComponent } from '@indziaki/ngx-xchange-icons';

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

}
