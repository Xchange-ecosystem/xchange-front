import { Component } from '@angular/core';
import { StepperService } from '../services/stepper-service/stepper.service';
import { Subscription } from 'rxjs';
import { StepperComponent } from '../stepper/stepper.component';
import { SwitchViewService } from '../services/switch-view-service/switch-view.service';
import {
  XcIconAIComponent,
  XcIconArrowLeftComponent,
  XcIconPlusCircleComponent,
  XcIconTimesComponent,
} from '@xchange-ecosystem/ngx-xchange-icons';
import { NgIf } from '@angular/common';
import { ProfileTagsDirective, RoundedImageModule } from '@xchange-ecosystem/ngx-xchange-ui';
import { CummonFormComponent } from '../cummon-form/cummon-form.component';

@Component({
  selector: 'app-collaborator-splash',
  standalone: true,
  imports: [
    NgIf,
    StepperComponent,
    XcIconArrowLeftComponent,
    XcIconTimesComponent,
    XcIconPlusCircleComponent,
    XcIconAIComponent,
    RoundedImageModule,
    ProfileTagsDirective,
    CummonFormComponent
  ],
  templateUrl: './collaborator-splash.component.html',
  styleUrl: './collaborator-splash.component.scss',
})
export class CollaboratorSplashComponent {
  steps = 0;
  activeStep = 0;
  stepsArray: number[] = [];
  private sub!: Subscription;

  constructor(
    private stepperSrv: StepperService,
    private switchViewSrv: SwitchViewService
  ) {}

  ngOnInit(): void {
    this.sub = this.stepperSrv.getStepCount$().subscribe((cnt) => {
      this.steps = cnt;
      this.stepsArray = Array.from({ length: cnt });
      this.activeStep = 0;
    });
  }
  goBack(): void {

    if (this.activeStep === 0) {
      this.switchViewSrv.setViewState('default');
    } else if (this.activeStep > 0) {
      this.activeStep--;
    } else {
      return;
    }
  }
  nextStep(): void {
    if (this.activeStep < this.steps - 1) {
      this.activeStep++;
    } else {
      return;
    }
  }
}
