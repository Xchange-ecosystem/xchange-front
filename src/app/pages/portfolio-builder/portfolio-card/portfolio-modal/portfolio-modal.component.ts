import { Component, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { HeadlineStylesDirective } from 'projects/ngx-xchange-ui/src/directives/headline-styles/headline-styles.directive';
import { ProfileTagsDirective, ProjectProgressBarModule } from 'projects/ngx-xchange-ui/src/public-api';
import { XcIconCloseSComponent } from '@indziaki/ngx-xchange-icons';
import { ModalHeaderComponent } from './modal-header/modal-header.component';
import { PortfolioInterface } from '../../portfolio.interface';

@Component({
  selector: 'app-portfolio-modal',
  standalone: true,
  imports: [
    HeadlineStylesDirective,
    ProjectProgressBarModule,
    ProfileTagsDirective,
    NgIf,
    NgFor,
    ModalHeaderComponent
  ],
  templateUrl: './portfolio-modal.component.html',
  styleUrl: './portfolio-modal.component.scss'
})
export class PortfolioModalComponent {
  @Input() portfolio!: PortfolioInterface;
}
