import { Component, Input } from '@angular/core';
import { RoundedImageModule } from '@indziaki/ngx-xchange-ui';
import { ProfileTagsDirective } from 'projects/ngx-xchange-ui/src/directives/profile-tags/profile-tags.directive';
import { ChangeTabService, PortfolioSection } from '../../../change-tab.service';

interface PortfolioInterface {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

@Component({
  selector: 'app-modal-header',
  standalone: true,
  imports: [
    ProfileTagsDirective,
    RoundedImageModule
  ],
  templateUrl: './modal-header.component.html',
  styleUrl: './modal-header.component.scss'
})
export class ModalHeaderComponent {
  @Input() portfolio!: PortfolioInterface;
  PortfolioSection = PortfolioSection;

  constructor(private changeTabService: ChangeTabService) {}

  changeSection(section: PortfolioSection): void {
    this.changeTabService.changeSection(section);
  }
}
