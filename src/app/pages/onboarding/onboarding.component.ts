import { NgSwitch, NgSwitchCase } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {
  SwitchViewService,
  ViewStates,
} from './services/switch-view-service/switch-view.service';
import { CollaboratorSplashComponent } from './collaborator-splash/collaborator-splash.component';
import { DefaultSplashComponent } from './default-splash/default-splash.component';
import { OwnerSplashComponent } from './owner-splash/owner-splash.component';
import { OperatorSplashComponent } from './operator-splash/operator-splash.component';
import { InvestorSplashComponent } from './investor-splash/investor-splash.component';

@Component({
  selector: 'app-onboarding',
  standalone: true,
  imports: [
    NgSwitch, 
    NgSwitchCase,
    CollaboratorSplashComponent,
    DefaultSplashComponent,
    OwnerSplashComponent,
    OperatorSplashComponent,
    InvestorSplashComponent
  ],
  templateUrl: './onboarding.component.html',
  styleUrl: './onboarding.component.scss',
})
export class OnboardingComponent implements OnInit {
  public state: ViewStates = 'default';
  public switchViewService = inject(SwitchViewService);
  ngOnInit(): void {
    this.switchViewService
      .getViewState()
      .subscribe((state) => (this.state = state));
  }
}
