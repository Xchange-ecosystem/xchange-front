import { Component } from '@angular/core';
import { HeaderTitleComponent } from 'projects/ngx-xchange-ui/src/components/header-title/header-title.component';
import { InfoRowComponent } from 'projects/ngx-xchange-ui/src/components/info-row/info-row.component';

@Component({
  selector: 'app-header-cards',
  standalone: true,
  imports: [InfoRowComponent,HeaderTitleComponent],
  templateUrl: './header-cards.component.html',
  styleUrl: './header-cards.component.scss'
})
export class HeaderCardsComponent {

}
