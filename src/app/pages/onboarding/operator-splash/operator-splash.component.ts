import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { StepperService } from '../services/stepper-service/stepper.service';
import { StepperComponent } from "../stepper/stepper.component";
import { XcIconAIComponent, XcIconArrowLeftComponent, XcIconPlusCircleComponent, XcIconTimesComponent } from '@indziaki/ngx-xchange-icons';
import { SwitchViewService } from '../services/switch-view-service/switch-view.service';
import { ProfileTagsDirective, RoundedImageModule } from '@indziaki/ngx-xchange-ui';
import { NgIf } from '@angular/common';
import { CummonFormComponent } from "../cummon-form/cummon-form.component";

@Component({
  selector: 'app-operator-splash',
  standalone: true,
  imports: [
    StepperComponent,
    XcIconArrowLeftComponent,
    NgIf,
    RoundedImageModule,
    XcIconAIComponent,
    ProfileTagsDirective,
    XcIconTimesComponent,
    XcIconPlusCircleComponent,
    CummonFormComponent
],
  templateUrl: './operator-splash.component.html',
  styleUrl: './operator-splash.component.scss'
})
export class OperatorSplashComponent {
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
      return
    }
  }
  nextStep(): void {
    if (this.activeStep < this.steps - 1) {
      this.activeStep++;
    } else {
      return
    }
  }
}
