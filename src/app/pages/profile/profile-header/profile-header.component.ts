import { Component } from '@angular/core';
import { RoundedImageModule } from '@indziaki/ngx-xchange-ui';
import { SectionTabComponent } from 'projects/ngx-xchange-ui/src/components/section-tab/section-tab.component';

@Component({
  selector: 'app-profile-header',
  standalone: true,
  imports: [RoundedImageModule,SectionTabComponent],
  templateUrl: './profile-header.component.html',
  styleUrl: './profile-header.component.scss'
})
export class ProfileHeaderComponent {

}
