import { NgIf, NgSwitch, NgSwitchCase } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { XcIconPlusCircleComponent } from '@xchange-ecosystem/ngx-xchange-icons';
import { SwitchViewService, ViewStates } from './services/swith-view-service/switch-view.service';
import { RewardsHeaderComponent } from './rewards-header/rewards-header.component';
import { CollaborationFundComponent } from './collaboration-fund/collaboration-fund.component';
import { EmployeeFundComponent } from './employee-fund/employee-fund.component';
import { OwnersFundComponent } from './owners-fund/owners-fund.component';
import { DefaultPageComponent } from "./default-page/default-page.component";

@Component({
  selector: 'app-project-rewards',
  standalone: true,
  imports: [
    NgIf,
    NgSwitchCase,
    NgSwitch,
    RewardsHeaderComponent,
    CollaborationFundComponent,
    XcIconPlusCircleComponent,
    EmployeeFundComponent,
    OwnersFundComponent,
    DefaultPageComponent
],
  templateUrl: './project-rewards.component.html',
  styleUrl: './project-rewards.component.scss',
})
export class ProjectRewardsComponent implements OnInit {
  public state:ViewStates = 'default'
  public switchViewService = inject(SwitchViewService);
  constructor () {
    this.switchViewService.setViewState('default')
  }
  ngOnInit(): void {
    this.switchViewService.getViewState().subscribe(state => this.state = state)
  }
  isRewardsOpen = true;
  isFundOpen = false;
}
