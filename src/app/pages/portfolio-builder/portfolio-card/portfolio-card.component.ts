import { Component, Input } from '@angular/core';
import { ProfileTagsDirective, ProjectProgressBarModule } from '@indziaki/ngx-xchange-ui';

@Component({
  selector: 'app-portfolio-card',
  standalone: true,
  imports: [
    ProfileTagsDirective,
    ProjectProgressBarModule
  ],
  templateUrl: './portfolio-card.component.html',
  styleUrl: './portfolio-card.component.scss'
})
export class PortfolioCardComponent {
  @Input() portfolio: any;
}
