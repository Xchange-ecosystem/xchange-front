import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { HeadlineStylesDirective } from 'projects/ngx-xchange-ui/src/directives/headline-styles/headline-styles.directive';
import { ProfileTagsDirective, ProjectProgressBarModule } from 'projects/ngx-xchange-ui/src/public-api';
import { XcIconArrowRightComponent, XcIconAngleDownComponent } from '@indziaki/ngx-xchange-icons';
import { ModalHeaderComponent } from './modal-header/modal-header.component';
import { PortfolioInterface } from '../../portfolio.interface';
import { ChangeTabService, PortfolioSection } from '../../change-tab.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-portfolio-modal',
  standalone: true,
  imports: [
    HeadlineStylesDirective,
    ProjectProgressBarModule,
    ProfileTagsDirective,
    NgIf,
    NgFor,
    ModalHeaderComponent,
    XcIconArrowRightComponent,
    XcIconAngleDownComponent
  ],
  templateUrl: './portfolio-modal.component.html',
  styleUrl: './portfolio-modal.component.scss'
})
export class PortfolioModalComponent implements OnInit, OnDestroy {
  @Input() portfolio!: PortfolioInterface;
  currentSection: PortfolioSection = PortfolioSection.GENERAL;
  private subscription: Subscription;

  constructor(private changeTabService: ChangeTabService) {
    this.subscription = this.changeTabService.currentSection$.subscribe(
      section => {
        this.currentSection = section;
      }
    );
  }

  ngOnInit(): void {
    // Initialize with the current section from the service
    this.currentSection = this.changeTabService.getCurrentSection();
  }

  ngOnDestroy(): void {
    // Clean up subscription when component is destroyed
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
