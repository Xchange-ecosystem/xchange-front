import { Component, EventEmitter, Output } from '@angular/core';
import { RoundedImageModule } from '@indziaki/ngx-xchange-ui';
import { SectionTabComponent } from 'projects/ngx-xchange-ui/src/components/section-tab/section-tab.component';
import { HeaderCardComponent } from '../header-card/header-card.component';
import { HeaderBackgroundComponent } from 'projects/ngx-xchange-ui/src/components/header-background/header-background.component';
import { EditImageComponent } from '../edit-image/edit-image.component';

@Component({
  selector: 'app-profile-header',
  standalone: true,
  imports: [
    RoundedImageModule,
    SectionTabComponent,
    HeaderCardComponent,
    HeaderBackgroundComponent,
    EditImageComponent
  ],
  templateUrl: './profile-header.component.html',
  styleUrl: './profile-header.component.scss'
})
export class ProfileHeaderComponent {
  @Output() sectionChanged: EventEmitter<string> = new EventEmitter<string>();

  sections = [
    { name: 'Apperance', hasNotifications: false },
    { name: 'Wallet', hasNotifications: false },
    { name: 'Premium upgrade', hasNotifications: false },
    { name: 'Premium settings', hasNotifications: false }
  ];

  onSectionSelected(section: string): void {
    this.sectionChanged.emit(section);
    console.log('Selected section:', section);
  }
}
