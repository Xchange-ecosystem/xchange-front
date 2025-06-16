import { Component } from '@angular/core';
import { XcIconRedoComponent, XcIconSearchComponent } from '@indziaki/ngx-xchange-icons';

@Component({
  selector: 'app-tab-switch',
  standalone: true,
  imports: [
    XcIconRedoComponent,
    XcIconSearchComponent
  ],
  templateUrl: './tab-switch.component.html',
  styleUrl: './tab-switch.component.scss'
})
export class TabSwitchComponent {

}
