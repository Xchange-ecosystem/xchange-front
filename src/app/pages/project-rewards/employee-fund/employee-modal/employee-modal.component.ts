import { Component } from '@angular/core';
import { XcIconSaveComponent, XcIconTimesComponent } from '@indziaki/ngx-xchange-icons';

@Component({
  selector: 'app-employee-modal',
  standalone: true,
  imports: [
    XcIconTimesComponent,
    XcIconSaveComponent
  ],
  templateUrl: './employee-modal.component.html',
  styleUrl: './employee-modal.component.scss'
})
export class EmployeeModalComponent {

}
