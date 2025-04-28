import { Component } from '@angular/core';
import { CopyStylesDirective, HeadlineStylesDirective } from '@indziaki/ngx-xchange-ui';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CopyStylesDirective,
    HeadlineStylesDirective
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
