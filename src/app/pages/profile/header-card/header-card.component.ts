import { Component } from '@angular/core';
import { HeaderTitleComponent } from 'projects/ngx-xchange-ui/src/components/header-title/header-title.component';
import { InfoRowComponent } from 'projects/ngx-xchange-ui/src/components/info-row/info-row.component';

@Component({
  selector: 'app-header-card',
  standalone: true,
  imports: [HeaderTitleComponent, InfoRowComponent],
  templateUrl: './header-card.component.html',
  styleUrl: './header-card.component.scss'
})
export class HeaderCardComponent {
  onEditHeader(): void {
  }
}
