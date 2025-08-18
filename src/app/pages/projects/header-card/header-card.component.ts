import { Component } from '@angular/core';
import { RoundedImageModule } from '@xchange-ecosystem/ngx-xchange-ui';
import { HeaderTitleComponent } from 'projects/ngx-xchange-ui/src/components/header-title/header-title.component';
import { CopyStylesDirective } from 'projects/ngx-xchange-ui/src/directives/copy-styles/copy-styles.directive';

@Component({
  selector: 'app-header-card',
  standalone: true,
  imports: [
    HeaderTitleComponent,
    RoundedImageModule,
    CopyStylesDirective
  ],
  templateUrl: './header-card.component.html',
  styleUrl: './header-card.component.scss'
})
export class HeaderCardComponent {

}
