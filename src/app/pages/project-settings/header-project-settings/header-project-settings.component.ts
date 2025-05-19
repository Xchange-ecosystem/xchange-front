import { Component } from '@angular/core';
import { OptionTabsComponent } from './option-tabs/option-tabs.component';

@Component({
  selector: 'app-header-project-settings',
  standalone: true,
  imports: [
    OptionTabsComponent
  ],
  templateUrl: './header-project-settings.component.html',
  styleUrl: './header-project-settings.component.scss'
})
export class HeaderProjectSettingsComponent {

}
