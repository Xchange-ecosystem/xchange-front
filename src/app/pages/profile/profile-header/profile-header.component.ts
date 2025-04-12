import { Component } from '@angular/core';
import { RoundedImageModule } from '@indziaki/ngx-xchange-ui';
import { SectionTabComponent } from 'projects/ngx-xchange-ui/src/components/section-tab/section-tab.component';
import { HeaderCardComponent } from '../header-card/header-card.component';
import { HeaderBackgroundComponent } from 'projects/ngx-xchange-ui/src/components/header-background/header-background.component';

@Component({
  selector: 'app-profile-header',
  standalone: true,
  imports: [RoundedImageModule,SectionTabComponent,HeaderCardComponent,HeaderBackgroundComponent],
  templateUrl: './profile-header.component.html',
  styleUrl: './profile-header.component.scss'
})
export class ProfileHeaderComponent {
  sections = [
    { name: 'Apperance', hasNotifications: false },
    { name: 'Wallet', hasNotifications: true },
    { name: 'Premium upgrade', hasNotifications: false },
    { name: 'Premium settings', hasNotifications: false }
  ];
}
