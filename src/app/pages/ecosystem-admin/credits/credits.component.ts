import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { XcIconArrowRightComponent } from '@xchange-ecosystem/ngx-xchange-icons';
import { RoundedImageModule } from '@xchange-ecosystem/ngx-xchange-ui';
import { BuyCreditsComponent } from './buy-credits/buy-credits.component';
import { SendCreditsComponent } from './send-credits/send-credits.component';
import { HistoryComponent } from './history/history.component';

@Component({
  selector: 'app-credits',
  standalone: true,
  imports: [
    NgFor, 
    NgIf,
    RoundedImageModule, 
    NgClass, 
    XcIconArrowRightComponent,
    BuyCreditsComponent,
    SendCreditsComponent,
    HistoryComponent
  ],
  templateUrl: './credits.component.html',
  styleUrl: './credits.component.scss',
})
export class CreditsComponent {
  isBuyCredits = false;
  isSendCredits = false;
  isHistory =false;

  openBuyCredits() {
    this.isBuyCredits = true;
    console.log('Opening Buy Credits Modal');
  }

  closeBuyCredits() {
    this.isBuyCredits = false;
  }

  openSendCredits() {
    this.isSendCredits = true;
    console.log('Opening Send Credits Modal');
  }

  closeSendCredits() {
    this.isSendCredits = false;
  }

  openHistoryModal() {
    this.isHistory = true;
    console.log('Opening History Modal');
  }

  closeHistoryModal() {
    this.isHistory = false;
  }

  transactions = [
    {
      name: 'Manuel Cabrera',
      date: '14 Aug.24',
      amount: -500,
      image: 'https://i.pravatar.cc/100?u=manuel',
      destination: 'Jake Gyllenhaal',
    },
    {
      name: 'Lucía Torres',
      date: '10 Aug.24',
      amount: -250,
      image: 'https://i.pravatar.cc/100?u=lucia',
      destination: 'Ecosystem',
    },
    {
      name: 'Carlos Rivera',
      date: '05 Aug.24',
      amount: +1200,
      image: 'https://i.pravatar.cc/100?u=carlos',
      destination: 'Ecosystem',
    },
    {
      name: 'Ana Gómez',
      date: '28 Jul.24',
      amount: -150,
      image: 'https://i.pravatar.cc/100?u=ana',
      destination: 'Team Orion',
    },
    {
      name: 'Diego Martínez',
      date: '21 Jul.24',
      amount: +800,
      image: 'https://i.pravatar.cc/100?u=diego',
      destination: 'Team Orion',
    },
    {
      name: 'Valeria Salgado',
      date: '18 Aug.24',
      amount: +300,
      image: 'https://i.pravatar.cc/100?u=valeria',
      destination: 'Team Alpha',
    },
    {
      name: 'Jorge Peña',
      date: '12 Aug.24',
      amount: -700,
      image: 'https://i.pravatar.cc/100?u=jorge',
      destination: 'Marketing Hub',
    },
    {
      name: 'Mariana Castro',
      date: '09 Aug.24',
      amount: +1500,
      image: 'https://i.pravatar.cc/100?u=mariana',
      destination: 'Development Core',
    },
    {
      name: 'Emilio Rodríguez',
      date: '04 Aug.24',
      amount: -120,
      image: 'https://i.pravatar.cc/100?u=emilio',
      destination: 'UI Task Force',
    },
    {
      name: 'Gabriela Ruiz',
      date: '01 Aug.24',
      amount: +500,
      image: 'https://i.pravatar.cc/100?u=gabriela',
      destination: 'Ecosystem',
    },
    {
      name: 'Matías Soto',
      date: '29 Jul.24',
      amount: -90,
      image: 'https://i.pravatar.cc/100?u=matias',
      destination: 'External Wallet',
    },
    {
      name: 'Laura Mendoza',
      date: '26 Jul.24',
      amount: +1100,
      image: 'https://i.pravatar.cc/100?u=laura',
      destination: 'Investor Rewards',
    },
  ];
}
