 import { Component } from '@angular/core';
import { XcIconSaveComponent, XcIconTimesComponent } from '@xchange-ecosystem/ngx-xchange-icons';

@Component({
  selector: 'app-collaboration-modal',
  standalone: true,
  imports: [
    XcIconTimesComponent,
    XcIconSaveComponent
  ],
  templateUrl: './collaboration-modal.component.html',
  styleUrl: './collaboration-modal.component.scss'
})
export class CollaborationModalComponent {

}
