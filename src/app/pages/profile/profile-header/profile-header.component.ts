import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  allSections = [
    { name: 'Apperance', hasNotifications: false },
    { name: 'Wallet', hasNotifications: false },
    { name: 'Premium upgrade', hasNotifications: false },
    { name: 'Premium settings', hasNotifications: false }
  ];

  @Input() isPremium = false;
  
  get sections() {
    return this.allSections.filter(s => {
      if (s.name === 'Premium settings') {
        return this.isPremium;
      }
      if (s.name === 'Premium upgrade') {
        return !this.isPremium;
      }
      return true;
    });
  }

  onSectionSelected(section: string): void {
    this.sectionChanged.emit(section);
  }
}
