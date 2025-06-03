import { Component } from '@angular/core';
import { XcIconCheckCircleComponent, XcIconStarComponent } from 'projects/ngx-xchange-icons/src/public-api';
import { CopyStylesDirective, ButtonsWrappersDirective, HeadlineStylesDirective } from 'projects/ngx-xchange-ui/src/public-api';

@Component({
  selector: 'app-premium-upgrade',
  standalone:true,
  imports: [
    CopyStylesDirective,
    ButtonsWrappersDirective,
    HeadlineStylesDirective,
    XcIconCheckCircleComponent,
    XcIconStarComponent
  ],
  templateUrl: './premium-upgrade.component.html',
  styleUrl: './premium-upgrade.component.scss'
})
export class PremiumUpgradeComponent {

}
