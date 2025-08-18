import { Component, inject, OnInit } from '@angular/core';
import { NgIf, NgSwitch, NgSwitchCase } from '@angular/common';
import { ProjectProgressBarModule } from '@xchange-ecosystem/ngx-xchange-ui';
import { HeaderProjectSettingsComponent } from './header-project-settings/header-project-settings.component';
import { LegalComponent } from './legal/legal.component';
import { MembersComponent } from './members/members.component';
import { CreditsComponent } from './credits/credits.component';
import { ApperanceComponent } from './apperance/apperance.component';
import { ProjectDashboardNavigatorService, TabState } from './services/services-dashboard-navigator-service.service';

@Component({
  selector: 'app-project-settings',
  standalone: true,
  imports: [
    NgSwitch,
    NgSwitchCase,
    ProjectProgressBarModule,
    HeaderProjectSettingsComponent,
    LegalComponent,
    MembersComponent,
    CreditsComponent,
    ApperanceComponent,
  ],
  templateUrl: './project-settings.component.html',
  styleUrl: './project-settings.component.scss',
})
export class ProjectSettingsComponent implements OnInit {
  private ProjectDashboardNavigatorService = inject(
    ProjectDashboardNavigatorService
  );

  public tabState:TabState = "Members"


  sections = ['Appearance', 'Legal', 'Credits', 'Members'];
  tags = ['Appearance', 'Testing', 'Rest,', 'Ai', 'Entrepeneur'];

  transactions = [
    {
      name: 'Manuel Cabrera',
      date: '14 Aug.24',
      amount: -500,
      destination: 'Jake Gyllenhaal',
    },
    {
      name: 'Lucía Torres',
      date: '10 Aug.24',
      amount: -250,
      destination: 'Ecosystem',
    },
    {
      name: 'Carlos Rivera',
      date: '05 Aug.24',
      amount: +1200,
      destination: 'Ecosystem',
    },
    {
      name: 'Ana Gómez',
      date: '28 Jul.24',
      amount: -150,
      destination: 'Team Orion',
    },
    {
      name: 'Diego Martínez',
      date: '21 Jul.24',
      amount: +800,
      destination: 'Team Orion',
    },
    {
      name: 'Valeria Salgado',
      date: '18 Aug.24',
      amount: +300,
      destination: 'Team Alpha',
    },
    {
      name: 'Jorge Peña',
      date: '12 Aug.24',
      amount: -700,
      destination: 'Marketing Hub',
    },
    {
      name: 'Mariana Castro',
      date: '09 Aug.24',
      amount: +1500,
      destination: 'Development Core',
    },
    {
      name: 'Emilio Rodríguez',
      date: '04 Aug.24',
      amount: -120,
      destination: 'UI Task Force',
    },
    {
      name: 'Gabriela Ruiz',
      date: '01 Aug.24',
      amount: +500,
      destination: 'Ecosystem',
    },
    {
      name: 'Matías Soto',
      date: '29 Jul.24',
      amount: -90,
      destination: 'External Wallet',
    },
    {
      name: 'Laura Mendoza',
      date: '26 Jul.24',
      amount: +1100,
      destination: 'Investor Rewards',
    },
  ];

  sortOption = 'latest';

  ngOnInit(): void {
    this.ProjectDashboardNavigatorService.tabState$.subscribe(state => this.tabState = state)
  }
}
