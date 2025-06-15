import { Component, Input } from '@angular/core';
import { XcIconCloseSComponent } from '@indziaki/ngx-xchange-icons';
import { ProfileTagsDirective, ProjectProgressBarModule } from '@indziaki/ngx-xchange-ui';
import { PortfolioModalComponent } from './portfolio-modal/portfolio-modal.component';
import { NgIf, NgFor } from '@angular/common';
import { PortfolioInterface } from '../portfolio.interface';

@Component({
  selector: 'app-portfolio-card',
  standalone: true,
  imports: [
    ProfileTagsDirective,
    ProjectProgressBarModule,
    XcIconCloseSComponent,
    PortfolioModalComponent,
    NgIf,
    NgFor
  ],
  templateUrl: './portfolio-card.component.html',
  styleUrl: './portfolio-card.component.scss'
})
export class PortfolioCardComponent {
  @Input() portfolio!: PortfolioInterface;
  selectedPortfolio: PortfolioInterface | null = null;

  onOpenModal() {
    this.selectedPortfolio = this.portfolio;
  }

  onCloseModal() {
    this.selectedPortfolio = null;
  }
}
