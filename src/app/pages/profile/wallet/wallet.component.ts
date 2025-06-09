import { Component } from '@angular/core';
import { ProfileTagsDirective } from 'projects/ngx-xchange-ui/src/public-api';

@Component({
  selector: 'app-wallet',
  imports: [
    ProfileTagsDirective
  ],
  standalone:true,
  templateUrl: './wallet.component.html',
  styleUrl: './wallet.component.scss'
})
export class WalletComponent {

}
