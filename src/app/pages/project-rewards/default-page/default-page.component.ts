import { Component, inject } from '@angular/core';
import { ProjectDashboardNavigatorService } from '../../project-settings/services/services-dashboard-navigator-service.service';
import { SwitchViewService } from '../services/swith-view-service/switch-view.service';
import { XcIconPlusCircleComponent } from 'projects/ngx-xchange-icons/src/lib/plus-circle.component';

@Component({
  selector: 'app-default-page',
  standalone: true,
  imports: [XcIconPlusCircleComponent],
  templateUrl: './default-page.component.html',
  styleUrl: './default-page.component.scss'
})
export class DefaultPageComponent {
 public switchViewService = inject(SwitchViewService);
}
