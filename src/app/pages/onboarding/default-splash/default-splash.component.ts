import { NgSwitch, NgSwitchCase } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SwitchViewService, ViewStates } from '../services/switch-view-service/switch-view.service';
import { ProfileTagsDirective } from '@indziaki/ngx-xchange-ui';
import { XcIconAngleRightBComponent } from '@indziaki/ngx-xchange-icons';

@Component({
  selector: 'app-default-splash',
  standalone: true,
  imports: [
    NgSwitch,
    NgSwitchCase,
    ProfileTagsDirective,
    XcIconAngleRightBComponent
  ],
  templateUrl: './default-splash.component.html',
  styleUrl: './default-splash.component.scss'
})
export class DefaultSplashComponent {
  currentStep = 1;
  private switchViewService = inject(SwitchViewService);

  changeState(state: ViewStates) {
    this.switchViewService.setViewState(state);
  }

  changeDefaultStep() {
    this.currentStep = 2;
  }
}
