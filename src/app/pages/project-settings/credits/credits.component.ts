import { Component } from '@angular/core';
import {
  XcIconArrowRightComponent,
} from '@indziaki/ngx-xchange-icons';
import { HistoryModalComponent } from './history-modal/history-modal.component';
import { NgIf } from '@angular/common';
import { CreditsModalComponent } from './credits-modal/credits-modal.component';

@Component({
  selector: 'app-credits',
  standalone: true,
  imports: [
    NgIf,
    XcIconArrowRightComponent,
    HistoryModalComponent,
    CreditsModalComponent
  ],
  templateUrl: './credits.component.html',
  styleUrl: './credits.component.scss',
})
export class CreditsComponent {
  isBuyCredits = false;
  isHistoryOpen = false;

  openBuyCredits() {
    this.isBuyCredits = true;
  }
  handleBuyCreditsModalClose() {
    this.isBuyCredits = false
  }

  openHistoryModal() {
    this.isHistoryOpen = true;
  }
  handleHistoryModalClose() {
    this.isHistoryOpen = false;
  }
}
