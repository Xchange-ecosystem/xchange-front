import { Component } from '@angular/core';
import { XcIconArrowUpRightComponent, XcIconSaveComponent, XcIconTimesComponent, XcIconUserPlusComponent, XcIconUserXComponent } from '@indziaki/ngx-xchange-icons';
import { RoundedImageModule } from '@indziaki/ngx-xchange-ui';

@Component({
  selector: 'app-employee-fund',
  standalone: true,
  imports: [
    RoundedImageModule,
        XcIconTimesComponent,
        XcIconSaveComponent,
        XcIconArrowUpRightComponent,
        XcIconUserPlusComponent,
        XcIconUserXComponent
  ],
  templateUrl: './employee-fund.component.html',
  styleUrl: './employee-fund.component.scss'
})
export class EmployeeFundComponent {

}
