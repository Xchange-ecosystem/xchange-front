import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { XcIconArrowUpRightComponent, XcIconUserPlusComponent, XcIconUserXComponent } from '@indziaki/ngx-xchange-icons';
import { RoundedImageModule } from '@indziaki/ngx-xchange-ui';
import { EmployeeModalComponent } from './employee-modal/employee-modal.component';
import { SuspendModalComponent } from './suspend-modal/suspend-modal.component';

@Component({
  selector: 'app-employee-fund',
  standalone: true,
  imports: [
    RoundedImageModule,
        XcIconArrowUpRightComponent,
        XcIconUserPlusComponent,
        XcIconUserXComponent,
        EmployeeModalComponent,
        SuspendModalComponent,
        NgIf,
        NgClass
  ],
  templateUrl: './employee-fund.component.html',
  styleUrl: './employee-fund.component.scss'
})
export class EmployeeFundComponent {
  isOpen = false;
  isFundReserve = false;
  isSuspendOpen = false;

  toggleDropdown () {
    this.isOpen = !this.isOpen;
  }

  openSuspendModal () {
    this.isSuspendOpen = true;
  }
  handleSuspendModalClose () {
    this.isSuspendOpen = false
  }
}
